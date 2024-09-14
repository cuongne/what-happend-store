"use client";
import Button from "@/components/Button";
import ImageFullFill from "@/components/ImageFullFill";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Change this import
import { useForm } from "react-hook-form";
import facebook from "../../public/images/facebook-icon.png";
import google from "../../public/images/google-icon.png";
import kakao from "../../public/images/kakao-icon.png";
import naver from "../../public/images/naver-icon.png";

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    router.push("/");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center justify-center flex-col pt-[90px] pb-[147px] "
    >
      <span className="font-extrabold text-[#0565bb] text-[45px]">
        Welcome!
      </span>
      <div className="h-[2px] w-[455px] bg-[#222222] mt-[57px] mb-[33px]"></div>
      <div className="flex flex-col gap-1 mb-4">
        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}
          type="text"
          className="border border-[#a1a1a1] w-[455px] px-[11px] h-[51px] font-notoSansKR   focus:outline-none focus:ring-0"
          placeholder="아이디 (이메일)"
        />
        {errors.email && (
          <span className="text-red-400 text-sm block">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          type="password"
          className="border border-[#a1a1a1] w-[455px] px-[11px] h-[51px] font-notoSansKR focus:outline-none focus:ring-0"
          placeholder="비밀번호"
        />
        {errors.password && (
          <span className="text-red-400 text-sm block">{errors.password.message}</span>
        )}
      </div>
      <Button
        type="submit"
        title="로그인하기"
        className="w-[454px] h-[60px] bg-[#0565bb] text-[#ffffff] border border-[#deded] rounded-none mt-[23px] text-base"
      />
      <span className="font-notoSansKR font-bold block text-center text-[#404142] mt-[73px]">
        SNS 계정으로 로그인
      </span>
      <div className="flex justify-between w-[454px] mt-[42px]">
        <ImageFullFill zIndex={100} src={naver} width={66} height={66} />
        <ImageFullFill zIndex={100} src={kakao} width={66} height={66} />
        <ImageFullFill zIndex={100} src={facebook} width={66} height={66} />
        <ImageFullFill zIndex={100} src={google} width={66} height={66} />
      </div>
      <Link href="/register">
        <Button
          onClick={() => {}}
          title="계정이 없으신가요? 간편가입하기"
          className="w-[454px] h-[60px] font-notoSansKR  text-[#000000] border border-[#020001] rounded-none mt-[53px] text-base"
        />
      </Link>
      <div className="flex gap-[59px] mt-[32px]">
        <Link className="text-[#1a58f2] text-sm" href="/">
          아이디(이메일)찾기
        </Link>
        <Link className="text-[#1a58f2] text-sm" href="/">
          비밀번호 찾기
        </Link>
      </div>
    </form>
  );
};

export default Login;
