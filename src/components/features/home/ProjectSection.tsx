import ProjectCard from "@/components/ui/ProjectCard";
import ProjectList from "../../../../data/ProjectList";

export default function ProjectSection() {
  return (
    <section
      id="project-section"
      className="min-h-screen px-12 md:px-20 xl:px-32 text-foreground space-y-12 pb-12 md:pb-16"
    >
      <h2 className="font-unbounded font-bold text-3xl md:text-4xl ">
        My Projects
      </h2>

      {ProjectList.map((project) => (
        <ProjectCard
          key={project.name}
          name={project.name}
          url={project.url}
          skills={project.skills}
          description={project.description}
          isFinished={project.isFinished}
        />
      ))}
    </section>
  );
}
