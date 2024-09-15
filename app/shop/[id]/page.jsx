"use client";
import React, { useState } from "react";
import image1 from "../../../public/images/product/image1.png";
import imageBig1 from "../../../public/images/product/big1.png";
import image2 from "../../../public/images/product/image2.png";
import image6 from "../../../public/images/list/item6.png";
import image7 from "../../../public/images/list/item7.png";
import image8 from "../../../public/images/list/item8.png";
import image9 from "../../../public/images/list/item9.png";
import image10 from "../../../public/images/list/item10.png";
import Image from "next/image";
import Button from "@/components/Button";
import { cn } from "@/utils/lib";
import Pagination from "@/components/Pagination";
import Link from "next/link";
const images = [imageBig1, image10];

const Arrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="11">
    <path fill="none" d="M.999 0h33v10.999h-33V0z" />
    <path
      fill-rule="evenodd"
      fill="#111"
      d="M33.194 5.379c0 .155-.072.288-.034.377l-4.625 4.881a.424.424 0 0 1-.32.143.422.422 0 0 1-.319-.143.506.506 0 0 1 0-.682L32.9 5.379 27.896.804a.513.513 0 0 1 0-.687c.824.583.464.583.639 0L33.14 5.1c-.019.8.054.123.054.279z"
    />
    <path fill-rule="evenodd" fill="#111" d="M.807 5H32v1H.807V5z" />
  </svg>
);

const Heart = ({ filled }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="28">
    <path fill="none" d="M3.5 1.5h23.999v23.999H3.5V1.5z" />
    <path
      stroke={filled ? "#FA7B26" : "#8C8C8C"}
      fill={filled ? "#FA7B26" : "none"}
      d="M26.68 8.1a6.09 6.09 0 0 0-1.417-2.2 6.641 6.641 0 0 0-2.1-1.417 6.614 6.614 0 0 0-2.576-.521c-.911 0-1.781.23-2.447.634a6.243 6.243 0 0 0-2.226 1.669c-.165.19-.322.389-.47.594a8.674 8.674 0 0 0-.464-.594 7.078 7.078 0 0 0-2.101-1.669c-.029-.404-1.663-.634-2.577-.634A6.61 6.61 0 0 0 5.629 5.9c-.329.597-1.085 1.31-1.418 2.2-.333.691-.52 1.562-.52 2.473 0 .916.187 1.783.52 2.576.333.788 1.089 1.503 1.418 2.101.6.593 9.025 8.21 9.818 8.547.787-.337 9.218-7.954 9.816-8.547a6.679 6.679 0 0 0 1.417-2.101c.48-.793.521-1.66.521-2.576 0-.911-.041-1.782-.521-2.473z"
    />
  </svg>
);

