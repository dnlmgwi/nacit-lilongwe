import { chatTheme as defaultTheme, type ChatTheme } from 'reachat'
import { twMerge } from 'tailwind-merge'

export const customChatTheme: ChatTheme = {
  ...defaultTheme,
  sessions: {
    ...defaultTheme.sessions,
    // Styles for the main sessions panel (SessionsList wrapper)
    console: twMerge(
      defaultTheme.sessions.console,
      'min-w-[250px] max-w-[300px] border-r border-border bg-background',
    ),
  },
  messages: {
    ...defaultTheme.messages, // Spreads all keys from defaultTheme.messages
    // Styles for the main messages panel (SessionMessagePanel wrapper)
    base: twMerge(
      defaultTheme.messages.base,
      'bg-background', // This should make the panel take available space
    ),
    // The SessionMessages component (list of messages) should inherently grow
    // within the 'base' panel if 'base' is flex-1.
    message: {
      // Styling for individual messages (question, response, etc.)
      ...defaultTheme.messages.message,
            question: twMerge(
        defaultTheme.messages.message?.question,
        // Changed to a blue background with white text for user messages
        'bg-blue-600 dark:bg-blue-800 text-white p-3 rounded-lg my-1',
      ),
      response: twMerge(
        defaultTheme.messages.message?.response,
        'p-3 rounded-lg my-1', // Basic styling for response, can be expanded
      ),
      footer: {
        ...defaultTheme.messages.message?.footer,
        base: twMerge(
          defaultTheme.messages.message?.footer?.base,
          'text-brand-dark-green flex space-x-2 mt-1 items-center',
          'hover:text-brand-dark-green', // Ensure text color remains on hover
        ),
        // If you want to style individual icons, you could add keys like:
        upvote: twMerge(
          defaultTheme.messages.message?.footer?.upvote,
          'hover:text-brand-green text-brand-dark-green',
        ),
        downvote: twMerge(
          defaultTheme.messages.message?.footer?.downvote,
          'hover:text-red-500 text-brand-dark-green',
        ),
      },
    },
  },

  input: {
    ...defaultTheme.input, // Spread default input styles first
    base: twMerge(
      defaultTheme.input.base,
      'flex items-center gap-2 border-t p-1 bg-brand-cultured rounded-full px-2 border-none',
    ),
    // 'elements' might be the correct key for textarea if defaultTheme.input.elements exists
    // If defaultTheme.input.input is the direct key for the textarea, we'd use that.
    // Assuming 'input' is the direct key for the textarea based on the error message structure
    // which mentioned 'input' as a valid key in the type: '{ base: string; upload: string; input: string; actions: ... }'
    input: twMerge(
      defaultTheme.input.input, // This 'input' key refers to the textarea itself
      'bg-white border-none focus:border-brand-dark-green focus:ring-0 focus:ring-transparent pr-4 pl-12 text-brand-rich-black placeholder:text-brand-silver transition-colors duration-150 ease-in-out w-full min-h-[4.5rem] max-h-[4.5rem] overflow-y-auto resize-none leading-normal',
    ),
    actions: {
      ...defaultTheme.input.actions,
      send: twMerge(
        defaultTheme.input.actions.send,
        'bg-brand-dark-green hover:opacity-85 text-white rounded-full transition-opacity duration-150 ease-in-out p-3',
      ),
      // If there's a stop button, you can style it here too:
      stop: twMerge(
        defaultTheme.input.actions.stop,
        'bg-brand-lime hover:opacity-85 text-brand-dark-green rounded-full transition-opacity duration-150 ease-in-out p-3',
      ),
    },
  },
}
