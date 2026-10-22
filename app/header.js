"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import NavItem from "./NavItem";
import { frame, buttonCream } from "./components/ui";

export default function Header({ dark }) {
  const [open, setOpen] = useState(false);
  const currentRoute = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [currentRoute]);

  return (
    <header
      className={`z-30 w-full text-[#faf7f0] ${
        dark ? "relative bg-[#3e3e3e]" : "absolute"
      }`}
    >
      <div className={`${frame} flex items-center justify-between py-5`}>
        <Link href="/" aria-label="Poke's Dreamy Disney Getaway, home">
          <Image width={80} height={80} alt="" src="/poke_logo.svg" />
        </Link>

        <nav className="hidden md:block" aria-label="Main">
          <ul className="flex items-center gap-8">
            <NavItem text="Home" link="" />
            <NavItem text="Overview" link="overview" />
            <NavItem text="Availability" link="availability" />
            <NavItem text="Gallery" link="gallery" />
            <NavItem text="Location" link="location" />
            <li>
              <Link href="/book" className={`${buttonCream} !py-2.5`}>
                Book now
              </Link>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="md:hidden flex items-center gap-2 rounded-full bg-[#faf7f0] px-4 py-2 text-[15px] font-normal text-[#3e3e3e] transition duration-300 active:scale-[0.98]"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="md:hidden bg-[#3e3e3e] pb-6"
        >
          <ul className={`${frame} flex flex-col`}>
            <NavItem text="Home" link="" />
            <NavItem text="Overview" link="overview" />
            <NavItem text="Availability" link="availability" />
            <NavItem text="Gallery" link="gallery" />
            <NavItem text="Location" link="location" />
            <li className="pt-4">
              <Link href="/book" className={buttonCream}>
                Book now
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
