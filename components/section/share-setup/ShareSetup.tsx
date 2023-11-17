"use client";

import React from "react";
import Image from "next/image";

const ShareSetup = () => {
  return (
    <div className="debug-screens relative w-full">
      <div className="z-10 flex flex-col items-center justify-center">
        <span className="mb-2 text-xl font-semibold text-gray-100">
          Share your setup with
        </span>
        <span className="text-4xl font-bold text-gray-500">
          #FuniroFurniture
        </span>
      </div>
      <div className="bg-share-setup absolute top-0 mt-0 min-h-[780px] w-full bg-cover bg-center 4xl:mt-6" />
    </div>
  );
};

export default ShareSetup;
