import Image from "next/image";
import Text from "../ui/typography";
import CertificateEntry from "../ui/certificate-entry";

export default function About() {
  const certificates = [
    {
      issuer: "Google",
      title: "UX Design Professional Certificate (v2)",
      date: "Nov 2025"
    },
    {
      issuer: "freeCodeCamp",
      title: "Front End Development Libraries",
      date: "May 2024"
    },
    {
      issuer: "freeCodeCamp",
      title: "JavaScript Algorithms and Data Structures",
      date: "July 2024"
    },
    {
      issuer: "freeCodeCamp",
      title: "Responsive Web Design",
      date: "Jan 2023"
    }
  ];

  return (
    <section
      id="about"
      className="col-span-full grid min-h-screen grid-cols-subgrid items-start"
    >
      <Text as="h2" variant="h2" className="col-span-full mb-2 uppercase">
        About
      </Text>

      <div className="col-span-full grid grid-cols-subgrid items-start gap-y-8">
        <div className="col-span-full flex flex-col gap-2 lg:col-span-6 lg:row-span-2">
          <div className="relative aspect-square overflow-hidden bg-muted-foreground/20">
            <Image
              src="/images/EliDizon.jpeg"
              alt="Portrait of Eli Dizon"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <Text
            as="p"
            variant="body-lg"
            className="font-semibold text-end uppercase"
          >
            Eli Dizon
          </Text>
        </div>

        <div className="col-span-full flex flex-col gap-6 lg:col-start-7 lg:col-span-3 lg:row-start-1">
          <section>
            <Text
              as="h3"
              variant="h3"
              className="mb-2 border-b-2 border-foreground"
            >
              Bio
            </Text>

            <Text variant="body-md">
              Offers creative solutions with seamless user experience based on a
              user-centered, data-driven approach to design.
            </Text>
          </section>

          <section>
            <Text
              as="h3"
              variant="h3"
              className="mb-2 border-b-2 border-foreground"
            >
              Tech Stack
            </Text>

            <Text variant="body-md">
              Proficient in HTML, CSS, JavaScript, and frameworks such as React
              and Next.js.
            </Text>
          </section>
        </div>

        <section className="col-span-full lg:col-start-10 lg:col-span-3 lg:row-start-1">
          <Text
            as="h3"
            variant="h3"
            className="mb-2 border-b-2 border-foreground"
          >
            Certifications
          </Text>

          <div className="flex flex-col gap-4">
            {certificates.map((certificate) => (
              <CertificateEntry
                key={`${certificate.issuer}-${certificate.title}`}
                {...certificate}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
