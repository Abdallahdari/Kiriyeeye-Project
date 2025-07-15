import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import Loader from "../loading";
import { Bath, Bed, Wifi } from "lucide-react";

interface HouseProps {
  id: number;
  city: string;
  rooms: number;
  location: string;
  ownerNumber: number;
  name: string;
  image: string;
  bedroom: number;
  bath: number;
  date: number;
  Images: string[]; // <-- changed to array
  price: number;
  type: string;
  square: number;
}

interface Pops {
  data: HouseProps[]; // <-- changed to array
}

export default function House({ data }: Pops) {
  return (
    <div className="  grid md:grid-cols-[1fr_26rem] container mx-auto max-w-[1200px] gap-4 px-4 py-8">
      <div className="gruyo  flex flex-col gap-4">
        <Suspense fallback={<Loader />}>
          {data?.map((guri) => (
            <Link
              href={`/houses/${guri.id}`}
              className="grid group  md:grid-cols-[15rem_1fr]   overflow-hidden"
              key={guri.id}
            >
              {guri.Images && guri.Images.length > 0 ? (
                <Image
                  src={guri.Images[1]}
                  height={200}
                  width={400}
                  alt={guri.name}
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-all duration-300  rounded-tl-3xl rounded-bl-xl "
                />
              ) : (
                ""
              )}
              <div className="description group-hover:bg-gray-300 transition-all duration-300 md:rounded-r-4xl  bg-gray-200 px-4 py-2 ">
                <h1 className="text-xl font-semibold text-gray-800">
                  {guri.name}
                </h1>
                <div className="flex items-center gap-3 mt-4 mb-2">
                  <div className="flex items-center   justify-center gap-3">
                    <Bed />
                    <span className="text-gray-600 text-xs">
                      {guri.bedroom} Bedrooms
                    </span>
                  </div>{" "}
                  <div className="flex items-center   justify-center gap-3">
                    <Bath />
                    <span className="text-gray-600 text-xs">
                      {guri.bath} Bathrooms
                    </span>
                  </div>
                  <div className="flex items-center   justify-center gap-3">
                    <Wifi />
                    <span className="text-gray-600 text-xs">wifi</span>
                  </div>
                </div>
                <div className="flex  mt-4 h-fit  items-center  w-full gap-3 ">
                  <div className="bg-teal-700  text-white px-4 py-1 rounded-full">
                    Available {guri.date}
                  </div>
                  <p>
                    from{" "}
                    <span className="font-bold font-serif">${guri.price} </span>{" "}
                    / month
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Suspense>
      </div>
      <div className="filter bg-fuchsia-700"></div>
    </div>
  );
}
