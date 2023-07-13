import React from "react";

export default function NavItem({ link, text }) {
  return (
    <li className=" pl-4">
      <a href={`/${link}`}>{text}</a>
    </li>
  );
}
