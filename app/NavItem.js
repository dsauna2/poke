"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function NavItem({ link, text }) {
  const currentRoute = usePathname();
  const active = currentRoute === "/" + link;

  return (
    <li>
      <Link
        href={`/${link}`}
        aria-current={active ? "page" : undefined}
        className="link-slide inline-block my-3 md:my-0 text-[16px] font-normal"
      >
        {text}
      </Link>
    </li>
  );
}
