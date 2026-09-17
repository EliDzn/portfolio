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
          id="brief"
          eyebrow="Brief"
          heading="An efficiency problem"
          index={1}
        >
          <Text variant="body-md" className="text-subtle-foreground">
            Design an app and responsive website that help small business owners
            send and track invoices for their services. Early research showed
            that users were frustrated by working across different accounting
            tools, including losing draft invoices and forgetting to update
            product information. The goal was to create a straightforward
            experience that brought these related tasks together while making
            invoice and inventory management simpler.
          </Text>
        </CaseStudySection>

        <CaseStudySection
          id="objectives"
          eyebrow="Objectives"
          heading="Reducing friction"
          index={2}
        >
          <ul className="list-disc pl-5 flex flex-col gap-1">
            <Text as="li" variant="body-md" className="text-subtle-foreground">
              Reduce the effort of invoicing by making common tasks more direct
              and minimizing unnecessary steps.
            </Text>
            <Text as="li" variant="body-md" className="text-subtle-foreground">
              Centralize related business tasks by bringing clients, invoices,
              and products & services into one experience.
            </Text>
            <Text as="li" variant="body-md" className="text-subtle-foreground">
              Improve first-time confidence by making navigation, terminology,
              and key actions easier to understand.
            </Text>
          </ul>
        </CaseStudySection>

        <CaseStudySection
          id="problem"
          eyebrow="Problem"
          heading="Centralize & Minimize"
          index={3}
        >
          <Text variant="body-md" className="text-subtle-foreground">
            Managing invoices often meant switching between separate tools for
            clients, products, and financial information. This fragmented
            workflow added unnecessary steps and made it easier to lose track of
            information.{" "}
            <strong className="text-foreground">
              The challenge was to bring these related tasks into one place
              without making the experience more complicated.
            </strong>{" "}
            BillEase needed to reduce the effort involved in managing invoices
            while keeping the workflow clear for users who may be unfamiliar
            with invoicing software.
          </Text>
        </CaseStudySection>
        <CaseStudySection
          id="research"
          eyebrow="Research"
          heading="Honest work"
          index={4}
        >
          <Text variant="body-md" className="text-subtle-foreground">
            Research from interview transcripts highlighted recurring
            difficulties with manual spreadsheets and switching between multiple
            applications. I translated these findings into three personas and
            user journeys to understand how different users approached invoicing
            and business management.
          </Text>
        </CaseStudySection>
        <CaseStudySection
          id="competitive-audit"
          eyebrow="Competitive Audit"
          heading="Simpler the better"
          index={5}
        >
          <Text variant="body-md" className="text-subtle-foreground">
            I reviewed existing products to understand how invoicing and
            business-management tools approached these problems. The audit
            included:, Mochi, Invoice Ninja , and Notion. The review helped
            identify opportunities around simplifying workflows, making
            important actions more accessible, and balancing functionality with
            ease of use.
          </Text>
        </CaseStudySection>
        <CaseStudySection
          id="approach"
          eyebrow="Approach"
          heading="Simpler the better"
          index={6}
        >
          <Text variant="body-md" className="text-subtle-foreground">
            I explored the core workflows through low-fidelity wireframes and
            tested them iteratively with 5 participants across multiple
            rounds.These findings guided refinements throughout the transition
            from low-fidelity wireframes to high-fidelity prototypes. Rather
            than treating usability testing as a final check, I used each round
            to identify friction and determine what needed to change in the next
            iteration.
          </Text>
        </CaseStudySection>
        <CaseStudySection
          id="validation"
          eyebrow="Validation"
          heading="Clarity is key"
          index={7}
        >
          <Text variant="body-md" className="text-subtle-foreground">
            I tested the evolving prototype with 5 participants across multiple
            rounds, using each round to identify friction and refine the
            interface. Early testing showed that the core flow was generally
            understandable, but navigation, labeling, and visual hierarchy
            created points of hesitation.
          </Text>
        </CaseStudySection>
        <CaseStudySection
          id="outcome"
          eyebrow="Outcome"
          heading="Centralized Invoice App"
          index={8}
        >
          <Text variant="body-md" className="text-subtle-foreground">
            The final design brought **clients, invoices, and products &
            services into one centralized experience, with the dashboard
            reorganized to make the relationship between these areas clearer.
            Later usability testing indicated that the core experience was
            generally understandable. Some navigation and labeling issues
            remained, highlighting opportunities for further refinement. The
            project demonstrated that centralizing functionality alone is not
            enough. The relationships between those functions also need to be
            understandable.
          </Text>
        </CaseStudySection>
        <CaseStudySection
          id="takeaway"
          eyebrow="Takeaway"
          heading="Lessons Learned"
          index={9}
        >
          <Text variant="body-md" className="text-subtle-foreground">
            The initial dashboard treated Clients, Invoices, and Inventory as
            separate destinations. However, usability testing showed that users
            could hesitate when looking for certain functions, particularly
            Products & Services. I saw an opportunity to make the dashboard
            communicate the relationship between these areas rather than simply
            presenting them as a list of features. The research and user
            journeys showed that client information and product or service
            details were closely connected to the invoicing process. I used that
            relationship as a clearer organizing model for the dashboard
          </Text>
        </CaseStudySection>
      </CaseStudyBody>
    </CaseStudyLayout>
  );
}
