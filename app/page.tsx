import Button from "./src/components/UI/button";
import Image from "next/image";
import WordSlider from "./src/components/UI/wordSlider";
import Header from "./src/components/UI/header";
import Section from "./src/components/UI/section";
import ItemGrid from "./src/components/UI/itemGrid";
import CaseItem from "./src/components/UI/caseItem";

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

export default function Home() {
  return (
    <div>
      <div>
        <div
          className="h-screen px-18 relative bg-gradient-hero bg-black flex flex-col gap-8 justify-center"
          id="hero"
        >
          <p className="text-red uppercase text-[10px] absolute top-1 left-18 tracking-[4px] flex gap-1 items-center">
            Videoproductie & Marketing <span className="h-px bg-red w-4 mr-1" />{" "}
            Purmerend
          </p>
          <h1 className="uppercase max-w-4xl text-white">
            Wanneer passie strategie ontmoet valt{" "}
            <span className="text-red">alles</span> op zijn plek.
          </h1>
          <p className="text-white/55 max-w-xl">
            Sakusei vertaalt de identiteit en het verhaal van uw bedrijf naar
            cinematische videocontent die raakt, blijft hangen en vertrouwen
            opbouwt.
          </p>
          <div className="flex gap-8 items-center">
            <Button text="Plan een gesprek" type="button" href="/contact" />
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
          <div className="flex gap-12 justify-between">
            <div className="flex flex-col gap-6 max-w-lg">
              <p>
                Wij zijn Sakusei Studio — een videoproductiebedrijf gebaseerd in
                Purmerend, gedreven door een{" "}
                <b>Japanse filosofie van perfectie.</b> Wabi-sabi, vakmanschap
                en het streven naar de pure creatieve energie van het
                hier-en-nu.
              </p>
              <p>
                Van concept tot montage regelen wij alles. U hoeft zich geen
                zorgen te maken over script of techniek. Wij zorgen voor het
                topresultaat.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10 w-fit">
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
          <Button text="Plan een gesprek" type="button" href="/contact" />
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
            link="/"
          />
          <ItemGrid cols={2}>
            <CaseItem
              title="Kapsalon prestige"
              category="brand film"
              src="cases/image-1.jpg"
              rowSpan={2}
            />
            <CaseItem
              title="Techflow B.V."
              category="Marketing"
              src="cases/image-2.jpg"
            />
            <CaseItem
              title="Tatoo studio ink"
              category="Social content"
              src="cases/image-3.jpg"
            />
          </ItemGrid>
        </Section>
      </div>
    </div>
  );
}
