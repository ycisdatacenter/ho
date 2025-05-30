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
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <h3 className="text-white text-3xl md:text-4xl font-extrabold drop-shadow-lg">
           HISTORY
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
          <span className="text-yellow-400">HISTORY</span>
        </div>
      </div>
      

      {/* Content Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">About Rayat Shikshan Sanstha</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          A premier institution of education like the Rayat Shikshan Sanstha, known and honoured far and wide,
          not only at the national level but at the global level too, needs no introduction. The institution
          itself is regarded as a noble mission, a noble cause, so earnestly and so endearingly pursued by its
          founder-father, Karmaveer Bhaurao Patil, the educator of educators, and his legendary wife,
          Sou. Laxmibai Patil, with her exemplary sacrifices made to turn the mission into a reality.
        </p>
        
       

        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Rayat Shikshan Sanstha is one of the leading educational institutions in Asia. The value of its
          contribution to education in general is enormously great, as it has, from the very beginning, tried
          its best to lay emphasis on the education of the downtrodden, the poor, and the ignorant who form the
          major bulk of society.
        </p>
      </div>

   
      
      
      <Footer />
    </div>
  );
}
