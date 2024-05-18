"use client";

import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typeSpeed = 50;
  const deleteSpeed = 50;
  const delay = 1500;

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex].text;

      if (isDeleting) {
        setDisplayedText((prev) => prev.substring(0, prev.length - 1));
      } else {
        setDisplayedText((prev) => currentWord.substring(0, prev.length + 1));
      }

      if (!isDeleting && displayedText === currentWord) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const typingSpeed = isDeleting ? deleteSpeed : typeSpeed;
    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, currentWordIndex, words]);

  return (
    <div className={cn("flex items-center space-x-1 my-8 text-center", className)}>
      <div className="overflow-hidden">
        <div className="text-xs sm:text-base md:text-xl lg:text-xl xl:text-xl font-normal" style={{ whiteSpace: "nowrap" }}>
          {displayedText.split("").map((char, index) => (
            <span key={index} className={cn("dark:text-white text-black", words[currentWordIndex].className)}>
              {char}
            </span>
          ))}
        </div>
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn("block rounded-sm w-[3px] h-4 sm:h-6 xl:h-9 bg-[#FE744D]", cursorClassName)}
      ></motion.span>
    </div>
  );
};
