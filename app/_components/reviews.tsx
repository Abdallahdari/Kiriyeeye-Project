"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import profile from "../../public/profile.png";
import Image from "next/image";
const testimonials = [
  {
    id: 1,
    name: "Annie",
    title: "Landlord in SE1",
    text: "Nascetur urna, fusce consectetur massa nulla viverra aenean semper. Dignissim nibh sed condimentum eget ac suspendisse eget amet integer. Mattis etiam sagittis fermentum fames habitasse. Vulputate volutpat sit est, elementum. Accumsan nunc nunc arcu faucibus aliquam.",
    img: profile,
  },
  {
    id: 1,
    name: "Annie",
    title: "Landlord in SE1",
    text: "Nascetur urna, fusce consectetur massa nulla viverra aenean semper. Dignissim nibh sed condimentum eget ac suspendisse eget amet integer. Mattis etiam sagittis fermentum fames habitasse. Vulputate volutpat sit est, elementum. Accumsan nunc nunc arcu faucibus aliquam.",
    img: profile,
  },
  {
    id: 2,
    name: "Gabriel",
    title: "Landlord in SE2",
    text: "Nascetur urna, fusce consectetur massa nulla viverra aenean semper. Dignissim nibh sed condimentum eget ac suspendisse eget amet integer. Mattis etiam sagittis fermentum fames habitasse. Vulputate volutpat sit est, elementum. Accumsan nunc nunc arcu faucibus aliquam.",
    img: profile,
  },
];

export default function Reviews() {
  return (
    <div className="container mx-auto xl:max-w-[1200px] my-10 px-4">
      <h1 className="uppercase text-4xl font-bold text-center my-4">
        What our partners think
      </h1>
      <p className="text-center text-gray-600">
        See what our partners say about us
      </p>
      <div className="max-w-6xl mx-auto py-10">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={2}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-gray-100 rounded-3xl p-6 flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <Image
                    height={50}
                    width={50}
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.title}</div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center space-x-4 mt-4">
          <button className="prev-btn bg-teal-900 cursor-pointer text-white hover:bg-teal-700 transition-all duration-300 rounded-md px-3 py-1">
            &lt;
          </button>
          <button className="next-btn bg-teal-900 cursor-pointer hover:bg-teal-700 transition-all duration-300 text-white rounded-md px-3 py-1">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
