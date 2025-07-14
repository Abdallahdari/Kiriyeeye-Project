import { Search, User, Files } from "lucide-react";
import React from "react";

export default function Cooprate() {
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
      <div className=" grid md:grid-cols-3 gap-3">
        <div className="flex flex-col gap-4 px-5 text-black  py-5 bg-[#e2f1e8] rounded-lg">
          <Search className="text-black" />
          <div className="flex flex-col gap-2">
            {" "}
            <p className="font-bold">Bookin manager</p>
            <p className="text-sm ">We do the searching for you</p>
          </div>
        </div>
        {/* secound card */}
        <div className="flex flex-col gap-4 px-5 text-black  py-5 bg-[#e2f1e8] rounded-lg">
          <User />

          <div className="flex flex-col gap-2">
            {" "}
            <p className="font-bold">Account manager</p>
            <p className="text-sm ">Preferred partner rates</p>
          </div>
        </div>

        {/* fourth card */}
        <div className="flex flex-col gap-4 px-5 text-black  py-5 bg-[#e2f1e8] rounded-lg">
          <Files />
          <div className="flex flex-col gap-2">
            {" "}
            <p className="font-bold">Flexible terms</p>
            <p className="text-sm ">Extend on short notice</p>
          </div>
        </div>
      </div>
    </div>
  );
}
