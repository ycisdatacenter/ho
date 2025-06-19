"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/getSliderImages"); // Update this URL based on your API route
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching slider images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {images.length > 0 ? (
          images.map((image, index) => (
            <SwiperSlide key={image.id} className="relative w-full h-full">
              <div className="relative w-full h-full">
                <Image
                  src={image.file_path}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover w-full h-full brightness-110 contrast-105"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p className="text-center text-gray-500 p-4">Loading...</p>
        )}
      </Swiper>

      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: white;
          background: rgba(0, 0, 0, 0.3);
          padding: 8px;
          border-radius: 9999px;
          transition: background 0.3s ease;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: rgba(0, 0, 0, 0.5);
        }

        .swiper-pagination-bullet {
          background: white;
          opacity: 0.7;
        }

        .swiper-pagination-bullet-active {
          background: #00b4d8;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
