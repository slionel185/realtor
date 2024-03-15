import '@/app/globals.css'

import type { Metadata, Viewport } from 'next'

import { GeistSans } from 'geist/font/sans'

import Providers from '@/components/providers'

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
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}