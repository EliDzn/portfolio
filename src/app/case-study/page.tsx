import Text from "@/components/ui/typography";
import Button from "@/components/ui/button";
import Link from "next/link";

export default function CaseStudy() {
  return (
    <main>
      <section className="w-full min-h-screen flex items-center justify-center">
        <div className="h-16 w-4/5 flex flex-col items-start">
          <Text as="h2" variant="h2">
            Page Unavailable
          </Text>
          <Text variant="body-md">
            Unfortunately, the requested page is not available as its still
            being developed.
          </Text>
          <Button variant="Primary" asChild className="mt-4">
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
