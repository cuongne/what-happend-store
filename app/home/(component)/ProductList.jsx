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
  return <ProductCard src={randomImage} key={index} />;
});

const ProductList = () => {
  return <>{productCards}</>;
};

export default ProductList;