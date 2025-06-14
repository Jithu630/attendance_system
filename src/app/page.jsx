// src/app/page.jsx
export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Attendance System</h1>
        <p className="mt-2">Go to <a href="/login" className="text-blue-500 underline">Login</a></p>
      </div>
    </main>
  );
}