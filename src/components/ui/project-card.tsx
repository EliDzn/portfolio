import Image from "next/image";
import Text from "./typography";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  tags: string[];
  description: string;
  date: string;
  image: string;
  imageAlt?: string;
};

export default function ProjectCard({
  title,
  tags,
  description,
  date,
  image,
  imageAlt = ""
}: ProjectCardProps) {
  return (
    <Link
      type="button"
      data-project-card
      className="group relative flex h-full cursor-pointer flex-col items-start justify-start overflow-hidden p-6 text-left transition-colors duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:p-9 min-h-160"
      href={`/case-study`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="absolute inset-0 z-0 object-cover transition-transform duration-300 ease-out group-hover:scale-105 blur-sm group-hover:blur-none"
      />

      <div className="absolute inset-0 z-10 bg-muted-foreground/80 transition-colors duration-200 ease-out group-hover:bg-foreground/80" />

      <div className="relative z-20 w-full">
        <p className="text-background/80 group-hover:text-accent text-h4-desktop md:text-h4-desktop lg:text-h3-desktop font-semibold transition-colors duration-200 ease-out">
          {title}
        </p>

        <Text
          variant="caption"
          className="text-subtle-foreground group-hover:text-background transition-colors ease-out duration-150"
        >
          {tags.join(" • ")}
        </Text>
      </div>

      <div
        className="
          relative z-20 mt-auto grid w-full grid-rows-[auto_0fr] pt-8
          transition-[grid-template-rows,transform,margin,padding]
          duration-300 ease-out
          group-hover:mt-4
          group-hover:translate-y-2
          group-hover:pt-0
          group-hover:grid-rows-[auto_1fr]
          group-focus-visible:mt-4
          group-focus-visible:translate-y-2
          group-focus-visible:pt-0
          group-focus-visible:grid-rows-[auto_1fr]
        "
      >
        <Text
          variant="caption"
          className="text-subtle-foreground group-hover:text-background transition-colors ease-out duration-150"
        >
          {date}
        </Text>

        <div className="min-h-0 overflow-hidden">
          <Text
            variant="body-md"
            className="translate-y-2 mt-4 group-hover:text-background opacity-0 transition-[opacity,transform,padding] duration-300 ease-out group-hover:translate-y-0 group-hover:pt-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:pt-0 group-focus-visible:opacity-100"
          >
            {description}
          </Text>
        </div>
      </div>
    </Link>
  );
}
