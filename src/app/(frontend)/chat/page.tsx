'use client'

import React, { useState, useEffect, useCallback } from 'react'
import {
  Chat,
  ChatInput,
  Conversation,
  MessageActions,
  Session,
  SessionMessages,
  SessionMessagePanel,
  SessionMessagesHeader,
} from 'reachat'
import { searchCloudflareAI } from '../../../services/cloudflareAIService'
import {
  getCachedResponse,
  cacheResponse,
  recordFeedback,
  getSuggestedQuestions,
} from '../../../services/chatService'
import { customChatTheme } from './chatTheme'
import { AnimatedText } from '../../../components/AnimatedText'

interface HeaderHeight extends React.CSSProperties {
  '--header-height'?: string
}

// Helper function to extract plain text from Payload/Lexical rich text object
function extractTextFromRichText(richText: any): string {
  if (typeof richText === 'string') {
    return richText // Already a string
  }
  if (!richText || !richText.root || !richText.root.children) {
    return '' // Not a valid rich text object or empty
  }

  let extractedText = ''
  function dive(node: any) {
    if (node && node.type === 'text' && typeof node.text === 'string') {
      extractedText += node.text + ' '
    }
    if (node && node.children && Array.isArray(node.children)) {
      node.children.forEach(dive)
    }
  }
  dive(richText.root)
  return extractedText.trim()
}

const DEFAULT_SESSION_ID = 'main_chat_session'

