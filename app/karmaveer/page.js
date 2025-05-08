'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Import Image component from Next.js

const KVP = () => {
  const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    const tabsData = [
      {
        id: 1,
        name: 'Biography',
        content: (
          <>
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-2 p-4 lg:p-0">
              {/* Text */}
              <motion.div
                className="w-full lg:w-2/3 text-justify px-4 lg:px-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h2 className="text-[9vw] sm:text-[7vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw] font-bold text-cyan-700 pb-2 font-mono">
                  Biography
                </h2>
                <p className="text-gray-900 text-sm sm:text-base">
                  Dr. Karmaveer Bhaurao Patil was born on 22 September, 1887 at Kumbhoj, in the Kolhapur district of Maharashtra...
                  {/* Truncated for brevity */}
                </p>
              </motion.div>

              {/* Image */}
              <motion.div
                className="w-full lg:w-1/3 flex justify-center items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="relative w-2/3 sm:w-1/2 md:w-full lg:w-auto">
                  <Image
                    src="/Karmveer.jpg"
                    alt="Dr. Karmaveer Bhaurao Patil"
                    className="shadow-lg rounded-lg"
                    width={500} // Specify width
                    height={500} // Specify height
                  />
                </div>
              </motion.div>
            </div>

            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-2 p-4 lg:p-10">
              {/* Second image */}
              <motion.div
                className="w-full lg:w-1/3 flex justify-center items-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="relative w-2/3 sm:w-1/2 md:w-full lg:w-auto">
                  <Image
                    src="/Karmveer1.gif"
                    alt="Dr. Karmaveer Bhaurao Patil"
                    className="shadow-lg rounded-lg"
                    width={500} // Specify width
                    height={500} // Specify height
                  />
                </div>
              </motion.div>

              {/* More Text */}
              <motion.div
                className="w-full lg:w-2/3 text-justify px-4 lg:px-16"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <p className="text-gray-900 text-sm sm:text-base">
                  It is a significant coincidence that Mahatma Gandhi’s Freedom Movement...
                  {/* Truncated for brevity */}
                </p>
              </motion.div>
            </div>
          </>
        ),
      },
      {
        id: 2,
        name: 'Contribution by Sou. Vahini',
        content: (
          <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-2 p-4 lg:p-0">
            <motion.div
              className="w-full lg:w-2/3 text-justify px-4 lg:px-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-[9vw] sm:text-[7vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw] font-bold text-cyan-700 pb-2 font-mono">
                Contribution by Sou. Vahini
              </h2>
              <p className="text-gray-900 text-sm sm:text-base">
                Karmaveer Bhaurao Patil alias Anna, his wife Sou. Laxmibai Patil alias Vahini...
                {/* Truncated for brevity */}
              </p>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/3 flex justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative w-2/3 sm:w-1/2 md:w-full lg:w-auto">
                <Image
                  src="/Laxmibai.jpg"
                  alt="Sou. Laxmibai Patil"
                  className="shadow-lg rounded-lg"
                  width={500} // Specify width
                  height={500} // Specify height
                />
              </div>
            </motion.div>
          </div>
        ),
      },
      {
        id: 3,
        name: 'Social Activities',
        content: (
          <div className="flex flex-col lg:p-10 gap-10 justify-center items-center">
            <div className="relative w-2/3 sm:w-1/2 md:w-full lg:w-1/2">
              <Image
                src="/Karmveer2.jpg"
                alt="Dr. Karmaveer Bhaurao Patil"
                className="shadow-lg rounded-lg"
                width={500} // Specify width
                height={500} // Specify height
              />
            </div>
            <div>
              <ul className="list-disc list-inside text-gray-900 text-sm sm:text-base px-4 lg:px-16">
                <li>Participation in Shikshan Prasarak Mandal, Dudhgaon Dist-Sangli in 1909.</li>
                <li>Founded Rayat Shikshan Sanstha at Kale Tal-Karad Dist-Satara in 1919...</li>
                <li>Opened hostel at Nerle, Tal-Walva in 1921</li>
                <li>Opened Rajarshi Chhatrapati Shahu Maharaj Boarding at Satara in 1924...</li>
                <li>Opened Union Boarding House at Pune in 1932...</li>
                <li>Registered Rayat Shikshan Sanstha in 1935 and started Training College...</li>
              </ul>
            </div>
          </div>
        ),
      },
    ];

    return (
      <div className="w-full">
        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                activeTab === tab.id
                  ? 'bg-cyan-700 text-white shadow'
                  : 'bg-gray-100 text-gray-700 hover:bg-cyan-100'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6">{tabsData.find((tab) => tab.id === activeTab)?.content}</div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Tabs />
    </div>
  );
};

export default KVP;
