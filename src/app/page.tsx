import AboutSection from "@/components/features/home/AboutSection";
import HeroSection from "@/components/features/home/HeroSection";
import ProjectSection from "@/components/features/home/ProjectSection";
import SkillSection from "@/components/features/home/SkillSection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
      </main>
      <Footer />
    </div>
  );
}
