"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SidebarSchool from "../components/SidebarSchool";
import SchoolTopbar from "../components/SchoolTopbar";

export default function ManageSchoolInfo() {
  const router = useRouter();
  const [schoolInfos, setSchoolInfos] = useState([]);

  useEffect(() => {
    const fetchSchoolInfos = async () => {
      try {
        const response = await fetch("/api/getSchoolInfo");
        if (!response.ok) throw new Error("Failed to fetch school info");

        const data = await response.json();
        setSchoolInfos(data);  // set the list of schools
      } catch (error) {
        console.error("Error fetching school info:", error);
      }
    };

    fetchSchoolInfos();
  }, []);

  const handleNavigation = (section) => {
    const routes = {
      addEvent: "/adddocuments",
      manageEvents: "/managedocuments",
      addSchoolInfo: "/addschoolinfo",
      manageSchoolInfo: "/manageschoolinfo",
      addSchoolNew: "/addschoolnews",
      manageSchoolNew: "/manageschoolnews",
      addRecentsActivity: "/addschoolactivity",
      manageRecentsActivities: "/manageschoolactivity",
      addRecentEvents: "/addschoolevents",
      manageRecentEvents: "/manageschoolevents",
    };
    router.push(routes[section] || "/");
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <SidebarSchool setActiveSection={handleNavigation} />
      <div className="flex-1 flex flex-col">
        <SchoolTopbar />
        <main className="p-8 space-y-6 overflow-y-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            All School Information
          </h2>
          {schoolInfos.length > 0 ? (
            schoolInfos.map((info) => (
              <div key={info.id} className="bg-white p-6 mb-4 rounded-lg shadow-md">
                <p><strong>School ID:</strong> {info.school_id}</p>
                <p><strong>Principal:</strong> {info.principal_name}</p>
                <p><strong>Vice Principal:</strong> {info.vice_principal_name}</p>
                <p><strong>Contact:</strong> {info.contact}</p>
                <p><strong>Email:</strong> {info.email}</p>
                <p><strong>Address:</strong> {info.address}</p>
                <p><strong>Motto:</strong> {info.motto}</p>
                <p><strong>Established:</strong> {info.established}</p>
                <p><strong>Affiliation:</strong> {info.affiliation}</p>
                <p><strong>Student Count:</strong> {info.student_count}</p>
                <p><strong>Facilities:</strong> {info.facilities}</p>
                <p><strong>Achievements:</strong> {info.achievements}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No school information available.</p>
          )}
        </main>
      </div>
    </div>
  );
}
