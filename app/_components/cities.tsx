import React from "react";
import { getGuryo } from "../_lib/data";

export default async function Citis() {
  const data = await getGuryo();
  if (!data) {
    return <div>Loading...</div>;
  }
  const cities = data.map((city) => city.city);
  console.log(cities);
  return <div>{cities}</div>;
}
