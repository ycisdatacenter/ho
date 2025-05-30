"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import Image from "next/image";
import Header from "../components/Header";
import Link from "next/link";

const tabs = ["ईबुक्स- कर्मवीर विद्याप्रबोधिनी"];

const ebooks = [
  { id: 1, title: "Two successful Decades of Empowering Farmers...", type: "वैज्ञानिक", link: "#" },
  { id: 2, title: "तण नियंत्रण यामधील नवीन तंत्रज्ञान", type: "वैज्ञानिक", link: "#" },
  { id: 3, title: "एक उत्कृष्ट गोष्ट - मा. राघवेंद्र मिरे", type: "साहित्यिक", link: "#" },
];

const journals = [
  { id: 1, title: "Agricultural Innovations Journal", type: "वैज्ञानिक", link: "#" },
  { id: 2, title: "Research in Crop Science", type: "वैज्ञानिक", link: "#" },
];

const magazines = [
  { id: 1, title: "Farming Today", type: "प्रकाशन", link: "#" },
  { id: 2, title: "AgriWorld Weekly", type: "प्रकाशन", link: "#" },
];

export default function Ebooks() {
  const [activeTab, setActiveTab] = useState("ईबुक्स- कर्मवीर विद्याप्रबोधिनी");

  const renderTable = (data) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="border border-gray-300 px-4 py-2">अ.क्र.</th>
            <th className="border border-gray-300 px-4 py-2">शीर्षक</th>
            <th className="border border-gray-300 px-4 py-2">प्रकार</th>
            <th className="border border-gray-300 px-4 py-2">लिंक</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 text-center">{item.id}</td>
              <td className="border border-gray-300 px-4 py-2">{item.title}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{item.type}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <Link href={item.link} className="text-red-500 hover:underline">Download</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      <HeaderSection />
      <Header />
      <Navbar />

      <section className="relative w-full h-[100px]">
        <Image
          src="/images/academics-banner.jpg"
          alt="Academics"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <h3 className="text-white text-3xl md:text-4xl font-extrabold drop-shadow-lg">Online Info</h3>
        </div>
      </section>

      <div className="bg-teal-900 text-white py-3">
        <div className="container mx-auto flex justify-center space-x-2 text-sm">
          <Link href="/" className="flex items-center space-x-1 hover:text-yellow-400">
            <span>🏠</span>
            <span>Home</span>
          </Link>
          <span className="text-gray-400">›</span>
          <span className="text-yellow-400">E-Books</span>
        </div>
      </div>

      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-wrap justify-center gap-3 border-b border-gray-300 pb-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 py-2 text-sm sm:text-lg font-semibold border-b-4 ${
                activeTab === tab ? "border-teal-300 text-teal-500" : "border-transparent text-gray-600 hover:text-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {activeTab === "ईबुक्स- कर्मवीर विद्याप्रबोधिनी" && renderTable(ebooks)}
          {/* {activeTab === "प्रकाशने" && renderTable(journals)}
          {activeTab === "कृतीपत्रिका" && renderTable(magazines)} */}
        </div>
      </div>

      <Footer />
    </div>
  );
}

