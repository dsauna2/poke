import Image from "next/image";
import Header from "./header";
export default function Home() {
  const bookWidget = `
  <div class="ownerrez-widget" data-propertyId="4cace0d1e8f44b069667db5417cb7758" data-widget-type="Booking/Inquiry" data-widgetId="f629c188734b4d1fb0a6d1f039ad19d3"></div>
  <script src="https://secure.ownerreservations.com/widget.js"></script>
  `;
  return (
    <div>
      <Header />
      <div className="flex h-screen relative flex-col text-white">
        <figure className="z-10 absolute inset-0">
          <Image
            src="/hero.jpg"
            className="object-cover h-full"
            width={1500}
            height={1000}
            alt="Picture of the author"
          />
        </figure>
        <div className="flex flex-col items-center justify-center z-20 relative h-full pt-52">
          <div className="font-oswald text-6xl text-center leading-tight">
            A WHIMSICAL ESCAPE <br />
            NEAR THE MAGIC OF DISNEY
          </div>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full mt-2">
            Book Now
          </button>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-2 gap-3  my-12">
          <h1 className="font-oswald text-5xl">
            WELCOME TO POKE'S DREAMY DISNEY GETAWAY{" "}
          </h1>
          <p className=" text-base">
            Experience the ultimate retreat just 4 miles from Disney World!
            Indulge in thrilling water slides, themed rooms like Frozen, Coco,
            and Mario Game Room, and an entertainer's kitchen. Relax on the
            private patio with a heated pool. Accommodating up to 13 guests in 6
            bedrooms, Poke's Dreamy Disney Getaway is the perfect destination
            for magical memories. Stay connected with high-speed Wi-Fi. Unleash
            the enchantment and book your stay today!
          </p>
        </div>
        <div className="my-12" height="300px">
          <Image
            src="/DSC05344.jpg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
          />
        </div>
        <div className="grid grid-cols-2 gap-3  my-12">
          <p className="text-base">
            A luxurious haven for Disney enthusiasts. Located just over 4 miles
            from the enchantment of Disney®, this themed home offers the perfect
            retreat. Nestled within the coveted Windsor Hills community, you'll
            have access to incredible on-site resort amenities just steps away.
            Step inside this professionally designed and furnished space,
            curated for your comfort and delight. With <b>6 bedrooms</b>{" "}
            accommodating <b>up to 13 guests</b>, everyone will have their own
            space to relax. Immerse yourself in the Disney spirit and embark on
            a journey filled with joy, laughter, and enchanting memories.
            Experience the magic at Poke's Dreamy Disney Getaway!
          </p>
          <Image
            src="/DSC05248.jpg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
          />
        </div>
      </div>
    </div>
  );
}
