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

  console.log(cities);
  return (
    <div className="container mx-auto xl:max-w-[1200px] px-4">
      <h1 className="text-3xl font-semibold text-center my-8 uppercase">
        Choose your locatoin
      </h1>
      <div className="grid md:grid-cols-6 gap-6 container mx-auto px-4">
        {cities.map((city, index) => (
          <Link
            href={""}
            key={index}
            className="flex flex-col items-center  p-4"
          >
            <h2 className="text-xl font-bold mb-4">{city.city}</h2>

            <Image
              src={city.image}
              alt={city.city}
              width={200}
              height={200}
              className=" rounded-lg mb-4 object-cover"
            />
          </Link>
        ))}
      </div>{" "}
    </div>
  );
}
