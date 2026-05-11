import Button from "../src/components/UI/button";
import Image from "next/image";
import WordSlider from "../src/components/UI/wordSlider";
import Header from "../src/components/UI/header";
import Section from "../src/components/UI/section";
import ItemGrid from "../src/components/UI/itemGrid";
import CaseItem from "../src/components/UI/caseItem";
import StepItem from "../src/components/UI/stepItem";
import { Check, Handshake, Lightbulb, SwitchCamera } from "lucide-react";

const carouselWords: string[] = [
  "Videoproductie",
  "Brand Films",
  "Marketing Strategie",
  "Cinematisch",
  "Storytelling",
  "Social Content",
  "Vakmanschap",
  "Videoproductie",
  "Brand Films",
  "Marketing Strategie",
  "Cinematisch",
  "Storytelling",
  "Social Content",
  "Vakmanschap",
];

const overItems = [
  {
    highlight: "100%",
    description: "Van A tot Z geregeld",
  },
  {
    highlight: "∞",
    description: "Enso — oneindige creativiteit",
  },
  {
    highlight: "4K",
    description: "Cinematische kwaliteit",
  },
  {
    highlight: "↑3×",
    description: "Gemiddelde conversie groei",
  },
];

export default function Cases() {
  return (
    <div>
      <div>
        <div
          className="h-[calc(100vh-10rem)] px-18 relative bg-gradient-hero-small bg-black flex flex-col gap-8 justify-center"
          id="hero"
        >
          <div className="mx-auto w-fit">
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

          <Image
            src="/visual.svg"
            className="absolute right-[-5%] top-[30%] -translate-y-1/2 opacity-5 w-2xl"
            alt="Logo"
            width={150}
            height={150}
          />
        </div>
        <Section
          background="dark"
          fullWidth={false}
          className="flex flex-col gap-10"
        >
          <ItemGrid cols={3}>
            <CaseItem
              aspectRatio="long"
              title="Techflow B.V."
              category="Marketing"
              description="Video campagne die IT-oplossingen begrijpelijk maakt voor beslissers."
              src="cases/image-2.jpg"
            />
            <CaseItem
              aspectRatio="long"
              title="Techflow B.V."
              category="Marketing"
              description="Video campagne die IT-oplossingen begrijpelijk maakt voor beslissers."
              src="cases/image-2.jpg"
            />
            <CaseItem
              aspectRatio="long"
              title="Techflow B.V."
              category="Marketing"
              description="Video campagne die IT-oplossingen begrijpelijk maakt voor beslissers."
              src="cases/image-2.jpg"
            />
            <CaseItem
              aspectRatio="long"
              title="Techflow B.V."
              category="Marketing"
              description="Video campagne die IT-oplossingen begrijpelijk maakt voor beslissers."
              src="cases/image-2.jpg"
            />
            <CaseItem
              aspectRatio="long"
              title="Techflow B.V."
              category="Marketing"
              description="Video campagne die IT-oplossingen begrijpelijk maakt voor beslissers."
              src="cases/image-2.jpg"
            />
            <CaseItem
              aspectRatio="long"
              title="Techflow B.V."
              category="Marketing"
              description="Video campagne die IT-oplossingen begrijpelijk maakt voor beslissers."
              src="cases/image-2.jpg"
            />
            <CaseItem
              aspectRatio="long"
              title="Techflow B.V."
              category="Marketing"
              description="Video campagne die IT-oplossingen begrijpelijk maakt voor beslissers."
              src="cases/image-2.jpg"
            />
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
