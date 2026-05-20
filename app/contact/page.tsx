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
            <p className="text-red uppercase text-[11px] font-semibold tracking-[2px] w-fit">
              Neem contact op
            </p>

            <h1 className="max-w-4xl text-white flex flex-col">
              Laten we<span className="text-red"> praten.</span>
            </h1>
          </div>
        </div>

        <Section
          className="text-white flex-col flex gap-8"
          background="dark"
          fullWidth={false}
          noTopPadding={true}
        >
          <div className="max-w-3xl flex flex-col gap-2">
            <h3>Een verhaal te vertellen?</h3>
            <p className="text-white/55 max-w-xl">
              Wij luisteren graag. Of u nu een idee heeft of nog niet weet waar
              te beginnen — een gesprek kost niets en brengt altijd iets op.
            </p>
          </div>

          <ul className="flex flex-col gap-6 max-w-xl">
            <li className="flex flex-col gap-1 border-b border-white/15 pb-4">
              <span className="text-red uppercase font-semibold text-[10px] tracking-[2px] w-fit">
                E-mail
              </span>
              <a
                className="hover:text-red transition-all duration-300 w-fit"
                href="mailto:info@sakusei.nl"
              >
                info@sakusei.nl
              </a>
            </li>

            <li className="flex flex-col gap-1 border-b border-white/15 pb-4">
              <span className="text-red uppercase font-semibold text-[10px] tracking-[2px] w-fit">
                Locatie
              </span>
              <a
                className="hover:text-red transition-all duration-300 w-fit"
                href=""
              >
                Purmerend, Noord-Holland
              </a>
            </li>

            <li className="flex flex-col gap-1 border-b border-white/15 pb-4">
              <span className="text-red uppercase font-semibold text-[10px] tracking-[2px] w-fit">
                Responstijd
              </span>
              <p>Binnen 24 uur</p>
            </li>

            <li className="flex flex-col gap-1 border-b border-white/15 pb-4">
              <span className="text-red uppercase font-semibold text-[10px] tracking-[2px] w-fit">
                Sociale media
              </span>
              <div>
                <a
                  className="hover:text-red transition-all duration-300 w-fit"
                  href="https://www.linkedin.com/company/sakusei-studio/"
                >
                  LinkedIn
                </a>
                <span className="mx-2">|</span>
                <a
                  className="hover:text-red transition-all duration-300 w-fit"
                  href="https://www.instagram.com/sakusei.studio/"
                >
                  Instagram
                </a>
              </div>
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
}
