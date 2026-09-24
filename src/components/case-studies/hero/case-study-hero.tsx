import Image from "next/image";

import Text from "@/components/ui/typography";

type HeroImageProps = {
  src: string;
  alt: string;
};

type HeroContentProps = {
  title: string;
  desc: string;
  link?: string;
};

type HeroMetaProps = {
  label: string;
  values: string[];
};

type CaseStudyHeroProps = {
  image: HeroImageProps;
  content: HeroContentProps;
  meta: HeroMetaProps[];
};

function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <div className="col-span-full my-4">
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

function HeroContent({ title, desc, link }: HeroContentProps) {
  return (
    <>
      <div className="col-span-full flex flex-col lg:col-span-10">
        <Text as="h1" variant="h1" className="text-foreground">
          {title}
        </Text>

        <Text variant="caption" className="text-subtle-foreground">
          {desc}
        </Text>
      </div>

      {link && (
        <div className="col-span-full my-2 flex justify-start uppercase font-semibold transition-colors duration-150 ease-out hover:text-accent lg:col-span-2 lg:my-0 lg:justify-end">
          <a href={link} target="_blank">
            View Live Site ↗︎
          </a>
        </div>
      )}
    </>
  );
}

function HeroMeta({ meta }: { meta: HeroMetaProps[] }) {
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

export default function CaseStudyHero({
  image,
  content,
  meta
}: CaseStudyHeroProps) {
  return (
    <section className="col-span-full grid min-h-screen grid-cols-subgrid items-center">
      <div className="col-span-full grid grid-cols-subgrid">
        <HeroImage {...image} />

        <HeroContent {...content} />

        <hr className="col-span-full my-2 w-full border-0 border-t border-subtle-foreground" />

        <HeroMeta meta={meta} />
      </div>
    </section>
  );
}
