import type { Metadata } from 'next'
import {bodoni}       from '@/src/app/fonts'
import React             from 'react'
import './globals.css'
import { Footer, Header } from '@/src/components/templates'

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
      <body className={`relative bg-neutral-light ${bodoni.className}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