const Star = ({ size = 26 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <path fill="none" d="M0 0h25.999v25.999H0V0z" />
    <path
      fill-rule="evenodd"
      fill="#F96400"
      d="m12.962.718 4.006 8.084 8.958 2.188-6.482 5.403 1.531 8.886-8.013-3.449-8.012 3.449 1.53-8.886L.2 10.99l8.756-2.188L12.962.718z"
    />
  </svg>
);
const StarInactive = ({ size = 26 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <path fill="none" d="M.999 0h26v25.999h-26V0z" />
    <path
      fill-rule="evenodd"
      fill="#E5E5E5"
      d="m13.786.718 4.005 8.084 8.96 2.188-6.483 5.403 1.528 8.886-8.01-3.449-8.012 3.449 1.53-8.886L.821 10.99l8.961-2.188L13.786.718z"
    />
  </svg>
);
const StarShape = ({ color = "#f96400" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
  >
    <path
      fill={color}
      d="M9 1.5l2.25 4.5 5.25 0.75-3.75 3.75 0.75 5.25L9 13.5l-4.5 2.25 0.75-5.25L1.5 6.75l5.25-0.75z"
    />
  </svg>
);

const ItemComment = ({ src }) => (
  <div className="flex flex-col mt-10">
    <div className="flex flex-col">
      <div className="h-[1px] w-full bg-[#ececec] mb-6"></div>
      <div className="flex justify-between items-center">
        <div className="flex h-[70px] gap-5 items-center">
          <Image src={src} alt="image1" width={70} height={70} />
          <div className="flex flex-col gap-3 ">
            <span className="text-[#8c8c8c] text-lg font-notoSansKR">
              [Size m, color blue]
            </span>
            <span className="text-[#111] text-lg font-notoSansKR">
              너무 예쁘게 잘 사용했습니다! 역시 왓헤픈!! 색이 너무 좋네요.
            </span>
          </div>
        </div>
        <div className="flex gap-10 items-center">
          <span className="text-lg text-[#111]">jin ji***</span>
          <span className="text-lg text-[#111]">2021.04.16</span>
          <div className="flex gap-1">
            <StarShape />
            <StarShape />
            <StarShape />
            <StarShape />
            <StarShape filled={false} color="#e5e5e5" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const listImage = [image6, imageBig1, image8, image9, image10];

const ProductCard = ({ className, src = img }) => {
  return (
    <Link
      href={`/shop/34`}
      className={cn("flex flex-col items-center w-full", className)}
    >
      <div className="relative w-full aspect-square">
        <Image
          src={src}
          alt="banner"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <span className="block w-full font-semibold text-base sm:text-lg text-[#222222] mt-3 px-2">
        [what happen] How to create
      </span>
      <div className="flex justify-between items-center w-full mt-4 sm:mt-6 px-2">
        <span className="text-sm sm:text-base text-[#222222]">2,500 won</span>
        <span className="text-sm sm:text-base text-[#666666]">🧡 236</span>
      </div>
    </Link>
  );
};

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [activeButton, setActiveButton] = useState("상품 상세정보");
  const [page, setPage] = useState(1);

  const productCards = listImage.map((image, index) => (
    <ProductCard className="w-full" key={index} src={image} />
  ));

  const handleChangePage = (page) => {
    if (page === 0 || page > 3) return;
    setPage(page);
  };
  return (
    <div className="flex flex-col px-4 sm:px-6 md:px-8 lg:px-[96px] py-[90px]">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-row lg:flex-col gap-[11px] w-full lg:w-[4%] mb-4 lg:mb-0">
          <Button
            className={cn(
              "border-[2px] transition-colors duration-150",
              selectedImage === 0 ? "border-[#0565bb]" : "border-transparent"
            )}
            isButtonBase
            onClick={() => setSelectedImage(0)}
            title=""
          >
            <Image src={image1} alt="image1" width={80} height={80} />
          </Button>
          <Button
            className={cn(
              "border-[2px] transition-colors duration-150",
              selectedImage === 1 ? "border-[#0565bb]" : "border-transparent"
            )}
            isButtonBase
            onClick={() => setSelectedImage(1)}
            title=""
          >
            <Image
              className=""
              src={image10}
              alt="image2"
              width={80}
              height={80}
            />
          </Button>
        </div>
        <div className="flex flex-col items-center w-full lg:w-[40%] mb-8 lg:mb-0">
          <div className="relative w-full h-[400px] sm:h-[400px] md:h-[500px] lg:w-[550px] lg:h-[550px] 2xl:w-[707px] 2xl:h-[707px]">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`image${index + 1}`}
                sizes="100vw"
                fill
                quality={100}
                className={cn(
                  "absolute object-cover transition-opacity duration-300",
                  selectedImage === index ? "opacity-100" : "opacity-0"
                )}
              />
            ))}
          </div>
          <div className="flex mt-5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={cn(
                  "w-[10px] h-[10px] rounded-full mx-[5px] mb-[234px]",
                  selectedImage === index ? "bg-[#111111]" : "bg-[#d4d4d4]"
                )}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-[38%] lg:mb-10 2xl:mb-0">
          <div className="h-[2px] w-full bg-[#111] mb-[30px]"></div>
          <div>
            <h1 className="text-2xl font-medium mb-[30px] flex justify-between">
              [Apparel] what happened beanie
              <Button
                className="text-xs font-normal"
                isButtonBase
                onClick={() => setIsLiked(!isLiked)}
                title=""
              >
                <Heart filled={isLiked} />
                <span>wish</span>
              </Button>
            </h1>
            <p className="text-2xl font-semibold mb-[29px]">16,000 won</p>
            <div className="h-[1px] w-full bg-[#f4f4f4] mb-8"></div>
            <div className="mb-4">
              <h3 className="text-left font-notoSansKR-Medium  font-bold pr-[59px] mb-4">
                상품 정보
              </h3>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="font-notoSansKR text-[#8c8c8c] text-sm w-28 block">
                    재질
                  </span>
                  <span className="font-notoSansKR text-[#111111] text-sm">
                    아크릴 100%
                  </span>
                </li>
                <li className="flex">
                  <span className="font-notoSansKR text-[#8c8c8c] text-sm w-28 block">
                    사이즈
                  </span>
                  <span className="font-notoSansKR text-[#111111] text-sm">
                    16.5cm x 18.5cm / 펼쳤을 때 26cm
                  </span>
                </li>
                <li className="flex">
                  <span className="font-notoSansKR text-[#8c8c8c] text-sm w-28 block self-start">
                    세척 방법
                  </span>
                  <span className="font-notoSansKR text-[#111111] text-sm">
                    30도 이하의 미지근한 물에서 중성세제로 단독손세탁을 권장
                    <br />
                    그늘진 곳에 뉘어서 건조
                    <br />
                    정전기 예방을 위해 섬유유연제로 헹궤주시면 더 좋음
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 p-[22px] mb-6 flex items-center justify-between">
              <p className="font-notoSansKR-Medium  text-[#111111] font-bold">
                지금 왓헤픈 회원가입시{" "}
                <span className="text-[#f96400]">3% 할인권</span> 증정
              </p>
              <Arrow />
            </div>
            <div className="h-[1px] w-full bg-[#f4f4f4] mb-[30px]"></div>
            <div className="mb-4">
              <h3 className="text-left font-notoSansKR-Medium font-bold pr-[59px] mb-4">
                상품 정보
              </h3>
              <ul className="space-y-4 space-r-4">
                <li className="flex">
                  <span className="font-notoSansKR text-[#8c8c8c] text-sm w-28 block">
                    배송비
                  </span>
                  <span className="font-notoSansKR text-[#111111] text-sm">
                    50,000원 이상 구매시 무료배송 (미만시 배송비 2500원 발생)
                    제주도
                    <br /> 를 포함한 도서/산간지역 추가 배송비 없음
                  </span>
                </li>
                <li className="flex">
                  <span className="font-notoSansKR text-[#8c8c8c] text-sm w-28 block">
                    배송예정
                  </span>
                  <span className="font-notoSansKR text-[#111111] text-sm">
                    <span className="text-[#0565bb]">04/20(화)</span>이내 도착
                    예정 97%
                  </span>
                </li>
              </ul>
            </div>
            <div className="h-[1px] w-full bg-[#ececec] mb-[25px]"></div>
            <div className="mb-7 relative">
              <select className="w-full py-4 px-5 border font-medium text-xs border-gray-300 focus:outline-none focus:ring-0 appearance-none">
                <option>COLOR: SIZE</option>
                <option>XS</option>
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="11"
                  className="fill-current"
                >
                  <path fill="none" d="M0 0h10.999v10.999H0V0z" />
                  <path
                    fillRule="evenodd"
                    fill="#D4D4D4"
                    d="M10.878 3.698 5.889 7.849c-.091.094-.223.751-.377.751-.156 0-.289-.657-.38-.751L.145 3.698C.47 3.616 0 3.509 0 3.4c0-.105.47-.214.145-.293a.552.552 0 0 1 .695 0l4.672 3.877 4.668-3.877a.557.557 0 0 1 .698 0c.842.164.842.428 0 .591z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex">
              <Link href="/cart" className="w-1/2">
                <Button
                  isButtonBase
                  title="add cart"
                  className="font-medium flex-1 bg-white text-[#0565bb] border w-full border-[#0565bb] h-[60px]"
                ></Button>
              </Link>
              <Link href="/cart" className="w-1/2">
                <Button
                  isButtonBase
                  title="buy now"
                  className="font-medium flex-1 bg-[#0565bb] text-white w-full h-[60px]"
                ></Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-8 lg:mt-0">
        <span className="uppercase font-notoSansKR-Medium text-xl lg:text-2xl mb-4 lg:mb-0">
          상품 qna
        </span>
        <div className="flex flex-wrap gap-4 lg:gap-7">
          {[
            "상품 상세정보",
            "상품 구매 안내",
            "재입고 문의",
            "배송문의",
            "기타",
          ].map((title, index) => (
            <React.Fragment key={title}>
              <div className="flex items-center gap-7">
                <Button
                  isButtonBase
                  title={title}
                  className={cn(
                    "text-lg font-notoSansKR",
                    activeButton === title
                      ? "text-[#111111] font-bold"
                      : "text-[#8c8c8c]"
                  )}
                  onClick={() => setActiveButton(title)}
                />
                {index < 4 && <span className="text-[#d4d4d4]">|</span>}
              </div>
            </React.Fragment>
          ))}
          <span className="uppercase font-notoSansKR-Bold font-bold text-lg underline ml-14">
            상품 Q&A
          </span>
        </div>
      </div>
      <div className="h-[2px] w-full bg-[#111] mt-5"></div>
      <span className="block font-notoSansKR-Medium font-semibold text-xl text-[#111] py-24 text-center">
        상품에 관해 여러가지 질문해보세요.
      </span>
      <div className="h-[1px] w-full bg-[#ececec] mb-36"></div>
      <span className="uppercase font-notoSansKR-Medium text-2xl">
        상품 결제 정보
      </span>
      <div className="h-[2px] w-full bg-[#111] mt-5 mb-7"></div>
      <ul className="space-y-4 mb-24">
        <li className="font-notoSansKR text-sm">
          고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도 있습니다.
        </li>
        <li className="font-notoSansKR text-sm">
          확인과정에서 도난 카드의 사용이나 타인 명의의 주문등 정상적인 주문이
          아니라고 판단될 경우 임의로 주문을 보류 또는 취소할 수 있습니다.
        </li>
        <li className="font-notoSansKR text-sm">
          무통장 입금은 상품 구매 대금은 PC뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은
          가까운 은행에서 직접 입금하시면 됩니다.
        </li>
        <li className="font-notoSansKR text-sm">
          주문시 입력한 입금자명과 실제입금자의 성명이 반드시 일치하여야 하며,
          7일 이내로 입금을 하셔야 하며 입금되지 않은 주문은 자동취소 됩니다.
        </li>
      </ul>
      <span className="uppercase font-notoSansKR-Medium text-2xl">
        교환 및 반품 정보
      </span>
      <div className="h-[2px] w-full bg-[#111] mt-5 mb-7"></div>
      <span className="font-notoSansKR-Regular text-[#111] font-semibold">
        교환 및 반품이 가능한 경우
      </span>
      <ul className="space-y-4 mb-14 mt-[30px]">
        <li className="font-notoSansKR text-sm">
          상품을 공급 받으신 날로부터 7일이내.
        </li>
        <li className="font-notoSansKR text-sm">
          공급받으신 상품 및 용역의 내용이 표시.광고 내용과.
        </li>
        <li className="font-notoSansKR text-sm">
          다르거나 다르게 이행된 경우에는 공급받은 날로부터 7일이내.
        </li>
      </ul>
      <span className="font-notoSansKR-Regular text-[#111] font-semibold">
        교환 및 반품이 불가능한 경우
      </span>

      <ul className="space-y-4 mb-36 mt-[30px]">
        <li className="font-notoSansKR text-sm">
          고객님의 책임 있는 사유로 상품등이 멸실 또는 훼손된 경우. 단, 상품의
          내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외
        </li>
        <li className="font-notoSansKR text-sm">
          고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한
          경우.
        </li>
        <li className="font-notoSansKR text-sm">
          시간의 경과에 의하여 재판매가 곤란할 정도로 상품등의 가치가 현저히
          감소한 경우
        </li>
        <li className="font-notoSansKR text-sm">
          복제가 가능한 상품등의 포장을 훼손한 경우
        </li>
        <li className="font-notoSansKR text-sm">
          (자세한 내용은 고객만족센터 1:1 E-MAIL상담을 이용해 주시기 바랍니다.)
        </li>
      </ul>
      <div className="flex items-center justify-between">
        <div className="flex gap-7 items-center">
          <span className="font-notoSansKR-Medium font-semibold text-2xl">
            review (16)
          </span>
          <div className="flex items-center gap-2">
            <Star />
            <Star />
            <Star />
            <Star />
            <StarInactive />
          </div>
        </div>
        <span className="font-notoSansKR-Medium text-lg text-[#111] font-semibold underline block pt-2">
          리뷰쓰기
        </span>
      </div>
      <div className="h-[2px] w-full bg-[#111] mt-5 mb-10"></div>
      <div className="overflow-x-hidden">
        <div className="flex gap-4 pb-4">
          {[
            image6,
            image7,
            image8,
            image9,
            image10,
            imageBig1,
            image6,
            imageBig1,
            image8,
          ].map((img, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={img}
                alt={`image${index + 1}`}
                width={213}
                height={213}
                className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[213px] md:h-[213px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <ItemComment src={image6} />
      <ItemComment src={image7} />
      <ItemComment src={image8} />
      <ItemComment src={image9} />
      <ItemComment src={image10} />
      <div className="h-[1px] w-full bg-[#ececec] mt-6 mb-16"></div>

      <Pagination
        totalPages={3}
        currentPage={page}
        onPageChange={handleChangePage}
      />
      <span className="block mb-5 font-notoSansKR-Regular text-[#111] font-semibold text-xl lg:text-2xl mt-[108px]">
        관련 상품 BEST
      </span>
      <div className="product-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-14">
        {productCards}
      </div>
      <Pagination
        totalPages={3}
        currentPage={page}
        onPageChange={handleChangePage}
      />
    </div>
  );
};

export default ProductPage;
