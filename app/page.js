"use client";
import React, { useEffect, useRef } from "react";
import { TypewriterEffectSmoothDemo } from "../components/TypewriterEffectSmoothDemo";
import { Card } from "../components/Card";
import { TbArrowUpRight } from "react-icons/tb";
import Image from "next/image";
import { Button } from "../components/Button";
import { Social } from "../components/Social";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Marquee } from "../components/Marquee";
import MissionCard from "../components/MissionCard";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const buttonRef = useRef(null);
  const cardRef = useRef(null);
  var social = [
    {
      title: "Facebook",
      username: "@connectit",
      icon: "/images/facebook.svg",
    },
    {
      title: "Instagram",
      username: "@connectit",
      icon: "/images/insta.svg",
    },
    {
      title: "X",
      username: "@connectit",
      icon: "/images/x.svg",
    },
    {
      title: "LinkedIn",
      username: "@connectit",
      icon: "/images/linkedin.svg",
    },
  ];

  const mission = [
    {
      title: "Unlock Hidden Talent",
      content:
        "ConnectIT uncovers tech's best-kept secrets, showcasing the brightest minds and the most innovative ideas in the industry.",
      icon: "/images/unlock.svg",
    },
    {
      title: "Rewrite the Rules",
      content:
        "Say goodbye to traditional hiring processes. ConnectIT is rewriting the rules, making it easier than ever for companies to find their perfect match and for tech professionals to showcase their skills on a global stage.",
      icon: "/images/refresh.svg",
    },
    {
      title: "Elevate Your Network",
      content:
        "Join a community unlike any other - a global powerhouse of tech enthusiasts, industry leaders, and game-changers. ConnectIT is where connections are made, opportunities are seized, and dreams are turned into reality.",
      icon: "/images/networking.png",
    },
  ];

  useGSAP(() => {
    // gsap code here...
    gsap.to("#page2 .heroText", {
      opacity: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: "#page2 .heroText",
        scroller: "body",
        start: "top 90%",
        end: "bottom 25%",
        scrub: 1,
      },
    }); // <-- automatically reverted

    gsap.to("#marquee", {
      xPercent: -100,
      repeat: -1,
      duration: 5,
      ease: "linear",
    });
    gsap.to(
      ".reveal",
      {
        translateY: "0%",
        duration: 1,
        ease: "expo.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#page3 .reveal",
          scroller: "body",
          start: "top 75%",
        },
      },
      "anime"
    );
    gsap.from(
      ".btnReveal",
      {
        width: "11%",
        duration: 1,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: "#page3 .btnReveal",
          scroller: "body",
          start: "top 75%",
        },
      },
      "anime"
    );
    gsap.from(
      buttonRef.current,
      {
        opacity: 0,
        duration: 2,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: "#page3 .btnReveal",
          scroller: "body",
          start: "top 75%",
        },
      },
      "anime"
    );
  });

  const handleButtonHover = () => {
    gsap.to(buttonRef.current, {
      translateY: "-100%",
      rotate: "-12deg",
      duration: 0.4,
      ease: "expo.inOut",
    });
  };

  const handleButtonHoverOut = () => {
    gsap.to(buttonRef.current, {
      translateY: "0",
      rotate: "0deg",
      duration: 0.4,
      ease: "expo.inOut",
    });
  };

  const handleCardHover = () => {
    gsap.to(cardRef.current, {
      scale: 1.2,
      filter: "blur(2px)",
      ease: "power2.out",
    });
  };

  const handleCardHoverOut = () => {
    gsap.to(cardRef.current, {
      scale: 1,
      filter: "blur(0px)",
      ease: "power2.out",
    });
  };

  const paragraph =
    "Hold onto your hats because something groundbreaking is about to shake up the tech world. ConnectIT is on the horizon, and it's not just another platform - it's a seismic shift in how we approach tech talent and opportunities.";

  // Split the paragraph into words
  const words = paragraph.split(" ");

  return (
    <div id="main" className="w-full h-screen font-gilroy bg-black relative">
      <div
        data-scroll
        data-scroll-speed="-.5"
        id="page1"
        className="flex flex-col-reverse lg:flex-row w-full h-screen"
      >
        <div
          id="left"
          className="bg-[#1B1730] w-full lg:w-1/2 h-full flex justify-center items-center rounded-t-3xl md:rounded-r-3xl md:rounded-tl-none p-4 lg:p-0"
        >
          <div>
            <p className="text-3xl lg:text-5xl font-medium tracking-wider text-center text-[#FAFAFA]">
              Coming <span className="text-[#FE744D]">Soon!</span>
            </p>
            <div>
              <TypewriterEffectSmoothDemo />
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-center w-full lg:w-1/2 h-full flex justify-center items-center text-[#FAFAFA]"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <div>
            <p className="font-abnes text-2xl lg:text-3xl text-center">
              Connect<span className="text-[#FE744D]">IT</span>
            </p>
            <p className="text-center text-lg lg:text-xl tracking-widest my-2">
              Unveiling Tech&apos;s Best-Kept Secret!
            </p>
          </div>
        </div>
      </div>
      <div id="wrapper" className="w-full absolute">
        <div
          id="page2"
          className="w-full bg-[#fbf1ec] min-h-screen rounded-t-[40px] md:rounded-t-[80px] p-6 lg:p-20"
        >
          <div
            id="headerText"
            className="flex justify-center border-b border-zinc-400 pt-12 pb-12 lg:pb-32 mb-4"
          >
            <div className="w-full lg:w-3/5 text-center text-[7vw] lg:text-[3.1vw] font-bold tracking-wide leading-none">
              <div>
                {words.map((word, wordIndex) => (
                  <span key={wordIndex}>
                    {word.split("").map((char, charIndex) => (
                      <span className="heroText opacity-50" key={charIndex}>
                        {char}
                      </span>
                    ))}
                    <span> </span> {/* Add space between words */}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div id="Q1" className="border-b border-zinc-400 pb-12 mb-4">
            <div
              id="whoAreWe"
              className="bg-[#FE744D] w-full lg:w-[31%] overflow-hidden text-[#FAFAFA] px-2 py-1 rounded-full font-medium text-lg whitespace-nowrap flex items-center"
            >
              <Marquee />
              <Marquee />
              <Marquee />
              <Marquee />
              <Marquee />
            </div>
            <div
              id="content"
              className="my-10 text-xl lg:text-3xl font-semibold opacity-75"
            >
              <p className="leading-none md:leading-normal">
                ConnectIT is more than just a platform - we&apos;re a passionate
                team of tech enthusiasts, innovators, and dreamers. We believe
                in the power of technology to change the world, and we&apos;re
                on a mission to unleash its full potential. With ConnectIT,
                we&apos;re creating a community where tech talent thrives,
                connections are made, and innovation knows no bounds.
              </p>
            </div>
          </div>
        </div>
        <div
          id="ourMission"
          className="w-full min-h-screen bg-[#0A0A0A] p-6 lg:p-20"
        >
          <div className="text-[#FAFAFA] text-4xl lg:text-8xl mb-8 lg:mb-16 text-center lg:text-left">
            Our Mission
          </div>
          <div className="w-full flex flex-col lg:flex-row flex-wrap lg:flex-nowrap justify-center md:gap-4">
            {mission.map((card, i) => (
              <MissionCard
                key={i}
                title={card.title}
                content={card.content}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
        <div id="page3" className="w-full max-h-screen p-6 lg:p-20">
          <div
            id="container"
            className="flex flex-col lg:flex-row justify-between"
          >
            <div id="heading" className="flex flex-col gap-6">
              <div>
                <div className="overflow-hidden">
                  <p className="reveal text-5xl lg:text-7xl tracking-tight font-thin font-gilroyLight pr-8 translate-y-full mb-1">
                    <span className="italic font-gilroy">Stay Ahead</span> of
                    the
                  </p>
                </div>
                <div className="overflow-hidden">
                  <p className="reveal text-5xl lg:text-7xl tracking-tight font-thin font-gilroyLight pr-8  translate-y-full">
                    Curve:
                  </p>
                </div>
              </div>
              <button
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonHoverOut}
                className="btnReveal bg-[#FE744D] h-[6vh] md:h-[8vh] w-[60%] lg:w-[30%] px-6 rounded-full text-sm lg:text-base text-[#FAFAFA] uppercase tracking-tight overflow-hidden"
              >
                <div ref={buttonRef} className="h-full">
                  <div className="button flex items-center gap-14 h-full">
                    <p>Sign Up</p>
                    <span className="scale-150">
                      <TbArrowUpRight />
                    </span>
                  </div>
                  <div className="button flex items-center -translate-x-[10%] gap-14 h-full rotate-12">
                    <p>Sign Up</p>
                    <span className="scale-150">
                      <TbArrowUpRight />
                    </span>
                  </div>
                </div>
              </button>
            </div>
            <div className="w-full lg:w-2/5 text-lg lg:text-2xl pt-12 lg:pt-52 px-6">
              <p>
                The countdown to ConnectIT has begun, and you don&apos;t want to
                miss out. Sign up now to be among the first to experience the
                revolution. This is your chance to be a part of something big -
                something that will change the tech landscape forever.
              </p>
            </div>
          </div>
        </div>
        <div
          id="page4"
          className="w-full min-h-screen flex flex-col lg:flex-row justify-between p-6 lg:p-20"
        >
          <div id="leftContainer" className="w-full h-[40vh] md:min-h-full">
            <div
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardHoverOut}
              className="transition-all text-[#FAFAFA] relative overflow-hidden h-full rounded-lg flex flex-col justify-between"
            >
              <div
                ref={cardRef}
                className="w-full h-full relative hover:blur-sm"
              >
                <Image
                  className="img"
                  src="/images/cardBg.svg"
                  alt=""
                  style={{ objectFit: "cover" }}
                  fill
                />
              </div>
              <div className="absolute w-full h-full flex flex-col justify-between px-4 py-5 hover:p-6 transition-all">
                <p className="text-xl font-semibold">Spread the Word:</p>
                <p className="text-[#FAFAFA] text-sm md:text-base">
                  ConnectIT is coming, and it&apos;s going to be epic. Share the
                  excitement with your friends, colleagues, and fellow tech
                  enthusiasts. The revolution starts now!
                </p>
              </div>
            </div>
          </div>
          <div
            id="rightContainer"
            className="w-full pt-12 lg:pt-56 min-h-full flex flex-col justify-between"
          >
            <p className="uppercase text-5xl lg:text-8xl font-semibold px-10 lg:px-48 opacity-80 mb-10">
              Escape the matrix
            </p>
            <p className="px-4 lg:px-12 text-sm lg:text-base">
              Follow us on social media for exclusive updates, behind-the-scenes
              peeks, and more. Get ready to change the game with ConnectIT.
            </p>
          </div>
        </div>
        <div
          id="page5"
          className="w-full h-[140vh] md:min-h-screen relative overflow-hidden"
        >
          <div id="bgImage" className="overflow-hidden">
            <Image
              data-scroll
              data-scroll-speed="-.5"
              className="img scale-125"
              src="/images/contactBGP.svg"
              alt=""
              style={{ objectFit: "cover" }}
              fill
            />
          </div>
          <div
            id="content"
            className="absolute text-[#FAFAFA] p-6 lg:p-20 w-full"
          >
            <div className=" text-4xl lg:text-7xl text-center font-bold tracking-wide mb-12">
              <p className="uppercase">ConnectIT</p>
              <p className="uppercase">The Future Starts</p>
              <p className="uppercase">Here.</p>
            </div>
            <div className="flex flex-col lg:flex-row w-full justify-between gap-4 lg:gap-20 text-base lg:text-2xl pt-10">
              <Button name={"Write a Message"} />
              <Button name={"Discuss Project"} />
            </div>
            <div className="flex flex-col lg:flex-row justify-between w-full mt-20 relative gap-4 lg:gap-0">
              {social.map((card, i) => (
                <Social
                  key={i}
                  title={card.title}
                  username={card.username}
                  icon={card.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
