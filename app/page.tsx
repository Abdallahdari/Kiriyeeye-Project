import React from "react";
import Hero from "./_components/hero";
import Future from "./_components/future";
import Exculded from "./_components/exculded";
import Citis from "./_components/cities";

export default function page() {
  return (
    <div>
      <Hero />
      <Future />
      <Exculded />
      <Citis />
    </div>
  );
}
