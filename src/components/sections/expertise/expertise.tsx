import Text from "@/components/ui/typography";
import ExpertiseSummary from "@/components/sections/expertise/expertise-summary";

const expertise = [
  {
    title: "Full-stack Web Development",
    tags: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "TailwindCSS",
      "JWT",
      "Rest APIs",
      "Vercel"
    ],
    description:
      "Building reliable web applications across the frontend and backend, from reusable interfaces and APIs to databases, authentication, and server-side infrastructure."
  },
  {
    title: "Design Engineering",
    tags: [
      "Design Systems",
      "Design Tokens",
      "Component Architecture",
      "Interaction Design",
      "Motion",
      "Accessibility"
    ],
    description:
      "Bridging design and engineering to turn product concepts into accessible, responsive, and production-ready interfaces through design systems, reusable components, and thoughtful interactions."
  },
  {
    title: "UI/UX Design",
    tags: [
      "Figma",
      "Information Architecture",
      "Design Thinking",
      "UX Research",
      "Design Thinking Framework",
      "Design Systems",
      "Prototyping",
      "User Flows"
    ],
    description:
      "Turning user needs into clear, purposeful experiences through research, information architecture, interaction design, prototyping, and scalable design systems."
  },
  {
    title: "Web Performance Optimization",
    tags: ["Core Web Vitals", "Responsive Images", "Caching", "Code Splitting"],
    description:
      "Improving loading speed, responsiveness, and runtime efficiency through optimized assets, rendering strategies, network requests, and frontend architecture."
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
