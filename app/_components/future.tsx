import Image from "next/image";
import React from "react";
import Rag from "../../public/Rag.png";
import gabar from "../../public/gabar.png";
import gabar2 from "../../public/gabar2.png";
import dumar from "../../public/dumar.png";

export default function Future() {
  return (
    <div className="h-[calc(100vh-7.8rem)] container mx-auto xl:max-w-[1200px] w-full  flex items-center justify-center px-4">
      <div className="grid md:grid-cols-2">
        <div className="images grid grid-cols-2 ">
          <Image
            src={Rag}
            alt="Image 1"
            width={500}
            height={500}
            className="w-full h-auto"
          />{" "}
          <Image
            src={gabar}
            alt="Image 1"
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <Image
            src={gabar2}
            alt="Image 1"
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <Image
            src={dumar}
            alt="Image 1"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
        <div className="h-full w-full bg-[#f2f0f2] rounded-r-[60px] flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold mb-4">Future Features</h1>
            <p className="text-lg text-center text-gray-700">
              Stay tuned for our upcoming features that will enhance your
              property management experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
