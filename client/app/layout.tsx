import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HandymanPro | Trusted Handyman Services',
  description:
    'From minor repairs to full renovations, HandymanPro delivers reliable and professional handyman services tailored to your home improvement needs.',
  keywords: [
    'handyman',
    'home repairs',
    'renovations',
    'carpentry',
    'painting',
    'electrical',
    'plumbing',
    'property maintenance',
    'trusted handyman',
    'handyman services near me',
  ],
  authors: [{ name: 'HandyPro Team', url: 'https://handymanpro.com' }],
  creator: 'HandymanPro',
  openGraph: {
    title: 'HandymanPro | Trusted Handyman Services',
    description:
      'Quality craftsmanship and professional service for your home improvement projects. Serving your neighborhood with pride.',
    url: 'https://handymanpro.com',
    siteName: 'HandymanPro',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://handyman-pro-sand.vercel.app/og-image.png/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Handyman at work with tools',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
