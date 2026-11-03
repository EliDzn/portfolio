import CaseStudyLayout from "@/components/case-studies/case-study-layout";
import CaseStudyHero from "@/components/case-studies/hero/case-study-hero";
import CaseStudyBody from "@/components/case-studies/case-study-body";
import CaseStudySection from "@/components/case-studies/case-study-section";
import Text from "@/components/ui/typography";
import Image from "next/image";
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
          id="solution"
          eyebrow="Solution"
          heading="A local-first resume workflow"
          index={2}
        >
          <Text variant="body-md" className="text-subtle-foreground">
            I designed the flow around progressive disclosure and AI-assisted
            enrichment. Users can start with rough information and refine it
            over time, rather than completing a large form upfront. The app
            combines structured resume editing, a live preview, and PDF export.
          </Text>

          <div className="relative my-4 aspect-video w-full">
            <Image
              src="/images/case-studies/resume-builder-v2/resume-builder-v2.webp"
              alt="Resume Builder v2 editor, resume preview, and AI insights panel"
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-contain"
            />
          </div>

          <Text variant="body-md" className="text-subtle-foreground">
            Section changes require explicit activation. I chose this over
            hover-driven expansion because changing sections is an intentional
            navigation action, not a response to passive pointer movement.
          </Text>

          <Text variant="caption" className="text-subtle-foreground">
            Resume data stays in the browser. Resume details and job
            descriptions are sent for AI-powered operations only after the user
            confirms.
          </Text>
        </CaseStudySection>

        <CaseStudySection
          id="implementation"
          eyebrow="Implementation"
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
            I also debounced resume preview PDF generation and cleaned up PDF.js
            resources to keep preview updates responsive and release resources
            after use.
          </Text>
        </CaseStudySection>

        <CaseStudySection
          id="validation"
          eyebrow="Validation"
          heading="Tested and optimized"
          index={4}
        >
          <Text variant="body-md" className="text-subtle-foreground">
            I added 70 automated tests: 56 unit tests, 4 Redis integration
            tests, and 10 Playwright end-to-end tests.
          </Text>

          <Text variant="body-md" className="text-subtle-foreground">
            I reduced the initial JavaScript bundle from 2.5 MB to 554 KB, and
            its gzip size from 844 KB to 175 KB. The finished application is
            deployed and working.
          </Text>
          <CaseStudyLiveSite href="https://resume-builder-v2-elidizon.vercel.app/" />
        </CaseStudySection>
      </CaseStudyBody>
    </CaseStudyLayout>
  );
}
