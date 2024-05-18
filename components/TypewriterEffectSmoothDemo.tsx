"use client";

import { TypewriterEffect } from "../components/ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    { text: "to redefine connections beyond academia!" },
    { text: "a new era of collaboration, innovation, and endless possibilities." },
    { text: "to rewrite the rules!" },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffect words={words} />
    </div>
  );
}
