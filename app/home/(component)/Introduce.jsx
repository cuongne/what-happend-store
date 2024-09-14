import Image from "next/image";
import React from "react";
import introduction from "../../../public/images/introduction-bg.png";

const Introduce = () => {
  return (
    <div className="relative">
      <div className="absolute z-10 top-1/2 left-[5%] md:left-[9%] -translate-y-1/2 w-[90%] md:w-auto">
        <span className="block mb-1 md:mb-3.5 text-3xl md:text-5xl text-white tracking-wide md:tracking-[0.3125rem] font-extrabold uppercase">
          What Happened!
        </span>
        <span className="block text-base md:text-lg lg:text-xl max-w-full md:max-w-[41.6875rem] text-white">
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first step
          to your brand&apos;s success. How to create mobile-optimized videos in
          minutes.
        </span>
      </div>
      <div className="relative w-full h-[18.75rem] md:h-[36rem]">
        <Image
          src={introduction}
          alt="banner"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  );
};

export default Introduce;
