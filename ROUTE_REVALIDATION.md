# Next.js Cache Revalidation API

This repository contains a server-side cache revalidation API endpoint for Next.js applications. It allows you to clear the Next.js cache programmatically by making HTTP requests to this endpoint, which is particularly useful for self-hosted deployments.

## Features

- Secure endpoint with token-based authentication
- Supports path-specific cache revalidation
- TypeScript implementation with proper error handling
- Easy to integrate with existing Next.js applications
- Works with webhook systems for automated cache invalidation

## Installation

1. Create a new file at `app/api/revalidate/route.ts` in your Next.js project.
2. Copy the provided code into this file.
3. Add a `REVALIDATION_SECRET` environment variable to your deployment environment.

```typescript
// app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

interface RevalidateRequest {
  path?: string;
}

export async function POST(request: NextRequest) {
  // Secure this endpoint with a secret token
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');

  // Check the secret against your environment variable
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    // Get the path to revalidate from the request body
    const { path = '/' }: RevalidateRequest = await request.json();

    // Revalidate the path
    revalidatePath(path);

    return NextResponse.json({
      revalidated: true,
      message: `Cache for path "${path}" revalidated successfully`,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';

    return NextResponse.json({
      revalidated: false,
      message: `Error revalidating: ${errorMessage}`,
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
```

## Configuration

1. Set up your environment variable:

```
REVALIDATION_SECRET=your_strong_secret_token
```

Make sure to use a strong, unique token and keep it secure.

2. Deploy your Next.js application with this environment variable.

## Usage

### Basic Usage

To revalidate the cache for a specific path, make a POST request to the endpoint:

```bash
curl -X POST https://your-site.com/api/revalidate?secret=your_secret_token \
  -H "Content-Type: application/json" \
  -d '{"path": "/nzeru"}'
```

### Revalidating the Entire Site

To revalidate the cache for the entire site:

```bash
curl -X POST https://your-site.com/api/revalidate?secret=your_secret_token \
  -H "Content-Type: application/json" \
  -d '{"path": "/"}'
```

### Integration with CMS Webhooks

Many Content Management Systems (CMS) support webhooks that can trigger when content is updated. You can configure these webhooks to call your revalidation endpoint automatically.

Example webhook configuration for a typical CMS:

- **Webhook URL**: `https://your-site.com/api/revalidate?secret=your_secret_token`
- **Content Type**: `application/json`
- **HTTP Method**: `POST`
- **Body**: `{"path": "/affected-path"}`

## How It Works

The revalidation API endpoint uses Next.js's `revalidatePath` function to clear the following caches:

1. **Data Cache**: Cached data from `fetch` requests
2. **Full Route Cache**: Rendered HTML and React Server Component payloads
3. **Client-side Router Cache**: When called from a Server Action

When you call this endpoint with a specific path, Next.js will:

1. Clear all cached data associated with that path
2. Re-render the page with fresh data on the next request
3. Update the Full Route Cache with the new render result

## Security Considerations

- Keep your `REVALIDATION_SECRET` secure and use a strong, unique token
- Consider using environment-specific secrets for different deployments
- Limit access to this endpoint to trusted sources when possible
- Regularly rotate your secret token for enhanced security

## Troubleshooting

If revalidation isn't working as expected:

1. Check that your `REVALIDATION_SECRET` is correctly set in your environment
2. Verify that you're making a POST request with the correct content type
3. Ensure the path format matches your Next.js route structure
4. Check your server logs for any error messages from the revalidation process
5. Verify that your Next.js version supports the `revalidatePath` function (requires Next.js 13.4 or later)

## Advanced Usage

### Tag-based Revalidation

If you're using tag-based cache invalidation in your Next.js application, you might want to extend this API to support `revalidateTag` as well:

```typescript
import { revalidatePath, revalidateTag } from 'next/cache';
// ... rest of your implementation
```

## License

MIT
