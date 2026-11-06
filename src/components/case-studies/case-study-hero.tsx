import Image from "next/image";

import Text from "@/components/ui/typography";
import { type Project } from "@/data/projects";

type HeroImageProps = Project["image"];

type HeroMetaItem = {
  label: string;
  values: string[];
};

type CaseStudyHeroProps = {
  project: Project;
};

function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <div className="col-span-full mb-4 mt-20">
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        className="h-120 w-full object-cover"
        loading="eager"
      />
    </div>
  );
}

function HeroContent({
  title,
  description,
  link
}: {
  title: string;
  description: string;
  link?: string;
}) {
  return (
    <>
      <div className="col-span-full flex flex-col lg:col-span-10">
        <Text as="h1" variant="h1" className="text-foreground">
          {title}
        </Text>

        <Text variant="caption" className="text-subtle-foreground">
          {description}
        </Text>
      </div>

      {link && (
        <div className="col-span-full my-2 flex justify-start uppercase font-semibold transition-colors duration-150 ease-out hover:text-accent lg:col-span-2 lg:my-0 lg:justify-end">
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Live Site ↗︎
          </a>
        </div>
      )}
    </>
  );
}

function HeroMeta({ meta }: { meta: HeroMetaItem[] }) {
  const metaSpan =
    meta.length === 3
      ? "col-span-2 md:col-span-4 lg:col-span-4"
      : "col-span-2 md:col-span-4 lg:col-span-3";

  return (
    <div className="col-span-full grid grid-cols-subgrid gap-y-8">
      {meta.map((item) => (
        <div key={item.label} className={`flex flex-col gap-1 ${metaSpan}`}>
          <p className="uppercase text-body-md-mobile font-semibold">
            {item.label}
          </p>

          <div className="flex flex-col gap-0.5">
            {item.values.map((value) => (
              <Text key={value} variant="caption">
                {value}
              </Text>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const { discipline, role, dates, techStack } = project.meta;

  const meta: HeroMetaItem[] = [
    { label: "Discipline", values: discipline },
    { label: "Role", values: role },
    {
      label: "Timeline",
      values: [
        dates.startDate
          ? `${dates.startDate} - ${dates.endDate}`
          : dates.endDate
      ]
    },
    { label: "Tech Stack", values: techStack }
  ];

  return (
    <section className="col-span-full grid min-h-screen grid-cols-subgrid items-center">
      <div className="col-span-full grid grid-cols-subgrid">
        <HeroImage {...project.image} />

        <HeroContent
          title={project.title}
          description={project.heroDescription}
          link={project.liveSiteUrl}
        />

        <hr className="col-span-full my-2 w-full border-0 border-t border-subtle-foreground" />

        <HeroMeta meta={meta} />
      </div>
    </section>
  );
}
