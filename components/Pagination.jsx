import { cn } from "@/utils/lib";
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="flex items-center justify-center space-x-4 mt-8">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className={cn("rotate-180 opacity-0", currentPage > 1 && "opacity-100")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24">
            <path fill="none" d="M.34.552h22.625V23.48H.34V.552z" />
            <path
              fill-rule="evenodd"
              fill="#D4D4D4"
              d="M18.149 11.927c0 .3-.15.555-.371.728l-9.457 9.477a.934.934 0 0 1-.678.275.918.918 0 0 1-.668-.275.92.92 0 0 1 0-1.326l8.843-8.879L6.975 3.45c-.376-.767-.376-.63 0-1.736a.96.96 0 0 1 1.346 0l9.455 9.482c.221.173.373.43.373.731z"
            />
          </svg>
        </button>
  
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={` text-[#111111] ${
              currentPage === number && "font-bold border-b-2 border-[#111111]"
            }`}
          >
            {number}
          </button>
        ))}
  
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className={cn("opacity-0", currentPage < totalPages && "opacity-100")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24">
            <path fill="none" d="M.34.552h22.625V23.48H.34V.552z" />
            <path
              fill-rule="evenodd"
              fill="#D4D4D4"
              d="M18.149 11.927c0 .3-.15.555-.371.728l-9.457 9.477a.934.934 0 0 1-.678.275.918.918 0 0 1-.668-.275.92.92 0 0 1 0-1.326l8.843-8.879L6.975 3.45c-.376-.767-.376-.63 0-1.736a.96.96 0 0 1 1.346 0l9.455 9.482c.221.173.373.43.373.731z"
            />
          </svg>
        </button>
      </div>
    );
  };

export default Pagination;
