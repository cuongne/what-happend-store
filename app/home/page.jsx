"use client";
import Button from "@/components/Button";
import Banner from "./(component)/Banner";
import BestProduct from "./(component)/BestProduct";
import Introduce from "./(component)/Introduce";
import ProductList from "./(component)/ProductList";
import BrandStory from "./(component)/BrandStory";
import Issue from "./(component)/Issue";
import VideoCall from "./(component)/VideoCall";

const Home = () => {
  return (
    <div>
      <Banner />
      <Introduce />
      <BestProduct />
      <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20 lg:gap-28 py-12 sm:py-16 md:py-20 lg:py-[8.875rem]">
        <div className="product-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-x-[1.125rem] lg:gap-y-[4.5rem] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[10.9375rem]">
          <ProductList />
        </div>
        <Button onClick={() => {}} />
      </div>
      <BrandStory />
      <Issue />
      <VideoCall />
    </div>
  );
};

export default Home;
