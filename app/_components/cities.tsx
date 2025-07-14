import React from "react";
import { getGuryo } from "../_lib/data";
import Image from "next/image";
import Link from "next/link";

export default async function Citis() {
  const data = await getGuryo();
  if (!data) {
    return <div>Loading...</div>;
  }
  const uniqueCitiesMap = new Map();

  data.forEach((city) => {
    if (!uniqueCitiesMap.has(city.city)) {
      uniqueCitiesMap.set(city.city, {
        city: city.city,
        image: city.Images[0],
      });
    }
  });

  const cities = Array.from(uniqueCitiesMap.values());

  return (
    <div className="container mx-auto xl:max-w-[1200px] px-4">
      <h1 className="text-3xl font-bold text-center my-8 uppercase">
        Choose your locatoin
      </h1>
      <div className="grid md:grid-cols-6 gap-6 container mx-auto px-4">
        {cities.map((city, index) => (
          <Link
            href={""}
            key={index}
            className="flex group  flex-col items-center  p-4"
          >
            <p className=" font-semibold mb-4 group-hover:text-pink-500 transition-all duration-300">
              {city.city}
            </p>

            <Image
              src={city.image}
              alt={city.city}
              width={200}
              loading="lazy"
              height={200}
              className="hover:scale-105 transition-all duration-300 rounded-lg mb-4 object-cover"
            />
          </Link>
        ))}
      </div>{" "}
      <div className="flex items-center justify-center w-full">
        <Link
          href={"/houses"}
          className="text-white bg-[#303d35] px-6 py-2 rounded-full hover:bg-[#717e71] transition-all duration-300 "
        >
          View all cities
        </Link>
      </div>
    </div>
  );
}
