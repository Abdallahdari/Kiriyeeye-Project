"use client";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useState } from "react";
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
  Images: string[];
  price: number;
  type: string;
  square: number;
}

interface Pops {
  data: HouseProps[];
}

export default function House({ data }: Pops) {
  // Filter states
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [bedrooms, setBedrooms] = useState<number | undefined>();
  const [bathrooms, setBathrooms] = useState<number | undefined>();

  // Apply filters to data
  const filteredData = data.filter((guri) => {
    if (maxPrice !== undefined && guri.price > maxPrice) return false;
    if (bedrooms !== undefined && bedrooms !== 0 && guri.bedroom !== bedrooms)
      return false;
    if (bathrooms !== undefined && bathrooms !== 0 && guri.bath !== bathrooms)
      return false;
    // since you don’t have wifi field, skip logic
    return true;
  });

  return (
    <div className="grid md:grid-cols-[1fr_26rem] container mx-auto max-w-[1200px] gap-4 px-4 py-8">
      <div className="gruyo flex flex-col gap-4">
        <Suspense fallback={<Loader />}>
          {filteredData?.map((guri) => (
            <Link
              href={`/houses/${guri.id}`}
              className="grid group md:grid-cols-[15rem_1fr] overflow-hidden"
              key={guri.id}
            >
              {guri.Images && guri.Images.length > 0 ? (
                <Image
                  src={guri.Images[1]}
                  height={200}
                  width={400}
                  alt={guri.name}
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-all duration-300 rounded-tl-3xl rounded-bl-xl"
                />
              ) : (
                ""
              )}
              <div className="description group-hover:bg-gray-300 transition-all duration-300 md:rounded-r-4xl bg-gray-200 px-4 py-2">
                <h1 className="text-xl font-semibold text-gray-800">
                  {guri.name}
                </h1>
                <div className="flex items-center gap-3 mt-4 mb-2">
                  <div className="flex items-center justify-center gap-3">
                    <Bed />
                    <span className="text-gray-600 text-xs">
                      {guri.bedroom} Bedrooms
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Bath />
                    <span className="text-gray-600 text-xs">
                      {guri.bath} Bathrooms
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Wifi />
                    <span className="text-gray-600 text-xs">wifi</span>
                  </div>
                </div>
                <div className="flex mt-4 h-fit items-center w-full gap-3">
                  <div className="bg-teal-700 text-white px-4 py-1 rounded-full">
                    Available {guri.date}
                  </div>
                  <p>
                    from{" "}
                    <span className="font-bold font-serif">${guri.price}</span>{" "}
                    / month
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Suspense>
      </div>

      {/* Filter sidebar */}
      <div className="bg-white rounded-2xl shadow p-4 flex flex-col gap-4">
        <h2 className="text-lg font-semibold mb-2">Filter Houses</h2>

        {/* Price slider */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Max Price (${maxPrice})
          </label>
          <input
            type="range"
            min="100"
            max="1000"
            step="10"
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            className="w-full fill-gray-400 accent-emerald-700"
          />
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-sm font-medium mb-1">Bedrooms</label>
          <select
            value={bedrooms ?? ""}
            onChange={(e) =>
              setBedrooms(e.target.value ? parseInt(e.target.value) : undefined)
            }
            className="w-full border border-emerald-700  rounded p-2"
          >
            <option value="">Any</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
          </select>
        </div>

        {/* Bathrooms */}
        <div>
          <label className="block text-sm font-medium mb-1">Bathrooms</label>
          <select
            value={bathrooms ?? ""}
            onChange={(e) =>
              setBathrooms(
                e.target.value ? parseInt(e.target.value) : undefined
              )
            }
            className="w-full border rounded p-2 border-emerald-700"
          >
            <option value="">Any</option>
            <option value="1">1 Bathroom</option>
            <option value="2">2 Bathrooms</option>
            <option value="3">3+ Bathrooms</option>
          </select>
        </div>

        {/* Wifi toggle */}

        {/* Reset filters */}
        <button
          onClick={() => {
            setMaxPrice(1000);
            setBedrooms(undefined);
            setBathrooms(undefined);
            setWifiOnly(false);
          }}
          className="text-sm text-white  px-4 py-2 bg-emerald-700 cursor-pointer  hover:bg-emerald-400 rounded-2xl transition-colors duration-300 "
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}
