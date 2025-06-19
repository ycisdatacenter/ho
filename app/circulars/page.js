"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

function CircularsContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [circulars, setCirculars] = useState([]);

  useEffect(() => {
    async function fetchCirculars() {
      try {
        const response = await fetch("/api/news");
        const data = await response.json();
        setCirculars(data);
      } catch (error) {
        console.error("Failed to fetch circulars", error);
      }
    }
    fetchCirculars();
  }, []);

  const filteredCirculars = circulars.filter((circular) => {
    const year = new Date(circular.date).getFullYear().toString();
    const title = circular.title.toLowerCase();
    const search = searchTerm.toLowerCase();

    return (
      title.includes(search) || year.includes(search)
    );
  });

  return (
    <div>
      <HeaderSection />
      <Header />
      <Navbar />

      {/* Hero Banner */}
      <section className="relative w-full h-[100px]">
        <Image
          src="/images/academics-banner.jpg"
          alt="Academics"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <h3 className="text-white text-3xl md:text-4xl font-extrabold drop-shadow-lg uppercase">
            Circulars
          </h3>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-teal-900 text-white py-3">
        <div className="container mx-auto flex justify-center space-x-2 text-sm">
          <Link href="/" className="flex items-center space-x-1 hover:text-yellow-400">
            <span>🏠</span>
            <span>Home</span>
          </Link>
          <span className="text-gray-400">›</span>
          <span className="text-yellow-400 uppercase">Circulars</span>
        </div>
      </div>

      {/* Search Box */}
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="सर्च करा (कीवर्ड किंवा वर्ष) / Search by keyword or year"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border px-4 py-2 rounded-md shadow-md text-gray-900 w-full max-w-md"
          />
        </div>

        {/* Info */}
        <div className="text-center mb-4 text-gray-600 text-sm">
          Type keyword like &quot;exam&quot; or &quot;2024&quot; to search circulars.
        </div>

        {/* Circulars Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg p-6">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Year</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Download</th>
              </tr>
            </thead>
            <tbody>
              {filteredCirculars.length > 0 ? (
                filteredCirculars.map((circular) => (
                  <tr key={circular.id} className="border-b hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">{circular.title}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      {new Date(circular.date).getFullYear()}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <a
                        href={circular.file_path}
                        download
                        className="text-blue-600 hover:text-blue-800"
                      >
                        📥 Download
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center text-gray-600 py-4">
                    No circulars found for &quot;{searchTerm}&quot;
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default function Circulars() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CircularsContent />
    </Suspense>
  );
}
