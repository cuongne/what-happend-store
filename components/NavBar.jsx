"use client";
import React, { useState } from "react";
import WrapperMaxWidth from "./WrapperMaxWidth";
import Image from "next/image";
import logo from "../public/images/logo.png";
import Link from "next/link";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#111]">
      <WrapperMaxWidth className="px-4 sm:px-6 lg:px-[97px] flex justify-between items-center py-4 lg:py-[34px]">
        <Link href="/" className="text-sm text-[#fff] uppercase">
          <Image
            src={logo}
            alt="Logo"
            width={226}
            height={26}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>

        {/* Desktop menu */}
        <div className="hidden lg:flex gap-[76px] pr-[23px] items-end">
          <Link href="/introduce" className="text-sm text-[#fff] uppercase">
            Introduction
          </Link>
          <Link href="/" className="text-sm text-[#fff] uppercase">
            solution
          </Link>
          <Link href="/" className="text-sm text-[#fff] uppercase">
            Rate plan
          </Link>
          <span className="text-[#fff] text-2xl">|</span>
          <Link href="/login" className="text-sm text-[#fff] uppercase">
            login
          </Link>
          <Link href="/" className="text-sm text-[#fff] uppercase">
            Apply for free use
          </Link>
        </div>
      </WrapperMaxWidth>
    </header>
  );
};

export default NavBar;
