import React from "react";
import NavItem from "./NavItem";
import Image from "next/image";
import Link from "next/link";

export default function Header({ dark }) {
  return (
    <header
      className={`flex items-center z-30 absolute index-x-0 justify-between w-full px-20 py-5 text-white ${
        dark ? "bg-slate-400" : ""
      }`}
    >
      <a href="/">
        <Image
          width={80}
          height={88}
          alt="logo home navigation"
          src="/poke_logo.svg"
        />
      </a>
      <nav>
        <ul className="flex gap-4 items-center">
          <NavItem text="Home" link=""></NavItem>
          <NavItem text="Overview" link="overview"></NavItem>
          <NavItem text="Availability" link="availability"></NavItem>
          <NavItem text="Gallery" link="gallery"></NavItem>
          <Link
            href="/book"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full"
          >
            Book Now
          </Link>{" "}
        </ul>
      </nav>
    </header>
  );
}
