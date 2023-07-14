import React from "react";
import { availabilityWidget } from "../widgets";

export default function page() {
  return (
    <div className="max-w-screen-lg mx-auto py-32 min-h-screen">
      <div dangerouslySetInnerHTML={{ __html: availabilityWidget }}></div>
    </div>
  );
}
