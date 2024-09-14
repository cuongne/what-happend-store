import Image from "next/image";
import Link from "next/link";
import icon1 from "../public/images/snsicon-01.png";
import icon2 from "../public/images/snsicon-02.png";
import icon3 from "../public/images/snsicon-03.png";

const Footer = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-[101px] pt-8 lg:pt-[49px] pb-8 lg:pb-[113px]">
      <div className="h-[1px] w-full bg-[#f4f4f4] mt-8 lg:mt-[60px] mb-4 lg:mb-[22px]"></div>

      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col mb-8 lg:mb-0">
          <span className="font-bold text-sm mb-4 lg:mb-8">what happened</span>
          <span className="font-notoSansKR text-sm text-[#111111] block w-[260px] mt-1 cursor-pointer">
            [공지] 개인 정보 처리 방침 변경 사전 안내
          </span>
          <span className="font-notoSansKR text-sm text-[#111111] block w-[260px] mt-1 cursor-pointer">
            [공지] 29CM 강남 스토어 영업 종료
          </span>
          <span className="font-notoSansKR text-sm text-[#111111] block w-[260px] mt-1 cursor-pointer">
            [공지] iOS 10 이하 버전 지원 중단 안내
          </span>
          <span className="font-notoSansKR text-sm text-[#111111] block w-[260px] mt-1 cursor-pointer">
            [공지] 개인 정보 처리 방침 변경 사전 안내
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-[102px]">
          <div className="flex flex-col">
            <Link href="/introduce" className="font-bold text-sm mb-4">about us</Link>
            <Link href="/introduce" className="font-notoSansKR text-sm text-[#111111] block mt-1 cursor-pointer">
              회사 소개
            </Link>
            <Link href="/introduce" className="font-notoSansKR text-sm text-[#111111] block mt-1 cursor-pointer">
              인재 채용
            </Link>
            <Link href="/introduce" className="font-notoSansKR text-sm text-[#111111] block mt-1 cursor-pointer">
              상시 할인 혜택
            </Link>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm mb-4">my order</span>
            <span className="font-notoSansKR text-sm text-[#111111] block mt-1 cursor-pointer">
              내 주문
            </span>
            <span className="font-notoSansKR text-sm text-[#111111] block mt-1 cursor-pointer">
              주문 배송
            </span>
            <span className="font-notoSansKR text-sm text-[#111111] block mt-1 cursor-pointer">
              취소 / 교환 / 반품 내역
            </span>
            <span className="font-notoSansKR text-sm text-[#111111] block mt-1 cursor-pointer">
              상품 리뷰 내역
            </span>
            <span className="font-notoSansKR text-sm text-[#111111] block mt-1 cursor-pointer">
              증빙 서류 발급
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm mb-4">my account</span>
            <Link href="/my-account" className="font-notoSansKR text-sm text-[#111111] block mt-1 cursor-pointer">
              회원 정보 수정
            </Link>
            <Link href="/my-account" className="font-notoSansKR text-sm text-[#111111] block mt-1 cursor-pointer">
              회원 등급
            </Link>
            <Link href="/my-account" className="font-notoSansKR text-sm text-[#111111] block mt-1 cursor-pointer">
              마일리지 현황
            </Link>
            <Link href="/my-account" className="font-notoSansKR text-sm text-[#111111] block mt-1 cursor-pointer">
              쿠폰
            </Link>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm mb-4">help</span>
            <span className="font-notoSansKR text-sm text-[#111111] block mt-1 cursor-pointer">
              1 : 1 상담 내역
            </span>
            <span className="font-notoSansKR text-sm text-[#111111] block mt-1 cursor-pointer">
              상품 Q & A 내역
            </span>
            <span className="font-notoSansKR text-sm text-[#111111] block mt-1 cursor-pointer">
              공지 사항
            </span>
            <span className="font-notoSansKR text-sm text-[#111111] block mt-1 cursor-pointer">
              자주하는 질문
            </span>
            <span className="font-notoSansKR text-sm text-[#111111] block mt-1 cursor-pointer">
              고객의 소리
            </span>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-[#f4f4f4] mt-8 lg:mt-[60px] mb-4 lg:mb-[22px]"></div>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <span className="text-[#a9a9a9] font-notoSansKR text-xs sm:text-sm text-center lg:text-left mb-4 lg:mb-0 lg:max-w-[839px]">
          © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜
          사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
          서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스
          이용약관 l 개인정보처리방침
        </span>
        <div className="flex gap-6">
          <div className="relative w-[20px] h-[20px]">
            <Image src={icon1} alt="icon1" layout="fill" quality={100} />
          </div>
          <div className="relative w-[20px] h-[20px]">
            <Image src={icon2} alt="icon1" layout="fill" quality={100} />
          </div>
          <div className="relative w-[20px] h-[20px]">
            <Image src={icon3} alt="icon1" layout="fill" quality={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
