import React from "react";

const amenityList = [
  {
    title: "Themed Mario Game Room",
    description:
      "Unleash your inner gamer in our themed Mario Game Room! Enjoy endless fun with a pool table, air hockey, Street Fighter arcade, and a Nintendo Switch with a collection of games. Get ready for epic battles and nostalgic adventures in this ultimate gaming paradise.",
  },
  {
    title: "Private Pool with Jacuzzi",
    description:
      "Dive into relaxation with our expansive private pool and jacuzzi. Lounge on the comfortable chairs and soak up the sun, or indulge in soothing bubbles in the jacuzzi. For an extra touch of luxury, the pool can be heated for an additional cost. Rest assured, we provide towels for your convenience, ensuring a refreshing and enjoyable poolside experience.",
  },
  {
    title: "State of the art Kitchen",
    description:
      " Enjoy our coffee bar with a fully stocked Keurig and complimentary pods. We provide all the essentials, from a full knife set to pots, pans, plates, and baking pans. Your culinary needs are covered in our well-equipped kitchen.",
  },
  {
    title: "Children' Themed Rooms",
    description:
      "Ignite your children's imagination in our captivating themed rooms. Let them journey to the vibrant world of Coco or the enchanting realm of Frozen. These specially designed rooms will transport your little ones to their favorite stories, creating an unforgettable and magical experience during their stay.",
  },
  {
    title: "Confortable Bedrooms",
    description:
      "Experience comfort and entertainment in our 4 adult bedrooms, each equipped with a smart TV ranging from 40 to 65 inches. Unwind and enjoy your favorite shows or movies from the comfort of your king-size bed. Rest assured, a restful and immersive experience awaits you in our thoughtfully designed bedrooms.",
  },
];

export default function Amenities() {
  return (
    <div>
      <h1 className="font-oswald text-3xl mb-4">AMENITIES</h1>
      <div className="grid md:grid-cols-3 gap-12">
        {amenityList.map((amenity) => (
          <Amenity
            key={amenity.title}
            title={amenity.title}
            description={amenity.description}
          />
        ))}
      </div>
    </div>
  );
}

function Amenity({ title, description }) {
  return (
    <div>
      <h1 className="font-bold">{title}</h1>
      <p className=" text-base">{description}</p>
    </div>
  );
}
