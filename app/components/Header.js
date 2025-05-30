import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-white w-full">
      <div className="flex items-center justify-between p-6 max-w-screen-xl mx-auto shadow-md">
        {/* Replace img with Image component */}
        <Image src="/images/rayat.png" alt="Rayat Logo" width={80} height={80} />
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-wide">Rayat Shikshan Sanstha</h1>
          <h2 className="text-lg font-dark">Founder Dr. Karmaveer Bhaurao Patil</h2>
          <h4 className="text-lg font-semibold text-red-500">Satara - 415 001</h4>
        </div>
        {/* Replace img with Image component */}
        <Image src="/images/kbp.png" alt="KBP Logo" width={80} height={80} />
      </div>
    </div>
  );
};

export default Header;
