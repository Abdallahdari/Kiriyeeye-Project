import React from "react";
import space from "../../public/spaces.png";
import Link from "next/link";

export default function Bespoke() {
  return (
    <div
      className="h-[calc(100vh-12.4rem)] z-10 my-10 object-cover bg-cover bg-center relative "
      style={{ backgroundImage: `url(${space.src})` }}
    >
      <div className="flex flex-col justify-center mx-auto xl:max-w-[1200px] container px-4  h-full">
        <h2 className=" font-bold mb-4 text-white text-4xl">Bespoke Spaces</h2>
        <p className="text-white mb-6">
          Expertly designed to create extraordinary spaces with the flexible
          renter in mind{" "}
        </p>
        <Link
          href={"/houses"}
          className=" max-w-fit text-white   bg-[#202923] px-6 py-2 rounded-full hover:bg-[#717e71] transition-all duration-300"
        >
          Start booking
        </Link>
      </div>
    </div>
  );
}
