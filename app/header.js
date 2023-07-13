import React from "react";
import NavItem from "./NavItem";

export default function Header() {
  return (
    <header className="flex z-30 absolute index-x-0 justify-between w-full px-20 py-10 text-white">
      <a href="/">Home logo</a>
      <nav>
        <ul className="flex">
          <NavItem text="Home" link="home"></NavItem>
          <NavItem text="Overview" link="overview"></NavItem>
          <NavItem text="Availability" link="availability"></NavItem>
          <NavItem text="Gallery" link="gallery"></NavItem>
          <NavItem text="Reviews" link="reviews"></NavItem>
          <NavItem text="Contact" link="contact"></NavItem>
          <NavItem text="Book" link="book"></NavItem>
        </ul>
      </nav>
    </header>
  );
}
