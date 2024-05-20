import Image from "next/image";
import React from "react";

interface JoinProps {
  title: string;
  content: string;
  icon: string;
}

export function JoinCard({ title, content, icon }: JoinProps) {
  return (
    <div
      id="card"
      className= "w-full h-[29%] md:w-[30%] md:h-[85%] rounded-[3vw] bg-[#eff0f4d7] backdrop-blur-sm"
    >
      <div
        id="image"
        className="relative w-72 h-72 translate-x-1/3 -translate-y-[40%] lg:translate-x-1/3 lg:-translate-y-1/4 scale-50 lg:scale-100"
      >
        <Image
          className="img"
          src={icon}
          alt={title}
          style={{ objectFit: "cover" }}
          fill
        />
      </div>
      <div className="-mt-32 md:-mt-20 lg:-mt-0 p-4 lg:p-8">
        <h1 className="text-3xl mb-6">{title}</h1>
        <p className="text-base">{content}</p>
      </div>
    </div>
  );
}
