"use client";

import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui";
import { CompareIcon, FavoriteIcon, ShareIcon } from "@/components/icons";
import { Price } from "@/components/Product";

import { cn } from "@/lib/utils";

interface ProductItem {
  id: string;
  img: string;
  discount: number | null;
  newProducts: boolean;
  name: string;
  description: string;
  price: number;
  specialPrice: number | null;
}

const ProductItem = ({
  id,
  img,
  discount,
  newProducts,
  name,
  description,
  price,
  specialPrice,
}: ProductItem) => {
  return (
    <li className="overflow-hidden">
      <div className="group relative h-[301px] w-full min-w-[285px]">
        <Image
          width={285}
          height={301}
          src={img}
          alt={name}
          className="object-cover"
        />
        {(discount || newProducts) && (
          <div className="absolute right-0 top-0 pr-6 pt-6">
            <div
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full font-medium text-white",
                discount && "bg-danger-500",
                newProducts && "bg-success-500",
              )}
            >
              {discount && <span>-{discount}%</span>}
              {newProducts && <span>NEW</span>}
            </div>
          </div>
        )}
        <div className="absolute left-1/2 top-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center px-4 opacity-0 transition duration-300 group-hover:opacity-100">
          <Button variant="outline" className="mb-6 w-[200px]">
            Outline
          </Button>
          <div className="inline-flex space-x-5 text-white">
            <div className="inline-flex cursor-pointer items-center">
              <ShareIcon className="mr-1 fill-current" />
              Share
            </div>
            <div className="inline-flex cursor-pointer items-center">
              <CompareIcon className="mr-1 fill-current" />
              Compare
            </div>
            <div className="inline-flex cursor-pointer items-center">
              <FavoriteIcon className="mr-1" />
              Like
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 h-full w-full bg-gray-500 bg-opacity-70 opacity-0 transition duration-500 group-hover:opacity-100" />
      </div>
      <div className="h-[145px] bg-gray-white p-4">
        <div className="flex flex-col">
          <div className="mb-2 cursor-pointer text-2xl font-semibold text-gray-500 hover:text-primary-500">
            {name}
          </div>
          {description && (
            <div className="font-medium text-gray-300">{description}</div>
          )}
          <Price price={price} specialPrice={specialPrice} />
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
