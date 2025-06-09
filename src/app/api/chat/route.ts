import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

const CLOUDFLARE_API_BASE_URL = 'https://api.cloudflare.com/client/v4/accounts'

// These are now server-side environment variables
const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN
const RAG_ID = process.env.CLOUDFLARE_RAG_ID || 'nacit-lilongwe-576b' // Default RAG ID

interface CloudflareAIRequest {
  query: string
}

interface CloudflareAISuccessResponse {
  success: boolean
  result: {
    response: string
    // Add other potential fields from the result object if needed
  }
  // Include other top-level fields if they exist
}

interface CloudflareAIErrorResponse {
  success: boolean
  errors: Array<{ code: number; message: string }>
  messages?: Array<{ code: number; message: string }> // Optional, as per curl example
  result?: null // Typically null on error
}

export async function POST(request: Request) {
  // Check if AI features are enabled by fetching the global config
  try {
    const payload = await getPayload({ config: configPromise })
    // Using the correct global slug for aiAssistant
    const aiAssistant = await payload.findGlobal({
      slug: 'aiAssistant',
    })

    // Check if AI features are enabled
    if (!aiAssistant || !aiAssistant.enabled) {
      return NextResponse.json({ error: 'AI features is currently disabled.' }, { status: 403 })
    }
  } catch (error) {
    console.error('Error checking AI assistant status:', error)
    // Continue if we can't check the status (default to enabled)
  }

  if (!ACCOUNT_ID || !API_TOKEN || !RAG_ID) {
    console.error('Cloudflare API credentials or RAG ID are not configured on the server.')
    return NextResponse.json(
      { error: 'API credentials or RAG ID are not configured correctly on the server.' },
      { status: 500 },
    )
  }

  try {
    const body = (await request.json()) as CloudflareAIRequest
    const { query } = body

    if (!query) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 })
    }

    const apiUrl = `${CLOUDFLARE_API_BASE_URL}/${ACCOUNT_ID}/autorag/rags/${RAG_ID}/ai-search`

    const cloudflareResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    })

    const responseData = (await cloudflareResponse.json()) as
      | CloudflareAISuccessResponse
      | CloudflareAIErrorResponse

    if (!cloudflareResponse.ok || !responseData.success) {
      console.error('Error from Cloudflare AI:', responseData)
      const errorMessages =
        (responseData as CloudflareAIErrorResponse).errors?.map((e) => e.message).join(', ') ||
        'Unknown error from Cloudflare AI'
      return NextResponse.json(
        { error: `Failed to fetch from Cloudflare AI: ${errorMessages}` },
        { status: cloudflareResponse.status },
      )
    }

    // Assuming success means responseData is CloudflareAISuccessResponse
    const successData = responseData as CloudflareAISuccessResponse
    if (!successData.result || typeof successData.result.response !== 'string') {
      console.error('Unexpected response structure from Cloudflare AI:', successData)
      return NextResponse.json(
        { error: 'Unexpected response structure from Cloudflare AI.' },
        { status: 500 },
      )
    }

    return NextResponse.json({ response: successData.result.response })
  } catch (error) {
    console.error('Error in /api/chat route:', error)
    let errorMessage = 'Internal Server Error'
    if (error instanceof Error) {
      errorMessage = error.message
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
