import Button from "../src/components/UI/button";
import Section from "../src/components/UI/section";
import ItemGrid from "../src/components/UI/itemGrid";
import Header from "../src/components/UI/header";
import StepItem from "../src/components/UI/stepItem";
import { Check, Handshake, Lightbulb, SwitchCamera } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <div>
        <div
          className="px-18 py-40 relative bg-gradient-hero-small bg-black"
          id="hero"
        >
          <div className="max-w-6xl mx-auto w-full">
            <p className="text-red uppercase text-[10px] tracking-[4px] w-fit">
              Over Sakusei
            </p>
            <h1 className="uppercase max-w-4xl text-white flex flex-col">
              Passie. Precisie.
              <span className="text-red"> Perfectie.</span>
            </h1>
            <p className="text-white/55 max-w-xl">
              Sakusei is een videoproductiestudio gebaseerd in Purmerend. Wij
              geloven dat elk bedrijf een verhaal heeft dat het verdient om
              verteld te worden — cinematisch, authentiek en memorabel.
            </p>
          </div>
        </div>
        <Section
          background="light"
          fullWidth={false}
          className="flex flex-col gap-10"
        >
          <Header
            title="Wat ons drijft."
            subtitle="Onze waarden"
            style="dark"
            type="h2"
            noLine={true}
          />
          <ItemGrid cols={2}>
            <StepItem
              icon={<Handshake className="stroke-white" />}
              amount={null}
              title="Kennismaking"
              description="We leren uw merk, doelen en doelgroep kennen."
            />
            <StepItem
              icon={<Lightbulb className="stroke-white" />}
              amount={null}
              title="Concept"
              description="Script, storyboard en strategie — wij regelen alles zodat u zich kunt focussen op uw bedrijf."
            />
            <StepItem
              icon={<SwitchCamera className="stroke-white" />}
              amount={null}
              title="Productie"
              description="Professionele opname met cinematische apparatuur. Van locatie tot licht — wij zorgen voor de perfecte shot."
            />
            <StepItem
              icon={<Check className="stroke-white" />}
              amount={null}
              title="Oplevering"
              description="Professionele montage, grading en muziek. Klaar voor publicatie op alle platforms die voor u relevant zijn."
            />
          </ItemGrid>
        </Section>

        <Section
          background="dark"
          fullWidth={false}
          className="flex flex-col gap-24"
        >
          <div className="flex gap-10">
            <Header
              title="De Enso achter Sakusei"
              subtitle="Japanse filosofie"
              style="light"
              type="h2"
              noLine={false}
            />
            <div className="flex gap-12 justify-between text-white/55">
              <div className="flex flex-col gap-6 max-w-lg">
                <p>
                  Het Enso-symbool — de Japanse cirkel — staat centraal in onze
                  identiteit. Het symboliseert oneindigheid, onvolmaaktheid
                  (wabi-sabi) en de pure creatieve energie van het hier-en-nu.
                </p>
                <p>
                  Onze cameralens vormt de andere helft van wie wij zijn:
                  vakmanschap, kerndienstverlening en passie voor het vak. Samen
                  vertellen ze het verhaal van Sakusei Studio.
                </p>
              </div>
            </div>
          </div>
          <ItemGrid cols={2}>
            <div className="bg-gray flex flex-col p-16 items-center">
              <Image
                src="/cameraLens.svg"
                alt="camera lens"
                width={100}
                height={100}
                className="pb-4"
              />
              <h4 className="text-white">Cameralens</h4>
              <ul className="flex gap-1 text-white/55">
                <li>Video</li>
                <li className="mx-1">&bull;</li>
                <li>Vakmanschap</li>
                <li className="mx-1">&bull;</li>
                <li>Passie</li>
              </ul>
            </div>
            <div className="bg-red flex flex-col p-16 items-center">
              <Image
                src="/ensoIcon.svg"
                alt="enso"
                width={100}
                height={100}
                className="pb-4"
              />
              <h4 className="text-white">Enso (円相)</h4>
              <ul className="flex gap-1 text-white/55">
                <li>Perfectie</li>
                <li className="mx-1">&bull;</li>
                <li>Oneindigheid</li>
                <li className="mx-1">&bull;</li>
                <li>Wabi-sabi</li>
              </ul>
            </div>
          </ItemGrid>
        </Section>
        <Section
          className="text-white flex-col flex gap-8 items-center"
          background="red"
          fullWidth={false}
        >
          <h2>Laten we kennismaken.</h2>
          <p>
            Plan een vrijblijvend gesprek en ontdek wat Sakusei voor uw merk kan
            betekenen.
          </p>
          <Button
            text="Contact opnemen"
            type="button"
            href="/contact"
            color="light"
          />
        </Section>
      </div>
    </div>
  );
}
