import React from "react";

import { cn, formatPrice } from "@/lib/utils";

interface PriceProps {
  price: number;
  specialPrice: number | null;
}

const Price = ({ price, specialPrice }: PriceProps) => {
  return (
    <div
      className={cn(
        "inline-flex flex-row items-baseline space-x-2 text-gray-500",
      )}
    >
      {specialPrice ? (
        <>
          <span className="text-xl font-semibold">
            {formatPrice(specialPrice)}
          </span>
          <span className="text-base text-gray-100 line-through">
            {formatPrice(price)}
          </span>
        </>
      ) : (
        <span className="text-xl font-semibold">{formatPrice(price)}</span>
      )}
    </div>
  );
};

export default Price;
