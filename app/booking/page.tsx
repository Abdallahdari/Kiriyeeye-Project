import Image from "next/image";
import { getGuryo } from "../_lib/data";
import React from "react";

export default async function Page() {
  const guryo = await getGuryo();
  console.log(guryo);

  return (
    <div className="h-screen p-4">
      <ul className="space-y-4">
        {guryo?.map((guri) => (
          <li key={guri.id} className="">
            <p className="font-bold">{guri.name}</p>
            <p>City: {guri.city}</p>
            <p>Baths: {guri.bath}</p>
            <p>Price: ${guri.price}</p>
            <Image
              src={guri.Images[0]}
              width={500}
              height={300}
              alt={guri.name}
              className="rounded-lg"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
