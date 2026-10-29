"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import poster from "../../public/coco-poster.jpg";

// The poster is the video's first frame, so it paints instantly and the video
// fades in over it without a visible jump. The clip plays once and holds its
// last frame. It is skipped entirely for reduced motion and data saver, and
// autoplay being blocked (e.g. Low Power Mode) just leaves the poster.
export default function HeroVideo({ alt }) {
  const ref = useRef(null);
  const [src, setSrc] = useState(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const saveData = navigator.connection?.saveData;
    if (saveData || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    // Phones get a tall crop; retina/large screens need more than 1080 pixels.
    setSrc(
      window.matchMedia("(max-width: 768px)").matches
        ? "/coco-mobile.mp4"
        : window.innerWidth * window.devicePixelRatio > 2000
          ? "/coco-1440.mp4"
          : "/coco-1080.mp4",
    );
  }, []);

  useEffect(() => {
    if (src) ref.current?.play().catch(() => {});
  }, [src]);

  return (
    <figure className="absolute inset-0 hero-settle">
      <Image
        src={poster}
        placeholder="blur"
        priority
        fill
        sizes="100vw"
        className="object-cover"
        alt={alt}
      />
      {src && (
        <video
          ref={ref}
          src={src}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          onPlaying={() => setPlaying(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            playing ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </figure>
  );
}
