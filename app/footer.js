import React from "react";
import { reviewsWidget } from "./widgets";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { ContactItem } from "./ContactItem";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-400 py-10">
      <div className="container mx-auto max-w-screen-lg space-y-10">
        <div dangerouslySetInnerHTML={{ __html: reviewsWidget }}></div>
        <div className="flex items-center justify-between space-x-8 text-base">
          <div className="flex space-x-4">
            <ContactItem
              icon={<AiOutlinePhone />}
              info={
                <a href="tel:7033035795" className="hover:underline">
                  703-303-5795
                </a>
              }
            />
            <ContactItem
              icon={<AiOutlineMail />}
              info={
                <a href="mailto:dsauna@gmail.com" className="hover:underline">
                  dsauna@gmail.com
                </a>
              }
            />
          </div>
          <p>&copy; {year} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
