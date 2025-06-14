import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Attendance System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-blue-600 p-4 text-white flex justify-between">
          <div className="font-bold text-xl">Attendance System</div>
          <div className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup</Link>
            <Link href="/dashboard">Dashboard</Link>
          </div>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}