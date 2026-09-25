import Text from "../ui/typography";
import Container from "../layout/container";

export default function CaseStudyFooter() {
  return (
    <footer>
      <Container>
        <div>© {new Date().getFullYear()} Eli Dizon</div>

        <div>
          <Text variant="fineprint">LinkedIn</Text>
          <Text variant="fineprint">GitHub</Text>
          <Text variant="fineprint">elialeandro.dizon@gmail.com</Text>
        </div>
      </Container>
    </footer>
  );
}
