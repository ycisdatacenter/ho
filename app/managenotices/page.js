"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Eye, Pencil, Trash } from "lucide-react";

export default function ManageNotices() {
  const router = useRouter();
  const [noticesList, setNoticesList] = useState([]);

  // Fetch notices data
  const fetchNotices = async () => {
    try {
      const response = await fetch("/api/getNotices");
      const data = await response.json();
      setNoticesList(data);
    } catch (error) {
      console.error("Failed to fetch notices:", error);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  // Delete notice
  const deleteNotice = async (id) => {
    if (confirm("Are you sure you want to delete this notice?")) {
      try {
        await fetch(`/api/deleteNotice/${id}`, { method: "DELETE" });
        fetchNotices(); // Refresh the list after deletion
      } catch (error) {
        console.error("Failed to delete notice:", error);
      }
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
        <Sidebar setActiveSection={(section) => {
                          if (section === "addNews") {
                            router.push("/addnews");
                          } else if (section === "manageNews") {
                            router.push("/managenews");
                          } else if (section === "addNotice") {
                            router.push("/addnotice");
                          } else if (section === "manageNotices") {
                            router.push("/managenotices");
                          } else if (section === "addEvent") {
                            router.push("/adddocuments");
                          } else if (section === "manageEvents") {
                            router.push("/managedocuments");
                          } else if (section === "manageSchoolNews") {
                            router.push("/adminschoolnews");
                          } else if (section === "manageSchoolEvents") {
                            router.push("/manageadminevents");
                          } else if (section === "addGallery") {
                            router.push("/addimage");
                          } else if (section === "addRecentActivity") {
                            router.push("/addevents");
                          } else if (section === "manageRecentActivities") {
                            router.push("/manageevents");
                          } else if (section === "addAchievement") {
                            router.push("/addachievements");
                          } else if (section === "manageAchievements") {
                            router.push("/manageachievements");
                          } else if (section === "addAchievementnews") {
                            router.push("/addachievementsnews");
                          } else if (section === "manageAchievementsnews") {
                            router.push("/manageachievementsnews");
                          } else if (section === "addAlumni") {
                            router.push("/addalumni");
                          } else if (section === "manageAlumni") {
                            router.push("/managealumni");
                          } else if (section === "managefeedbackNews") {
                            router.push("/managefeedback");
                          } else if (section === "addrecruitmentNews") {
                            router.push("/addrecruitment");
                          } else if (section === "managerecruitmentNews") {
                            router.push("/managerecruitment");
                          } else if (section === "addScrollingNews") {
                            router.push("/addscrollingnews");
                          } else if (section === "manageScrollingNews") {
                            router.push("/managescrollingnews");
                          } 
                          
                        }} />

      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-8 space-y-6">
          {/* Notices Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Notices List</h2>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">Title</th>
                  <th className="border border-gray-300 px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {noticesList.length > 0 ? (
                  noticesList.map((notice) => (
                    <tr key={notice.id} className="text-center">
                      <td className="border border-gray-300 px-4 py-2">{notice.title}</td>
                      <td className="border border-gray-300 px-4 py-2 flex justify-center space-x-4">
                        <button onClick={() => router.push(`/viewNotice/${notice.id}`)}>
                          <Eye className="w-5 h-5 text-blue-500 hover:text-blue-700" />
                        </button>
                        <button onClick={() => deleteNotice(notice.id)}>
                          <Trash className="w-5 h-5 text-red-500 hover:text-red-700" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="text-center py-4 text-gray-500">No notices available.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}