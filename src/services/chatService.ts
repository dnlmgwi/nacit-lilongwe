'use server'

import type {
  CachedResponse as CachedResponseType,
  ChatFeedback as ChatFeedbackType,
} from '@/payload-types'
import { getPayload as getPayloadClient } from 'payload'
import config from '@payload-config'
import { headers } from 'next/headers'

// Initialize Payload client with proper config
const getPayload = async () => {
  return await getPayloadClient({ config })
}

// Re-export types for convenience
export type { CachedResponseType as CachedResponse, ChatFeedbackType as ChatFeedback }

// Extend the CachedResponse type to include our custom fields
interface ExtendedCachedResponse extends Omit<CachedResponseType, 'tags' | 'expiresAt'> {
  tags?: Array<{ tag: string }> | string[]
  expiresAt?: string | Date | null
}

type CachedResponseInput = Omit<ExtendedCachedResponse, 'id' | 'createdAt' | 'updatedAt'> & {
  id?: string | number
  createdAt?: string | Date
  updatedAt?: string | Date
}

type FeedbackMetadata = {
  userAgent?: string
  ipAddress?: string
  [key: string]: any
}

/**
 * Get a cached response for a question if it exists
 * @param question The question to search for in cache
 * @returns The cached response or null if not found
 */
export async function getCachedResponse(question: string): Promise<ExtendedCachedResponse | null> {
  try {
    const payload = await getPayload()
    const searchTerm = question.trim(); // Trim the search term

    if (!searchTerm) {
      return null
    }

    const result = await payload.find({
      collection: 'cached-responses',
      where: {
        question: { // Explicitly target the 'question' field
          contains: searchTerm // 'contains' is case-insensitive as per Payload docs
        }
      },
      sort: '-lastUsed', // Sort to get the most relevant if multiple matches
      limit: 1, // We only need one cached response
    })

    if (result.docs.length > 0) {
      const cached = result.docs[0] as unknown as ExtendedCachedResponse

      if (cached.expiresAt && new Date(cached.expiresAt) < new Date()) {
        await payload.delete({
          collection: 'cached-responses',
          id: cached.id,
        })
        return null
      }

      await payload.update({
        collection: 'cached-responses',
        id: cached.id,
        data: {
          lastUsed: new Date().toISOString(),
          usageCount: (cached.usageCount || 0) + 1,
        },
      })

      return {
        ...cached,
        usageCount: (cached.usageCount || 0) + 1,
        lastUsed: new Date().toISOString(),
      }
    }
    return null
  } catch (error) {
    console.error('Error getting cached response:', error)
    return null
  }
}

/**
 * Cache a new response for a question
 * @param question The question to cache
 * @param response The response to cache
 * @param tags Optional tags for categorization
 * @param ttl Optional time to live in seconds
 */
