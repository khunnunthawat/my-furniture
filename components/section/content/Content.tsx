import React from "react";

import { cn } from "@/lib/utils";

const rangType = [
  {
    label: "dining",
    picture: "bg-type-dining",
  },
  {
    label: "living",
    picture: "bg-type-living",
  },
  {
    label: "bedroom",
    picture: "bg-type-bedroom",
  },
];

const Content = () => {
  return (
    <div className="mb-14 w-full">
      <div className="mx-auto mb-16 max-w-lg text-center">
        <div className="mb-2 text-3xl font-bold text-gray-500">
          Browse The Range
        </div>
        <p className="text-gray-300">
          Explore our range of home furniture to find everything you need to
          transform your bedroom into the perfect cosy retreat.
        </p>
      </div>
      <div className="mx-auto grid max-w-none gap-5 lg:grid-cols-3 xl:max-w-[1183px]">
        {rangType.map((item, idx) => (
          <div key={idx} className="flex flex-col">
            <div
              className={cn(
                "mb-6 h-[480px] w-full flex-shrink-0 bg-cover bg-center",
                item.picture,
              )}
            />
            <span className="flex justify-center text-2xl font-medium capitalize text-gray-500">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
