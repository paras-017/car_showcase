import { Footer, Navbar } from '@/components'
import './globals.css'


export const metadata = {
  title: 'Car on doostep',
  description: 'Make a dream come true enjoy your trip with your dream car at afforadable price',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
