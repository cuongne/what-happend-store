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

const CardProduct = ({ topUrl,bestUrl }) => (
  <div className="relative w-[523px] h-[514px] mt-[74px]">
    <Image src={bestUrl} alt="banner" layout="fill" quality={100} />
    <div className="absolute top-0 left-0 -translate-y-[50%]">
      <Image src={topUrl} alt="banner" width={92} height={92} quality={100} />
    </div>

    <div className="absolute z-10 bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] w-[369px] flex justify-between items-center border-[3px] border-[#020001] py-[7px] pl-[27px] pr-[8px] bg-white">
      <span className="text-[#222] inline-block w-[188px] font-bold">
        How to create mobile-optimized
      </span>
      <Link className="" href="/">
        <Image src={goIcon} alt="banner" width={65} height={65} />
      </Link>
    </div>
  </div>
);

const BestProduct = () => {
  return (
    <div className="bg-[#FCD425] py-[150px] px-[172px] flex flex-col items-center">
      <span className="block text-[50px] tracking-[5px] text-[#f96400] mb-[45px] uppercase font-bold">
        Best Product
      </span>
      <span className="block text-[19px] text-center max-w-[665px] text-[#f96400]">
        How to create mobile-optimized videos in minutes. Not a designer, every
        team makes a lot of videos Can be trimmed. Take the first{" "}
      </span>
      <div className="flex">
        <CardProduct topUrl={numberOne} bestUrl={bestOne} />
        <CardProduct topUrl={numberTwo} bestUrl={bestTwo} />
        <CardProduct topUrl={numberThree} bestUrl={bestThree} />
      </div>
    </div>
  );
};

export default BestProduct;
