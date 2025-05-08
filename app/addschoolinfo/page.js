"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SidebarSchool from "../components/SidebarSchool";
import SchoolTopbar from "../components/SchoolTopbar";

export default function AddSchoolInfo() {
  const [schoolId, setSchoolId] = useState(null);
  const [principalName, setPrincipalName] = useState("");
  const [vicePrincipalName, setVicePrincipalName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [established, setEstablished] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [studentCount, setStudentCount] = useState("");
  const [facilities, setFacilities] = useState("");
  const [achievements, setAchievements] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchSchoolId = async () => {
      try {
        const response = await fetch("/api/getSchoolId", { credentials: "include" });
        const data = await response.json();
        if (data.school_id) {
          setSchoolId(data.school_id);
        } else {
          setMessage("Error: School ID not found. Please log in again.");
        }
      } catch (error) {
        console.error("Error fetching school_id:", error);
        setMessage("Error fetching school ID.");
      }
    };

    fetchSchoolId();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !principalName ||
      !vicePrincipalName ||
      !contact ||
      !email ||
      !address ||
      !studentCount ||
      !facilities ||
      !achievements
    ) {
      setMessage("All required fields must be filled.");
      return;
    }

    if (!schoolId) {
      setMessage("Error: Invalid school ID. Please log in again.");
      return;
    }

    try {
      const response = await fetch("/api/addSchoolInfo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          school_id: schoolId,
          principalName,
          vicePrincipalName,
          contact,
          email,
          address,
          established,
          affiliation,
          studentCount,
          facilities,
          achievements,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Information submitted successfully!");
        setPrincipalName("");
        setVicePrincipalName("");
        setContact("");
        setEmail("");
        setAddress("");
        setEstablished("");
        setAffiliation("");
        setStudentCount("");
        setFacilities("");
        setAchievements("");
        router.push("/manageschoolinfo");
      } else {
        setMessage(data.error || "Failed to submit information.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Error submitting information. Please try again.");
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <SidebarSchool
        setActiveSection={(section) => {
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
        }}
      />
      <div className="flex-1 flex flex-col">
        <SchoolTopbar />
        <main className="flex-1 p-4 overflow-hidden">
          <div className="max-w-xl mx-auto bg-white p-6 rounded shadow max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6">Add School Information</h2>
            {message && <p className="text-red-600 mb-4">{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input label="Principal Name" value={principalName} onChange={setPrincipalName} required />
              <Input label="Vice Principal Name" value={vicePrincipalName} onChange={setVicePrincipalName} required />
              <Input label="Contact" value={contact} onChange={setContact} required />
              <Input label="Email" value={email} onChange={setEmail} type="email" required />
              <Input label="Address" value={address} onChange={setAddress} required />
              <Input label="Established" value={established} onChange={setEstablished} />
              <Input label="Total Teachers" value={affiliation} onChange={setAffiliation} />
              <Input
                label="Total Students"
                value={studentCount}
                onChange={setStudentCount}
                type="number"
                required
              />
              <Textarea label="Facilities" value={facilities} onChange={setFacilities} required />
              <Textarea label="Achievements" value={achievements} onChange={setAchievements} required />
              <button type="submit" className="bg-teal-900 text-white p-2 rounded w-full">
                Submit Information
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

// Reusable Input component
function Input({ label, value, onChange, type = "text", required = false }) {
  return (
    <div>
      <label className="block text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded"
        required={required}
      />
    </div>
  );
}

// Reusable Textarea component
function Textarea({ label, value, onChange, required = false }) {
  return (
    <div>
      <label className="block text-gray-700">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded"
        required={required}
      />
    </div>
  );
}
