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
      <div className="flex flex-col items-center gap-28 py-[142px]">
        <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-[18px] gap-y-[72px] px-[175px]">
          <ProductList />
        </div>
        <Button onClick={() =>{}}/>
      </div>
      <BrandStory />
      <Issue />
      <VideoCall />
    </div>
  );
};

export default Home;
