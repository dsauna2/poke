"use client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { use, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PhotoModal({ params }) {
  const router = useRouter();
  const { id } = use(params);
  const formattedId = id ? id.toString().padStart(4, "0") : "0000";
  const [imgSrc, setImgSrc] = useState(`/im${formattedId}.webp`);

  return (
    <Dialog defaultOpen onOpenChange={() => router.back()}>
      <DialogContent className="md:min-w-max">
        <DialogTitle className="sr-only">
          Photo {formattedId} of Poke's Dreamy Disney Getaway
        </DialogTitle>
        <Image
          src={imgSrc}
          width={850}
          height={600}
          alt={`Photo ${formattedId} of Poke's Dreamy Disney Getaway - themed vacation home near Disney`}
          onError={() => setImgSrc(`/im${formattedId}.jpg`)}
        />
      </DialogContent>
    </Dialog>
  );
}
