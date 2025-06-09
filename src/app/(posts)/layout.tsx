import type { Metadata } from 'next'
import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { PostsHeader } from '@/components/PostsHeader'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Nacit Lilongwe',
  description: 'Nacit Lilongwe Official Site',
}

// Force light mode for the entire posts section
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={cn(GeistSans.variable, GeistMono.variable, 'light')}
      lang="en"
      suppressHydrationWarning
      data-theme="light"
      style={{ colorScheme: 'light' }}
    >
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <PostsHeader />
        <main className="flex-1">
          <div className="prose max-w-none">{children}</div>
        </main>
      </body>
    </html>
  )
}
