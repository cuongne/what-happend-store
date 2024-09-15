import Image from "next/image";
import React from "react";
import image6 from "../../public/images/list/item6.png";
import image8 from "../../public/images/list/item8.png";
import Button from "@/components/Button";

const RequiredAsterisk = () => <span className="text-[#ea4913]">*</span>;
const Order = () => {
  return (
    <div className="flex justify-between pt-[88px] pb-[60px]  sm:px-8 md:px-16 xl:px-20 2xl:px-[144px]">
      <div className="w-full lg:w-1/2">
        <span className="font-extrabold text-[#0565bb] text-2xl sm:text-3xl md:text-[36px] uppercase">
          ORDER
        </span>
        <div className="flex items-center  mb-10 mt-16 text-sm">
          <span className="text-[#9a9a9a] font-medium uppercase">
            01 Shopping Bag
          </span>
          <span className="mx-2 text-[#9a9a9a]">&gt;</span>
          <span className="text-[#111111] uppercase">02 Order</span>
          <span className="mx-2 text-[#9a9a9a]">&gt;</span>
          <span className="text-[#9a9a9a] uppercase">Order Confirmed</span>
        </div>
        <div className="h-[2px] w-full bg-[#222]"></div>
        <span className="block my-7 font-notoSansKR-Medium font-semibold">
          주문자 정보
        </span>
        <div className="h-[2px] w-full bg-[#222]"></div>
        <span className="block font-notoSansKR-Medium font-bold text-sm mt-5">
          김형준 +8210 - 0000-0000
        </span>
        <span className="block font-notoSansKR-Medium font-bold text-sm mt-5 text-[#0565bb]">
          본인인증 완료
        </span>
        <div className="flex items-end justify-between mt-24">
          <span className="font-notoSansKR-Medium font-bold text-2xl">
            배송정보
          </span>
          <span className="font-notoSansKR-Medium font-bold text-xs ">
            * 표시는 필수입력 항목
          </span>
        </div>
        <div className="h-[2px] w-full bg-[#222] mt-5"></div>

        <form className="mt-6 space-y-4">
          <div className="flex sm:flex-row sm:items-center w-full">
            <label
              htmlFor="recipient"
              className="w-full sm:w-1/5 text-lg font-medium mb-2 sm:mb-0"
            >
              배송지 선택
            </label>
            <input
              type="text"
              id="recipient"
              className="border border-[#a1a1a1] p-2 h-11 w-full sm:w-[59.5%]"
            />
          </div>

          <div className="flex sm:flex-row sm:items-center w-full">
            <label
              htmlFor="name"
              className="w-full sm:w-1/5 text-lg font-medium mb-2 sm:mb-0"
            >
              수령인 <RequiredAsterisk />
            </label>
            <input
              type="text"
              id="name"
              className="border border-[#a1a1a1] p-2  w-full sm:w-[59.5%]"
              required
            />
          </div>

          <div className="flex sm:flex-row sm:items-center w-full">
            <label
              htmlFor="phone"
              className="w-full sm:w-1/5 text-lg font-medium mb-2 sm:mb-0"
            >
              배송지 <RequiredAsterisk />
            </label>
            <div className="flex  w-full sm:w-[30rem] space-x-7">
              <input
                type="tel"
                id="phone"
                className="border border-[#a1a1a1] p-2  w-[69.5%]"
                required
              />
              <button
                type="button"
                className="border border-[#a1a1a1] text-sm px-4 py-2 lg:text-xs xl:text-sm lg:w-[27.5%]"
              >
                우편번호 검색
              </button>
            </div>
          </div>

          <div className="flex">
            <span className="block w-1/5"></span>
            <input
              type="text"
              id="address"
              className="border border-[#a1a1a1] p-2 w-[80%]"
            />
          </div>

          <div className="flex sm:flex-row sm:items-center">
            <label className="w-full sm:w-1/5 text-lg font-medium mb-2 sm:mb-0">
              연락처1 <RequiredAsterisk />
            </label>
            <div className="flex flex-grow space-x-2 items-center">
              <input
                type="text"
                className="border border-[#a1a1a1] p-2 w-full sm:w-[100px]"
                required
              />
              <span>-</span>
              <input
                type="text"
                className="border border-[#a1a1a1] p-2 w-full sm:w-[100px]"
                required
              />
              <span>-</span>
              <input
                type="text"
                className="border border-[#a1a1a1] p-2 w-full sm:w-[100px]"
                required
              />
            </div>
          </div>

          <div className="flex sm:flex-row sm:items-center">
            <label className="w-full sm:w-1/5 text-lg font-medium mb-2 sm:mb-0">
              연락처2
            </label>
            <div className="flex flex-grow space-x-2 items-center">
              <input
                type="text"
                className="border border-[#a1a1a1] p-2 w-full sm:w-[100px]"
                required
              />
              <span>-</span>
              <input
                type="text"
                className="border border-[#a1a1a1] p-2 w-full sm:w-[100px]"
                required
              />
              <span>-</span>
              <input
                type="text"
                className="border border-[#a1a1a1] p-2 w-full sm:w-[100px]"
                required
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="block w-[20%] "></span>

            <div className="flex w-[80%] -translate-x-[6px] gap-2">
              <div className="relative">
                <input type="checkbox" id="checkbox" className="sr-only peer" />
                <div className="w-[20px] h-[20px] bg-white border border-[#a1a1a1] "></div>
                <div className="absolute inset-0 w-[16px] h-[16px] m-[2px] peer-checked:bg-[#a1a1a1] transition-all duration-200 ease-in-out"></div>
              </div>
              <label
                htmlFor="checkbox"
                className="flex items-center gap-2 cursor-pointer"
              >
                배송지를 기본 배송지로 저장
              </label>
            </div>
          </div>

          <div className="flex items-center">
            <span className="block w-[20%] "></span>
            <input
              type="text"
              id="message"
              placeholder="배송시 요청사항을 선택해 주세요."
              className="border border-[#a1a1a1] p-2 w-[80%]"
            />
          </div>

          <span className="!mt-24 block font-notoSansKR-Medium font-bold text-2xl">
            쿠폰 / 마일리지
          </span>

          <div className="h-[2px] w-full bg-[#222] mt-5"></div>
          <div className="flex flex-col sm:flex-row sm:items-center">
            <label
              htmlFor="a"
              className="w-full sm:w-1/5 text-lg font-medium mb-2 sm:mb-0"
            >
              쿠폰
            </label>
            <input
              type="text"
              id="a"
              placeholder="사용가능 쿠폰 1장 / 보유 2장"
              className="border border-[#a1a1a1] p-2 h-11 flex-grow"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center">
            <label
              htmlFor="b"
              className="w-full sm:w-1/5 text-lg font-medium mb-2 sm:mb-0"
            >
              마일리지
            </label>
            <input
              type="text"
              id="b"
              placeholder="0원"
              className="border border-[#a1a1a1] p-2 flex-grow"
            />
          </div>
        </form>
        <span className="mt-24 block font-notoSansKR-Medium font-bold text-2xl">
          결제방법
        </span>
        <div className="h-[2px] w-full bg-[#111] mt-5"></div>

        {/* Add the new payment method options */}
        <div className="mt-6 space-y-4">
          <div className="flex flex-wrap gap-2">
            {[
              "신용/체크카드",
              "페이카드",
              "실시간계좌이체",
              "휴대폰 결제",
              "무통장 결제",
              "네이버페이",
              "카카오페이",
              "페이코",
              "삼성페이",
              "토스",
            ].map((method) => (
              <button
                key={method}
                className="py-4 text-xs sm:text-sm border border-[#111] w-full sm:w-[154px] hover:bg-[#ea4913] hover:text-[#fff]"
              >
                {method}
              </button>
            ))}
          </div>
          <div className="relative">
            <select className="w-full py-3 pl-7 pr-10 border font-medium text-xs border-[#dedede] focus:outline-none focus:ring-0 appearance-none">
              <option>카드사를 선택해주세요.</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <div className="absolute inset-y-1 left-3 flex items-center rotate-180 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                className="transform rotate-180"
              >
                <path fill="none" d="M0 0h11.999v11.999H0V0z" />
                <path
                  fillRule="evenodd"
                  fill="#111"
                  d="M5.999 10 0 2h11.999l-6 8z"
                />
              </svg>
            </div>
          </div>
          <ul className="text-sm space-y-1 border border-[#111] py-5 px-4">
            <li>
              <span className="inline-block border border-[#111] p-[1px] mr-1">
                공지
              </span>
              우리페이 앱 종료에 따른 결제 안내
            </li>
            <li>
              <span className="inline-block border border-[#111] p-[1px] mr-1">
                공지
              </span>
              품절 취소시 환불 안내
            </li>
            <li>
              <span className="inline-block border border-[#111] p-[1px] mr-1">
                혜택
              </span>
              현대카드 2% 청구할인, 20 % m포인트 사용
            </li>
            <li>
              <span className="inline-block border border-[#111] p-[1px] mr-1">
                혜택
              </span>
              신용카드 무이자 할부 안내
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[40%] pt-[78px]">
        <span className="flex gap-3 items-center text-2xl mt-7 font-notoSansKR-Medium font-semibold">
          주문정보
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13">
            <path fill="none" d="M0 0h12.999v12.966H0V0z" />
            <path
              fill-rule="evenodd"
              fill="#222"
              d="M9.987 6.495a.487.487 0 0 1-.194.382l-4.959 4.968a.487.487 0 0 1-.355.144.481.481 0 0 1-.351-.144.484.484 0 0 1 0-.695l4.637-4.655-4.637-4.657a.488.488 0 0 1 0-.698.505.505 0 0 1 .706 0l4.957 4.971a.488.488 0 0 1 .196.384z"
            />
          </svg>
        </span>
        <div className="h-[2px] w-full bg-[#222] mt-6 mb-16"></div>
        <div className="flex items-center gap-28">
          <Image src={image6} alt="banner" width={180} height={180} />
          <div>
            <p className="font-bold uppercase font-notoSansKR-Medium">WHP</p>
            <p className="text-sm font-medium">
              [Apparel] what happened beanie
            </p>
            <p className="flex flex-col mt-3">
              <span className="font-notoSansKR-Medium">23,000원</span>
              <span className="text-[#ea4913] font-notoSansKR-Medium text-sm">
                [10%] 2,300원
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-28 mt-7">
          <Image src={image8} alt="banner" width={180} height={180} />
          <div>
            <p className="font-bold uppercase font-notoSansKR-Medium">WHP</p>
            <p className="text-sm font-medium">
              [Apparel] what happened beanie
            </p>
            <p className="flex flex-col mt-3">
              <span className="font-notoSansKR-Medium">23,000원</span>
              <span className="text-[#ea4913] font-notoSansKR-Medium text-sm">
                [10%] 2,300원
              </span>
            </p>
          </div>
        </div>
        <div className="h-[2px] w-full bg-[#222] mt-20"></div>

        {/* New order summary section */}
        <div className="mt-6 space-y-4">
          <OrderSummaryItem label="총 상품금액" value="51,400원" />
          <OrderSummaryItem label="쿠폰 사용" value="- 0 원" />
          <OrderSummaryItem label="마일리지 사용" value="- 0 원" />
          <OrderSummaryItem label="배송비" value="3,000 원" />
          <div className="!mt-14">
            <OrderSummaryItem
              label="총 결제금액"
              value="54,400 원"
              valueClassName="text-[#ea4913] font-bold text-xl"
            />
          </div>
        </div>
        <div className="h-[2px] w-full bg-[#222] mt-7 mb-8"></div>
        <div className="flex w-full items-center gap-4">
          <div className="relative">
            <input type="checkbox" id="checkbox" className="sr-only peer" />
            <div className="w-[20px] h-[20px] bg-white border border-[#a1a1a1] "></div>
            <div className="absolute inset-0 w-[16px] h-[16px] m-[2px] peer-checked:bg-[#a1a1a1] transition-all duration-200 ease-in-out"></div>
          </div>
          <label htmlFor="checkbox" className="font-notoSansKR-Medium text-lg">
            상품 및 구매 조건을 확인하였으며, 결제 대행 서비스에 동의합니다.
            (필수)
          </label>
        </div>
        <span className="block w-full text-center text-[#999] text-xs mt-7">
          개인정보 처리 방침 & 이용약관
        </span>
        <span className="block w-full text-center text-[#999] text-xs">
          결제대행 서비스 이용약관 (주)KG이니시스, (주)토스페이먼츠
        </span>
        <Button
          isButtonBase
          title=""
          className="text-[#fff] uppercase bg-[#0658c2] h-[77px] w-full text-3xl font-semibold mt-12"
        >
          check out
        </Button>
      </div>
    </div>
  );
};

// New component for order summary items
const OrderSummaryItem = ({ label, value, valueClassName = "" }) => (
  <div className="flex justify-between items-center">
    <span className="text-sm font-notoSansKR font-semibold">{label}</span>
    <span className={`text-sm font-notoSansKR font-semibold ${valueClassName}`}>
      {value}
    </span>
  </div>
);

export default Order;
