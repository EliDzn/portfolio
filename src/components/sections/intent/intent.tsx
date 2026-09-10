import IntentText from "@/components/sections/intent/intent-text/intent-text";

export default function Intent() {
  return (
    <section
      id="intent"
      className="col-span-full grid min-h-screen grid-cols-subgrid items-center"
    >
      <IntentText className="col-span-full min-w-0 lg:col-start-2 lg:col-span-10" />
    </section>
  );
}
