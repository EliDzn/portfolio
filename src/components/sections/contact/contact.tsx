import Text from "@/components/ui/typography";

export default function Contact() {
  return (
    <section
      id="contact"
      className="col-span-full grid min-h-screen grid-cols-4 grid-rows-[1fr_auto_auto] gap-4 md:grid-cols-8 md:gap-6 lg:grid-cols-12 lg:gap-8"
    >
      <div className="col-span-full w-full flex flex-col justify-center flex-1 gap-20">
        <div className="items-start">
          <Text as="h2" variant="h2" className="uppercase">
            Let&apos;s connect & build something meaningful
          </Text>

          <Text variant="body-lg">
            Want to collaborate with me or share an idea? Send me a message on
            any of these:
          </Text>
        </div>

        <div className="text-end flex flex-col gap-1">
          <a
            href="mailto:elialeandro.dizon@gmail.com"
            className="text-body-md-desktop"
          >
            Email
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-md-desktop"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/EliDzn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-md-desktop"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="col-span-full row-start-3">
        <Text variant="caption" className="text-center py-4">
          © {new Date().getFullYear()}, Eli Aleandro M. Dizon
        </Text>
      </div>
    </section>
  );
}
