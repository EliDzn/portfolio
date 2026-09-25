import Button from "../ui/button";

type LiveSiteProps = {
  href: string;
};

export default function CaseStudyLiveSite({ href }: LiveSiteProps) {
  return (
    <section className="col-span-full flex justify-center my-10">
      <Button variant="Primary" className="w-full" asChild>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          View Live Site
        </a>
      </Button>
    </section>
  );
}
