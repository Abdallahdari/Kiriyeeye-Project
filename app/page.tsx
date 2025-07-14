import React, { Suspense } from "react";
import Hero from "./_components/hero";
import Future from "./_components/future";
import Exculded from "./_components/exculded";
import Citis from "./_components/cities";
import LoadingHouses from "./loading";
import Bespoke from "./_components/bespoke";
import Cooprate from "./_components/cooprate";
import Reviews from "./_components/reviews";
import Reero from "./_components/reero";
export default function page() {
  return (
    <div>
      <Hero />
      <Future />
      <Exculded />
      <Suspense fallback={<LoadingHouses />}>
        <Citis />
      </Suspense>
      <Bespoke />
      <Cooprate />
      <Reviews />
      <Reero />
    </div>
  );
}
