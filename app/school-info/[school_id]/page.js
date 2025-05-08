"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function SchoolProfile() {
  const { school_id } = useParams();
  const [schoolInfo, setSchoolInfo] = useState(null);

  useEffect(() => {
    if (!school_id) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/schoolinfo?school_id=${school_id}`);
        const data = await res.json();
        setSchoolInfo(data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchData();
  }, [school_id]);

  if (!schoolInfo) {
    return (
      <div className="text-center py-20 text-blue-900 text-xl font-semibold">
        Loading School Profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 py-12 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 md:p-16 w-full max-w-7xl border border-blue-100">
        <div className="flex flex-col items-center space-y-6 mb-12 text-center">
          <div className="flex items-center justify-center gap-8">
            <Image src="/images/rayat.png" alt="Rayat Logo" width={80} height={80} />
            <h1 className="text-4xl font-extrabold text-blue-900">{schoolInfo.school_name}</h1>
            <Image src="/images/kbp.png" alt="KBP Logo" width={80} height={80} />
          </div>
          <p className="italic text-blue-600 text-lg">Education through self-help is our motto</p>
          <p className="text-gray-700 text-lg">{schoolInfo.address}</p>
        </div>

        <hr className="my-8 border-t-2 border-blue-300" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">📜 Established</h2>
            <p className="text-gray-700 text-xl">{schoolInfo.established}</p>
          </div>
         
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">👨‍🎓 Total Students</h2>
            <p className="text-gray-700 text-xl">{schoolInfo.student_count}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">🎓 Total Teachers</h2>
            <p className="text-gray-700 text-xl">{schoolInfo.affiliation}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-2xl font-bold text-blue-900">🏫 School Management</h2>
            <p><strong className="text-blue-800">Principal:</strong> {schoolInfo.principal_name}</p>
            <p><strong className="text-blue-800">Vice Principal:</strong> {schoolInfo.vice_principal_name}</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-2xl font-bold text-blue-900">📞 Contact</h2>
            <p><strong className="text-blue-800">Phone:</strong> {schoolInfo.contact}</p>
            <p><strong className="text-blue-800">Email:</strong> {schoolInfo.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-2">🏆 Achievements</h2>
            <p className="text-gray-700 whitespace-pre-wrap">{schoolInfo.achievements}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-2">🏢 Facilities</h2>
            <p className="text-gray-700 whitespace-pre-wrap">{schoolInfo.facilities}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
