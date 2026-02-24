"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
export default function AboutImageParallax() {
  useGSAP(() => {
    gsap.from(".about-image", {
      scrollTrigger: {
        trigger: "#about-section",
        start: "top-=100 bottom",
        end: "top bottom",
        scrub: true,
        // markers: true,
      },
      opacity: 0,
    });
    gsap.to(".about-image", {
      scrollTrigger: {
        trigger: "#about-section",
        start: "center+=100 bottom",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
      y: 150,
    });
  });
  return (
    <Image
      src="/cevin-grayscale.png"
      alt="Cevin Albert Yonathan Potrait in Grayscale"
      className="about-image opacity-20 pl-12 pb-2 md:w-97 md:h-84 xl:w-138.75 xl:h-119.5 md:pl-0 md:pb-6"
      width={355}
      height={311}
    />
  );
}
