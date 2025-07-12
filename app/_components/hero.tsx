import React from "react";
import Home from "../../public/Home.png";

export default function Hero() {
  return (
    <div
      className="relative h-[calc(100vh-3.8rem)] w-full bg-cover bg-center bg-no-repeat -z-10"
      style={{ backgroundImage: `url(${Home.src})` }}
    >
      <div className="absolute top-1/2 -translate-y-1/2 hidden md:block">
        <div className=" md:max-w-[350px] bg-white md:py-16 rounded-r-4xl md:pr-8 md:pl-14 z-50">
          <h1 className="text-4xl font-monos font-semibold">
            We rent your property
          </h1>
          <p className="text-gray-500 text-sm mt-4">
            We are a property management company that helps landlords rent their
            properties quickly and efficiently.
          </p>
        </div>
      </div>
    </div>
  );
}
