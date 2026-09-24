import Button from "../ui/button";

type LiveSiteProps = {
  href: string;
};

export default function CaseStudyLiveSite({ href }: LiveSiteProps) {
  return (
    <div className="col-span-full flex justify-center my-10">
      <Button variant="Primary" className="w-4/5 text-foreground" asChild>
        <a href={href} target="_blank" rel="noopener noreferrer">
          View Live Site
        </a>
      </Button>
    </div>
  );
}