export async function cacheResponse(
  question: string,
  response: string,
  tags: string[] = [],
  ttl?: number,
): Promise<ExtendedCachedResponse | null> {
  try {
    const payload = await getPayload()
    const now = new Date()
    const expiresAt = ttl ? new Date(now.getTime() + ttl * 1000) : undefined

    const data: Omit<ExtendedCachedResponse, 'id' | 'createdAt' | 'updatedAt'> = {
      question, // This remains a string as per CachedResponses schema
      response: {
        root: {
          children: [
            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: response,
                  type: 'text',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              type: 'paragraph',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'root',
          version: 1,
        },
      },
      usageCount: 1,
      lastUsed: now.toISOString(),
      tags: tags.map((tag) => ({ tag })),
    }

    if (expiresAt) {
      data.expiresAt = expiresAt.toISOString()
    }

    const result = await payload.create({
      collection: 'cached-responses',
      data: data as any,
    })

    return {
      ...data,
      id: result.id,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
    } as ExtendedCachedResponse
  } catch (error) {
    console.error('Error caching response:', error)
    return null
  }
}

/**
 * Record user feedback for a chat response
 * @param question The original question
 * @param response The response that was given
 * @param isPositive Whether the feedback was positive
 * @param metadata Additional metadata including user agent and IP
 * @returns The created feedback record or null if failed
 */
export async function recordFeedback(
  question: string,
  response: string,
  isPositive: boolean,
  clientProvidedMetadata: Record<string, any> = {},
): Promise<ChatFeedbackType | null> {
  try {
    const payload = await getPayload()
    const headerList = headers()
    const serverClientInfo = await getClientInfo()
    const result = await payload.create({
      collection: 'chat-feedback',
      data: {
        question, // This is a 'text' field in ChatFeedback.ts
        response: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: response,
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        isPositive,
        metadata: {
          ...clientProvidedMetadata,
          ipAddress: serverClientInfo.ipAddress,
          // If you prefer server-side userAgent, uncomment the next line
          // userAgent: serverClientInfo.userAgent,
        },
      } as any,
    })

    return {
      ...result,
      id: Number(result.id),
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
    } as ChatFeedbackType
  } catch (error) {
    console.error('Error recording feedback:', error)
    return null
  }
}

/**
 * Get suggested questions based on positive feedback and cache
 * @param limit Maximum number of suggestions to return
 * @returns Array of suggested questions
 */
export async function getSuggestedQuestions(limit: number = 5): Promise<string[]> {
  try {
    const payload = await getPayload()
    const questions = new Set<string>()

    // First, get questions from frequently used cache entries
    const cachedResult = await payload.find({
      collection: 'cached-responses',
      limit,
      sort: '-lastUsed',
    })

    cachedResult.docs.forEach((doc: CachedResponseType) => {
      if (doc.question) {
        questions.add(doc.question)
      }
    })

    // If we need more questions, get them from positive feedback
    if (questions.size < limit) {
      const remainingLimit = limit - questions.size
      const feedbackResult = await payload.find({
        collection: 'chat-feedback',
        where: {
          isPositive: { equals: true },
        },
        limit: remainingLimit,
        sort: '-createdAt',
      })

      feedbackResult.docs.forEach((doc: ChatFeedbackType) => {
        if (doc.question && questions.size < limit) {
          questions.add(doc.question)
        }
      })
    }

    return Array.from(questions).slice(0, limit)
  } catch (error) {
    console.error('Error getting suggested questions:', error)
    return []
  }
}

/**
 * Get suggested questions purely from positive feedback (alternative to getSuggestedQuestions)
 * @param limit Maximum number of suggestions to return
 * @returns Array of suggested questions from feedback
 */
export async function getSuggestedQuestionsFromFeedback(limit: number = 5): Promise<string[]> {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'chat-feedback',
      where: {
        isPositive: { equals: true },
      },
      limit,
      sort: '-createdAt',
    })

    const questions = new Set<string>()
    result.docs.forEach((doc: ChatFeedbackType) => {
      if (doc.question) {
        questions.add(doc.question)
      }
    })
    return Array.from(questions)
  } catch (error) {
    console.error('Error getting suggested questions from feedback:', error)
    return []
  }
}

/**
 * Extract client information from request headers.
 * This function now fetches headers internally using next/headers.
 * @returns Object containing user agent and IP address
 */
export async function getClientInfo(): Promise<{ userAgent: string; ipAddress: string }> {
  const headerList = await headers() // Get headers internally
  const getHeader = (key: string): string => {
    // Directly use get from ReadonlyHeaders, which is what headers() returns
    return headerList.get(key) || ''
  }

  return {
    userAgent: getHeader('user-agent') || getHeader('User-Agent') || '',
    ipAddress:
      getHeader('x-forwarded-for')?.split(',')[0]?.trim() ||
      getHeader('x-real-ip') ||
      getHeader('cf-connecting-ip') ||
      getHeader('X-Forwarded-For') || // Ensure all common IP headers are checked
      '',
  }
}

/**
 * Clean up old cache entries
 * @param daysToKeep Number of days to keep cache entries
 */
export async function cleanupOldCacheEntries(daysToKeep: number = 30): Promise<void> {
  try {
    const payload = await getPayload()
    const cutoffDate = new Date()
    cutoffDate.setDate(cutoffDate.getDate() - daysToKeep)

    await payload.delete({
      collection: 'cached-responses',
      where: {
        lastUsed: { less_than_equal: cutoffDate.toISOString() },
      },
    })
    console.log(`Cleaned up cache entries older than ${daysToKeep} days.`)
  } catch (error) {
    console.error('Error cleaning up old cache entries:', error)
  }
}
