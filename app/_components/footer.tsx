import React from "react";

export default function Footer() {
  return (
    <div className="grid grid-cols-3 gap-4 container mx-auto xl:max-w-[1500px] py-4 px-3">
      <div className="bg-yellow-400">Logis</div>
      <div className="col-span-1 bg-red-400">Links</div>{" "}
      <div className="bg-blue-600">Links</div>
    </div>
  );
}
