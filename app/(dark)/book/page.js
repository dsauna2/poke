import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BookingWidget from "./BookingWidget";
import encanto from "../../../public/encanto.webp";

export default function BookPage() {
  return (
    <div className="grid md:grid-cols-2 min-h-screen">
      {/* Left side - Booking Widget in Card */}
      <div className="py-36 px-4 md:px-8 flex items-start justify-center">
        <div className="w-full max-w-2xl sticky top-24">
          <Card className="shadow-xl">
            <CardHeader className="text-center border-b bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardTitle className="text-xl font-bold text-gray-800">
                Secure Payment · Fully Licensed · 24/7 Guest Support
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <BookingWidget />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right side - Image fills entire space */}
      <div className="relative min-h-screen">
        <Image
          src={encanto}
          alt="Encanto-themed bedroom at Poke's Dreamy Disney Getaway"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
