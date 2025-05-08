import HeaderSection from "../components/HeaderSection";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function About() {
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
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <h3 className="text-white text-3xl md:text-4xl font-extrabold drop-shadow-lg uppercase">
            Vision & Mission
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
          <span className="text-yellow-400 uppercase">Vision & Mission</span>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="container mx-auto my-10 p-6 bg-white rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        {/* Vision */}
        <div className="p-6 text-center border-r md:border-gray-300">
          <div className="flex items-center justify-center mb-4 space-x-3">
            <Image src="/images/vision.png" alt="Vision" width={40} height={40} />
            <h2 className="text-2xl font-bold text-blue-700">Vision</h2>
          </div>
          <p className="text-gray-600 text-md italic mb-3">
            &quot;Transforming life through excellence in education and research.&quot;
          </p>
          <Image
            src="/images/vision1.webp"
            alt="Vision Image"
            width={200}
            height={120}
            className="mx-auto rounded-lg shadow-md"
          />
        </div>

        {/* Mission */}
        <div className="p-6 text-center">
          <div className="flex items-center justify-center mb-4 space-x-3">
            <Image src="/images/mission.webp" alt="Mission" width={60} height={40} />
            <h2 className="text-2xl font-bold text-blue-700">Mission</h2>
          </div>
          <ul className="text-gray-700 text-md text-left space-y-3">
            <li>
              <span className="font-semibold text-black-800">🌍 World-class Education:</span> Excellence in education...
            </li>
            <li>
              <span className="font-semibold text-black-800">🔬 Cutting-edge Research:</span> An innovation ecosystem...
            </li>
            <li>
              <span className="font-semibold text-black-800">🤝 Impactful People:</span> Happy, accountable, caring...
            </li>
            <li>
              <span className="font-semibold text-black-800">💡 Rewarding Co-creations:</span> Active collaboration...
            </li>
            <li>
              <span className="font-semibold text-black-800">❤️ Service to Society:</span> Service to the region...
            </li>
          </ul>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="mt-12 flex flex-col items-center">
        <div className="flex items-center space-x-4">
          <Image src="/images/coreval.webp" alt="Core Values" width={90} height={90} />
          <h2 className="text-2xl font-extrabold text-gray-800">Core Values</h2>
        </div>
        <div className="mt-6 bg-blue-900 text-white p-6 rounded-lg shadow-xl grid grid-cols-2 md:grid-cols-5 gap-3 max-w-3xl">
          {[
            "Student focus",
            "Strong ethics",
            "Striving for excellence",
            "Social development",
            "Respect for all",
          ].map((value, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-white text-blue-900 font-semibold text-center rounded-lg text-sm shadow-md"
            >
              {value}
            </div>
          ))}
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}
