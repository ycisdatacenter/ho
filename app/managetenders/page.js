"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Swal from "sweetalert2";
import { Eye, Trash2 } from "lucide-react";

export default function ManageTenders() {
  const router = useRouter();
  const [tenderList, setTenderList] = useState([]);

  const fetchTenders = async () => {
    try {
      const response = await fetch("/api/getTenders");
      const data = await response.json();
      console.log("Fetched tenders on frontend:", data.tenders);
      setTenderList(data.tenders);
    } catch (error) {
      console.error("Failed to fetch tenders:", error);
    }
  };

  useEffect(() => {
    fetchTenders();
  }, []);

  const deleteTender = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This tender will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await fetch(`/api/deleteTender?id=${id}`, { method: "DELETE" });
        fetchTenders();

        Swal.fire("Deleted!", "Tender has been deleted.", "success");
      } catch (error) {
        console.error("Failed to delete tender:", error);
        Swal.fire("Error", "Something went wrong while deleting.", "error");
      }
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        setActiveSection={(section) => {
          const routes = {
            addNews: "/addnews",
            manageNews: "/managenews",
            addNotice: "/addnotice",
            manageNotices: "/managenotices",
            addEvent: "/adddocuments",
            manageEvents: "/managedocuments",
            manageSchoolNews: "/adminschoolnews",
            manageSchoolEvents: "/manageadminevents",
            addGallery: "/addimage",
            addRecentActivity: "/addevents",
            manageRecentActivities: "/manageevents",
            addAchievement: "/addachievements",
            manageAchievements: "/manageachievements",
            addAchievementnews: "/addachievementsnews",
            manageAchievementsnews: "/manageachievementsnews",
            addAlumni: "/addalumni",
            manageAlumni: "/managealumni",
            managefeedbackNews: "/managefeedback",
            addrecruitmentNews: "/addrecruitment",
            managerecruitmentNews: "/managerecruitment",
            addScrollingNews: "/addscrollingnews",
            manageScrollingNews: "/managescrollingnews",
          };
          if (routes[section]) router.push(routes[section]);
        }}
      />

      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-8 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tenders List</h2>
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tenderList.length > 0 ? (
                  tenderList.map((tender) => (
                    <tr key={tender.id} className="hover:bg-gray-50 transition">
                      <td className="border border-gray-300 px-4 py-2">{tender.title}</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <div className="flex justify-center space-x-6">
                          <button
                            onClick={() => router.push(`/viewNotice/${tender.id}`)}
                            title="View Tender"
                            className="text-blue-600 hover:text-blue-800 transition-transform hover:scale-110"
                          >
                            <Eye className="w-7 h-7" />
                          </button>
                          <button
                            onClick={() => deleteTender(tender.id)}
                            title="Delete Tender"
                            className="text-red-600 hover:text-red-800 transition-transform hover:scale-110"
                          >
                            <Trash2 className="w-7 h-7" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="text-center py-4 text-gray-500">
                      No Tenders available.
                    </td>
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
