"use client";
import React, { useState } from "react";
import { cn } from "@/utils/lib";
import ImageFullFill from "@/components/ImageFullFill";
import introduce from "../../public/images/introduce.png";

const tabs = ["about", "contact us", "Campaign", "story", "Toon"];

const Introduce = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <>
      <div className="flex items-center justify-center flex-col py-[173px] bg-[url('/images/introduction-bg.png')] bg-cover">
        <span className="block mb-[59px] text-[50px] text-center text-[#fff] tracking-[5px] font-extrabold uppercase">
          What Happened!
        </span>
        <span className="block text-[19px] max-w-[667px] text-[#fff] text-center">
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first step
          to your brand&apos;s success. How to create mobile-optimized videos in
          minutes.
        </span>
      </div>

      <div className="flex items-center justify-center gap-[30px] bg-[#ea4913] py-[36px]">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={cn(
              "border-[3px] rounded-3xl border-[#111] font-extrabold text-lg uppercase w-[221px] h-[51px]",
              `${
                activeTab === tab
                  ? "text-[#245fc5] bg-[#fcd32a]"
                  : "text-[#111111] bg-white"
              }`
            )}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center flex-col">
        <span className="font-semibold text-[#0658c2] text-[72px] block w-full text-center uppercase mt-[73px]">
          what happnned to?
        </span>

        <div className="text-center  mt-[90px]">
          <p className="mb-6 text-[30px] font-semibold">
            WHAT HAPPENED의 이야기는 우리들의 살아가는 <br />
            &apos;WHAT HAPPENED TO?&apos; 라는 마음으로 <br />
            일상속의 작은 물건들이 ~할 수 있으며 있으며, 일상속의 작은 물건들이
            ~할 수 있으며 <br />
            &apos;무엇&apos;을 모티브로 하여 다양한 작업을 하고 있습니다. <br />
            일상속의 작은 물건들이 ~할 수 있으며 있으며, 중심으로 <br />
            당신의 삶을 더 행복하게 만드는, <br />
            친절하고 다정하며 공감이 되는 디자인을 하는 것이 왓해픈의 방향성
            입니다.
          </p>
        </div>
        <span className="text-[30px] block text-center text-[#111111] max-w-[977px] mt-[75px] font-notoSansKR">
          &quot;what happened to&quot; wants to make your everyday, &quot;oh
          happy day!&quot;<br/> we design daily items that can make you smile,<br/> 
          believing that small things can bring you big joy. Thank you, as
          always!
        </span>
        <span className="font-semibold text-[#0658c2] text-[72px] block w-full text-center uppercase mt-[234px] mb-[80px]">
          contact us
        </span>
        <p className="text-2xl mb-[10px]">
          서울특별시 강남구 도산대로 8길 17 2층
        </p>
        <p className="text-2xl mb-[10px]">
          2nd floor, 17, Dosan-daero 8-gil, Gangnam-gu, Seoul
        </p>
        <p className="text-2xl mb-[10px]">+82 2 000 0000</p>
        <p className="text-2xl mb-[10px]">wht30@gmail.com</p>

        <span className="font-semibold text-[#0658c2] text-[72px] block w-full text-center uppercase mt-[79px] mb-[80px]">
          partnership
        </span>
        <p className="text-2xl mb-[10px]">
          서울특별시 강남구 도산대로 8길 17 2층
        </p>
        <p className="text-2xl mb-[10px]">
          2nd floor, 17, Dosan-daero 8-gil, Gangnam-gu, Seoul
        </p>
        <p className="text-2xl mb-[10px]">+82 2 000 0000</p>
        <p className="text-2xl mb-[10px]">wht30@gmail.com</p>
      </div>
      <div className="flex w-full items-center justify-center mt-[152px] mb-[161px]">
        <ImageFullFill src={introduce} width={1640} height={850} />
      </div>
    </>
  );
};

export default Introduce;
