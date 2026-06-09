import type { Metadata } from "next";
import Button from "./src/components/UI/button";
import Image from "next/image";
import WordSlider from "./src/components/UI/wordSlider";
import Header from "./src/components/UI/header";
import Section from "./src/components/UI/section";
import ItemGrid from "./src/components/UI/itemGrid";
import CaseItem from "./src/components/UI/caseItem";
import StepItem from "./src/components/UI/stepItem";
import { Check, Handshake, Lightbulb, SwitchCamera } from "lucide-react";
import { detailedCases } from "../data/cases";

export const metadata: Metadata = {
  title: "Home | Sakusei Studio",
  description:
    "Sakusei vertaalt de identiteit en het verhaal van uw bedrijf naar cinematische videocontent die raakt, blijft hangen en vertrouwen opbouwt.",
};

const carouselWords: string[] = [
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

export default function Home() {
  return (
    <div>
      <div>
        <div
          className="overflow-hidden w-screen lg:h-screen h-[calc(100vh-5rem)] xl:px-20 lg:px-12 px-4 relative bg-gradient-hero bg-black flex flex-col gap-8 justify-center"
          id="hero"
        >
          <h1 className="max-w-4xl text-white">
            Wanneer passie strategie ontmoet valt{" "}
            <span className="text-red">niemand </span>meer onopgemerkt.
          </h1>
          <p className="text-white/55 max-w-xl">
            Sakusei vertaalt de identiteit en het verhaal van uw bedrijf naar
            cinematische videocontent die raakt, blijft hangen en vertrouwen
            opbouwt.
          </p>
          <div className="flex max-sm:flex-col lg:gap-8 gap-2 md:items-center">
            <Button
              text="Plan een gesprek"
              type="button"
              href="/contact"
              className="max-md:w-full max-md:justify-center"
            />
            <Button
              text="Bekijk cases"
              type="link"
              href="/cases"
              hasLine={true}
            />
          </div>

          <Image
            src="/visual.svg"
            className="absolute right-[-5%] top-[30%] -translate-y-1/2 opacity-5 w-2xl"
            alt="Logo"
            width={150}
            height={150}
          />
        </div>
        <WordSlider items={carouselWords} />
        <Section
          background="light"
          fullWidth={false}
          className="flex flex-col gap-10"
        >
          <Header
            title="Moderne visuals. Japanse precisie."
            subtitle="Over Sakusei"
            style="dark"
          />
          <div className="flex max-lg:flex-col gap-12 justify-between">
            <div className="flex flex-col gap-6 max-w-lg">
              <p>
                Wij zijn Sakusei, een videoproductiebedrijf gebaseerd in
                Purmerend, <b>gedreven</b> door vakmanschapen het streven naar
                de pure creatieve energie van het hier-en-nu.
              </p>
              <p>
                Van concept tot montage regelen wij alles. U hoeft zich geen
                zorgen te maken over script of techniek. Wij zorgen voor het
                topresultaat.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 w-fit">
              {overItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col border-l-2 border-red pl-4"
                >
                  <h3 className="text-6xl!">{item.highlight}</h3>
                  <p className="text-black/55">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <Button
            text="Leer ons kennen"
            type="button"
            href="/about"
            className="max-md:w-full max-md:justify-center"
          />
        </Section>

        <Section
          background="dark"
          fullWidth={false}
          className="flex flex-col gap-10"
        >
          <Header
            title="Geselecteerde cases"
            subtitle="Ons werk"
            style="light"
            linkText="Alle cases"
            link="/cases"
          />
          <ItemGrid cols={2}>
            {Object.values(detailedCases).map((c) => (
              <CaseItem
                key={c.button.slug}
                slug={c.button.slug}
                title={c.button.title}
                category={c.project.type}
                description={c.brief.description}
                src={c.button.src}
                rowSpan={c.button.rowspan}
              />
            ))}
          </ItemGrid>
        </Section>
        <Section
          background="light"
          fullWidth={false}
          className="flex flex-col gap-10"
        >
          <Header
            title="Van idee tot impact."
            subtitle="Hoe het werkt"
            style="dark"
          />
          <ItemGrid cols={4}>
            <StepItem
              icon={<Handshake className="stroke-white" />}
              amount={1}
              title="Kennismaking"
              description="We leren uw merk, doelen en doelgroep kennen. Geen standaard aanpak — elk project begint uniek."
            />
            <StepItem
              icon={<Lightbulb className="stroke-white" />}
              amount={2}
              title="Concept"
              description="Script, storyboard en strategie — wij regelen alles zodat u zich kunt focussen op uw bedrijf."
            />
            <StepItem
              icon={<SwitchCamera className="stroke-white" />}
              amount={3}
              title="Productie"
              description="Professionele opname met cinematische apparatuur. Van locatie tot licht — wij zorgen voor de perfecte shot."
            />
            <StepItem
              icon={<Check className="stroke-white" />}
              amount={4}
              title="Oplevering"
              description="Professionele montage, grading en muziek. Klaar voor publicatie op alle platforms die voor u relevant zijn."
            />
          </ItemGrid>
          <Button
            text="Bekijk volledig proces & prijzen"
            type="button"
            href="/process-and-pricing"
            color="dark"
            className="max-md:w-full max-md:justify-center"
          />
        </Section>
        <Section
          className="text-white flex-col flex gap-8 items-center"
          background="red"
          fullWidth={false}
        >
          <h2>Klaar om op te vallen?</h2>
          <p>
            Plan vrijblijvend een kennismakingsgesprek. Wij luisteren, denken
            mee en maken het zichtbaar.
          </p>
          <Button
            text="Neem contact op"
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
