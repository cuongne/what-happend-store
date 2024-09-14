import Image from "next/image";
import Link from "next/link";
import goIcon from "../../../public/images/go-icon.png";
import bestOne from "../../../public/images/best-image-01.png";
import bestTwo from "../../../public/images/best-image-02.png";
import bestThree from "../../../public/images/best-image-03.png";
import numberOne from "../../../public/images/producticon-01.png";
import numberTwo from "../../../public/images/producticon-02.png";
import numberThree from "../../../public/images/producticon-03.png";

import React from "react";

const CardProduct = ({ topUrl, bestUrl }) => (
  <div className="relative w-full max-w-[32.6875rem] h-[32.125rem] mt-[4.625rem] mx-auto">
    <Image src={bestUrl} alt="banner" layout="fill" objectFit="cover" quality={100} />
    <div className="absolute top-0 left-0 -translate-y-[50%]">
      <Image src={topUrl} alt="banner" width={92} height={92} quality={100} />
    </div>

    <div className="absolute z-10 bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] w-[90%] max-w-[23.0625rem] flex justify-between items-center border-[0.1875rem] border-[#020001] py-[0.4375rem] px-[0.9375rem] bg-white">
      <span className="text-[#222] inline-block w-[70%] font-bold text-sm sm:text-base">
        How to create mobile-optimized
      </span>
      <Link className="" href="/">
        <Image src={goIcon} alt="banner" width={45} height={45} className="sm:w-[4.0625rem] sm:h-[4.0625rem]" />
      </Link>
    </div>
  </div>
);

const BestProduct = () => {
  return (
    <div className="bg-[#FCD425] py-[3.125rem] sm:py-[6.25rem] lg:py-[9.375rem] px-[1.25rem] sm:px-[3.125rem] lg:px-[10.75rem] flex flex-col items-center">
      <span className="block text-[1.875rem] sm:text-[2.5rem] lg:text-[3.125rem] tracking-[0.1875rem] sm:tracking-[0.3125rem] text-[#f96400] mb-[1.5625rem] sm:mb-[2.8125rem] uppercase font-bold text-center">
        Best Product
      </span>
      <span className="block text-[1rem] sm:text-[1.1875rem] text-center max-w-[41.5625rem] text-[#f96400] mb-[1.875rem] sm:mb-0">
        How to create mobile-optimized videos in minutes. Not a designer, every
        team makes a lot of videos Can be trimmed. Take the first{" "}
      </span>
      <div className="flex flex-col lg:flex-row gap-[1.875rem] lg:gap-[0.9375rem] w-full">
        <CardProduct topUrl={numberOne} bestUrl={bestOne} />
        <CardProduct topUrl={numberTwo} bestUrl={bestTwo} />
        <CardProduct topUrl={numberThree} bestUrl={bestThree} />
      </div>
    </div>
  );
};

export default BestProduct;
