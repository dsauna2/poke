import React from "react";
import Reveal from "@/app/components/reveal";
import { frame, sectionTitle } from "@/app/components/ui";

const amenityList = [
  {
    title: "Themed Mario game room",
    description:
      "Bring your inner gamer to our themed Mario game room. Enjoy endless fun with a pool table, air hockey, Street Fighter arcade, and a Nintendo Switch with a collection of games. Get ready for epic battles and nostalgic adventures in this ultimate gaming paradise.",
  },
  {
    title: "Private pool with jacuzzi",
    description:
      "Dive into relaxation with our expansive private pool and jacuzzi. Lounge on the comfortable chairs and soak up the sun, or indulge in soothing bubbles in the jacuzzi. For an extra touch of luxury, the pool can be heated for an additional cost. Rest assured, we provide towels for your convenience, ensuring a refreshing and enjoyable poolside experience.",
  },
  {
    title: "State of the art kitchen",
    description:
      "Enjoy our coffee bar with a fully stocked Keurig and complimentary pods. We provide all the essentials, from a full knife set to pots, pans, plates, and baking pans. Your culinary needs are covered in our well-equipped kitchen.",
  },
  {
    title: "Children's themed rooms",
    description:
      "Ignite your children's imagination in our captivating themed rooms. Let them journey to the vibrant world of Coco or the enchanting realm of Frozen. These specially designed rooms will transport your little ones to their favorite stories, creating an unforgettable and magical experience during their stay.",
  },
  {
    title: "Comfortable bedrooms",
    description:
      "Experience comfort and entertainment in our 4 adult bedrooms, each equipped with a smart TV ranging from 40 to 65 inches. Unwind and enjoy your favorite shows or movies from the comfort of your king-size bed. Rest assured, a restful and immersive experience awaits you in our thoughtfully designed bedrooms.",
  },
];

export default function Amenities() {
  return (
    <section className={`${frame} mt-24 md:mt-44 grid md:grid-cols-12 gap-10 md:gap-8`}>
      <Reveal as="h2" className={`md:col-span-4 ${sectionTitle}`}>
        Amenities
      </Reveal>
      <ul className="md:col-span-8 flex flex-col gap-12">
        {amenityList.map(({ title, description }) => (
          <Reveal as="li" key={title}>
            <h3 className="text-[22px] font-normal leading-8">{title}</h3>
            <p className="mt-2 max-w-[62ch] text-[17px] leading-7">
              {description}
            </p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
