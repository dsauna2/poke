import React from "react";
import { reviewsWidget } from "../widgets";

export default function page() {
  return (
    <div className="max-w-screen-lg mx-auto py-32 min-h-screen">
      <div dangerouslySetInnerHTML={{ __html: reviewsWidget }}></div>
    </div>
  );
}
