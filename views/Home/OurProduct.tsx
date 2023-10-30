import React from "react";

import { ProductItem } from "@/components/Product";
import { Button } from "@/components/ui";

import { mockProducts } from "@/data/products";

const OurProduct = () => {
  return (
    <div className="container mb-14">
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="mb-8 text-center text-[40px] font-bold text-gray-500">
          Our Products
        </h1>
        <ul className="grid list-none gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {mockProducts.map((product) => (
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
        <Button className="mt-8 min-w-[245px]" variant="secondary">
          Show More
        </Button>
      </div>
    </div>
  );
};

export default OurProduct;
