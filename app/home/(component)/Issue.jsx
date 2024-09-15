import Button from "@/components/Button";
import ImageFullFill from "@/components/ImageFullFill";
import arrow from "../../../public/images/arrow.png";
import cbrand from "../../../public/images/cbrand.png";
import coin from "../../../public/images/coin.png";
import dbrand from "../../../public/images/dbrand.png";
import dice from "../../../public/images/dice.png";
import dice2 from "../../../public/images/dice2.png";
import ebrand from "../../../public/images/ebrand.png";
import lol from "../../../public/images/lol.png";

const Issue = () => {
  return (
    <div className="relative bg-[#fccb05] flex flex-col items-center pt-[157px] pb-[142px] overflow-hidden">
      <span className="text-[#110e03] font-bold text-[45px] block text-center uppercase">
        Happened’s issue
      </span>
      <span className="text-[#110e03] text-center font-notoSansKR max-w-[682px] block mt-10">
        모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
        아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
        걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
      </span>
      <div className="mt-[55px] mb-[128px]">
        <Button />
      </div>
      <div className="absolute right-[4%] top-[8%]">
        <ImageFullFill src={dice} width={95} height={95} />
      </div>
      <div className="absolute right-[4%] top-[18%]">
        <ImageFullFill src={dice2} width={119} height={111} />
      </div>
      <div className="h-[480px] w-full flex border-[3px] border-[#111]">
        <div className="relative bg-[#ff5500] w-[387px] flex flex-col gap-[63px] items-center py-20">
          <span className="font-extrabold uppercase text-5xl block w-40 leading-10">
            whpn issue
          </span>
          <div className="cursor-pointer">
            <ImageFullFill
              src={arrow}
              width={148}
              height={148}
              className="w-full h-auto max-w-[148px]"
            />
          </div>
          <div className="absolute right-0 bottom-0 translate-y-1/2 translate-x-4 z-10">
            <ImageFullFill
              src={coin}
              width={167}
              height={169}
              className="w-full h-auto max-w-[167px]"
            />
          </div>
        </div>
        <div className="bg-[#110e03] w-[387px] flex flex-col items-center">
          <span className="font-extrabold text-[#ffffff] uppercase text-[30px] block  leading-[50px] text-center py-3">
            b brand
          </span>

          <div className="cursor-pointer">
            <ImageFullFill
              src={dbrand}
              width={387}
              height={402}
              className="w-full h-auto max-w-[387px]"
            />
          </div>
        </div>
        <div className="bg-[#110e03] w-[387px] flex flex-col items-center">
          <span className="font-extrabold text-[#ffffff] uppercase text-[30px] block  leading-[50px] text-center py-3">
            c brand
          </span>

          <div className="cursor-pointer translate-x-2">
            <ImageFullFill
              src={cbrand}
              width={398}
              height={402}
              className="w-full h-auto max-w-[398px]"
            />
          </div>
        </div>
        <div className="relative bg-[#110e03] w-[387px] flex flex-col items-center">
          <span className="font-extrabold bg-[#ff5500] text-[#ffffff] uppercase text-[30px] block w-full leading-[50px] text-center py-3 border-l-[3px] border-[#111]">
            d brand
          </span>

          <div className="cursor-pointer">
            <ImageFullFill
              src={dbrand}
              width={387}
              height={402}
              className="w-full h-auto max-w-[387px]"
            />
          </div>
          <div className="absolute right-0 bottom-0 translate-y-[60%] translate-x-6 z-10">
            <ImageFullFill
              src={lol}
              width={133}
              height={100}
              className="w-full h-auto max-w-[133px]"
            />
          </div>
        </div>
        <div className="bg-[#110e03] w-[387px] flex flex-col items-center">
          <span className="font-extrabold  text-[#ffffff] uppercase text-[30px] block  leading-[50px] text-center py-3">
            e brand
          </span>

          <div className="cursor-pointer">
            <ImageFullFill
              src={ebrand}
              width={387}
              height={402}
              className="w-full h-auto max-w-[387px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Issue;
