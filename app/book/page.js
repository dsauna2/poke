import React from "react";
import { bookWidget } from "../widgets";

export default function page() {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: bookWidget }}></div>
    </div>
  );
}
