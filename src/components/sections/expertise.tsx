import Text from "@/components/ui/typography";
import ExpertiseSummary from "@/components/ui/expertise-summary";

const expertise = [
  {
    title: "Full-stack Web Development",
    tags: ["React.js", "Next.js", "Node.js", "Express.js"],
    description:
      "Building reliable web applications across the frontend and backend, from reusable interfaces and client-side routing to APIs, databases, and server infrastructure."
  },
  {
    title: "Design Engineering",
    tags: ["TypeScript", "React", "TailwindCSS", "Accessibility"],
    description:
      "Translating design systems into accessible, responsive, and maintainable interfaces through reusable components, thoughtful interactions, and precise implementation."
  },
  {
    title: "UI/UX Design",
    tags: ["Design Thinking", "Design Systems", "Prototyping", "Figma"],
    description:
      "Turning user needs into clear, purposeful experiences through design thinking, interaction design, prototyping, and scalable design systems."
  },
  {
    title: "Web Performance Optimization",
    tags: ["Core Web Vitals", "Responsive Images", "Caching", "Code Splitting"],
    description:
      "Improving loading speed, responsiveness, and runtime efficiency by optimizing assets, rendering strategies, network requests, and frontend architecture."
  }
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="col-span-full grid min-h-screen grid-cols-subgrid items-start"
    >
      <div className="col-span-full lg:col-start-2 lg:col-span-9 my-auto">
        <Text as="h2" variant="h2" className="uppercase mb-4">
          Expertise
        </Text>

        <div className="w-full flex flex-col gap-2">
          {expertise.map((area, index) => (
            <ExpertiseSummary
              key={area.title}
              index={index + 1}
              title={area.title}
              tags={area.tags}
            >
              {area.description}
            </ExpertiseSummary>
          ))}
        </div>
      </div>
    </section>
  );
}
