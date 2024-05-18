import React from "react";

export function Marquee() {
  return (
    <>
      <div id="marquee" className="flex items-center translate-x-0 pr-2">
        <p className="uppercase pr-2">
          WHO WE ARE
        </p>
        <span className="w-2 h-2 inline-block rounded-full bg-[#FAFAFA]"></span>
      </div>
    </>
  );
}
