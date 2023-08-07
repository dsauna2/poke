"use client";
import React, { useState } from "react";
import NavItem from "./NavItem";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/poke_logo.svg";
import Hamburger from "@/components/ui/hamburger";

export default function Header({ dark }) {
  const [navVisibility, setNavVisibility] = useState(false);

  return (
    <header
      className={`md:flex items-center z-30 absolute index-x-0 justify-between w-full px-4 sm:px-10 md:px-20 py-5 text-white ${
        dark ? "bg-slate-400" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <a href="/">
          <Image width="80" alt="logo home navigation" src={logo} />
        </a>
        <button
          onFocus={() => setNavVisibility(true)}
          onBlur={() => setNavVisibility(false)}
          class="relative group block md:hidden"
        >
          <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0  slate-700 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
              <div class="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
              <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>

              <div class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
              </div>
            </div>
          </div>
        </button>
      </div>
      <nav>
        <ul
          className={`md:flex gap-4 md:items-center absolute md:static z-[-1] left-0 pl-4 pb-4 w-full transition-all ease-in duration-500 ${
            navVisibility ? "opacity-100" : "opacity-0"
          } md:opacity-100 ${dark ? " bg-slate-400" : ""}`}
        >
          <NavItem text="Home" link=""></NavItem>
          <NavItem text="Overview" link="overview"></NavItem>
          <NavItem text="Availability" link="availability"></NavItem>
          <NavItem text="Gallery" link="gallery"></NavItem>
          <Link
            href="/book"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:px-10 md:px-20 rounded-full"
          >
            Book Now
          </Link>{" "}
        </ul>
      </nav>
    </header>
  );
}
