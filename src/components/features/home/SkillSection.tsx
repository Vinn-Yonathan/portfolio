import SkillList from "./SkillList";
import TextUpAnimate from "@/components/ui/TextUpAnimate";

export default function SkillSection() {
  const skillList: string[] = [
    "HTML5",
    "CSS 3",
    "Javascript",
    "Typescript",
    "React",
    "Redux",
    "Tailwind CSS",
    "Tanstack Query",
    "PHP",
    "MySQL",
    "Laravel",
    "REST API",
    "Open API",
    "Material Design",
    "Java",
    "Python",
    "Kotlin",
    "Jetpack Compose",
    "Supabase",
    "Git",
  ];

  return (
    <section
      id="skill-section"
      className="min-h-screen font-ubuntu-mono font-semibold text-foreground px-12 md:px-20 xl:px-32 pt-20 space-y-12 md:space-y-24 xl:space-y-34"
    >
      <TextUpAnimate
        text="here are the skills that i comfortable to work with"
        className="text-xl md:text-2xl"
        trigger="#skill-section"
        start="top-=100 80%"
        end="top 80%"
      />

      <SkillList skills={skillList} />

      <TextUpAnimate
        text="and i'm still learning forward..."
        className="text-xl md:text-2xl text-center mx-auto md:-pt-12"
        trigger="#skill-section"
        start="top-=200 80%"
        end="top-=100 80%"
      />
    </section>
  );
}
