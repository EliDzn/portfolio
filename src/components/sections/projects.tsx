import Text from "../ui/typography";
import ProjectCard from "../ui/project-card";
import ProjectGrid from "../ui/project-grid";

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
          <ProjectCard
            title="BillEase: Invoicing App"
            tags={["Case Study", "Design System"]}
            description="Independently drove the entire product lifecycle and designed end-to-end using a strict mobile-first approach to simplify billing and inventory pipelines for on-the-go freelancers and small businesses."
            date="2023"
            image="/images/BillEase.jpg"
          />
          {/* <ProjectCard
            title="Beautox"
            tags={["Node.js", "Express"]}
            description="A RESTful API built with Node.js and Express."
            date="2023"
          /> */}
          <ProjectCard
            title="UST Technovation Society Website"
            tags={["Case Study", "Design System"]}
            description="Worked directly under the UI/UX Director to architect our core design system and low-fidelity wireframes. I then oversaw a team of designers through the implementation phase, ensuring all high-fidelity interfaces remained visually consistent and scalable."
            date="2023"
            image="/images/UST_TechnovationSociety.jpg"
          />
          {/* <ProjectCard
            title="Achromatic To Do App"
            tags={["React", "Vite"]}
            description="Small React Web Application for keeping track of your tasks and to-do lists"
            date="2023"
          /> */}
        </ProjectGrid>
      </div>
    </section>
  );
}
