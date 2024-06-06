import React, { useState } from "react";
import { NavBtn } from "./NavBtn";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

export function Navbar() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };

  return (
    <>
      <div
        className={`overlay w-full h-screen top-0 left-0 fixed bg-[#1B1730] z-50 flex flex-col lg:flex-row p-1 clip-path-animation overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:bg-gradient-to-t from-[#1B1730] from-70% to-blue-500/5 to-95% lg:before:bg-gradient-to-r before:w-full before:h-full before:z-50 before:opacity-80 ${
          isOverlayOpen ? "" : "hidden"
        } before:pointer-events-none`}
      >
        <div className="w-full lg:w-1/2 h-1/3 lg:h-full flex items-center justify-center relative">
          <div className="relative w-[9rem] h-[.9rem] md:w-40 md:h-9 lg:w-96">
            <Image
              className="md:scale-[.7]"
              src="/images/logo.svg"
              alt=""
              style={{ objectFit: "cover" }}
              fill
            />
          </div>
          <button
            onClick={closeOverlay}
            className="lg:hidden absolute top-4 right-4 hover:bg-[#FE744D] hover:text-[#fafafa] text-[#fafafa] transition-all text-xs h-10 w-10 border-2 border-[#fafafa] rounded-full"
          >
            Close
          </button>
        </div>
        <div className="w-full lg:w-1/2 h-2/3 lg:h-full bg-[#FBF1EC] rounded-lg p-4">
          <div className="hidden lg:flex w-full text-[#FE744D] justify-end mb-8">
            <button
              onClick={closeOverlay}
              className="hover:bg-[#FE744D] hover:text-[#fafafa] transition-all text-sm h-14 w-14 border-2 border-[#FE744D] rounded-full"
            >
              Close
            </button>
          </div>
          <div onClick={closeOverlay} className="flex flex-col items-center lg:items-start">
            <NavBtn title="Home" link="" id="01" />
            <NavBtn title="Experience ConnectIT" smallScreenTitle="Try ConnectIT" link="https://connectit-mvp-frontend.vercel.app/" id="02" />
            <NavBtn title="Our Mission" link="#our-mission" id="03" />
            <NavBtn title="Contact Us" link="#contact" id="04" />
          </div>
        </div>
      </div>
      <div
        id="nav"
        className={`h-20 w-full fixed md:pt-5 top-0 z-[99999] flex items-center font-gilroy justify-between text-[#FAFAFAFA] ${
          isOverlayOpen ? "hidden" : ""
        }`}
      >
        <div className="h-[.6rem] w-[6rem] md:h-4 md:w-40 relative ml-4">
          <Image
            className="md:scale-[.7]"
            src="/images/logo.svg"
            alt=""
            style={{ objectFit: "cover" }}
            fill
          />
        </div>
        <div className="flex items-center rounded-full gap-4 mr-5 text-sm text-[#fafafa]">
          <a href="https://connectit-mvp-frontend.vercel.app/">
            <button className="bg-black hover:bg-[#FE744D] hover:text-[#fafafa] mix-blend-difference transition-all px-4 lg:px-8 py-3 lg:py-4 rounded-full text-xs lg:text-sm">
              Experience ConnectIT
            </button>
          </a>
          <button
            onClick={toggleOverlay}
            className="bg-black hover:bg-[#FE744D] hover:text-[#fafafa] mix-blend-difference transition-all h-10 w-10 lg:h-14 lg:w-14 rounded-full text-xs lg:text-sm"
          >
            Menu
          </button>
        </div>
      </div>
    </>
  );
}
