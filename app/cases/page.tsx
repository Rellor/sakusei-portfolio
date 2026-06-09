import type { Metadata } from "next";
import Button from "../src/components/UI/button";
import Section from "../src/components/UI/section";
import ItemGrid from "../src/components/UI/itemGrid";
import CaseItem from "../src/components/UI/caseItem";
import { detailedCases } from "../../data/cases";

export const metadata: Metadata = {
  title: "Cases",
  description:
    "Bekijk geselecteerde videoproductie-cases van Sakusei Studio. Van brand films tot social content — elk project is een verhaal.",
};

export default function Cases() {
  return (
    <div>
      <div>
        <div
          className="md:px-18 px-4 md:py-40 py-28 pt-40 relative bg-gradient-hero-small bg-black"
          id="hero"
        >
          <div className="max-w-6xl mx-auto w-full">
            <p className="text-red uppercase font-semibold text-[11px] tracking-[2px] w-fit">
              Ons werk
            </p>
            <h1 className="max-w-4xl text-white flex flex-col">
              Geselecteerde
              <span className="text-red"> Cases.</span>
            </h1>
            <p className="text-white/55 max-w-xl">
              Elk project is een verhaal. Hieronder ziet u hoe wij de passie
              achter uiteenlopende merken vertalen naar visuals die blijven
              hangen.
            </p>
          </div>
        </div>
        <Section
          background="dark"
          fullWidth={false}
          className="flex flex-col gap-10"
          noTopPadding={true}
        >
          <ItemGrid aspectRatio="long" cols={3}>
            {Object.values(detailedCases).map((c) => (
              <CaseItem
                key={c.button.slug}
                slug={c.button.slug}
                title={c.button.title}
                category={c.project.type}
                description={c.brief.description}
                src={c.button.src}
              />
            ))}
          </ItemGrid>
        </Section>
        <Section
          className="text-white flex-col flex gap-8 md:items-center"
          background="red"
          fullWidth={false}
        >
          <h2>Uw project hier?</h2>
          <p>Laten we samen iets maken waar u trots op bent.</p>
          <Button
            text="Start een project"
            type="button"
            href="https://koalendar.com/e/sakusei"
            color="light"
            className="max-md:w-full max-md:justify-center"
          />
        </Section>
      </div>
    </div>
  );
}
