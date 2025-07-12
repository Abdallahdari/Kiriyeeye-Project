import React, { Suspense } from "react";
import Hero from "./_components/hero";
import Future from "./_components/future";
import Exculded from "./_components/exculded";
import Citis from "./_components/cities";
import LoadingHouses from "./loading";
export default function page() {
  return (
    <div>
      <Hero />
      <Future />
      <Exculded />
      <Suspense fallback={<LoadingHouses />}>
        <Citis />
      </Suspense>
    </div>
  );
}
