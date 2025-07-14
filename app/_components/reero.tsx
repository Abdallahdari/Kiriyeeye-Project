import React from "react";
import reero from "../../public//reero.png";
import Link from "next/link";
export default function Reero() {
  return (
    <div
      className="h-[calc(100vh-12.4rem)] z-10 my-10 object-cover bg-cover bg-center relative "
      style={{ backgroundImage: `url(${reero.src})` }}
    >
      <div className="flex items-center justify-center px-4 z-50 h-full">
        <div className="rounded-2xl flex flex-col  max-w-[400px] bg-white  px-6 py-5">
          <h1 className="text-2xl text-black font-bold ">
            Ka hel guri riyadaada
          </h1>
          <p className="text-gray-600 mt-4">
            Vel mattis integer pulvinar morbi quis amet eu. In nunc facilisis
            proin fermentum, consectetur cursus.{" "}
          </p>
          <Link
            href={"/houses"}
            className="bg-teal-900 text-white px-6 py-2 rounded-full mt-4 hover:bg-teal-700 transition-all duration-300"
          >
            Dooro magalada rabtid
          </Link>
        </div>
      </div>
    </div>
  );
}
