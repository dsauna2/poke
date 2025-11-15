"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import Image from "next/image";
import { useRouter } from "next/navigation";
export default function PhotoModal({ params }) {
  const router = useRouter();
  const formattedId = params.id
    ? params.id.toString().padStart(4, "0")
    : "0000";

  return (
    <Dialog defaultOpen onOpenChange={() => router.back()}>
      <DialogContent className="md:min-w-max">
        <Image
          src={`/im${formattedId}.jpg`}
          width={850}
          height={600}
          alt={`Photo ${formattedId} of Poke's Dreamy Disney Getaway - themed vacation home near Disney`}
        />
      </DialogContent>
    </Dialog>
  );
}
