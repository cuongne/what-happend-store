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
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-center flex-col px-4 py-8 md:pt-[90px] md:pb-[147px] max-w-[455px] mx-auto">
      <span className="font-extrabold text-[#0565bb] text-3xl md:text-[45px] text-center">Join us</span>
      <div className="h-[2px] w-full bg-[#222222] mt-8 md:mt-[57px] mb-6 md:mb-[33px]"></div>
      
      {/* Input fields */}
      {[
        { name: "email", label: "아이디(이메일) *", type: "text", placeholder: "example@email.com" },
        { name: "password", label: "비밀번호 *", type: "password", placeholder: "영문, 숫자, 특수문자를 포함한 8~12자리" },
        { name: "passwordConfirm", label: "비밀번호 확인 *", type: "password", placeholder: "영문, 숫자, 특수문자를 포함한 8~12자리" },
        { name: "address", label: "주소", type: "text" },
        { name: "additionalAddress", label: "", type: "text", placeholder: "추가 주소" },
        { name: "phoneNumber", label: "연락처", type: "text" },
      ].map((field) => (
        <div key={field.name} className="flex flex-col gap-2 mb-4 w-full">
          {field.label && (
            <label className="text-sm font-notoSansKR font-bold" htmlFor={field.name}>
              {field.label}
            </label>
          )}
          <input
            {...register(field.name, { required: `${field.label || field.name}는 필수입니다` })}
            type={field.type}
            className="border border-[#a1a1a1] w-full px-[11px] h-[51px] font-notoSansKR focus:outline-none focus:ring-0"
            placeholder={field.placeholder}
          />
          {errors[field.name] && <span className="text-red-500">{errors[field.name].message}</span>}
        </div>
      ))}

      <div className="h-[2px] w-full bg-[#222222] mt-[26px] mb-[25px]"></div>

      {/* Checkboxes */}
      {[
        { name: "terms", label: <><span className="text-[#659bf5]">이용약관</span> 및 <span className="text-[#659bf5]">개인정보 처리 방침</span>에 동의합니다. (필수)</>, required: true },
        { name: "marketing", label: "광고 및 메일 수신에 동의합니다. (선택)", required: false },
      ].map((checkbox) => (
        <div key={checkbox.name} className="flex w-full items-center justify-end gap-2 mt-[25px]">
          <label className="flex items-center gap-2 cursor-pointer">
            <div className="relative">
              <input {...register(checkbox.name, { required: checkbox.required && "이용약관에 동의해야 합니다" })} type="checkbox" id={checkbox.name} className="sr-only peer" />
              <div className="w-[11px] h-[11px] bg-white border border-[#333]"></div>
              <div className="absolute inset-0 w-[7px] h-[7px] m-[2px] peer-checked:bg-[#333] transition-all duration-200 ease-in-out"></div>
            </div>
            <span className="text-sm font-notoSansKR font-semibold text-[#222222]">
              {checkbox.label}
            </span>
          </label>
        </div>
      ))}
      {errors.terms && <span className="text-red-500">{errors.terms.message}</span>}

      <Button
        type="submit"
        title="가입하기"
        className="w-full h-[60px] bg-[#0565bb] text-[#ffffff] border border-[#deded] rounded-none mt-[50px] text-base"
      />
    </form>
  );
};

export default Register;
