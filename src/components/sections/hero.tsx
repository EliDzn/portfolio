import Text from "../ui/typography";
import Button from "../ui/button";
import CylinderText from "../ui/cylinder-text/cylinder-text";
import SocialLinks from "../ui/social-links";
import RotatingText from "../ui/rotating-text";

export default function Hero() {
  const roles = ["Fullstack Developer", "Design Engineer", "Builder"];
  return (
    <section
      id="hero"
      className="relative col-span-full grid min-h-screen grid-cols-subgrid grid-rows-[1fr_auto] gap-y-8"
    >
      <div className="pointer-events-none absolute inset-0 grid grid-rows-1 grid-cols-4 gap-(--spacing-grid-mobile) md:grid-cols-8 md:gap-(--spacing-grid-tablet) lg:grid-cols-12 lg:gap-(--spacing-grid-desktop)">
        <CylinderText className="col-span-4 self-center justify-self-center md:col-start-3 lg:col-start-5" />
      </div>

      <div className="col-span-full row-start-2 mb-8 grid grid-cols-subgrid items-end">
        <div className="col-span-4 lg:col-span-8">
          <Text as="h1" variant="h1">
            I’m Eli, a <RotatingText words={roles} className="text-accent" />
          </Text>

          <SocialLinks />

          <Text variant="body-lg" className="text-muted-foreground">
            PH-based developer who bridges design and engineering to create
            user-centered web experiences that are intuitive, refined, and
            brought to life through thoughtful interaction.
          </Text>
        </div>

        <div className="col-span-4 mt-4 flex flex-row flex-wrap gap-2 lg:col-start-9 lg:col-span-4 lg:mt-0 justify-end">
          <Button variant="Secondary" asChild>
            <a
              href="/EliDizon_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </Button>

          <Button variant="Primary" asChild>
            <a href="#projects">See My Work</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
