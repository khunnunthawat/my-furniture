import { Button } from "../../components/ui";
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
