import type { Metadata } from "next";
import Button from "../src/components/UI/button";
import Section from "../src/components/UI/section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Sakusei Studio. Plan een vrijblijvend gesprek en ontdek wat wij voor uw merk kunnen betekenen.",
};

export default function Contact() {
  return (
    <div>
      <div>
        <div
          className="md:px-18 px-4 md:py-40 py-28 pt-40 relative bg-gradient-hero-small bg-black"
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
