import { Home } from "@/views/Home";
import { cn } from "../../lib/utils";

// const priceFormatter = (price: number) =>
//   new Intl.NumberFormat("en-US").format(price);

export default function HomePage() {
  const priceProduct = 25000;
  const specialPrice = 10000;

  return (
    <div className="debug-screens">
      <Home />

      {/* <div className="inline-flex flex-row items-center">
        <div
          className={cn(
            priceProduct && "mr-2 text-xl font-semibold text-gray-500",
            specialPrice && "text-base text-gray-100 line-through",
          )}
        >
          {specialPrice && <>Rp. {specialPrice}</>}
          {priceProduct && <>Rp. {priceProduct}</>}
        </div>
      </div> */}

      {/* <div className="inline-flex flex-row items-center">
        {specialPrice && (
          <div className="mr-2 text-xl font-semibold text-gray-500">
            Rp. 25000
          </div>
        )}
        {priceProduct && (
          <div className="text-base text-gray-100 line-through">Rp. 45000</div>
        )}
      </div> */}
    </div>
  );
}
