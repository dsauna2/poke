"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/app/components/reveal";
import { buttonCream } from "@/app/components/ui";

const ALL = "All";

export default function GalleryView({ photos, rooms: roomCounts }) {
  const [filter, setFilter] = useState(ALL);
  const [openId, setOpenId] = useState(null);
  const pushed = useRef(false);

  const rooms = [[ALL, photos.length], ...roomCounts];

  const visible = useMemo(
    () => (filter === ALL ? photos : photos.filter((p) => p.room === filter)),
    [photos, filter]
  );

  // The open photo lives in the address as #0012, so the browser's back
  // button closes the viewer and a photo can be shared.
  const open = useCallback((id) => {
    window.history.pushState({ viewer: true }, "", `#${id}`);
    pushed.current = true;
    setOpenId(id);
  }, []);

  const show = useCallback((id) => {
    window.history.replaceState(window.history.state, "", `#${id}`);
    setOpenId(id);
  }, []);

  const close = useCallback(() => {
    if (pushed.current) {
      pushed.current = false;
      window.history.back();
    } else {
      window.history.replaceState(null, "", window.location.pathname);
      setOpenId(null);
    }
  }, []);

  useEffect(() => {
    const sync = () => {
      const id = window.location.hash.slice(1);
      if (!id) {
        pushed.current = false;
        setOpenId(null);
      } else if (photos.some((p) => p.id === id)) {
        setOpenId(id);
      }
    };
    sync();
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, [photos]);

  // A shared link may point at a photo the current filter hides.
  const list = visible.some((p) => p.id === openId) ? visible : photos;
  const index = list.findIndex((p) => p.id === openId);

  return (
    <>
      <div className="mt-10 md:mt-14 flex flex-wrap gap-x-7 gap-y-3">
        {rooms.map(([room, count]) => (
          <button
            key={room}
            onClick={() => setFilter(room)}
            aria-pressed={filter === room}
            className="link-slide text-[16px] font-normal"
          >
            {room}
            <span className="ml-1.5 text-[14px] font-light opacity-60">
              {count}
            </span>
          </button>
        ))}
      </div>

      <div
        key={filter}
        className="mt-10 md:mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
      >
        {visible.map((p, i) => (
          <a
            key={p.id}
            href={`/photo/${p.id}`}
            onClick={(e) => {
              e.preventDefault();
              open(p.id);
            }}
            className="group block"
          >
            <Reveal
              media
              delay={(i % 3) * 90}
              className="relative aspect-[3/2] bg-[#efeadd]"
            >
              <Image
                src={`/im${p.id}.jpg`}
                alt={`${p.room}, photo ${Number(p.id)}`}
                fill
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(0.645,0.045,0.355,1)] group-hover:scale-[1.03]"
              />
            </Reveal>
          </a>
        ))}
      </div>

      {index >= 0 && (
        <Viewer
          list={list}
          index={index}
          onShow={show}
          onClose={close}
        />
      )}
    </>
  );
}

function Viewer({ list, index, onShow, onClose }) {
  const dialog = useRef(null);
  const strip = useRef(null);
  const touch = useRef(null);
  const photo = list[index];
  const prev = list[(index - 1 + list.length) % list.length];
  const next = list[(index + 1) % list.length];

  const go = useCallback(
    (to) => onShow(list[(to + list.length) % list.length].id),
    [list, onShow]
  );

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.querySelector("[data-close]")?.focus();
    return () => {
      document.body.style.overflow = overflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") go(index - 1);
      else if (e.key === "ArrowRight") go(index + 1);
      else if (e.key === "Home") go(0);
      else if (e.key === "End") go(list.length - 1);
      else if (e.key === "Tab") {
        const nodes = dialog.current.querySelectorAll("button, a[href]");
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index, list.length, onClose]);

  useEffect(() => {
    strip.current
      ?.querySelector("[aria-current='true']")
      ?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }, [photo.id]);

  const sizes = "(min-width: 1024px) 90vw, 100vw";

  return (
    <div
      ref={dialog}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="viewer-in fixed inset-0 z-50 flex flex-col bg-[#2b2b2b] text-[#faf7f0]"
    >
      <div className="flex items-center justify-between gap-4 px-4 sm:px-10 py-4">
        <p className="text-[16px] font-normal">
          {index + 1} / {list.length}
          <span className="ml-3 font-light opacity-70">{photo.room}</span>
        </p>
        <button data-close onClick={onClose} className={`${buttonCream} !py-2`}>
          Close
        </button>
      </div>

      <div
        className="relative min-h-0 flex-1"
        onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touch.current == null) return;
          const dx = e.changedTouches[0].clientX - touch.current;
          touch.current = null;
          if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
        }}
      >
        <div key={photo.id} className="photo-in absolute inset-0 px-4 md:px-24">
          <div className="relative h-full w-full">
            <Image
              src={`/im${photo.id}.jpg`}
              alt={`${photo.room}, photo ${Number(photo.id)}`}
              fill
              sizes={sizes}
              priority
              className="object-contain"
            />
          </div>
        </div>

        {[prev, next].map((p) => (
          <Image
            key={p.id}
            src={`/im${p.id}.jpg`}
            alt=""
            width={16}
            height={11}
            sizes={sizes}
            loading="eager"
            className="pointer-events-none absolute h-0 w-0 opacity-0"
          />
        ))}

        <button
          onClick={() => go(index - 1)}
          aria-label="Previous photo"
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-[#faf7f0] text-[#3e3e3e] transition duration-300 hover:bg-white active:scale-[0.96]"
        >
          <ChevronLeft size={22} strokeWidth={1.5} />
        </button>
        <button
          onClick={() => go(index + 1)}
          aria-label="Next photo"
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-[#faf7f0] text-[#3e3e3e] transition duration-300 hover:bg-white active:scale-[0.96]"
        >
          <ChevronRight size={22} strokeWidth={1.5} />
        </button>
      </div>

      <div
        ref={strip}
        className="flex gap-2 overflow-x-auto px-4 sm:px-10 py-4"
        style={{ scrollbarWidth: "none" }}
      >
        {list.map((p, i) => (
          <button
            key={p.id}
            onClick={() => go(i)}
            aria-label={`Show photo ${i + 1}`}
            aria-current={p.id === photo.id}
            className={`relative h-14 w-20 shrink-0 transition-opacity duration-300 ${
              p.id === photo.id ? "opacity-100" : "opacity-40 hover:opacity-80"
            }`}
          >
            <Image
              src={`/im${p.id}.jpg`}
              alt=""
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
