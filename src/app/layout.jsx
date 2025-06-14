import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Attendance System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Attendance System</h1>
            <nav className="space-x-4">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/login" className="hover:underline">
                Login
              </Link>
              <Link href="/signup" className="hover:underline">
                Signup
              </Link>
              <Link href="/dashboard" className="hover:underline">
                Dashboard
              </Link>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}