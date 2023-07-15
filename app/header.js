import React from "react";
import NavItem from "./NavItem";
import Image from "next/image";

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
        <ul className="flex">
          <NavItem text="Home" link=""></NavItem>
          <NavItem text="Overview" link="overview"></NavItem>
          <NavItem text="Availability" link="availability"></NavItem>
          <NavItem text="Gallery" link="gallery"></NavItem>
          <NavItem text="Book" link="book"></NavItem>
        </ul>
      </nav>
    </header>
  );
}
