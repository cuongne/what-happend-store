import Image from "next/image";
import React from "react";
import introduction from "../../../public/images/introduction-bg.png";

const Introduce = () => {
  return (
    <div className="relative">
      <div className="absolute z-10 top-1/2 left-[9%] -translate-y-[50%]">
        <span className="block mb-14 text-[50px] text-[#fff] tracking-[5px] font-extrabold uppercase">
          What Happened!
        </span>
        <span className="block text-[19px] max-w-[667px] text-[#fff]">
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first step
          to your brand&apos;s success. How to create mobile-optimized videos in
          minutes.
        </span>
      </div>
      <div className="relative w-full h-[576px]">
        <Image src={introduction} alt="banner" layout="fill" quality={100} />
      </div>
    </div>
  );
};

export default Introduce;
