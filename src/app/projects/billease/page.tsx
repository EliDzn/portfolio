import CaseStudyLayout from "@/components/case-studies/case-study-layout";
import CaseStudyHero from "@/components/case-studies/hero/case-study-hero";
import CaseStudyBody from "@/components/case-studies/case-study-body";
import CaseStudySection from "@/components/case-studies/case-study-section";
import Text from "@/components/ui/typography";

export default function BillEasePage() {
  const metaData = [
    {
      label: "Discipline",
      values: ["UI/UX Design", "Web Design", "Design Systems"]
    },
    {
      label: "Role",
      values: ["UI/UX Designer"]
    },
    {
      label: "Timeline",
      values: ["August 2025"]
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
          src: "/images/BillEase.jpg",
          alt: "BillEase centralized invoice app"
        }}
        content={{
          title: "BillEase: Centralized Invoice App",
          desc: "A centralized invoicing experience designed to reduce the effort of managing invoices, clients, and products or services across separate tools."
        }}
        meta={metaData}
      />
      <CaseStudyBody>
        <CaseStudySection
          id="problem"
          eyebrow="Problem"
          heading="Simplify small business invoicing"
          index={1}
        >
          <Text variant="body-md" className="text-subtle-foreground">
            Small business owners were managing invoices, clients, and product
            information across separate tools. They used spreadsheets for
            tracking, one app for invoicing, another for managing offerings.
            That separation meant losing draft invoices, forgetting to update
            product details, and re-entering the same information in multiple
            places.
          </Text>
          <Text variant="body-md" className="text-subtle-foreground">
            The challenge wasn&rsquo;t just building an invoicing tool. It was
            bringing these related tasks into one place, without making the
            experience more complicated for people who may have never used
            invoicing software before.
          </Text>
        </CaseStudySection>

        <CaseStudySection
          id="discovery"
          eyebrow="Discovery"
          heading="Reducing friction"
          index={2}
        >
          <Text variant="body-md" className="text-subtle-foreground">
            Interviews with small business owners surfaced the same friction
            repeatedly, manual spreadsheets, and switching between multiple apps
            just to keep client and product information current. I translated
            these into three personas and journeys to see how different types of
            owners actually approached invoicing. A competitive audit with{" "}
            <span className="text-foreground font-medium">
              Mochi, Invoice Ninja, and Notion
            </span>{" "}
            showed the same separation found in existing tools: invoicing,
            clients, and inventory treated as separate destinations, sometimes
            across entirely separate products.
          </Text>
          <Text variant="body-md" className="text-subtle-foreground">
            Research and audit converged on three priorities that drove every
            decision that follows:
          </Text>
          {/* <ol className="list-decimal pl-5 flex flex-col gap-1">
            <Text as="li" variant="body-md" className="text-subtle-foreground ">
              <span className="text-foreground font-medium">
                Reduce the work:
              </span>{" "}
              Fewer steps for repetitive tasks like creating and updating
              invoices.
            </Text>
            <Text as="li" variant="body-md" className="text-subtle-foreground ">
              <span className="text-foreground font-medium">
                Centralize without overwhelming:
              </span>{" "}
              Bring clients, invoices, and products/services into one place
              without a wall of navigation.
            </Text>
            <Text as="li" variant="body-md" className="text-subtle-foreground ">
              <span className="text-foreground font-medium">
                Design for first-time confidence:
              </span>{" "}
              Make the product legible to people with no prior invoicing
              software experience.
            </Text>
          </ol> */}
          <div className="w-full flex flex-col lg:flex-row text-center items-center md::divide-y-0 md:divide-x divide-muted-foreground my-4">
            <Text
              variant="h4"
              className="w-1/3 h-full flex items-center justify-center"
            >
              Reduce the Work
            </Text>
            <Text
              variant="h4"
              className="w-1/3 h-full flex items-center justify-center"
            >
              Centralize without overwhelming
            </Text>
            <Text
              variant="h4"
              className="w-1/3 h-full flex items-center justify-center"
            >
              Design for first-time confidence
            </Text>
          </div>
        </CaseStudySection>

        <CaseStudySection
          id="approach"
          eyebrow="Approach"
          heading="Centralize & Minimize"
          index={3}
        >
          <Text variant="body-md" className="text-subtle-foreground">
            I moved through the three priorities as low-fidelity wireframes,
            testing with 5 participants across multiple rounds before committing
            to high-fidelity screens. Early rounds proved friction in
            navigation, labeling, hierarchy, and content visibility which were
            treated as input for the next iteration to immediately fix.
          </Text>
        </CaseStudySection>

        <CaseStudySection
          id="outcome"
          eyebrow="Outcome"
          heading="Centralized, and understandable"
          index={4}
        >
          <Text variant="body-md" className="text-subtle-foreground">
            BillEase brought clients, invoicing, and products/services into one
            coherently organized experience instead of three disconnected tools.
            By the final round of testing, the core experience held up.
            Navigation and workflows felt clear to most participants, and
            information was consistently easy to find. Some navigation and
            labeling friction remained, a reminder that first-time confidence is
            never fully &#34;solved&#34;, just continuously reduced.
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
              Feedback is your bestfriend.
            </span>{" "}
            Getting feedback from testing exposed issues I hadn&apos;t
            considered going in, particularly around navigation, labeling, and
            information hierarchy.
          </Text>
          <Text variant="body-md" className="text-subtle-foreground">
            <span className="text-foreground font-medium">
              Words are part of the interface.
            </span>{" "}
            Vague or overlapping language like the &#34;add&#34; and
            &#34;create&#34; a product, Template vs. Custom labelling made an
            otherwise simple workflow harder to understand than the layout
            itself ever did
          </Text>
          <Text variant="body-md" className="text-subtle-foreground">
            <span className="text-foreground font-medium">
              Simplicity requires judgment.
            </span>{" "}
            Centralizing features wasn&rsquo;t enough on its own. I also had to
            decide how those features should relate to one another, so the
            experience stayed understandable without overwhelming first-time
            users.
          </Text>
        </CaseStudySection>
      </CaseStudyBody>
    </CaseStudyLayout>
  );
}
