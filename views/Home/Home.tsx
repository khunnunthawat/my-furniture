import { Button } from "@/components/ui";

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
    <div className="bg-slate-200 p-20">
      {/* <div className="bg-interior relative mb-14 flex h-[716px] w-full items-center justify-end bg-cover bg-center">
        <div className="container flex md:absolute md:justify-center lg:justify-end xl:static xl:right-6">
          <div className="bg-secondary px-10 pb-6 pt-8 md:pb-9 md:pt-16">
            <div className="flex max-w-[674px] flex-col items-start">
              <span className="text-base font-medium tracking-widest text-gray-500">
                New Arrival
              </span>
              <h1 className="xs:text-4xl text-primary-500 my-4 font-medium lg:text-6xl">
                Discover Our <br />
                New Collection
              </h1>
              <p className="xs:text-sm mb-8 text-gray-500 lg:text-lg">
                Home is an epitome of comfort that you can turn it into multiple
                functional spaces. Let a piece of furniture you select express
                your identity and reflect your modern lifestyle.
              </p>
              <button className="bg-primary-500 inline-block border border-transparent px-20 py-6 text-base font-medium text-white hover:bg-primary/75 hover:text-gray-500">
                BUY NOW
              </button>
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
      <span>components ui</span>
      <div className="my-14 flex flex-row space-x-4">
        <Button className="bg-primary-500 hover:bg-primary-500/90 h-8 px-6 text-sm text-white">
          Small
        </Button>
        <Button className="bg-primary-500 hover:bg-primary-500/90 h-12 px-6 py-3 text-base text-white">
          Explore More
        </Button>
        <Button className="bg-primary-500 hover:bg-primary-500/90 h-14 px-8 py-3 text-base text-white">
          BUY NOW
        </Button>
        <Button className="bg-primary-500 hover:bg-primary-500/90 h-14 px-8 py-3 text-base font-normal text-white">
          Add to Cart
        </Button>
        <Button className="text-primary-500 border-primary-500 h-14 border bg-transparent px-8 py-3 text-base hover:border-gray-500/75 hover:text-gray-500/75">
          Outline
        </Button>
      </div>
      <div className="my-14 flex flex-row space-x-4">
        <Button className="hover:border-primary-500/75 hover:text-primary-500/75 text-primary-500 border-primary-500 h-8 border bg-white px-6 text-sm">
          Small
        </Button>
        <Button className="hover:border-primary-500/75 hover:text-primary-500/75 text-primary-500 border-primary-500 h-12 border bg-white px-6 py-3 text-base">
          Explore More
        </Button>
        <Button className="hover:border-primary-500/75 hover:text-primary-500/75 text-primary-500 border-primary-500 h-14 border bg-white px-8 py-3 text-base">
          BUY NOW
        </Button>
        <Button className="hover:border-primary-500/75 hover:text-primary-500/75 text-primary-500 border-primary-500 h-14 border bg-white px-8 py-3 text-base font-normal">
          Add to Cart
        </Button>
        <Button className="text-primary-500 h-14 bg-white px-8 py-3 text-base hover:border-gray-500/75 hover:bg-white hover:text-gray-500/75">
          Outline
        </Button>
      </div>
      <div className="my-14 flex flex-row space-x-4">
        <div className="h-12 w-32">
          <div className="relative flex h-16 w-full flex-row rounded-lg border border-gray-100 bg-white text-base">
            <button className="w-20 cursor-pointer outline-none">
              <span className="m-auto">-</span>
            </button>
            <div className="flex w-full cursor-default items-center justify-center text-center">
              99
            </div>
            <button className="w-20 cursor-pointer outline-none">
              <span className="m-auto">+</span>
            </button>
          </div>
        </div>
        <Button className="h-16 rounded-lg border border-gray-500 bg-transparent px-6 py-3 text-base hover:border-gray-500/75 hover:text-gray-500/75">
          Add To Cart
        </Button>
        <Button className="h-16 rounded-lg border border-gray-500 bg-transparent px-6 py-3 text-base hover:border-gray-500/75 hover:text-gray-500/75">
          <span className="mr-2">+</span> Compare
        </Button>
        <Button className="h-16 rounded-lg border border-gray-500 bg-transparent px-6 py-3 text-base hover:border-gray-500/75 hover:text-gray-500/75">
          Place order
        </Button>
        <Button className="h-12 rounded-lg border border-gray-500 bg-transparent px-6 py-3 text-base hover:border-gray-500/75 hover:text-gray-500/75">
          Check Out
        </Button>
      </div>
      <div className="my-14 flex flex-row space-x-4">
        <Button className="hover:text-primary-500 text-sm underline underline-offset-4">
          SUBSCRIBE
        </Button>
        <Button className="hover:text-primary-500 text-sm text-gray-300 underline underline-offset-4">
          View More
        </Button>
      </div>
      <div className="my-14 flex flex-row space-x-4">
        <Button className="h-8 rounded-full border border-gray-500 bg-transparent px-6 text-sm hover:border-gray-500/75 hover:text-gray-500/75">
          Cart
        </Button>
        <Button className="h-8 rounded-full border border-gray-500 bg-transparent px-6 text-sm hover:border-gray-500/75 hover:text-gray-500/75">
          Checkout
        </Button>
        <Button className="h-8 rounded-full border border-gray-500 bg-transparent px-6 text-sm hover:border-gray-500/75 hover:text-gray-500/75">
          Comparison
        </Button>
      </div>
      <div className="my-14 flex flex-row space-x-4">
        <Button className="bg-primary-500 hover:bg-primary-500/90 h-10 w-10 text-sm text-white">
          1
        </Button>
        <Button className="bg-primary-500 hover:bg-primary-500/90 h-10 w-10 text-sm text-white">
          2
        </Button>
        <Button className="bg-primary-500 hover:bg-primary-500/90 h-10 w-10 text-sm text-white">
          3
        </Button>
        <Button className="bg-primary-500 hover:bg-primary-500/90 h-10 w-10 text-sm text-white">
          4
        </Button>
      </div>
    </div>
  );
}
