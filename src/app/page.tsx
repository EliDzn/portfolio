import Hero from "@/components/sections/hero/hero";
import PageGrid from "../components/layout/page-grid";
import Contact from "@/components/sections/contact/contact";
import About from "@/components/sections/about/about";
import Expertise from "@/components/sections/expertise/expertise";
import Projects from "@/components/sections/projects/projects";
import Intent from "@/components/sections/intent/intent";

export default function Home() {
  return (
    <>
      <PageGrid>
        <Hero />
        <Intent />
        <About />
        <Projects />
        <Expertise />
        <Contact />
      </PageGrid>
    </>
  );
}
