import Container from "./container";
import Text from "../ui/typography";

type FooterProps = {
  variant: "main" | "case-study";
};

const footerVariants = {
  main: "flex justify-center items-center py-6 text-center",
  "case-study":
    "flex flex-col sm:flex-row justify-between items-center py-6 border-t border-muted-foreground text-subtle-foreground"
};

export default function Footer({ variant }: FooterProps) {
  const content = (
    <>
      <div>
        <Text variant="caption">
          © {new Date().getFullYear()} Eli Aleandro M. Dizon
        </Text>
      </div>

      {variant !== "main" && (
        <div className="data-active:text-foreground data-active:font-medium transition-colors duration-200 flex flex-col text-center md:flex-row gap-4">
          <Text variant="caption">
            <a href="mailto:elialeandro.dizon@gmail.com">
              elialeandro.dizon@gmail.com
            </a>
          </Text>

          <Text variant="caption">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </Text>

          <Text variant="caption">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Text>
        </div>
      )}
    </>
  );

  return (
    <footer className="data-active:text-foreground data-active:font-medium transition-colors duration-200">
      {variant === "case-study" ? (
        <Container>
          <div className={footerVariants["case-study"]}>{content}</div>
        </Container>
      ) : (
        <div className={footerVariants.main}>{content}</div>
      )}
    </footer>
  );
}
