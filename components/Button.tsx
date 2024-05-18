'use client'
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface ButtonProps {
  name: string;
}

export function Button({ name }: ButtonProps) {

  const overlayRef = useRef<HTMLDivElement>(null);

  const handleHover = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    gsap.to(overlayRef.current, {
      scale: 15,
      duration: 0.2,
      ease: "power2.inOut",
    });
  };

  const handleHoverOut = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    gsap.to(overlayRef.current, {
      scale: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  return (
    <button
      className="border-[#FAFAFA] hover:text-black border px-20 rounded-full md:w-1/2 py-12 overflow-hidden relative"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
    >
      <div
        ref={overlayRef}
        className="scale-0 absolute w-12 h-6 bg-[#FAFAFA] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      ></div>
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        {name}
      </p>
    </button>
  );
}
