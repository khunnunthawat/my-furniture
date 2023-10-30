import Image from "next/image";

import { Button } from "@/components/ui";

import Banner from "./Banner";
import Content from "./Content";
import OurProduct from "./OurProduct";

export default function Home() {
  return (
    <>
      <Banner />
      <Content />
      <OurProduct />
      <div className="mb-14 flex h-[670px] w-full flex-row items-center bg-secondary">
        <div className="mx-auto max-w-md pr-8">
          <h1 className="mb-1.5 whitespace-pre-line text-4xl font-bold text-gray-500">
            {`50+ Beautiful rooms\ninspiration`}
          </h1>
          <p className="mb-6">
            {`Our designer already made a lot of beautiful\n prototipe of rooms that
            inspire you`}
          </p>
          <Button className="min-w-[176px]">Explore More</Button>
        </div>
      </div>
      <div className="mb-14">
        <div className="mb-4 flex flex-col items-center">
          <span className="mb-2 text-xl font-semibold text-gray-100">
            Share your setup with
          </span>
          <span className="text-4xl font-bold text-gray-500">
            #FuniroFurniture
          </span>
        </div>
        <div className=" inline-flex w-full columns-2 gap-4 overflow-hidden p-4 md:columns-3 lg:columns-4">
          <Image
            width={274}
            height={382}
            src="/images/setup-1.svg"
            alt={""}
            className="mb-4"
          />
          <Image
            width={451}
            height={312}
            src="/images/setup-2.svg"
            alt={""}
            className="mb-4"
          />
          <Image
            width={274}
            height={382}
            src="/images/setup-3.svg"
            alt={""}
            className="mb-4"
          />
          <Image
            width={344}
            height={242}
            src="/images/setup-4.svg"
            alt={""}
            className="mb-4"
          />
          <Image
            width={295}
            height={392}
            src="/images/setup-5.svg"
            alt={""}
            className="mb-4"
          />
          <Image
            width={290}
            height={348}
            src="/images/setup-6.svg"
            alt={""}
            className="mb-4"
          />
          <Image
            width={425}
            height={433}
            src="/images/setup-7.svg"
            alt={""}
            className="mb-4"
          />
          <Image
            width={178}
            height={242}
            src="/images/setup-8.svg"
            alt={""}
            className="mb-4"
          />
          <Image
            width={258}
            height={196}
            src="/images/setup-9.svg"
            alt={""}
            className="mb-4"
          />
        </div>
      </div>
    </>
  );
}

// .container-left {
//   width: 100%;
//   margin-right: auto;
//   margin-left: auto;
//   padding-right: 2rem/* 32px */;
//   padding-left: 2rem/* 32px */;
// }
// @media (min-width: 1400px) {
//   .container {
//     max-width: 1400px;
//   }
// }
