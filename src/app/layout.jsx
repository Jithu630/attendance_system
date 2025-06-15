// app/layout.jsx
'use client'

import Link from 'next/link'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="flex justify-between items-center p-4 bg-white shadow">
          <Link href="/">
            <h2 className="text-2xl font-bold">ATTENDANCE SYSTEM</h2>
          </Link>
          <button
            className="text-red-600 hover:underline"
            onClick={() => {/* logout logic */}}
          >
            Logout
          </button>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}