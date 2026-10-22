"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import { frame, sectionTitle } from "./components/ui";

export default function Footer() {
  const [year, setYear] = useState(2024);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <section className="bg-[#efeadd] py-20 md:py-32">
        <div className={frame}>
          <h2 className={`${sectionTitle} mb-10`}>Guest reviews</h2>
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
        </div>
      </section>
      <footer className="bg-[#3e3e3e] text-[#faf7f0] py-16 md:py-24">
        <div className={frame}>
          <p className="text-[clamp(2.5rem,8vw,7rem)] font-light leading-[1] tracking-tight">
            {`Poke's Dreamy Disney Getaway`}
          </p>
          <div className="mt-14 md:mt-20 flex flex-wrap items-center justify-between gap-x-10 gap-y-4 text-[16px]">
            <div className="flex flex-wrap gap-x-10 gap-y-3">
              <a href="tel:7033035795" className="link-slide">
                703-303-5795
              </a>
              <a href="mailto:dsauna@gmail.com" className="link-slide">
                dsauna@gmail.com
              </a>
            </div>
            <p>&copy; {year} All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
