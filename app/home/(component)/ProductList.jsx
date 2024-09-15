import ProductCard from "@/components/ProductCard";
import React from "react";
import imageBig1 from "../../../public/images/product/big1.png";
import image6 from "../../../public/images/list/item6.png";
import image7 from "../../../public/images/list/item7.png";
import image8 from "../../../public/images/list/item8.png";
import image9 from "../../../public/images/list/item9.png";
import image10 from "../../../public/images/list/item10.png";

const images = [imageBig1, image6, image7, image8, image9, image10];

const productCards = Array.from({ length: 25 }, (_, index) => {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  return (
    <ProductCard
      src={randomImage}
      key={index}
      className="w-[300px] max-w-full mx-auto"
    />
  );
});

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-x-[1.125rem] lg:gap-y-[4.5rem] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[10.9375rem]">
      {productCards}
    </div>
  );
};

export default ProductList;