export default function ChatPage() {
  const [sessions, setSessions] = useState<Session[]>([])
  const [activeSessionId, setActiveSessionId] = useState<string | undefined>(DEFAULT_SESSION_ID)
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null)
  const [suggestedQuestions, setSuggestedQuestions] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [headerHeight, setHeaderHeight] = useState('80px')
  const [feedbackSubmitted, setFeedbackSubmitted] = useState<Set<string>>(new Set()) // For tracking feedback

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement)
    const hHeight = rootStyles.getPropertyValue('--header-height')?.trim()
    if (hHeight) {
      setHeaderHeight(hHeight)
    }

    setSessions((prevSessions) => {
      if (!prevSessions.find((s) => s.id === DEFAULT_SESSION_ID)) {
        return [
          {
            id: DEFAULT_SESSION_ID,
            title: 'NACIT AI',
            createdAt: new Date(),
            updatedAt: new Date(),
            conversations: [] as Conversation[],
          },
        ]
      }
      return prevSessions
    })
  }, [])

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const suggestions = await getSuggestedQuestions(5) // Fetch top 5 suggestions
        setSuggestedQuestions(suggestions)
      } catch (error) {
        console.error('Failed to fetch suggested questions:', error)
        setSuggestedQuestions([]) // Clear suggestions on error
      }
    }
    fetchSuggestions()
  }, [])

  const updateConversationInSession = useCallback(
    (
      currentSessions: Session[],
      sessionId: string,
      conversationId: string,
      newResponse: string,
      isNewConversation: boolean = false, // Default to false, as mostly we update existing
    ): Session[] => {
      return currentSessions.map((s) => {
        if (s.id === sessionId) {
          const updatedConversations = [...s.conversations]
          const conversationIndex = updatedConversations.findIndex(
            (conv) => conv.id === conversationId,
          )

          if (conversationIndex !== -1) {
            // Update existing conversation
            const conversationToUpdate = updatedConversations[conversationIndex]
            if (conversationToUpdate) {
              // Ensure conversationToUpdate is not undefined
              // Directly mutate the properties of the object within the copied array
              conversationToUpdate.response = newResponse
              conversationToUpdate.updatedAt = new Date()
              // Other properties like id, question, createdAt, sources, files remain unchanged
            }
          } else if (isNewConversation) {
            // This case is for when handleSendMessage adds the initial 'Thinking...' message
            // It should find the question from the latest session state if possible
            // However, handleSendMessage already adds the full new conversation object, so this branch might be less critical
            // For safety, ensure question is populated
            const currentQuestion =
              currentSessions
                .find((sess) => sess.id === DEFAULT_SESSION_ID)
                ?.conversations.find((c) => c.id === conversationId)?.question || 'New Question'
            const newConv: Conversation = {
              id: conversationId,
              question: currentQuestion,
              response: newResponse,
              createdAt: new Date(),
              updatedAt: new Date(),
            }
            updatedConversations.push(newConv)
          } else {
            // Fallback: if not found and not explicitly new, log an error or handle gracefully
            console.warn(
              `Conversation with ID ${conversationId} not found for update and not marked as new.`,
            )
            // Optionally, still add it to prevent data loss, though this indicates a logic flaw elsewhere
            const fallbackConv: Conversation = {
              id: conversationId,
              question: 'Error: Question context lost',
              response: newResponse,
              createdAt: new Date(),
              updatedAt: new Date(),
            }
            updatedConversations.push(fallbackConv)
          }
          return {
            ...s,
            conversations: updatedConversations,
            updatedAt: new Date(),
          }
        }
        return s
      })
    },
    [sessions], // sessions is a dependency because currentQuestion is derived from it in one branch
  )

  const handleSendMessage = useCallback(
    async (message: string) => {
      setIsLoading(true)
      const userMessageId = Date.now().toString()
      const safeMessage = (message || '').trim()

      if (!safeMessage) {
        setIsLoading(false)
        return
      }

      // Add user's message immediately with 'Thinking...' state
      setSessions((prevSessions) =>
        prevSessions.map((s) => {
          if (s.id === DEFAULT_SESSION_ID) {
            const newConversationEntry: Conversation = {
              id: userMessageId,
              question: safeMessage,
              response: 'Thinking...',
              createdAt: new Date(),
              updatedAt: new Date(),
            }
            return {
              ...s,
              conversations: [...s.conversations, newConversationEntry],
              updatedAt: new Date(),
            }
          }
          return s
        }),
      )

      const cachedResponse = await getCachedResponse(safeMessage)

      if (cachedResponse) {
        const responseText = extractTextFromRichText(cachedResponse.response)

        // Step 1: Set to an intermediate state to allow AnimatedText to reset
        setSessions((prevSessions) =>
          updateConversationInSession(
            prevSessions,
            DEFAULT_SESSION_ID,
            userMessageId,
            '', // Clears the text, AnimatedText sees this with new key
            false,
          ),
        )

        // Step 2: In a timeout, set the actual response.
        // This gives React a chance to render the empty state first.
        setTimeout(() => {
          setSessions((prevSessions) =>
            updateConversationInSession(
              prevSessions,
              DEFAULT_SESSION_ID,
              userMessageId,
              responseText,
              false,
            ),
          )
          setIsLoading(false) // Set loading to false after the final text is set
        }, 50) // A small delay, e.g., 50ms. Adjust if needed.

        return
      }

      try {
        const aiResponse = await searchCloudflareAI(safeMessage)
        await cacheResponse(safeMessage, aiResponse) // Cache the plain text AI response
        setSessions((prevSessions) =>
          updateConversationInSession(
            prevSessions,
            DEFAULT_SESSION_ID,
            userMessageId,
            aiResponse,
            false,
          ),
        )
      } catch (error) {
        console.error('Error fetching AI response:', error)
        const errorMessage = 'Sorry, I encountered an error. Please try again.'
        setSessions((prevSessions) =>
          updateConversationInSession(
            prevSessions,
            DEFAULT_SESSION_ID,
            userMessageId,
            errorMessage,
            false,
          ),
        )
      } finally {
        setIsLoading(false)
      }
    },
    [updateConversationInSession],
  ) // Removed 'sessions' from here as updateConversationInSession is memoized with it

  const chatContainerStyle: HeaderHeight = {
    '--header-height': headerHeight,
    height: `calc(100vh - var(--header-height, ${headerHeight}))`,
  }

  return (
    <div
      className="flex items-center justify-center bg-background text-foreground container"
      style={chatContainerStyle}
    >
      <Chat
        sessions={sessions}
        activeSessionId={activeSessionId}
        onSendMessage={handleSendMessage}
        isLoading={isLoading}
        theme={customChatTheme}
        viewType="chat"
        className="w-full max-w-2xl rounded-lg container py-6"
      >
        <SessionMessagePanel>
          <SessionMessagesHeader />
          <SessionMessages>
            {(conversations: Conversation[]) =>
              conversations.map((conversation: Conversation) => {
                const isThinking =
                  conversation.response === 'Thinking...' &&
                  conversations[conversations.length - 1]?.id === conversation.id
                const hasFeedbackBeenGiven = feedbackSubmitted.has(conversation.id)

                return (
                  <div key={conversation.id} className="w-full">
                    <div className="px-4 py-2 font-medium">{conversation.question}</div>
                    <div className="px-4 py-2 text-gray-700 dark:text-gray-300">
                      <AnimatedText
                        key={conversation.id + (isThinking ? '_thinking_key' : '_response_key')}
                        text={conversation.response || ''}
                        isThinking={isThinking}
                      />
                      {!isThinking &&
                        conversation.response &&
                        conversation.response !== 'Thinking...' &&
                        !hasFeedbackBeenGiven && (
                          <div className="chat-actions-icons-green">
                            {' '}
                            {/* Wrapper for styling icons */}
                            <MessageActions
                              question={conversation.question || ''}
                              response={conversation.response || ''}
                              onUpvote={async () => {
                                const questionText = conversation.question || ''
                                const responseText = conversation.response || ''
                                await recordFeedback(questionText, responseText, true, {
                                  conversationId: conversation.id,
                                  userAgent: window.navigator.userAgent, // Optional: gather user agent
                                })
                                setFeedbackSubmitted((prev) => new Set(prev).add(conversation.id))
                              }}
                              onDownvote={async () => {
                                const questionText = conversation.question || ''
                                const responseText = conversation.response || ''
                                await recordFeedback(questionText, responseText, false, {
                                  conversationId: conversation.id,
                                  userAgent: window.navigator.userAgent, // Optional: gather user agent
                                })
                                setFeedbackSubmitted((prev) => new Set(prev).add(conversation.id))
                              }}
                            />
                          </div>
                        )}
                      {hasFeedbackBeenGiven && (
                        <div className="text-sm text-gray-500 italic py-5">
                          Feedback submitted. Thank you!
                        </div>
                      )}
                    </div>
                  </div>
                )
              })
            }
          </SessionMessages>
          <div className="px-4 py-2 text-xs text-gray-500 dark:text-gray-400 border-t border-border text-center">
            <p>
              <strong>Disclaimer:</strong> This AI assistant is currently in active development.
            </p>
          </div>

          {suggestedQuestions.length > 0 && (
            <div className="px-4 py-3 border-t border-border flex flex-wrap gap-2 justify-center">
              {suggestedQuestions.map((q, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(q)}
                  className="px-4 py-2 text-sm bg-transparent border-2 border-brand-dark-green text-brand-dark-green hover:bg-brand-dark-green hover:text-white rounded-full transition-colors duration-150 ease-in-out shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-dark-green focus:ring-opacity-75"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <div className="border-b-[1px] border-border">
            <ChatInput />
          </div>
        </SessionMessagePanel>
      </Chat>
    </div>
  )
}
