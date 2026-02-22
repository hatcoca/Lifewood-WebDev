
import { Manrope } from 'next/font/google'

import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata = {
  title: 'Lifewood | AI Data Solutions - Always On, Never Off',
  description:
    'Lifewood is a global champion in AI data solutions, igniting a culture of innovation and sustainability that enriches lives and transforms communities worldwide.',
  keywords: ['AI', 'Data Solutions', 'ESG', 'ASEAN', 'Machine Learning', 'Data Annotation'],
}

export const viewport = {
  themeColor: '#046241',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
