import Text from "@/components/ui/typography";
import Button from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section
        id="error-404"
        className="col-span-full grid min-h-screen grid-cols-subgrid items-start"
      >
        <div className="w-full h-full flex flex-col justify-center items-center gap-4">
          <div className="w-full flex flex-col justify-center items-center text-center">
            <Text
              variant="body-lg"
              className="text-accent uppercase font-medium"
            >
              404
            </Text>
            <Text as="h1" variant="h1">
              Page not Found
            </Text>
            <Text variant="body-md" className="text-muted-foreground">
              Sorry, but the page you were looking for cannot be found or does
              not exist.
            </Text>
          </div>
          <Button variant="Primary" asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
