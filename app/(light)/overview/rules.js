import React from "react";
import { Clock, Ban, Check } from "lucide-react";
import Reveal from "@/app/components/reveal";
import { frame, sectionTitle } from "@/app/components/ui";

const rules = [
  { icon: Clock, text: "Check-in: 4pm" },
  { icon: Clock, text: "Check-out: 10am" },
  { icon: Ban, text: "No smoking" },
  { icon: Check, text: "Pets allowed" },
  { icon: Ban, text: "Parties not allowed" },
];

export default function Rules() {
  return (
    <section className="mt-24 md:mt-44 bg-[#efeadd] py-20 md:py-32">
      <div className={`${frame} grid md:grid-cols-12 gap-10 md:gap-8`}>
        <Reveal as="h2" className={`md:col-span-4 ${sectionTitle}`}>
          House rules
        </Reveal>
        <ul className="md:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-5 text-[17px]">
          {rules.map(({ icon: Icon, text }, i) => (
            <Reveal as="li" key={text} delay={(i % 2) * 90} className="flex items-center gap-4">
              <Icon className="h-6 w-6 shrink-0" strokeWidth={1.25} aria-hidden="true" />
              {text}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
