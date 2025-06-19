"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import Image from "next/image";
import Header from "../components/Header";
import Link from "next/link";

export default function TendersPage() {
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    const fetchTenders = async () => {
      try {
        const res = await fetch("/api/getTenders");
        const data = await res.json();
        setTenders(data.tenders); // ✅ corrected to match API response structure
      } catch (error) {
        console.error("Error fetching tenders:", error);
      }
    };
    fetchTenders();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <HeaderSection />
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[100px]">
        <Image
          src="/images/academics-banner.jpg"
          alt="Academics"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <h3 className="text-white text-3xl md:text-4xl font-extrabold drop-shadow-lg">
            Tenders
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
          <span className="text-yellow-400">Tenders</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          e-TENDER NOTICE <br /> Rayat Shikshan Sanstha’s
        </h2>

        <p className="text-lg text-gray-700 text-justify mb-8">
          Tenders are invited from ISO Certified branded companies through e-Tendering process. Following items will be purchased through e-tender for our branches in Maharashtra State.
        </p>

        {/* OFFLINE TENDERS TABLE */}
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Offline Tenders</h3>
        <div className="overflow-x-auto shadow border border-gray-300 rounded-lg mb-12">
          <table className="w-full table-auto text-left text-gray-800">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-3 border">Sr. No</th>
                <th className="px-4 py-3 border">Tender Name</th>
                <th className="px-4 py-3 border">Date</th>
                <th className="px-4 py-3 border">Document</th>
              </tr>
            </thead>
            <tbody>
              {tenders.length > 0 ? (
                tenders.map((tender, index) => (
                  <tr key={tender.id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2 border">{index + 1}</td>
                    <td className="px-4 py-2 border">{tender.title}</td>
                    <td className="px-4 py-2 border">
                      {new Date(tender.date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-4 py-2 border">
                      <a
                        href={`https://103.134.111.2:8006${tender.file_path}`} // ✅ full URL to PDF
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        View Document
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-gray-500 py-6">
                    No tenders available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ONLINE TENDERS LINK */}
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Online Tenders</h3>
        <p className="text-lg text-gray-700 text-justify">
          The detailed information of online tenders such as tender fees, terms, conditions, technical specifications, and approximate quantity of items are available on our portal:&nbsp;
          <a
            href="http://rayat.sets.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline"
          >
            http://rayat.sets.co.in
          </a>. Tender must be submitted online on this web portal up to <strong>30/09/2021 @ 4.00 pm</strong>.
        </p>
      </main>

      <Footer />
    </div>
  );
}
