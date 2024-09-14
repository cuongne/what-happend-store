import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center flex-col pt-[90px] pb-[147px] px-[146px]">
      <span className="font-extrabold text-[#0565bb] text-[45px] uppercase">
        privacy & policy
      </span>
      <div className="h-[2px] w-full bg-[#222222] mt-[57px] mb-[33px]"></div>

      <div className="text-left w-full px-[29px] py-[49px]">
        <span>
          제1조(목적) 이 약관은 OO 회사(전자상거래 사업자)가 운영하는 OO 사이버
          몰(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라
          한다)를 이용함에 있어 사이버 몰과 이용자의 권리?의무 및 책임사항을
          규정함을 목적으로 합니다. ※「PC통신, 무선 등을 이용하는 전자상거래에
          대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다」 제2조(정의)
        </span>
        <h2 className="text-2xl font-bold mb-4">① 목적</h2>
        <p>
          이 약관은 OO 회사(전자상거래 사업자)가 운영하는 OO 사이버 몰(이하
          &ldquo;몰&rdquo;이라 한다)에서 제공하는 인터넷 관련 서비스(이하 &ldquo;서비스&rdquo;라 한다)를
          이용함에 있어 사이버 몰과 이용자의 권리·의무 및 책임사항을 규정함을
          목적으로 합니다.
        </p>
        <p className="mt-2">
          ※ PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지
          않는 한 이 약관을 준용합니다.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">② 정의</h2>
        <ol className="list-decimal list-inside">
          <li>
            "몰"이란 OO 회사가 재화 또는 용역(이하 "재화등"이라 함)을 이용자에게
            제공하기 위하여 컴퓨터등 정보통신설비를 이용하여 재화등을 거래할 수
            있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는
            사업자의 의미로도 사용합니다.
          </li>
          <li>
            "이용자"란 "몰"에 접속하여 이 약관에 따라 "몰"이 제공하는 서비스를
            받는 회원 및 비회원을 말합니다.
          </li>
          <li>
            '회원'이라 함은 "몰"에 개인정보를 제공하여 회원등록을 한 자로서,
            "몰"의 정보를 지속적으로 제공받으며, "몰"이 제공하는 서비스를
            계속적으로 이용할 수 있는 자를 말합니다.
          </li>
          <li>
            '비회원'이라 함은 회원에 가입하지 않고 "몰"이 제공하는 서비스를
            이용하는 자를 말합니다.
          </li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          ③ 약관 등의 명시와 설명 및 개정
        </h2>
        <ol className="list-decimal list-inside">
          <li>
            "몰"은 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지
            주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함),
            전화번호·모사전송번호·전자우편주소, 사업자등록번호,
            통신판매업신고번호, 개인정보관리책임자등을 이용자가 쉽게 알 수
            있도록 00 사이버몰의 초기 서비스화면(전면)에 게시합니다. 다만,
            약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수
            있습니다.
          </li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">④ "몰"의 의무</h2>
        <ol className="list-decimal list-inside">
          <li>
            "몰"은 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지
            않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 재화·용역을
            제공하는데 최선을 다하여야 합니다.
          </li>
          <li>
            &ldquo;몰&rdquo;은 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의
            개인정보(신용정보 포함)보호를 위한 보안 시스템을 갖추어야 합니다.
          </li>
          <li>
            "몰"이 상품이나 용역에 대하여 「표시·광고의공정화에관한법률」 제3조
            소정의 부당한 표시·광고행위를 함으로써 이용자가 손해를 입은 때에는
            이를 배상할 책임을 집니다.
          </li>
          <li>
            "몰"은 이용자가 원하지 않는 영리목적의 광고성 전자우편을 발송하지
            않습니다.
          </li>
        </ol>
      </div>
      <div className="h-[2px] w-full bg-[#222222] mt-[57px] mb-[33px]"></div>
    </div>
  );
};

export default page;
