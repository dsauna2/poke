"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { ContactItem } from "./ContactItem";

export default function Footer() {
  const [year, setYear] = useState(2024);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-400 py-10">
      <div className="container mx-auto max-w-screen-lg space-y-10">
        <div
          id="reviews"
          className="ownerrez-widget"
          data-propertyid="4cace0d1e8f44b069667db5417cb7758"
          data-widget-type="Reviews - Reviews"
          data-widgetid="e3af476690774f16a2847e96448a3f2f"
        ></div>
        <Script
          src="https://app.ownerrez.com/widget.js"
          strategy="afterInteractive"
        />
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
