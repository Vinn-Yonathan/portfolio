"use client";
import DecryptedText from "@/components/ui/DecryptedText";
import gsap from "gsap";
import Image from "next/image";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  useGSAP(() => {
    gsap.from(".about-image", {
      scrollTrigger: {
        trigger: "#about-section",
        start: "12% 40%",
        end: "12% 45",
        scrub: true,
        // markers: true,
      },
      opacity: 0,
      x: 100,
      ease: "power2.out",
      duration: 1,
    });
  });
  return (
    <section
      id="about-section"
      className="min-h-screen font-ubuntu-mono font-semibold px-12 md:px-20 xl:px-32 text-foreground text-xl md:text-2xl md:gap-x-24 xl:gap-x-32 py-8"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:self-center">
          <p>
            <DecryptedText
              text="I’m Cevin, a software developer from Indonesia with experience in web, mobile and AR app development. I enjoy learning new things and figuring out how stuff works."
              animateOn="view"
              speed={200}
            />
          </p>
          <svg
            width="275"
            height="61"
            viewBox="0 0 275 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sr-only xl:not-sr-only xl:pt-20"
          >
            <circle cx="30.5" cy="30.5" r="30" stroke="white" />
            <circle cx="137.5" cy="30.5" r="30" stroke="white" />
            <circle cx="244.5" cy="30.5" r="30" stroke="white" />
          </svg>
        </div>

        <Image
          src="/cevin-grayscale.png"
          alt="Cevin Albert Yonathan Potrait in Grayscale"
          className="about-image opacity-20 pl-12 pb-2 md:w-97 md:h-84 xl:w-138.75 xl:h-119.5 md:pl-0 md:pb-6"
          width={355}
          height={311}
        />
      </div>

      <p className="text-right md:w-[60%] md:ml-auto">
        <DecryptedText
          text="I’m the type who can learn faster by doing it . When I’m not coding, I usually reading books, playing games, or listening to music. I’m currently looking for opportunities as a Junior Developer where I can grow and contribute to meaningful projects."
          animateOn="view"
          speed={200}
        />
      </p>
    </section>
  );
}
