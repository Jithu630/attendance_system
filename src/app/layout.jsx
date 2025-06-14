// src/app/layout.jsx
import './globals.css'

export const metadata = {
  title: 'Attendance System',
  description: 'A simple attendance system using Next.js and Supabase',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  )
}