import Button from "../src/components/UI/button";
import Section from "../src/components/UI/section";
import Header from "../src/components/UI/header";
import ProcessSteps from "../src/components/UI/processSteps";
import PriceItem from "../src/components/UI/priceItem";

const pricingPlans = [
  {
    plan: "Starter",
    price: "€ 950",
    period: "Eénmalig, ex. BTW",
    features: [
      "1 filmdag (halve dag)",
      "1 video tot 2 minuten",
      "Professionele montage & grading",
      "Muzieklicentie inbegrepen",
      "2 revisierondes",
      "Oplevering in 2 formaten",
    ],
  },
  {
    plan: "Studio",
    price: "€ 2.250",
    period: "Eénmalig, ex. BTW",
    features: [
      "1 volledige filmdag",
      "3 video's (diverse formaten)",
      "Concept & storyboard inbegrepen",
      "Kleurcorrectie & grading",
      "Motion graphics & tekstlagen",
      "Muzieklicentie inbegrepen",
      "3 revisierondes",
      "Oplevering in 5 formaten",
    ],
    featured: true,
    badge: "Meest gekozen",
  },
  {
    plan: "Maandelijks pakket",
    price: "€ 1.450",
    period: "Per maand, ex. BTW",
    features: [
      "2 filmdagen per maand",
      "8–12 social videos per maand",
      "Content strategie inbegrepen",
      "Prioriteit planning",
      "Maandelijks content kalender",
      "Dedicated contactpersoon",
    ],
  },
];

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
        >
          <div className="flex flex-col gap-4">
            <Header
              title="Kies uw pakket."
              subtitle="Transparante prijzen"
              style="light"
              type="h2"
              noLine={false}
            />
            <p className="text-white/55 max-w-xl">
              Alle pakketten inclusief concept, productie en post-productie.
              Prijzen exclusief BTW. Maatwerk altijd mogelijk.
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
