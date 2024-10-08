import { cn } from "@/utils/lib";
import Image from "next/image";
import img from "../../../public/images/collaboration.webp";
import img1 from "../../../public/images/object-01.png";
import img2 from "../../../public/images/object-02.png";
import img3 from "../../../public/images/object-03.png";
import img4 from "../../../public/images/object-04.png";
import img5 from "../../../public/images/object-05.png";
import img6 from "../../../public/images/object-06.png";
import img7 from "../../../public/images/object-07.png";
import Button from "@/components/Button";
import ImageFullFill from "@/components/ImageFullFill";
import Link from "next/link";

const BrandStory = () => {
  return (
    <div className="relative bg-[#0565bb] flex flex-col items-center pt-[9.3125rem] pb-[10.625rem] overflow-hidden">
      <span className="text-[#fcd32a] font-bold text-[2.8125rem] block text-center uppercase">
        Brand Story
      </span>
      <span
        className={cn(
          "text-[#fcd32a] text-center font-notoSansKR max-w-[45.25rem] block mt-10"
        )}
      >
        모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
        아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
        걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
      </span>
      <div className="relative z-10 flex items-center justify-center mt-[4.8125rem]">
        <div className="relative h-[26.125rem] w-[76.25rem]">
          <Image src={img} alt="banner" layout="fill" quality={100} />
          <div className="absolute flex flex-col pt-8 px-[2.8125rem] w-[50%] right-0 bottom-0 h-[90%]">
            <span className="font-extrabold lg:text-xl 2xl:text-[1.5625rem] text-[#222222] uppercase">
              What Happened’s Brand story
            </span>
            <span className="font-notoSansKR text-[#222222] lg:text-sm 2xl:text-base mt-[2.4375rem]">
              청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
              풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
              살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다. 내는
              이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은 끝까지
              칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고 고행을
              끝에 설산에서 황금시대를 이상을 운다.
            </span>
            <div className="2xl:mt-12 lg:mt-8">
              <Link href="/policy">
                <Button
                  className="w-full lg:w-auto text-sm lg:h-10  lg:text-sm px-4 py-2 lg:px-2 lg:py-2 2xl:h-[60px] 2xl:text-[23px]"
                  onClick={() => {}}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[22.5%] left-[8.5%]">
        <ImageFullFill src={img1} width={183} height={208} />
      </div>
      <div className="absolute top-[8%] right-[13.5%]">
        <ImageFullFill src={img2} width={147} height={134} />
      </div>
      <div className="absolute top-[11.3%] right-[9%]">
        <ImageFullFill src={img3} width={148} height={186} />
      </div>
      <div className="absolute top-[24%] right-0 translate-x-[18%]">
        <ImageFullFill src={img4} width={197} height={457} />
      </div>
      <div className="absolute top-[58%] -right-[0.7%]">
        <ImageFullFill src={img5} width={350} height={233} />
      </div>
      <div className="absolute top-[46%] left-0">
        <ImageFullFill src={img6} width={192} height={338} />
      </div>
      <div className="absolute top-[54%] left-[10%]">
        <ImageFullFill src={img7} width={180} height={255} />
      </div>
    </div>
  );
};

export default BrandStory;
