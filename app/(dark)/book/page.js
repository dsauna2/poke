import Image from "next/image";
import BookingWidget from "./BookingWidget";
import encanto from "../../../public/encanto.webp";
import { pageTitle } from "@/app/components/ui";

export default function BookPage() {
  return (
    <div className="grid md:grid-cols-2 min-h-[80svh]">
      <div className="px-4 sm:px-10 md:px-16 pt-16 md:pt-28 pb-24 md:pb-40">
        <div className="w-full max-w-2xl md:ml-auto">
          <h1 className={pageTitle}>Book your stay</h1>
          <p className="mt-4 mb-12 text-[17px] leading-7">
            Secure payment, fully licensed, 24/7 guest support.
          </p>
          <BookingWidget />
        </div>
      </div>

      <div className="relative min-h-[420px]">
        <Image
          src={encanto}
          alt="Encanto-themed bedroom at Poke's Dreamy Disney Getaway"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
