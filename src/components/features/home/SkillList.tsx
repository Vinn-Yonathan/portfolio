"use client";
import SkillContainer from "@/components/ui/SkillContainer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SkillList({ skills }: { skills: string[] }) {
  useGSAP(() => {
    gsap.from(".skill", {
      scrollTrigger: {
        trigger: "#skill-section",
        start: "15% 90%",
        end: "75% 90%",
        scrub: 3,
      },
      y: 100,
      opacity: 0,
      ease: "power1.inOut",
      stagger: {
        each: 0.2,
        grid: "auto",
        from: "random",
        axis: "y",
      },
    });
  }, []);

  return (
    <div className="flex flex-wrap sm:gap-x-6 gap-y-4 md:gap-y-10 justify-around text-xl md:text-2xl md:px-8">
      {skills.map((skill) => (
        <SkillContainer name={skill} key={skill} className="skill" />
      ))}
    </div>
  );
}
