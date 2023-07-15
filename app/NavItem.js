"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function NavItem({ link, text }) {
  const currentRoute = usePathname();

  return (
    <li className=" pl-4">
      <Link
        href={`/${link}`}
        className={`underline-offset-8 ${
          currentRoute === "/" + link ? " underline" : ""
        }`}
      >
        {text}
      </Link>
    </li>
  );
}
