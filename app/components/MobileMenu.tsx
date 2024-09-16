"use client";
import Link from "next/link";
import React, { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="content-center">
      <div
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="flex flex-col gap-[4.5px]  cursor-pointer"
      >
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm origin-left transition-all duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        />
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm transition-all duration-500 ${
            isOpen ? "rotate-90 opacity-0" : ""
          }`}
        />
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm origin-left transition-all duration-300 ${
            isOpen ? "-rotate-45" : ""
          }`}
        />
      </div>

      {isOpen && (
        <div className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white text-black z-30 flex flex-col items-center justify-center font-medium gap-8">
          <Link href="" className="">
            Home
          </Link>
          <Link href="" className="">
            Friends
          </Link>
          <Link href="" className="">
            Groups
          </Link>
          <Link href="" className="">
            Stories
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
