"use client";

import dynamic from "next/dynamic";

const CylinderText = dynamic(() => import("./cylinder-text"), {
  ssr: false
});

export default function DynamicCylinder() {
  return (
    <CylinderText className="col-span-4 self-center justify-self-center md:col-start-3 lg:col-start-5" />
  );
}
