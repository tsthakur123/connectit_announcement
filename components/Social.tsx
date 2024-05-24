import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";

interface SocialProps {
  title: string;
  username: string;
  icon: string;
  link: string;
}

export function Social({ title, username, icon, link }: SocialProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleHover = () => {
    gsap.to(overlayRef.current, {
      translateY: "0%",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleHoverOut = () => {
    gsap.to(overlayRef.current, {
      translateY: "-100%",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex md:w-[21%] w-full items-center relative overflow-hidden border-t border-[#FAFAFA]"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
    >
      <div ref={overlayRef} className="absolute w-full h-full -translate-y-full bg-[#1B1730]"></div>
      <div className="w-full flex items-center justify-between hover:px-3 transition-all py-4 relative">
        <div>
          <p>{title}</p>
          <p className="text-xs opacity-60 text-start font-gilroyLight">{username}</p>
        </div>
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FAFAFA]">
          <div className="relative w-4 h-4">
            <Image className="img" src={icon} alt="" style={{ objectFit: "cover" }} fill />
          </div>
        </div>
      </div>
    </a>
  );
}
