export default function HomePage() {
  return (
    <div className="text-center mt-20">
      <h2 className="text-4xl font-bold mb-4">Welcome to the Attendance System</h2>
      <p className="text-lg text-gray-600 mb-6">
        A simple and efficient way to manage attendance.
      </p>
      <a
        href="/login"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Get Started
      </a>
    </div>
  );
}