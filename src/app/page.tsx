import AboutSection from "@/components/features/home/AboutSection";
import HeroSection from "@/components/features/home/HeroSection";
import SkillSection from "@/components/features/home/SkillSection";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
      </main>
    </div>
  );
}
