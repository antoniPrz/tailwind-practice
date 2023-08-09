import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Sidebar } from './components/Sidebar/Index'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='bg-white min-h-screen grid grid-cols-app' >
       <Sidebar/>
       <main className=' px-4 pb-12 pt-8'>

        {children}
       </main>
        </div>
        
      </body>
    </html>
  )
}
