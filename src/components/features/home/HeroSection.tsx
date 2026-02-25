import DecryptedText from "@/components/ui/DecryptedText";
import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";
import SocialIcons from "@/components/ui/SocialIcons";

export default function HeroSection() {
  return (
    <section className="hero-section min-h-screen flex flex-col justify-center items-center space-y-6 md:space-y-8 xl:space-y-10 xl:pt-8">
      <div className="text-center flex flex-col space-y-4 md:space-y-8 font-bold text-foreground">
        <p className="font-ubuntu-mono text-2xl md:text-3xl">
          <DecryptedText
            text="Hi I'm"
            animateOn="view"
            sequential
            speed={100}
          />
        </p>
        <h1 className="font-unbounded text-4xl md:text-7xl">
          <DecryptedText
            text="CEVIN ALBERT"
            animateOn="both"
            sequential
            speed={100}
          />
          <br />
          <DecryptedText
            text="YONATHAN"
            animateOn="both"
            sequential
            speed={100}
          />
        </h1>
        <p className="font-ubuntu-mono text-3xl md:text-4xl">
          <DecryptedText
            text="Software Developer"
            animateOn="view"
            sequential
            speed={100}
          />
        </p>
      </div>

      <SocialIcons />

      <HoverBorderGradient
        className=" text-xl md:text-2xl xl:text-[1.6rem] font-ubuntu-mono font-semibold hover:font-bold text-foreground bg-transparent"
        containerClassName="px-[1em] xl:py-[0.25em] xl:px-[3em]"
        as="div"
      >
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </HoverBorderGradient>
    </section>
  );
}
