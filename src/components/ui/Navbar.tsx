"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  useEffect(() => {
    gsap.to(".nav", {
      scrollTrigger: {
        trigger: ".hero-section",
        start: "center 40%",
        end: "center 45",
        scrub: true,
        // markers: true,
      },
      backdropFilter: "blur(3px)",
      ease: "power2.out",
      duration: 1,
    });
  });
  return (
    <nav className="nav w-full fixed z-30">
      <ul className="font-ubuntu-mono flex justify-center items-center gap-x-10 md:gap-x-14 xl:gap-x-35 py-6 text-xl ">
        <a href="#about-section">ABOUT</a>
        <a href="#">SKILLS</a>
        <a href="#">PROJECTS</a>
      </ul>
    </nav>
  );
}
