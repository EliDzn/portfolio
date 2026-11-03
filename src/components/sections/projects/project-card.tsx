import Image from "next/image";
import Link from "next/link";
import Text from "@/components/ui/typography";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  title: string;
  discipline: Project["meta"]["discipline"];
  description: string;
  projectType: Project["projectType"];
  date: string;
  image: string;
  imageAlt?: string;
  link: string;
};

export default function ProjectCard({
  title,
  discipline,
  description,
  projectType,
  date,
  image,
  imageAlt = "",
  link
}: ProjectCardProps) {
  return (
    <Link
      type="button"
      data-project-card
      transitionTypes={["project-forward"]}
      className="group relative flex h-full min-h-160 cursor-pointer flex-col items-start justify-start overflow-hidden p-6 text-left transition-colors duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:p-9"
      href={link}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="absolute inset-0 z-0 object-cover blur-sm transition-transform duration-300 ease-out group-hover:scale-105 group-hover:blur-none"
      />

      <div className="absolute inset-0 z-10 bg-muted-foreground/80 transition-colors duration-200 ease-out group-hover:bg-foreground/80" />

      <div className="relative z-20 w-full">
        <p className="text-h4-desktop font-semibold text-background/80 transition-colors duration-200 ease-out group-hover:text-accent md:text-h4-desktop lg:text-h3-desktop">
          {title}
        </p>

        <Text
          variant="caption"
          className="text-subtle-foreground transition-colors duration-150 ease-out group-hover:text-background"
        >
          {discipline.join(" • ")}
        </Text>
      </div>

      <div
        className="
        relative z-20 mt-auto grid w-full flex-1 grid-rows-[1fr_0fr_0fr] pt-8
        transition-[grid-template-rows] duration-300 ease-out
        group-hover:grid-rows-[auto_1fr_auto]
        group-focus-visible:grid-rows-[auto_1fr_auto]
        "
      >
        <Text
          variant="caption"
          className="self-end text-subtle-foreground transition-colors duration-150 ease-out group-hover:text-background"
        >
          {date}
        </Text>

        <div className="min-h-0 overflow-hidden">
          <Text
            variant="body-md"
            className="mt-4 translate-y-2 text-background opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
          >
            {description}
          </Text>
        </div>

        <div className="min-h-0 overflow-hidden">
          <Text
            variant="body-md"
            className="translate-y-2 pt-4 font-semibold uppercase text-accent opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
          >
            {projectType}
          </Text>
        </div>
      </div>
    </Link>
  );
}
