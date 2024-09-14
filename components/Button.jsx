'use client'
import { cn } from "@/utils/lib";
import React from "react";

const Button = ({
  title = "See more",
  className = "",
  onClick = () => {},
  isButtonBase = false,
  children,
}) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };
  if (isButtonBase) {
    return (
      <button className={cn(className)} onClick={handleClick}>
        {title}
        {children}
      </button>
    );
  }
  return (
    <button
      className={cn(
        "w-[199px] h-[60px] border-[3px] border-[#020001] text-[23px] text-[#222222] font-extrabold uppercase rounded-[4px]",
        className
      )}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
