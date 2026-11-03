import Text from "../../ui/typography";
import { projects } from "@/data/projects";
import ProjectCard from "./project-card";
import ProjectGrid from "./project-grid";

export default function Projects() {
  return (
    <section
      id="projects"
      className="col-span-full grid min-h-screen grid-cols-subgrid items-start"
    >
      <div className="col-span-full grid my-auto">
        <Text
          as="h2"
          variant="h2"
          className="uppercase mb-4 text-center w-full col-span-full"
        >
          Curated Work
        </Text>

        <ProjectGrid>
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.slug}
                title={project.title}
                discipline={project.meta.discipline}
                description={project.cardDescription}
                projectType={project.projectType}
                date={project.meta.dates.endDate}
                image={project.image.src}
                imageAlt={project.image.alt}
                link={`/projects/${project.slug}`}
              />
            );
          })}
        </ProjectGrid>
      </div>
    </section>
  );
}
