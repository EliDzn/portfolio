"use client";

import { useState } from "react";
import Preloader from "./preloader";

export default function PreloaderGate() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return <Preloader onComplete={() => setIsVisible(false)} />;
}
