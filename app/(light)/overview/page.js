import React from "react";
import Image from "next/image";
import living from "../../../public/living_main.jpg";
import { FiArrowDown } from "react-icons/fi";
import { ContactItem } from "@/app/ContactItem";
import { BsPeople } from "react-icons/bs";
import { MdOutlineBedroomParent } from "react-icons/md";
import { BiBath } from "react-icons/bi";
import Amenities from "./amenities";
import Rules from "./rules";

export default function Overview() {
  return (
    <>
      <div className="flex h-screen relative flex-col text-white">
        <figure className="z-10 absolute inset-0">
          <Image
            src={living}
            placeholder="blur"
            className="object-cover h-full"
            alt="Picture of the author"
          />
        </figure>
        <div className="flex flex-col items-center justify-center z-20 relative h-full pt-52">
          <div className="font-oswald text-6xl text-center leading-tight">
            6 BEDS 4 BATHS
            <br />
            10 MINS FROM DISNEY
          </div>

          <div className="text-6xl absolute bottom-0">
            <FiArrowDown />
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex space-x-4 my-12">
          <ContactItem icon={<MdOutlineBedroomParent />} info="6 bedrooms" />
          <ContactItem icon={<BiBath />} info="4 bathrooms" />
          <ContactItem icon={<BsPeople />} info="13 people" />
        </div>
        <div className=" ">
          <h1 className="font-oswald text-3xl mb-4">
            {`POKE'S DREAMY DISNEY GETAWAY`}
          </h1>
          <div className="text-base">
            Enjoy your stay at this gorgeous, themed freshly renovated home! 4
            miles from Walt Disney World.
            <ul>
              <li>
                <strong>WATER SLIDES</strong>
              </li>
              <li>
                <strong>
                  THEMED Frozen Room | Coco room | and Mario Garage
                </strong>
              </li>
              <li>
                <strong>{`Entertainer's Kitchen`}</strong>
              </li>
              <li>
                <strong>Private patio with HEATED POOL</strong>
              </li>
              <li>
                <strong>Host 13</strong>
              </li>
              <li>
                <strong>Fiber High Speed Wi-Fi</strong>
              </li>
            </ul>
            {`Situated just over 4 miles from the enchantment of Disney®, this
            themed home is the perfect retreat. Located in the coveted Windsor
            Hills community, you'll have access to incredible on-site resort
            amenities just steps away. Indulge in the magic as you step inside
            this professionally designed and furnished home. Every detail has
            been thoughtfully curated to ensure your utmost comfort and delight.
            After your daily adventures to a unwind in your private getaway.
            Whether you're enjoying the outdoor retreat, basking in the sun, or
            spending quality time with loved ones, Poke's Dreamy Disney Getaway
            offers the perfect setting for creating cherished memories. With
            ample space to comfortably accommodate up to 13 guests, this
            luxurious home welcomes you into the Disney spirit from the moment
            you arrive. Experience the enchantment at Poke's Dreamy Disney
            Getaway and embark on an unforgettable journey filled with joy,
            laughter, and magical moments!`}
          </div>
        </div>
        <div className="my-12">
          <Amenities />
          <Rules />
        </div>
      </div>
    </>
  );
}
