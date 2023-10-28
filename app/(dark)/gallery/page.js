import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  const arr = Array.from({ length: 53 }, (_, i) => i + 1);

  return (
    <>
      <div className="max-w-screen-lg mx-auto py-44 min-h-screen px-4">
        <div className="grid md:grid-cols-3 gap-3">
          {arr.map((item, i) => (
            <Link href={`/photo/${item}`} key={item}>
              <Image
                className="rounded-sm shadow-md"
                src={`/im00${item}.jpg`}
                width={1900}
                height={1267}
                key={i}
              />
            </Link>

            // <div key={item} className="bg-gray-100 rounded-lg shadow-lg">
            //   sdaf
            // </div>
          ))}
        </div>
      </div>
    </>
  );
}
