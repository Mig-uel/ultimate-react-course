import { Josefin_Sans } from 'next/font/google'
import { Logo, Navigation } from '@/components'
import './globals.css'
import type { Metadata } from 'next'

const josefinSans = Josefin_Sans({
  display: 'swap',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s - The Wild Oasis',
    default: 'The Wild Oasis',
  },
  description:
    'Explore luxury properties located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${josefinSans.className} antialiased bg-primary-950 text-primary-100 min-h-screen`}
      >
        <header>
          <Logo />
          <Navigation />
        </header>

        <main>{children}</main>
      </body>
    </html>
  )
}
