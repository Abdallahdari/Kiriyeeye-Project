import { getGuryo } from "../_lib/data";
import React from "react";

export default async function page() {
  const guryo = await getGuryo();
  console.log(guryo);
  return (
    <div>
      {guryo?.map((guri) => {
        return (
          <li key={guri.id}>
            {guri.name}
            {guri.city}
            {guri.bath} ${guri.price}
          </li>
        );
      })}
    </div>
  );
}
