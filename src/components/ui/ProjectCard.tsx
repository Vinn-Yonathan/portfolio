import { Link } from "lucide-react";
import { CardSpotlight } from "./CardSpotlight";
import SkillContainer from "./SkillContainer";

type ProjectCardProps = {
  name?: string;
  url?: string;
  skills: string[];
  description?: string;
  isFinished: boolean;
};

export default function ProjectCard({
  name,
  url,
  skills = [],
  description,
  isFinished,
}: ProjectCardProps) {
  return (
    <CardSpotlight radius={150}>
      <div className="relative z-20 space-y-4">
        <header className="flex justify-between">
          <div className="flex flex-col sm:flex-row sm:gap-x-4 sm:items-center">
            <h3 className="font-ubuntu-mono font-semibold text-3xl md:text-4xl">
              {name}
            </h3>
            <span
              className={`w-fit border-2 rounded-lg px-[.5em] text-sm text-background font-ubuntu-mono my-auto ${isFinished ? "bg-green-300" : "bg-yellow-300"}`}
            >
              {isFinished ? "Finished" : "In Progress"}
            </span>
          </div>

          <a href={url} target="_blank" rel="noopener noreferrer">
            <Link />
          </a>
        </header>
        <div className="flex flex-wrap gap-x-0.5 sm:gap-x-4 gap-y-3">
          {skills.map((skill) => (
            <SkillContainer name={skill} key={skill} />
          ))}
        </div>
        <p className=" font-ubuntu-mono text-lg md:text-xl">{description}</p>
      </div>
    </CardSpotlight>
  );
}
