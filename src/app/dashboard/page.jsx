'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabaseClient';

export default function Dashboard() {
  const [students, setStudents] = useState([]);
  const [teacherClassId, setTeacherClassId] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // ✅ Fetch user + class + students
  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        router.push('/login');
        return;
      }

      // 1. Get teacher's class_id
      const { data: teacherData, error: teacherError } = await supabase
        .from('teachers')
        .select('class_id')
        .eq('user_id', user.id)
        .single();

      if (teacherError) {
        console.error('Teacher not found:', teacherError.message);
        return;
      }

      const classId = teacherData.class_id;
      setTeacherClassId(classId);

      // 2. Fetch all students
      const { data: studentData, error: studentError } = await supabase
        .from('students')
        .select('*');

      if (studentError) {
        console.error('Error fetching students:', studentError.message);
        return;
      }

      setStudents(studentData);
      setLoading(false);
    };

    fetchData();
  }, [router]);

  // ✅ Handle delete (for own class only)
  const handleDelete = async (id) => {
    const { error } = await supabase.from('students').delete().eq('id', id);
    if (error) {
      alert('Delete failed: ' + error.message);
    } else {
      setStudents((prev) => prev.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Students Dashboard</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Class</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="p-2 border text-center">{student.name}</td>
                <td className="p-2 border text-center">{student.class_id}</td>
                <td className="p-2 border text-center">
                  {student.class_id === teacherClassId ? (
                    <>
                      <button className="text-blue-600 mr-4">Edit</button>
                      <button
                        className="text-red-600"
                        onClick={() => handleDelete(student.id)}
                      >
                        Delete
                      </button>
                    </>
                  ) : (
                    <span className="text-gray-400">Read Only</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}