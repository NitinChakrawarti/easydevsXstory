// app/layout.tsx or app/root-layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import GridOverlay from '@/components/gridovelay'

export const metadata: Metadata = {
  title: 'ChainProof',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="relative text-white bg-gradient-to-b from-black to-slate-900 min-h-screen">
        <GridOverlay />
        {children}
      </body>
    </html>
  )
}
