import CaseStudyLayout from "@/components/case-studies/case-study-layout";
import CaseStudyHero from "@/components/case-studies/hero/case-study-hero";
import CaseStudyBody from "@/components/case-studies/case-study-body";
import CaseStudySection from "@/components/case-studies/case-study-section";
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
          src: "/images/case-studies/billease/BillEase.webp",
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
          <div className="w-full flex flex-col lg:flex-row text-center items-center md:gap-0 divide-y md:divide-y-0 md:divide-x divide-muted-foreground my-4">
            <Text
              variant="h4"
              className="w-4/5 md:w-1/3 h-full flex items-center justify-center py-4 md:py-0"
            >
              Reduce the Work
            </Text>
            <Text
              variant="h4"
              className="w-4/5 md:w-1/3  h-full flex items-center justify-center py-4 md:py-0"
            >
              Centralize without overwhelming
            </Text>
            <Text
              variant="h4"
              className="w-4/5 md:w-1/3  h-full flex items-center justify-center py-4 md:py-0"
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
          <section className="flex flex-col gap-4 my-6">
            <div className="w-full flex flex-col lg:flex-row gap-2">
              <div className="relative w-full lg:w-1/2 h-80 md:h-150">
                <Image
                  src="/images/case-studies/billease/before-invoice.webp"
                  alt="Context label without label"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-scale-down md:object-cover"
                />
              </div>

              <div className="relative w-full lg:w-1/2 h-80 md:h-150">
                <Image
                  src="/images/case-studies/billease/after-invoice.webp"
                  alt="With label"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-scale-down md:object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Text as="h3" variant="h3">
                Consolidating the invoice flow
              </Text>
              <Text variant="body-md" className="text-subtle-foreground">
                The invoice flow had no direct way to specify which product or
                service was being invoiced, so people had to manage that
                separately, which is exactly the kind of tool-switching BillEase
                was meant to eliminate. I added a product/service input directly
                inside the invoice flow, so everything needed to create one
                lives in the same place.
              </Text>
            </div>
          </section>
          <section className="flex flex-col gap-4 my-6">
            <div className="w-full flex flex-col lg:flex-row gap-2">
              <div className="relative w-full lg:w-1/2 h-80 md:h-150">
                <Image
                  src="/images/case-studies/billease/before-label.webp"
                  alt="Context label without label"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-scale-down md:object-cover"
                />
              </div>

              <div className="relative w-full lg:w-1/2 h-80 md:h-150">
                <Image
                  src="/images/case-studies/billease/after-label.webp"
                  alt="With label"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-scale-down md:object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Text as="h3" variant="h3">
                Reorganizing the dashboard
              </Text>
              <Text variant="body-md" className="text-subtle-foreground">
                The initial dashboard listed Clients, Invoices, and Inventory as
                separate, equal-weight destinations. Testing showed people
                hesitated over where to find Products & Services specifically,
                indicating that the relationship between the three areas
                wasn&rsquo;t visible in the interface. I reorganized the
                dashboard around the user flow, first with clients, then
                invoices, then products & services instead of a flat feature
                list, and renamed &#34;Current Inventory&#34; to &#34;Products &
                Services&#34; so the label matched what it covered. This made
                existing functionality easier to find.
              </Text>
            </div>
          </section>
          <section className="flex flex-col gap-4 my-6">
            <div className="flex flex-col gap-1">
              <Text as="h3" variant="h3">
                Clarifying language
              </Text>
              <Text variant="body-md" className="text-subtle-foreground">
                Testing surfaced friction that had nothing to do with layout as
                people couldn&rsquo;t distinguish &#34;add a new product&#34;
                from &#34;create a new product&#34;, and hesitated over Template
                vs. Custom client creation. I tightened the wording so actions
                were distinct, and added short contextual descriptions
                throughout rather than relying on labels alone to carry meaning.
                First-time confidence meant people shouldn&rsquo;t need to
                already understand the product&rsquo;s structure to know what a
                button does.
              </Text>
            </div>
          </section>

          <section className="flex flex-col my-6">
            <div className="flex flex-col gap-1">
              <Text as="h3" variant="h3">
                What testing showed
              </Text>
              <Text variant="body-md" className="text-subtle-foreground">
                Early prototypes had 3/5 participants confused by navigation or
                labeling, by later high-fidelity rounds that dropped to 2/5,
                while participants finding the information clear and accessible
                rose to 5/5. These are directional signals from a 5 participants
                told me at each round exactly what to fix next.
              </Text>
            </div>
          </section>
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
