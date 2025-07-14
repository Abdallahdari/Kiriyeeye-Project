import { Sofa, Wifi, Calendar, MessageCircle } from "lucide-react";
import React from "react";

export default function Exculded() {
  return (
    <div className="container mx-auto xl:max-w-[1200px] my-10 px-4">
      <div className="mb-6">
        <h1 className="uppercase text-4xl font-bold text-center my-4">
          This page is excluded from the build.
        </h1>
        <p className="text-center text-gray-600">
          lexible leases, ready-to-move spaces, and reliable support — all
          designed for modern living.
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-3">
        <div className="flex flex-col gap-4 px-5 text-black  py-5 bg-[#e2f1e8] rounded-lg">
          <Calendar className="text-black" />
          <div className="flex flex-col gap-2">
            {" "}
            <p className="font-bold">Flexible living .</p>
            <p className="text-sm ">
              Stay as Long or as little as you need with month-to- month
              contracts .
            </p>
          </div>
        </div>
        {/* secound card */}
        <div className="flex flex-col gap-4 px-5 text-black  py-5 bg-[#e2f1e8] rounded-lg">
          <Sofa />

          <div className="flex flex-col gap-2">
            {" "}
            <p className="font-bold">Move-in ready .</p>
            <p className="text-sm ">
              Ready to move in with everything you need .
            </p>
          </div>
        </div>
        {/* third card */}
        <div className="flex flex-col gap-4 px-5 text-black  py-5 bg-[#e2f1e8] rounded-lg">
          <Wifi />

          <div className="flex flex-col gap-2">
            {" "}
            <p className="font-bold">High-speed Wi-Fi.</p>
            <p className="text-sm ">
              Best in class internet speeds suitable for working from home.
            </p>
          </div>
        </div>
        {/* fourth card */}
        <div className="flex flex-col gap-4 px-5 text-black  py-5 bg-[#e2f1e8] rounded-lg">
          <MessageCircle />
          <div className="flex flex-col gap-2">
            {" "}
            <p className="font-bold">24/7 support.</p>
            <p className="text-sm ">On hand team for any issues you have.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
