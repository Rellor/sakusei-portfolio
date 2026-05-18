import Button from "../src/components/UI/button";
import Section from "../src/components/UI/section";
import ItemGrid from "../src/components/UI/itemGrid";
import Header from "../src/components/UI/header";
import StepItem from "../src/components/UI/stepItem";
import ProcessSteps from "../src/components/UI/processSteps";
import { Check, Handshake, Lightbulb, SwitchCamera } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    step: "Stap 01",
    title: "Kennismaking & Intake",
    description:
      "We plannen een vrijblijvend gesprek — telefonisch of op locatie in Purmerend. We leren uw merk, uw doelen en uw doelgroep kennen. Geen standaard intake, maar een echte conversatie over wat u wilt bereiken.",
  },
  {
    step: "Stap 02",
    title: "Concept & Strategie",
    description:
      "Wij ontwikkelen een creatief concept op basis van uw verhaal. Script, storyboard, locatiescouting, styling — alles wordt in detail uitgewerkt. U krijgt een helder plan voorgelegd vóórdat we één shot doen.",
  },
  {
    step: "Stap 03",
    title: "Productie",
    description:
      "Filmdag(en) met professionele cinematografische apparatuur. Van belichting tot geluid — wij zorgen voor een professionele set-up. U kunt zich volledig focussen op uw rol; wij regelen de rest.",
  },
  {
    step: "Stap 04",
    title: "Post-productie",
    description:
      "Professionele montage, kleurcorrectie, muziek en motion graphics. U ontvangt een concept-edit voor feedback. Twee rondes revisie zijn altijd inbegrepen.",
  },
  {
    step: "Stap 05",
    title: "Oplevering & Distributie",
    description:
      "U ontvangt de video's in alle benodigde formaten — klaar voor YouTube, Instagram, LinkedIn of uw website. Op aanvraag adviseren wij ook over distributiestrategie en advertentie-inzet.",
  },
];

export default function ProcessAndPricing() {
  return (
    <div>
      <div>
        <div
          className="px-18 py-40 relative bg-gradient-hero-small bg-black"
          id="hero"
        >
          <div className="max-w-6xl mx-auto w-full">
            <p className="text-red uppercase text-[10px] tracking-[4px] w-fit">
              Hoe we werken
            </p>

            <h1 className="uppercase max-w-4xl text-white flex flex-col">
              Proces &<span className="text-red"> Prijzen.</span>
            </h1>
            <p className="text-white/55 max-w-xl">
              Transparant, persoonlijk en altijd op maat. Wij geloven in heldere
              communicatie en eerlijke prijzen voor uitzonderlijke kwaliteit.
            </p>
          </div>
        </div>

        <Section
          className="text-white flex-col flex gap-8"
          background="dark"
          fullWidth={false}
        >
          <Header
            title="Van gesprek tot scherm."
            subtitle="Ons werkproces"
            style="light"
            type="h2"
            noLine={false}
          />
          <ProcessSteps steps={steps} />
        </Section>

        <Section
          className="text-white flex-col flex gap-8"
          background="red"
          fullWidth={false}
        >
          <h2>Twijfelt u nog?</h2>
          <p>
            Een kennismakingsgesprek is altijd gratis en vrijblijvend. Wij
            denken graag met u mee.
          </p>
          <Button
            text="Gratis gesprek plannen"
            type="button"
            href="/contact"
            color="light"
          />
        </Section>
      </div>
    </div>
  );
}
