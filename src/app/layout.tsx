import '@/app/globals.css'

import type { Metadata, Viewport } from 'next'

import { GeistSans } from 'geist/font/sans'

export const metadata: Metadata = {}
export const viewport: Viewport = {}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head />
            
            <body className={GeistSans.className}>
                {children}
            </body>
        </html>
    )
}