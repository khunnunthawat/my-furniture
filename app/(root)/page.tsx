// import { Banner, Content, OurProduct } from "../../views/home";

// import Banner from "../../views/home/Banner";
// import Content from "../../views/home/Content";
// import OurProduct from "../../views/home/OurProduct";
import { Button } from "@/components/ui";

import RoomInspiration from "../../views/home/RoomInspiration";

export default function HomePage() {
  return (
    <>
      <div className="relative mb-14 flex h-[716px] w-full items-center justify-end bg-interior bg-cover bg-center">
        <div className="container flex md:absolute md:justify-center lg:justify-end xl:static xl:right-6">
          <div className="bg-secondary px-10 pb-6 pt-8 md:pb-9 md:pt-16">
            <div className="flex max-w-[674px] flex-col items-start">
              <span className="text-base font-medium tracking-widest text-gray-500">
                New Arrival
              </span>
              <h1 className="my-4 whitespace-pre-line font-medium text-primary-500 xs:text-4xl lg:text-6xl">
                {"Discover Our\nNew Collection"}
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
      {/* <Content /> */}
      {/* <OurProduct /> */}
      <RoomInspiration />
    </>
  );
}
