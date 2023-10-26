import Image from "next/image";

import { Button } from "@/components/ui";
import { CompareIcon, FavoriteIcon, ShareIcon } from "@/components/icons";
import { ProductItem } from "@/components/Product";

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

const mock = [
  {
    id: "asdasdasdasd",
    img: "/images/syltherine.svg",
    discount: 30,
    newProducts: false,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 119.99,
    specialPrice: 89.99,
  },
  {
    id: "gdfgdfgdfg",
    img: "/images/leviosa.svg",
    discount: null,
    newProducts: true,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 119.99,
    specialPrice: null,
  },
  {
    id: "gdfgdfgdfg",
    img: "/images/leviosa.svg",
    discount: null,
    newProducts: false,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 119.99,
    specialPrice: null,
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
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
            {mock.map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                img={product.img}
                discount={product.discount}
                newProducts={product.newProducts}
                name={product.name}
                description={product.description}
                price={product.price}
                specialPrice={product.specialPrice}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

// {
//   Array.from(Array(4).keys()).map((_) => (
//     <ProductItem
//       id={""}
//       img={"/images/syltherine.svg"}
//       discount={30}
//       newProducts={true}
//       name={"Syltherine"}
//       description={"Stylish cafe chair"}
//       price={2500}
//       specialPrice={3500}
//     />
//   ));
// }
