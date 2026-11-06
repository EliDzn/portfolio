import CaseStudyLayout from "@/components/case-studies/case-study-layout";
import CaseStudyHero from "@/components/case-studies/case-study-hero";
import CaseStudyBody from "@/components/case-studies/case-study-body";
import CaseStudySection from "@/components/case-studies/case-study-section";
import Text from "@/components/ui/typography";
import { getProjectBySlug } from "@/data/projects";
import CaseStudyLiveSite from "@/components/case-studies/case-study-live-site";

export default function ResumeBuilderV2Page() {
  const project = getProjectBySlug("resume-builder-v2");

  return (
    <CaseStudyLayout>
      <CaseStudyHero project={project} />

      <CaseStudyBody>
        <CaseStudySection
          id="problem"
          eyebrow="Problem"
          heading="Create resumes tailored to each opportunity"
          index={1}
        >
          <Text variant="body-md" className="text-subtle-foreground">
            Creating a resume carries high cognitive load: people repeatedly
            translate their experience into structured fields, then tailor it to
            each job description. Resume Builder v2 brings resume creation and
            job-aligned insights into one workflow, with ATS optimization in
            mind.
          </Text>
        </CaseStudySection>

        <CaseStudySection
          id="discovery"
          eyebrow="Discovery"
          heading="A local-first resume workflow"
          index={2}
        >
          <Text variant="body-md" className="text-subtle-foreground">
            I designed the flow around progressive disclosure and AI-assisted
            enrichment. Users can start with rough information and refine it
            over time, rather than completing a large form upfront. The app
            combines structured resume editing, a live preview, and PDF export.
          </Text>

          <Text variant="body-md" className="text-subtle-foreground">
            Section changes require explicit activation. I chose this over
            hover-driven expansion because changing sections is an intentional
            navigation action, not a response to passive pointer movement.
          </Text>

          <Text variant="body-md" className="text-subtle-foreground">
            Resume data stays in the browser. Resume details and job
            descriptions are sent for AI-powered operations only after the user
            confirms.
          </Text>
        </CaseStudySection>

        <CaseStudySection
          id="architecture"
          eyebrow="Architecture"
          heading="Local persistence with focused AI requests"
          index={3}
        >
          <Text variant="body-md" className="text-subtle-foreground">
            I built the application with React and Vite around local-first
            persistence. IndexedDB is the client-side persistence layer and
            source of truth, so resume data remains available in the browser
            without user accounts. The AI layer is reserved for operations that
            need a network connection.
          </Text>

          <Text variant="body-md" className="text-subtle-foreground">
            Vercel serverless functions securely orchestrate Gemini-powered
            document extraction and resume generation. When users request AI
            insights, they confirm before resume details and the job description
            are sent for processing.
          </Text>

          <Text variant="body-md" className="text-subtle-foreground">
            One of the largest technical problems was the side effects of using
            react-pdf, where everytime you typed, it would crete a flickering
            effect. This was fixed by debouncing the resume preview PDF
            generation and cleaned up PDF.js resources to keep preview updates
            responsive and release resources after use.
          </Text>
          <Text variant="body-md" className="text-subtle-foreground">
            Various forms of testing were the last part of development as I
            added 70 automated tests: 56 unit tests, 4 Redis integration tests,
            and 10 Playwright end-to-end tests. All were made to ensure edge
            cases were accounted for and the application handled them proprly
          </Text>

          <Text variant="body-md" className="text-subtle-foreground">
            I reduced the initial JavaScript bundle from 2.5 MB to 554 KB, and
            its gzip size from 844 KB to 175 KB. The finished application is
            deployed and working.
          </Text>
        </CaseStudySection>

        <CaseStudySection
          id="takeaways"
          eyebrow="Takeaways"
          heading="Tested and optimized"
          index={4}
        >
          <Text variant="body-md" className="text-subtle-foreground">
            Design-wise on the the key problems that I had to handle was account
            for form fatigue and learned that providing focus on one thing at a
            time while at the same time letting the user take control was the
            balance that I learned. Progressive disclosure is key in processes
            such as onboarding and filling out forms
          </Text>
          <Text variant="body-md" className="text-subtle-foreground">
            This was also my first project properly integrating an AI API using
            the Gemini API where I learned how to properly hide key on the
            server-side, implement caching, and even limit rating.
          </Text>
          <CaseStudyLiveSite href="https://resume-builder-v2-elidizon.vercel.app/" />
        </CaseStudySection>
      </CaseStudyBody>
    </CaseStudyLayout>
  );
}
