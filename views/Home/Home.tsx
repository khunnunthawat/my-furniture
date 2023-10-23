import Image from "next/image";

import { Button } from "@/components/ui";
import { CompareIcon, FavoriteIcon, ShareIcon } from "@/components/icons";

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

export default function Home() {
  return (
    <>
      {/* <div className="relative mb-14 flex h-[716px] w-full items-center justify-end bg-interior bg-cover bg-center">
        <div className="container flex md:absolute md:justify-center lg:justify-end xl:static xl:right-6">
          <div className="bg-secondary px-10 pb-6 pt-8 md:pb-9 md:pt-16">
            <div className="flex max-w-[674px] flex-col items-start">
              <span className="text-base font-medium tracking-widest text-gray-500">
                New Arrival
              </span>
              <h1 className="my-4 font-medium text-primary-500 xs:text-4xl lg:text-6xl">
                Discover Our <br />
                New Collection
              </h1>
              <p className="mb-8 text-gray-500 xs:text-sm lg:text-lg">
                Home is an epitome of comfort that you can turn it into multiple
                functional spaces. Let a piece of furniture you select express
                your identity and reflect your modern lifestyle.
              </p>
              <Button size="large" className="px-20 py-6">
                BUY NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
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
      </div> */}
      <div className="container my-14">
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="mb-8 text-center text-[40px] font-bold text-gray-500">
            Our Products
          </h1>
          <ul className="grid grid-cols-4 gap-8">
            <li className="overflow-hidden">
              <div className="group relative h-[446px] w-full min-w-[285px]">
                <Image
                  width={285}
                  height={301}
                  src={"/images/syltherine.svg"}
                  alt=""
                  className="object-cover"
                />
                <div className="absolute left-1/2 top-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center transition duration-300 group-hover:opacity-100">
                  <Button variant="outline" className="mb-6 w-[200px]">
                    Outline
                  </Button>
                  <div className="inline-flex cursor-pointer space-x-5 text-white">
                    <div className="inline-flex items-center">
                      <ShareIcon className="mr-1" />
                      Share
                    </div>
                    <div className="inline-flex items-center">
                      <CompareIcon className="mr-1" />
                      Compare
                    </div>
                    <div className="inline-flex items-center">
                      <FavoriteIcon className="mr-1" />
                      Like
                    </div>
                  </div>
                </div>
                <div className="absolute left-0 top-0 h-full w-full bg-gray-500 bg-opacity-70 transition duration-500 group-hover:opacity-100" />
                <div className="h-[145px] bg-gray-white p-4">
                  <div className="flex flex-col">
                    <div className="mb-2 text-2xl font-semibold text-gray-500">
                      Syltherine
                    </div>
                    <div className="font-medium text-gray-300">
                      Stylish cafe chair
                    </div>
                    <div className="inline-flex space-x-2">
                      <div className="text-xl font-semibold text-gray-500">
                        Rp 2.500.000
                      </div>
                      <div className="flex items-end text-base text-gray-100 line-through">
                        Rp 3.500.000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
