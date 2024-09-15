import Image from "next/image";
import React from "react";
import banner from "../../../public/images/main-banner.png";

const Banner = () => {
  return (
    <div className="relative w-full h-[37.5rem] md:h-[50rem] lg:h-[62.5rem] max-h-screen">
      <Image 
        src={banner} 
        alt="banner" 
        fill 
        className="object-cover object-center"
        sizes="100vw"
      />
    </div>
  );
};

export default Banner;
