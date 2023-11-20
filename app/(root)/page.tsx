import React from "react";

import {
  Hero,
  Content,
  OurProduct,
  RoomInspiration,
  ShareSetup,
} from "@/components/section";

export default function HomePage() {
  return (
    <div className="debug-screens">
      <Hero />
      <Content />
      <OurProduct />
      <RoomInspiration />
      <ShareSetup />
    </div>
  );
}
