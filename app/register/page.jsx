"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    router.push("/login");
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-center flex-col pt-[90px] pb-[147px]">
      <span className="font-extrabold text-[#0565bb] text-[45px]">Join us</span>
      <div className="h-[2px] w-[455px] bg-[#222222] mt-[57px] mb-[33px]"></div>
      
      {/* Email input */}
      <div className="flex flex-col gap-2 mb-4">
        <label className="text-sm font-notoSansKR font-bold" htmlFor="email">
          아이디(이메일) *
        </label>
        <input
          {...register("email", { required: "이메일은 필수입니다", pattern: { value: /^\S+@\S+$/i, message: "올바른 이메일 형식이 아닙니다" } })}
          type="text"
          className="border border-[#a1a1a1] w-[455px] px-[11px] h-[51px] font-notoSansKR focus:outline-none focus:ring-0"
          placeholder="example@email.com"
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </div>

      {/* Password input */}
      <div className="flex flex-col gap-2 mb-4">
        <label className="text-sm font-notoSansKR font-bold" htmlFor="password">
          비밀번호 *
        </label>
        <input
          {...register("password", { required: "비밀번호는 필수입니다", minLength: { value: 8, message: "비밀번호는 최소 8자 이상이어야 합니다" } })}
          type="password"
          className="border border-[#a1a1a1] w-[455px] px-[11px] h-[51px] font-notoSansKR focus:outline-none focus:ring-0"
          placeholder="영문, 숫자, 특수문자를 포함한 8~12자리"
        />
        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label className="text-sm font-notoSansKR font-bold" htmlFor="password">
          비밀번호 확인 *
        </label>
        <input
          {...register("passwordConfirm", { required: "비밀번호 확인은 필수입니다", minLength: { value: 8, message: "비밀번호는 최소 8자 이상이어야 합니다" } })}
          type="password"
          className="border border-[#a1a1a1] w-[455px] px-[11px] h-[51px] font-notoSansKR focus:outline-none focus:ring-0"
          placeholder="영문, 숫자, 특수문자를 포함한 8~12자리"
        />
        {errors.passwordConfirm && <span className="text-red-500">{errors.passwordConfirm.message}</span>}
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label className="text-sm font-notoSansKR font-bold" htmlFor="address">
          주소
        </label>
        <input
          {...register("address", { required: "주소는 필수입니다" })}
          type="text"
          className="border border-[#a1a1a1] w-[455px] px-[11px] h-[51px] font-notoSansKR focus:outline-none focus:ring-0"
        />
        {errors.address && <span className="text-red-500">{errors.address.message}</span>}
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <input
          {...register("additionalAddress", { required: "추가 주소는 필수입니다" })}
          type="text"
          className="border border-[#a1a1a1] w-[455px] px-[11px] h-[51px] font-notoSansKR focus:outline-none focus:ring-0"
          placeholder="추가 주소"
        />
        {errors.additionalAddress && <span className="text-red-500">{errors.additionalAddress.message}</span>}
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label className="text-sm font-notoSansKR font-bold" htmlFor="address">
          연락처
        </label>
        <input
          {...register("phoneNumber", { required: "연락처는 필수입니다" })}
          type="text"
          className="border border-[#a1a1a1] w-[455px] px-[11px] h-[51px] font-notoSansKR focus:outline-none focus:ring-0"
        />
        {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber.message}</span>}
      </div>
      <div className="h-[2px] w-[455px] bg-[#222222] mt-[26px] mb-[25px]"></div>

      <div className="flex w-[454px] items-center justify-end gap-2 mt-[25px]">
        <label className="flex items-center gap-2 cursor-pointer">
          <div className="relative">
            <input {...register("terms", { required: "이용약관에 동의해야 합니다" })} type="checkbox" id="terms" className="sr-only peer" />
            <div className="w-[11px] h-[11px] bg-white border border-[#333] "></div>
            <div className="absolute inset-0 w-[7px] h-[7px] m-[2px] peer-checked:bg-[#333] transition-all duration-200 ease-in-out"></div>
          </div>
          <span className="text-sm font-notoSansKR font-semibold text-[#222222]">
            <span className="text-[#659bf5]">이용약관</span> 및{" "}
            <span className="text-[#659bf5]">개인정보 처리 방침</span>에
            동의합니다. (필수)
          </span>
        </label>
      </div>
      {errors.terms && <span className="text-red-500">{errors.terms.message}</span>}

      <div className="flex w-[454px] items-center justify-end gap-2 mt-[25px]">
        <label className="flex items-center gap-2 cursor-pointer">
          <div className="relative">
            <input type="checkbox" id="terms" className="sr-only peer" />
            <div className="w-[11px] h-[11px] bg-white border border-[#333] "></div>
            <div className="absolute inset-0 w-[7px] h-[7px] m-[2px] peer-checked:bg-[#333] transition-all duration-200 ease-in-out"></div>
          </div>
          <span className="text-sm font-notoSansKR font-semibold text-[#222222]">
            광고 및 메일 수신에 동의합니다. (선택)
          </span>
        </label>
      </div>
      <Button
        type="submit"
        title="가입하기"
        className="w-[454px] h-[60px] bg-[#0565bb] text-[#ffffff] border border-[#deded] rounded-none mt-[50px] text-base"
      />
    </form>
  );
};

export default Register;
