"use client";
import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";


export default function RegionSchoolTabs() {
  const [activeTab, setActiveTab] = useState(null);

  const regions = [
    { name: "CENTRAL REGION SCHOOLS", link: "#central" },
    { name: "SOUTHERN REGION SCHOOLS", link: "#southern" },
    { name: "NORTHERN REGION SCHOOLS", link: "#northern" },
    { name: "WESTERN REGION SCHOOLS", link: "#western" },
    { name: "RAIGAD REGION SCHOOLS", link: "#raigad" },
  ];

  return (

  



    <div className="bg-gray-100 min-h-screen">
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
          <h3 className="text-white text-3xl md:text-4xl font-extrabold drop-shadow-lg uppercase">
          secondary schools
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
          <span className="text-yellow-400 uppercase"> secondary schools</span>
        </div>
      </div>



    <div className="w-[95%] max-w-6xl bg-[#E0F2F1] flex flex-col items-center mx-auto shadow-lg rounded-tl-[80px] rounded-br-[80px] mt-5 mb-5 border-t-[5px] border-b-[5px] border-[#00A99D] p-6">
      <h2 className="text-[22px] sm:text-[25px] text-black font-serif text-center">
       Secondary Schools
      </h2>

      <div className="flex items-center justify-center w-full mt-2">
        <hr className="flex-1 border-t-2 border-black sm:w-1/4 w-1/6" />
        <Image
  src="/images/tree.png"
  alt="logo"
  width={64} // or appropriate width
  height={64} // or appropriate height
  className="h-12 sm:h-16 mx-4"
/>

        <hr className="flex-1 border-t-2 border-black sm:w-1/4 w-1/6" />
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 w-[80%] max-w-5xl">
        {regions.map((region, idx) => (
          <a
            key={idx}
            href={region.link}
            className="block w-full p-3 text-center border rounded-lg text-black hover:bg-gray-800 hover:text-white mb-3"
          >
            {region.name}
          </a>
        ))}
      </div>
    </div>
   <Footer/>
    </div>
  );
}
