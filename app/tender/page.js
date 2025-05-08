import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import Image from "next/image";
import Header from "../components/Header";
import Link from "next/link";

export default function History() {
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

      {/* Breadcrumb Section */}
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

      {/* Main Content Section */}
      <main className="container mx-auto px-6 py-16 space-y-10">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          e -TENDER NOTICE<br />Rayat Shikshan Sanstha’s
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          Tenders are invited from ISO Certified branded companies through e-Tendering process. Following items will be purchased through e-tender for our branches in Maharashtra State.
        </p>

        {/* Tender List */}
        <ul className="space-y-4">
          <li>
            <a href="/pdf/Tender no 1_code168_1 (1)-water filter.pdf" className="text-lg text-red-600 underline">Water Filter with TDS, RO, UV, UF & PVC Water Tank (50 Schools)</a>
          </li>
          <li>
            <a href="/pdf/Tender no 2_code169_1 (5)_Recording studio and IT equpments.pdf" className="text-lg text-red-600 underline">Computer Items - Recording Studio, Smart board & TV, Recording room, Computers, Networking (05 Regions)</a>
          </li>
          <li>
            <a href="/pdf/Tender no 3_code170_1 (4)_Split Air condition.pdf" className="text-lg text-red-600 underline">Split Air Condition (05 Regions)</a>
          </li>
          <li>
            <a href="/pdf/Tender no 4_code171_1 (4)_Skill development Technicall Tools.pdf" className="text-lg text-red-600 underline">Skill Development Equipment for Technical School/Fali/ITI (70 Schools)</a>
          </li>
          <li>
            <a href="/pdf/Tender no 5_code172_1 (4)_3D Printer.pdf" className="text-lg text-red-600 underline">3D Printers</a>
          </li>
          <li>
            <a href="/pdf/Tender no 6_code173_1 (2)_Agriculture drone.pdf" className="text-lg text-red-600 underline">Agriculture Drone for Spraying Fertilizers</a>
          </li>
          <li>
            <a href="/pdf/Tender no 7_code174_1 (4)_Furniture.pdf" className="text-lg text-red-600 underline">Competitive Examination Center – Furniture</a>
          </li>
        </ul>

        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The detailed information of tender such as tender fees, terms, conditions, technical specifications and approximate quantity of items are available on our portal&nbsp;
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
