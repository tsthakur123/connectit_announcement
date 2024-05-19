import Image from "next/image";
import React from "react";

interface MissionProps {
  title: string;
  content: string;
  icon: string;
}

export function MissionCard({ title, content, icon }: MissionProps) {
  return (
    <>
      <div className="w-full lg:w-1/3 h-[47vh] backdrop-blur-sm bg-[#9292921c] hover:bg-[#6E32E1] hover:pl-7 md:hover:pl-12 transition-all border-zinc-700 border rounded p-6 lg:p-9 mb-4 lg:mb-0">
        <div className="h-full w-full flex flex-col">
          <div className="relative w-12 h-16 lg:w-16 lg:h-16 mb-4">
            <Image
              className="img"
              src={icon}
              alt=""
              style={{ objectFit: "cover" }}
              fill
            />
          </div>
          <div className="border-zinc-700 border-t text-[#FAFAFA] flex flex-col gap-4 pt-4 lg:pt-4">
            <h2 className="text-xl lg:text-3xl">{title}</h2>
            <p className="opacity-70 text-sm lg:text-base leading-tight">
              {content}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MissionCard;
