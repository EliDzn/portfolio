import PhilosophyText from "@/components/sections/philosophy/philosophy-text/philosophy-text";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="col-span-full grid min-h-screen grid-cols-subgrid items-center"
    >
      <PhilosophyText className="col-span-full min-w-0 lg:col-start-2 lg:col-span-10" />
    </section>
  );
}
