import React from "react";
import { getGuryo } from "../_lib/data";
import House from "./house";

export default async function page() {
  const data = await getGuryo();
  console.log(data.length);
  return (
    <div>
      <House data={data} />
    </div>
  );
}
