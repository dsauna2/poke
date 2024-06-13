import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  const arr = Array.from({ length: 68 }, (_, i) => i + 1);

  return (
    <>
      <div className="max-w-screen-lg mx-auto py-44 min-h-screen px-4">
        <div className="grid md:grid-cols-3 gap-3">
          {arr.map((item) => {
            const formattedItem = item.toString().padStart(4, "0");
            return (
              <Link href={`/photo/${formattedItem}`} key={formattedItem}>
                <Image
                  className="rounded-sm shadow-md"
                  src={`/im${formattedItem}.jpg`}
                  width={1900}
                  height={1267}
                  key={formattedItem}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
