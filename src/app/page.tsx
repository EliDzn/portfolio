import Hero from "../components/sections/hero";
import PageGrid from "../components/layout/page-grid";
import Contact from "../components/sections/contact";
import About from "../components/sections/about";
import Expertise from "../components/sections/expertise";
import Projects from "../components/sections/projects";
import Intent from "@/components/sections/intent";

export default function Home() {
  return (
    <>
      <main>
        <PageGrid>
          <Hero />
          <Intent />
          <About />
          <Projects />
          <Expertise />
          <Contact />
        </PageGrid>
      </main>
    </>
  );
}
