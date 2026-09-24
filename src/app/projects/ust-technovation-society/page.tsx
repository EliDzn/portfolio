import CaseStudyLayout from "@/components/case-studies/case-study-layout";
import CaseStudyHero from "@/components/case-studies/hero/case-study-hero";
import CaseStudyBody from "@/components/case-studies/case-study-body";
import CaseStudySection from "@/components/case-studies/case-study-section";
import CaseStudyLiveSite from "@/components/case-studies/case-study-live-site";
import Text from "@/components/ui/typography";
import Image from "next/image";

export default function BillEasePage() {
  const metaData = [
    {
      label: "Discipline",
      values: ["UI/UX Design", "Web Design", "Design Systems"]
    },
    {
      label: "Role",
      values: ["Executive Associate to the Director for UI/UX Design"]
    },
    {
      label: "Timeline",
      values: ["October 2025 - December 2025"]
    },
    {
      label: "Tech Stack",
      values: ["Figma"]
    }
  ];
  return (
    <CaseStudyLayout>
      <CaseStudyHero
        image={{
          src: "/images/case-studies/ust-technovation-society/ust-technovation-society-hero.webp",
          alt: "UST Technovation Society Organization Website"
        }}
        content={{
          title: "UST Technovation Society Website",
          desc: "A digital platform for UST Technovation Society, connecting students through technology, community, events, and initiatives.",
          link: "https://www.usttechsoc.org/"
        }}
        meta={metaData}
      />
      <CaseStudyBody>
        <CaseStudySection
          id="problem"
          eyebrow="Problem"
          heading="A Fresh Start"
          index={1}
        >
          <Text variant="body-md" className="text-subtle-foreground">
            As part of the organization&rsquo;s founding batch, I worked with
            the Visual Design Division&rsquo;s UI/UX Team as the Executive
            Associate to the Director for UI/UX Design to design its first
            official website. The organization&rsquo;s only existing web
            presence was a recruitment page, spun up for recruitment season and
            built for that single purpose.
          </Text>
          <Text variant="body-md" className="text-subtle-foreground">
            The goal was to give the organization a dedicated, permanent home,
            something that could introduce who the organization is, showcase its
            divisions and activities, and give visitors a clear way to engage
            with it well beyond any single recruitment cycle. I contributed to
            the shared design system and translated it into key experiences,
            primarily the landing page, working alongside the Director and other
            Executive Associates.
          </Text>
        </CaseStudySection>

        <CaseStudySection
          id="discovery"
          eyebrow="Discovery"
          heading="Building the foundations"
          index={2}
        >
          <Text variant="body-md" className="text-subtle-foreground">
            The organization already had an established typeface, which gave the
            visual language a starting point. I explored how that foundation
            could extend into a full direction through a moodboard centered on{" "}
            <span className="text-foreground font-medium">
              minimalism, bold typography, and modular layouts
            </span>
            , principles that would need to hold up across multiple page types,
            not just one hero screen.
          </Text>
          <Text variant="body-md" className="text-subtle-foreground">
            From there, I established the typography scale, where I experimented
            on various typescales such as Major Third (1.25) and Major Second
            (1.125) but settled on a Minor Third (1.2) as I felt the scaling for
            the heading for the Major Second was too minimal while the Major
            Third occupied too much space and the Minor Third was just the sweet
            spot for both text-heavy pages and implemeting clear information
            hierarchy. I then developed a reusable button component and its
            variants, and pushed for Lucide as foundation for the iconograpy to
            keep the interface visually consistent without building a custom
            icon system and allow for scalability and its easy implementation
            within React for development.
          </Text>
          <div className="flex flex-col gap-1">
            <Text variant="body-md" className="text-subtle-foreground">
              The brief and this early foundation work converged on three
              priorities that shaped every page-level decision that followed:
            </Text>
            <ol className="list-decimal pl-4 text-subtle-foreground gap-0">
              <li>
                <Text variant="body-md">
                  <span className="text-foreground font-medium">
                    Create clear paths to action.
                  </span>{" "}
                  Visitors should always know what to do next, whether exploring
                  content or reaching out.
                </Text>
              </li>
              <li>
                <Text variant="body-md">
                  <span className="text-foreground font-medium">
                    Communicate who the organization is.
                  </span>{" "}
                  Divisions and activities need to be legible at a glance, not
                  buried in text.
                </Text>
              </li>
              <li>
                <Text variant="body-md">
                  <span className="text-foreground font-medium">
                    Build once, reuse everywhere.
                  </span>{" "}
                  The visual system has to stay consistent across the landing,
                  article, and contact experiences, not just look good on one
                  screen.
                </Text>
              </li>
            </ol>
          </div>
        </CaseStudySection>

        <CaseStudySection
          id="approach"
          eyebrow="Approach"
          heading="Turning the system into pages"
          index={3}
        >
          <Text variant="body-md" className="text-subtle-foreground">
            Rather than committing to one direction immediately, we drafted and
            compared multiple approaches per section, evaluating layout, content
            structure, and interaction before settling on a direction for each.
          </Text>
          <section className="flex flex-col gap-4 my-8">
            <div className="w-full flex flex-col lg:flex-row gap-2">
              <div className="relative w-full lg:w-1/2 h-80 md:h-150">
                <Image
                  src="/images/case-studies/ust-technovation-society/before-hero.webp"
                  alt="Context label without label"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-scale-down md:object-cover"
                />
              </div>

              <div className="relative w-full lg:w-1/2 h-80 md:h-150">
                <Image
                  src="/images/case-studies/ust-technovation-society/after-hero.webp"
                  alt="With label"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-scale-down md:object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Text as="h3" variant="h3">
                Creating a clear action hierarchy
              </Text>
              <Text variant="body-md" className="text-subtle-foreground">
                In the hero section, I initially designed a primary CTA
                alongside a secondary outlined action, establishing hierarchy
                rather than presenting both with equal visual weight. During
                implementation, the hero was simplified down to a single
                outlined &#34;Learn more&#34;. At the point visitors first land,
                prompting them to explore the organization won a soft,
                lower-commitment action over pushing them toward a harder one
                immediately. I also added a second, more direct CTA near the end
                of the page, so a firmer next step was still available once
                visitors had actually read through the organization s
                information and activities.
              </Text>
            </div>
          </section>
          <section className="flex flex-col gap-4 my-8">
            <div className="w-full flex flex-col lg:flex-row gap-2">
              <div className="relative w-full lg:w-1/2 h-80 md:h-150">
                <Image
                  src="/images/case-studies/ust-technovation-society/division-cards.webp"
                  alt="Context label without label"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-scale-down md:object-cover"
                />
              </div>

              <div className="relative w-full lg:w-1/2 h-80 md:h-150">
                <Image
                  src="/images/case-studies/ust-technovation-society/article-post.webp"
                  alt="With label"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-scale-down md:object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Text as="h3" variant="h3">
                Giving structure to content
              </Text>
              <Text variant="body-md" className="text-subtle-foreground">
                During the time of designing the website, using large grid
                layouts appealed to me so I used a modular card layout to give
                each one distinct presence while keeping the section scannable
                without dumping too much text and letting images hook attention.
                For the article page, I looked to modern editorial sites for a
                content-first structure, prioritizing the title, metadata, and
                reading content ahead of related-article suggestions. What
                mostly aligned to me was the layout structure from{" "}
                <span className="text-foreground font-medium">Medium</span>,
                which aligns with the minimalism we were trying to implement and
                using the typography built earlier, showed hierarchy
                efficiently. For Contact & FAQ, I kept the interaction simple. A
                vertical list of expandable questions so visitors could scan
                available topics and reveal only what they needed.
              </Text>
            </div>
          </section>
          <section className="flex flex-col gap-4 my-8">
            <div className="relative w-full h-80 md:h-150">
              <Image
                src="/images/case-studies/ust-technovation-society/landing-carousel.webp"
                alt="Context label without label"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-scale-down"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Text as="h3" variant="h3">
                Balancing compactness with visibility
              </Text>
              <Text variant="body-md" className="text-subtle-foreground">
                For events section in the homepage, I considered implementing a
                grid of cards, but thought that users might be overwhelmed with
                the amount of information. My main solution was to use a
                carousel, considering that some events would have the risk of
                never being seen as one of the tradeoffs to surface multiple
                events without consuming excessive space, which was called for
                given how much other content the page already carried.
              </Text>
            </div>
          </section>
        </CaseStudySection>

        <CaseStudySection
          id="outcome"
          eyebrow="Outcome"
          heading="A Reusable Foundation, Launched"
          index={4}
        >
          <Text variant="body-md" className="text-subtle-foreground">
            After a few months, the finished design was handed off to the
            devlopmment team of the organization and launched its first official
            website, bringing a cohesive visual identity, a shared design
            system, and various page experiences into one consistent product
            that is still being used today. Working alongside development
            through implementation showed where the original design held up, and
            where it needed adjustment once it became a real, interactive
            product rather than static screens.
          </Text>
        </CaseStudySection>
        <CaseStudySection
          id="takeaway"
          eyebrow="Takeaway"
          heading="Lessons learned"
          index={5}
        >
          <Text variant="body-md" className="text-subtle-foreground">
            <span className="text-foreground font-medium">
              Compactness and discoverability are not the same goal.
            </span>{" "}
            The events carousel kept the landing page concise, but after launch,
            I realized content beyond the first visible item could easily be
            missed by visitors who were just skimming. Making content available
            isn&rsquo;t the same as making it discoverable as design can
            successfully reduce vertical space while still making some
            information less visible than it should be.
          </Text>
          <Text variant="body-md" className="text-subtle-foreground">
            <span className="text-foreground font-medium">
              A design system has to serve the whole product, not one screen.
            </span>{" "}
            Typography, components, and layout decisions had to stay consistent
            across page types with very different content needs, which meant
            thinking beyond any single screen while still designing each one.
          </Text>
          <Text variant="body-md" className="text-subtle-foreground">
            <span className="text-foreground font-medium">
              There is always one more change.
            </span>{" "}
            The gap between the planned hero (two actions) and the shipped hero
            (one) wasn&rsquo;t a failure of the original design, it was the
            implementation process doing exactly what it should, testing the
            design against reality and adjusting.
          </Text>
        </CaseStudySection>
      </CaseStudyBody>
      <CaseStudyLiveSite href="https://www.usttechsoc.org/" />
    </CaseStudyLayout>
  );
}
