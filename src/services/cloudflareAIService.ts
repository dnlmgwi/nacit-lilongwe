interface LocalAPIResponse {
  response?: string;
  error?: string;
}

export async function searchCloudflareAI(query: string): Promise<string> {
  try {
    const response = await fetch('/api/chat', { // Calls the local Next.js API route
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json() as LocalAPIResponse;

    if (!response.ok) {
      // If response is not OK, data.error should contain the error from our API route
      console.error('API Route Error Response:', data);
      return `Error: ${data.error || `Failed to fetch from API. Status: ${response.status}`}`;
    }

    // Check for an error property even if response.ok is true, as our API route might return an error object
    if (data.error) {
      console.error('API Route returned an error:', data.error);
      return `Error: ${data.error}`;
    }

    if (typeof data.response !== 'string') {
      console.error('Unexpected response structure from API route:', data);
      return 'Error: Unexpected response structure from API route.';
    }

    return data.response;
  } catch (error) {
    console.error('Network or other error calling /api/chat:', error);
    let errorMessage = 'An unexpected error occurred while contacting the chat API.';
    if (error instanceof TypeError) { // Specifically catch network errors
        errorMessage = 'Network Error: Could not connect to the AI service. Please check your internet connection.';
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
    return `Error: ${errorMessage}`;
  }
}
