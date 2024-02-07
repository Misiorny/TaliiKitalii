import type { Metadata } from 'next'
import {bodoni}       from '@/src/app/fonts'
import React             from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Talii Kitalii - African Safari', description: 'Web page for Talii Kitalii Company',
}

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  >
      <body className={bodoni.className}>
        {children}
      </body>
    </html>
  )
}
