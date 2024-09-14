"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import image6 from "../../public/images/list/item6.png";
import Button from "@/components/Button";

const DeleteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26.5" height="26.5">
    <path stroke="#A1A1A1" fill="none" d="M3.5 3.5h18.999v19H3.5v-19z" />
    <path
      stroke="#999"
      fill="none"
      d="M6.51 18.489 18.487 6.512 6.51 18.489zM18.489 18.489 6.51 6.51l11.979 11.979z"
    />
  </svg>
);

const CartQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex items-center gap-2 w-[16%]">
      <button
        className="w-8 h-8 border border-[#111]"
        onClick={decreaseQuantity}
      >
        -
      </button>
      <input
        type="text"
        className="w-12 h-8 text-center bg-transparent font-bold text-sm"
        value={quantity}
        readOnly
      />
      <button
        className="w-8 h-8 border border-[#111]"
        onClick={increaseQuantity}
      >
        +
      </button>
    </div>
  );
};

const ItemCart = ({ id }) => (
  <>
    <div className="flex w-full gap-[72px] py-[29px]">
      <label htmlFor={id} className="flex items-center gap-2 cursor-pointer">
        <div className="relative">
          <input type="checkbox" id={id} className="sr-only peer" />
          <div className="w-[24px] h-[24px] bg-white border border-[#a1a1a1] "></div>
          <div className="absolute inset-0 w-[20px] h-[20px] m-[2px] peer-checked:bg-[#a1a1a1] transition-all duration-200 ease-in-out"></div>
        </div>
      </label>
      <div className="flex justify-between w-[45%]">
        <div className="flex gap-6">
          <Image src={image6} alt="image1" width={120} height={120} />
          <div className="flex flex-col gap-2 justify-center">
            <span className="font-notoSansKR text-lg text-[#111]">
              [apparel] what happened beanie
            </span>
            <span className="font-notoSansKR text-sm text-[#111]">
              23,000원
            </span>
            <span className="font-notoSansKR text-sm text-[#ea4913]">
              [10%] 2,300원
            </span>
          </div>
        </div>
        <Button isButtonBase className="pl-40" title="" onClick={() => {}}>
          <DeleteIcon />
        </Button>
        <div className="h-[128px] w-[2px] bg-[#111]"></div>
      </div>
      <CartQuantity />
      <div className="flex flex-col gap-5 justify-center">
        <span className="font-semibold text-2xl">20,700 won</span>
        <Button
          isButtonBase
          title="buy now"
          className="font-medium uppercase bg-[#ea4913] text-[#fffefe] text-sm w-[140px] h-[42px]"
        ></Button>
      </div>
      <span className="pl-10 flex items-center font-notoSansKR-Regular text-lg">
        3,000 원
      </span>
    </div>
    <div className="h-[2px] w-full bg-[#222]"></div>
  </>
);

const Cart = () => {
  return (
    <div className="flex items-center justify-center flex-col pt-[90px] pb-[60px] px-[145px]">
      <span className="font-extrabold text-[#0565bb] text-[36px] uppercase">
        Shopping Bag
      </span>
      <div className="flex items-center justify-center mb-6 mt-16 text-sm">
        <span className="text-[#111111] font-medium uppercase">
          01 Shopping Bag
        </span>
        <span className="mx-2 text-[#9a9a9a]">&gt;</span>
        <span className="text-[#9a9a9a] uppercase">02 Order</span>
        <span className="mx-2 text-[#9a9a9a]">&gt;</span>
        <span className="text-[#9a9a9a] uppercase">Order Confirmed</span>
      </div>
      <div className="h-[2px] w-full bg-[#222] mt-8"></div>
      <div className="flex w-full py-[22px]">
        <div className="flex">
          <label className="flex items-center gap-2 cursor-pointer">
            <div className="relative">
              <input type="checkbox" id="terms" className="sr-only peer" />
              <div className="w-[24px] h-[24px] bg-white border border-[#a1a1a1] "></div>
              <div className="absolute inset-0 w-[20px] h-[20px] m-[2px] peer-checked:bg-[#a1a1a1] transition-all duration-200 ease-in-out"></div>
            </div>
          </label>
        </div>
        <span className="text-[#111] text-center font-semibold font-notoSansKR-Medium text-[18px] block w-1/2">
          상품 정보
        </span>
        <span className="text-[#111] text-center font-semibold font-notoSansKR-Medium text-[18px] block w-[30%]">
          수량
        </span>
        <span className="text-[#111] text-center font-semibold font-notoSansKR-Medium text-[18px] block w-[15%]">
          주문금액
        </span>
        <span className="text-[#111] text-center font-semibold font-notoSansKR-Medium text-[18px] block w-[15%]">
          배송비
        </span>
      </div>
      <div className="h-[2px] w-full bg-[#222]"></div>
      <ItemCart id="item1" />
      <ItemCart id="item2" />
      <div className="w-full">
        <Button
          isButtonBase
          className="mt-7 border border-[#9a9a9a] w-[140px] h-[44px]"
          onClick={() => {}}
          title=""
          style={{
            boxShadow:
              "0 0 0 0 #000, inset 0 0 0 0 #000, inset 0 0 0 1px #a1a1a1",
          }}
        >
          선택상품 삭제
        </Button>
      </div>
      <div className="h-[2px] w-full bg-[#9a9a9a] mt-24"></div>
      <div className="flex items-center justify-around w-full px-40 py-16">
        <span className="font-bold text-[30px]">51,400 won</span>
        <span className="text-[40px] text-[#a1a1a1]">+</span>
        <span className="font-bold text-[30px]">3,000 won</span>
        <span className="text-[40px] text-[#a1a1a1]">=</span>
        <span className="font-bold text-[30px]">54,400 won</span>
      </div>
      <div className="h-[2px] w-full bg-[#9a9a9a]"></div>
      <div className="mt-28 w-full flex items-center justify-center">
        <Button
          isButtonBase
          className=" text-[#fff] bg-[#0565bb] w-[323px] h-[60px]"
          onClick={() => {}}
          title=""
        >
         check out
        </Button>
      </div>
    </div>
  );
};

export default Cart;
