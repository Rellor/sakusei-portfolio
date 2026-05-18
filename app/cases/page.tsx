import Button from "../src/components/UI/button";
import Section from "../src/components/UI/section";
import ItemGrid from "../src/components/UI/itemGrid";
import CaseItem from "../src/components/UI/caseItem";
import { detailedCases } from "../../data/cases";

export default function Cases() {
  return (
    <div>
      <div>
        <div
          className="min-h-[calc(100vh-15rem)] px-18 relative bg-gradient-hero-small bg-black flex items-center"
          id="hero"
        >
          <div className="max-w-6xl mx-auto w-full min-h-72 flex flex-col justify-start">
            <p className="text-red uppercase text-[10px] tracking-[4px] w-fit">
              Ons werk
            </p>
            <h1 className="uppercase max-w-4xl text-white flex flex-col">
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
          className="text-white flex-col flex gap-8 items-center"
          background="red"
          fullWidth={false}
        >
          <h2>Uw project hier?</h2>
          <p>Laten we samen iets maken waar u trots op bent.</p>
          <Button
            text="Start een project"
            type="button"
            href="/contact"
            color="light"
          />
        </Section>
      </div>
    </div>
  );
}
