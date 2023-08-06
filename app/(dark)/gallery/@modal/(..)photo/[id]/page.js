"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import Image from "next/image";
import { useRouter } from "next/navigation";
export default function photoModal({ params }) {
  const router = useRouter();

  return (
    <Dialog defaultOpen onOpenChange={() => router.back()}>
      <DialogContent className=" min-w-max">
        <Image src={`/im00${params?.id}.jpg`} width={850} height={600} />
      </DialogContent>
    </Dialog>
  );
}
