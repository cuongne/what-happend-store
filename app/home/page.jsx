"use client";
import Button from "@/components/Button";
import Banner from "./(component)/Banner";
import BestProduct from "./(component)/BestProduct";
import Introduce from "./(component)/Introduce";
import ProductList from "./(component)/ProductList";
import BrandStory from "./(component)/BrandStory";
import Issue from "./(component)/Issue";
import VideoCall from "./(component)/VideoCall";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Banner />
      <Introduce />
      <BestProduct />
      <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20 lg:gap-28 py-12 sm:py-16 md:py-20 lg:py-[8.875rem]">
          <ProductList />
        <Link href="/shop"><Button onClick={() => {}} /></Link>
      </div>
      <BrandStory />
      <Issue />
      <VideoCall />
    </div>
  );
};

export default Home;
