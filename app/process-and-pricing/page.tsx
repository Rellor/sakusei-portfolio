import type { Metadata } from "next";
import Button from "../src/components/UI/button";
import Section from "../src/components/UI/section";
import Header from "../src/components/UI/header";
import ProcessSteps from "../src/components/UI/processSteps";
import PriceItem from "../src/components/UI/priceItem";

const pricingPlans = [
  {
    plan: "Essential",
    summary: "Perfect voor een sterke bedrijfsvideo of campagnevideo",
    price: "€1950",
    period: "Eenmalig, ex. BTW",
    features: [
      "Strategische intake & conceptbespreking",
      "Halve filmdag op locatie",
      "1 professionele hoofdvideo",
      "Professionele montage & kleurcorrectie",
      "Rechtenvrije muziek inbegrepen",
      "2 revisierondes",
      "Oplevering in meerdere formaten",
      "Geschikt voor website, LinkedIn en presentaties",
      "Ideaal voor bedrijven die hun merk professioneel willen presenteren met een krachtige video.",
    ],
  },
  {
    plan: "Growth",
    summary:
      "Voor bedrijven die structureel content willen creeren uit een productiedag",
    price: "€3350",
    period: "Eenmalig, ex. BTW",
    features: [
      "Strategische intake & contentplan",
      "Volledige filmdag op locatie",
      "1 hero-video (campagne of bedrijfsfilm)",
      "3 uitgewerkte video's voor verschillende doeleinden",
      "Meerdere social media snippets uit dezelfde shoot",
      "Professionele montage & kleurcorrectie",
      "Motion graphics & ondertiteling",
      "Rechtenvrije muziek inbegrepen",
      "3 revisierondes",
      "Oplevering in alle relevante formaten",
      "Content voor LinkedIn, Instagram, website en advertenties",
      "Ideaal voor bedrijven die meerdere kanalen tegelijk willen vullen met professionele content.",
    ],
    featured: true,
    badge: "Meest gekozen",
  },
  {
    plan: "Content partner",
    summary:
      "Voor bedrijven die structureel zichtbaar willen zijn en elke maand nieuwe content nodig hebben voor social media, marketing en recruitment.",
    price: "Vanaf € 1.450 p.m.",
    period: "Ex. BTW",
    features: [
      "Maandelijkse contentstrategie sessie",
      "1 of meerdere filmdagen per maand",
      "Doorlopende contentplanning",
      "Contentkalender inbegrepen",
      "Social video's voor meerdere platformen",
      "Campagne- en merkcontent",
      "Prioriteit in planning & productie",
      "Snelle doorlooptijden",
      "Vast aanspreekpunt",
      "Doorlopende optimalisatie op basis van resultaten",
      "Contentpartner in plaats van losse leverancier",
      "Ideaal voor bedrijven die continu zichtbaar willen zijn zonder zelf content te hoeven organiseren.",
    ],
  },
];

const steps = [
  {
    step: "Stap 01",
    title: "Kennismaking & intake",
    description:
      "We plannen een vrijblijvend gesprek - telefonisch of op locatie. We leren uw merk, uw doelen en doelgroep kennen. Geen standaard intake maar een echt gesprek die de basis legt voor onze samenwerking.",
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
      "Filmdagen met professionele camera-apparatuur, waarbij wij het volledige technische traject uit handen nemen. Van belichting en camera tot geluid. Alles wordt zorgvuldig verzorgd met de juiste gear en expertise. Zo kunt u zich volledig richten op uw rol, terwijl wij zorgen voor een soepel draaiende productie en het eindresultaat.",
  },
  {
    step: "Stap 04",
    title: "Post - productie",
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

export const metadata: Metadata = {
  title: "Proces & Prijzen",
  description:
    "Transparante prijzen en een helder werkproces. Ontdek onze pakketten en hoe wij van concept tot scherm werken.",
};

export default function ProcessAndPricing() {
  return (
    <div>
      <div>
        <div
          className="md:px-18 px-4 md:py-40 py-28 pt-40 relative bg-gradient-hero-small bg-black"
          id="hero"
        >
          <div className="max-w-6xl mx-auto w-full">
            <p className="text-red uppercase font-semibold text-[11px] tracking-[2px] w-fit">
              Hoe we werken
            </p>

            <h1 className="max-w-4xl text-white flex flex-col">
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
          noTopPadding={true}
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
          background="dark"
          fullWidth={false}
          noTopPadding={true}
        >
          <div className="flex flex-col gap-4">
            <Header
              title="KIES UW PAKKET"
              subtitle="Transparante prijzen"
              style="light"
              type="h2"
              noLine={false}
            />
            <p className="text-white/55 max-w-xl">
              Alle pakketten inclusief concept, productie en post-productie.
              Prijzen exclusief BTW. Maatwerk is altijd mogelijk.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {pricingPlans.map((plan) => (
              <PriceItem key={plan.plan} {...plan} />
            ))}
          </div>
        </Section>

        <Section
          className="text-white flex-col flex gap-8"
          background="red"
          fullWidth={false}
        >
          <h2>Twijfelt u nog?</h2>
          <p>
            Een uniek verhaal vraagt soms om een unieke aanpak. Niet ieder merk
            past in een standaard pakket. Daarom ontwikkelen wij ook
            maatwerkconcepten voor campagnes, employer branding, events,
            documentaires en doorlopende contentproducties.
          </p>
          <Button
            text="Bespreek uw project"
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
