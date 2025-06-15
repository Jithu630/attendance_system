// app/dashboard/page.jsx
'use client'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [records, setRecords] = useState([])

  useEffect(() => {
    // fetch attendance records, e.g., via Supabase
    setRecords([
      { id: 1, date: '2025-06-15', status: 'Present' },
      // ...
    ])
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">My Attendance</h1>
      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {records.map(r => (
              <tr key={r.id} className="border-t">
                <td className="p-3">{r.date}</td>
                <td className="p-3">{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}