"use client";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

type TextUpAnimateProps = {
  text: string;
  y?: number;
  trigger: string;
  start: string;
  end: string;
  className?: string;
};

gsap.registerPlugin(ScrollTrigger);

export default function TextUpAnimate({
  text,
  y = 100,
  start,
  end,
  className,
}: TextUpAnimateProps) {
  const textRef = useRef<HTMLParagraphElement>(null);
  useGSAP(
    () => {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: start,
          end: end,
          scrub: 2,
          // markers: true,
        },
        y: y,
        opacity: 0,
        ease: "power1.in",
      });
    },
    { scope: textRef, dependencies: [] },
  );
  return (
    <p ref={textRef} className={cn("text", className)}>
      {text}
    </p>
  );
}
