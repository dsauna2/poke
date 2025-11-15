"use client";
import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header({ dark }) {
  const [navVisibility, setNavVisibility] = useState(false);
  const currentRoute = usePathname();
  useEffect(() => {
    setNavVisibility(false);
  }, [currentRoute]);
  const toggleNav = () => {
    setNavVisibility(!navVisibility);
  };

  return (
    <header
      className={`md:flex items-center z-30 absolute index-x-0 justify-between w-full px-4 sm:px-10 md:px-20 py-5 text-white ${
        dark ? "bg-slate-400" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <a href="/">
          <Image
            width={80}
            height={80}
            alt="logo home navigation"
            src="/poke_logo.svg"
          />
        </a>
        <button onClick={toggleNav} className="relative group block md:hidden">
          <div
            className={`relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0  slate-700 ring-gray-300 hover:ring-8 ${
              navVisibility ? "ring-4" : ""
            } ring-opacity-30 duration-200 shadow-md`}
          >
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div
                className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                  navVisibility ? "translate-y-6" : ""
                } delay-100`}
              ></div>
              <div
                className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${
                  navVisibility ? "translate-y-6" : ""
                } delay-75`}
              ></div>
              <div
                className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                  navVisibility ? "translate-y-6" : ""
                }`}
              ></div>

              <div
                className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 ${
                  navVisibility ? "translate-x-0" : "-translate-x-10"
                } flex w-0 ${navVisibility ? "w-12" : ""}`}
              >
                <div
                  className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${
                    navVisibility ? "rotate-45" : ""
                  }`}
                ></div>
                <div
                  className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${
                    navVisibility ? "-rotate-45" : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </button>
      </div>
      <nav>
        <ul
          className={`md:flex gap-4 md:items-center absolute md:static z-[-1] left-0 pl-4 pb-4 w-full transition-all ease-in duration-500 ${
            navVisibility ? "block" : "hidden"
          } md:opacity-100 ${dark ? " bg-slate-400" : ""}`}
        >
          <NavItem text="Home" link=""></NavItem>
          <NavItem text="Overview" link="overview"></NavItem>
          <li className="my-6 md:my-0">
            <a
              href={`/availability`}
              className={`underline-offset-8 ${
                currentRoute === "/availability" ? " underline" : ""
              }`}
            >
              Availability{" "}
            </a>
          </li>{" "}
          <NavItem text="Gallery" link="gallery"></NavItem>
          <NavItem text="Location" link="location" />
          <a
            href="/book"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:px-10  rounded-full"
          >
            Book Now
          </a>{" "}
        </ul>
      </nav>
    </header>
  );
}
