import Button from "@/components/Button";
import ImageFullFill from "@/components/ImageFullFill";
import React from "react";
import hLetter from "../../../public/images/h-letter.png";
import wLetter from "../../../public/images/w-letter.png";
import heart from "../../../public/images/heart.png";
import girlDrink from "../../../public/images/girl-drink.png";
import computer from "../../../public/images/computer.png";
import hOrangeLetter from "../../../public/images/h-orange-letter.png";
import videoCall from "../../../public/images/video-call.png";
import electron from "../../../public/images/electron.png";
import error from "../../../public/images/error.png";
import click from "../../../public/images/click.png";

const VideoCall = () => {
  return (
    <div className="relative flex flex-col items-center pt-[148px] pb-[311px] overflow-hidden">
      <div className="absolute top-0 left-[11%]">
        <ImageFullFill src={hLetter} width={146} height={114} />
      </div>
      <div className="absolute top-[10%] right-[11%]">
        <ImageFullFill src={wLetter} width={158} height={158} />
      </div>
      <div className="absolute top-[17%] right-[17%]">
        <ImageFullFill src={heart} width={130} height={130} />
      </div>
      <div className="absolute top-[20%] left-0 -translate-x-[60%]">
        <ImageFullFill src={girlDrink} width={596} height={513} />
      </div>

      <span className="text-[#111111] font-extrabold text-[45px] block text-center uppercase">
        what happened
      </span>
      <span className="text-[#111111] text-center font-notoSansKR max-w-[450px] block mt-12">
        How to create mobile-optimized videos in minutes. Not a designer, every
        team makes a lot of videos Can be trimmed. Take the first
      </span>
      <div className="mt-[53px] mb-[72px]">
        <Button onClick={() => {}} />
      </div>
      <ImageFullFill zIndex={100} src={computer} width={1251} height={823} />
      <div className="absolute top-[77%] left-[11%]">
        <ImageFullFill src={hOrangeLetter} width={146} height={146} />
      </div>
      <div className="absolute z-10 top-[65%] right-0 translate-x-[33%]">
        <ImageFullFill src={videoCall} width={596} height={513} />
      </div>
      <div className="absolute top-[46%] right-0 translate-x-[50%]">
        <ImageFullFill src={electron} width={343} height={377} />
      </div>
      <div className="absolute top-[84%] left-[17.5%]">
        <ImageFullFill src={error} width={411} height={204} />
      </div>
      <div className="absolute top-[84%] left-[60%]">
        <ImageFullFill src={click} width={90} height={83} />
      </div>
    </div>
  );
};

export default VideoCall;
