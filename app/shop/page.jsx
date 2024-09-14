"use client";
import ImageFullFill from "@/components/ImageFullFill";
import React, { useState } from "react";
import bannerProduct from "../../public/images/banner-list.png";
import ProductCard from "@/components/ProductCard";
import { cn } from "@/utils/lib";
import Pagination from "@/components/Pagination";

const categories = [
  "All",
  "Wall Deco",
  "Fashion",
  "Digital Acc",
  "Living",
  "Habit",
];


const SortSelect = ({ value, onChange }) => {
  return (
    <div className="relative w-full sm:w-auto">
      <select
        value={value}
        onChange={onChange}
        className="font-notoSansKR text-sm w-full sm:w-[125px] h-[37px] px-[11px] border border-[#111] appearance-none bg-white focus:outline-none focus:ring-0"
      >
        <option value="featured">인기순</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  );
};

const SearchInput = () => {
  return (
    <div className="relative w-full sm:w-auto">
      <input
        type="text"
        placeholder="결과 내 검색"
        className="font-notoSansKR text-sm w-full sm:w-[281px] h-[37px] px-[11px] border border-[#111] focus:outline-none focus:ring-0"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        className="absolute right-3 top-1/2 transform -translate-y-1/2"
      >
        <path fill="none" d="M0 0h20.999v21H0V0z" />
        <path
          fillRule="evenodd"
          fill="#111"
          d="m20.44 17.17-6.531-6.287a7.239 7.239 0 0 0 .939-3.57c0-4-3.254-6.713-7.254-6.713C3.595.6.341 3.313.341 7.313c0 3.999 3.254 7.253 7.253 7.253 1.257 0 3.196-.324 3.571-.939l6.133 6.134c.194.193.447.739.701.739.253 0 .506-.546.7-.739l1.741-1.344c-.21-.187-.108-.435-.108-.7 0-.265-.102-.514.108-.547zM1.41 7.313C1.41 3.699 3.981.76 7.594.76a6.56 6.56 0 0 1 6.554 6.553 6.532 6.532 0 0 1-.981 3.448l-.001.002c-.032.052-.065.104.494.156l-.01.002v.001c-.724.209-.876.413-1.038.606l-.123.142-.001.001v.001c-.167.187-.347.708-.535.533v.001h-.001l-.071.062-.071.062-.002.002h-.001a6.755 6.755 0 0 1-.603.451h-.002c-.04.027-.082.054.598.08l-.36.022h-.01c-.53.642-2.614.981-3.836.981-3.613 0-6.184-2.94-6.184-6.553zm18.138 10.608-1.344 1.345c.706.113-.297.113-.41 0l-6.024-6.023c.13-.091.48.327.376-.285l.115-.092v-.001l.026-.021.128-.112.001-.001.002-.002.001-.001c.028-.024.054-.05.081-.074.129-.119.255-.242.376-.37a.475.475 0 0 1 .224-.146v-.002h.01v-.001h.01c.21-.023.41.745.61.505.03-.02.05-.04.07-.07-.698-.25-.676.13-.655-.588v-.001l.002-.002c.133-.158.259-.322.378-.49l6.023 6.023a.288.288 0 0 1 .084.205c0 .077-.03.15-.084.204z"
        />
      </svg>
    </div>
  );
};

const GridButton = ({ type, active, onClick }) => {
  const gridItems = type === "2x2" ? 4 : 9;
  return (
    <button
      //   className={`p-2 rounded ${active ? "bg-blue-500" : "bg-gray-200"}`}
      onClick={onClick}
    >
      <div
        className={`grid ${
          type === "2x2" ? "grid-cols-2" : "grid-cols-3"
        } gap-[1px] w-4 h-4`}
      >
        {[...Array(gridItems)].map((_, i) => (
          <div
            key={i}
            className={`${active ? "bg-[#ea4913]" : "bg-[#a1a1a1]"}`}
          ></div>
        ))}
      </div>
    </button>
  );
};
const productCards = Array.from({ length: 20 }, (_, index) => (
  <ProductCard key={index} className="max-w-[415px]" width="415px" height="417px" />
));
const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [gridType, setGridType] = useState("2x2");
  const [page, setPage] = useState(1);

  const handleChangePage = (page) => {
    if (page === 0 || page > 3) return;
    setPage(page);
  };
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-[100px] flex flex-col items-center">
      <ImageFullFill src={bannerProduct} width={1930} height={640} className="w-full" />
      <div className="flex flex-col items-center mt-4 sm:mt-[39px] w-full">
        <div className="flex flex-wrap justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className={cn(
                "border-none font-extrabold text-base sm:text-lg uppercase w-1/2 sm:w-[161px] h-[60px] sm:h-[78px]",
                `${
                  activeCategory === category
                    ? "text-[#245fc5]"
                    : "text-[#111111]"
                }`
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="h-[2px] w-full bg-[#111]"></div>
        <span className="pl-4 sm:pl-[98px] py-4 sm:py-[23px] block w-full font-notoSansKR font-bold text-[#ea4913] text-sm sm:text-base">
          전체보기
        </span>
        <div className="h-[2px] w-full bg-[#a1a1a1]"></div>
        <div className="flex flex-col sm:flex-row w-full justify-between items-center mt-4 sm:mt-[35px] mb-6 sm:mb-[61px]">
          <span className="font-notoSansKR text-[#111111] font-bold text-sm sm:text-base mb-4 sm:mb-0">
            전체 상품 207
          </span>
          <div className="flex flex-wrap gap-2 sm:gap-[9px] justify-center sm:justify-start">
            <GridButton
              type="2x2"
              active={gridType === "2x2"}
              onClick={() => setGridType("2x2")}
            />
            <GridButton
              type="3x3"
              active={gridType === "3x3"}
              onClick={() => setGridType("3x3")}
            />
            <SortSelect />
            <SearchInput />
          </div>
        </div>
        <div className={`product-list grid gap-4 sm:gap-x-[19px] sm:gap-y-[67px] w-full ${
          gridType === "2x2" 
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        }`}>
          {productCards}
        </div>
        <Pagination
          totalPages={3}
          currentPage={page}
          onPageChange={handleChangePage}
        />
      </div>
    </div>
  );
};

export default Shop;
