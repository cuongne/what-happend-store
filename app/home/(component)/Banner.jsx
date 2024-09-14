import Image from "next/image";
import React from "react";
import banner from "../../../public/images/main-banner.png";

const Banner = () => {
  return (
    <div className="relative w-full h-[1000px]">
      <Image src={banner} alt="banner" layout="fill" quality={100} />
    </div>
  );
};

export default Banner;
