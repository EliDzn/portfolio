import Hero from "@/components/sections/hero/hero";
import PageGrid from "../components/layout/page-grid";
import Contact from "@/components/sections/contact/contact";
import About from "@/components/sections/about/about";
import Expertise from "@/components/sections/expertise/expertise";
import Projects from "@/components/sections/projects/projects";
import Philosophy from "@/components/sections/philosophy/philosophy";

export default function Home() {
  return (
    <>
      <PageGrid>
        <Hero />
        <Philosophy />
        <About />
        <Projects />
        <Expertise />
        <Contact />
      </PageGrid>
    </>
  );
}
