import { notFound } from "next/navigation";
import Section from "../../src/components/UI/section";
import { detailedCases } from "../../../data/cases";
import Header from "@/app/src/components/UI/header";
import ItemGrid from "@/app/src/components/UI/itemGrid";
import StepItem from "@/app/src/components/UI/stepItem";
import Button from "@/app/src/components/UI/button";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.values(detailedCases).map((c) => ({
    slug: c.button.slug,
  }));
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const caseData = Object.values(detailedCases).find(
    (c) => c.button.slug === slug,
  );

  if (!caseData) {
    notFound();
  }

  // Find next case for navigation
  const casesArr = Object.values(detailedCases);
  const currentIdx = casesArr.findIndex((c) => c.button.slug === slug);
  const nextIdx = (currentIdx + 1) % casesArr.length;
  const nextCase = casesArr[nextIdx];

  return (
    <div>
      <Section
        background="gradient"
        fullWidth={false}
        className="flex flex-col gap-2"
      >
        <Link
          href="/cases"
          className="text-white/55 hover:text-white transition-all duration-300 text-sm flex items-center gap-1 uppercase tracking-[2px] text-[12px] md:mb-40 mb-12 w-fit p-2 pl-0"
        >
          <span className="pr-1">←</span> Terug naar cases
        </Link>
        <p className="text-red uppercase text-[11px] font-semibold tracking-[2px]">
          {caseData.button.title}
        </p>
        <h1 className="text-white">{caseData.client.name}</h1>
        <p className="text-white/55">{caseData.brief.description}</p>
      </Section>
      <Section
        background="gray"
        fullWidth={false}
        noPadding={true}
        parentClassName="border-y border-white/10 max-md:px-0!"
        className="text-white grid grid-cols-2 md:grid-cols-4"
      >
        <div className="md:py-10 md:pr-10 max-md:p-6">
          <p className="tracking-[2.5px] text-white/25 text text-[12px]">
            Type
          </p>
          <h5>{caseData.project.type}</h5>
        </div>
        <div className="border-l border-white/10 p-10 max-md:p-6">
          <p className="tracking-[2.5px] text-white/25 text text-[12px]">
            Year
          </p>
          <h5>{caseData.project.year}</h5>
        </div>
        <div className="border-l max-md:border-l-0 max-md:border-t border-white/10 p-10 max-md:p-6">
          <p className="tracking-[2.5px] text-white/25 text text-[12px]">
            Duration
          </p>
          <h5>{caseData.project.duration}</h5>
        </div>
        <div className="border-l max-md:border-t border-white/10 p-10 md:pl-10 max-md:p-6">
          <p className="tracking-[2.5px] text-white/25 text text-[12px]">
            Platforms
          </p>
          <h5>{caseData.project.platforms.join(", ")}</h5>
        </div>
      </Section>
      <Section
        background="dark"
        fullWidth={false}
        noPadding={false}
        className="flex gap-8 justify-between max-md:flex-col"
      >
        <Header
          title="Wat de klant wilde."
          subtitle="De opdracht"
          style="light"
          type="h3"
          isSubHeading={true}
        />

        {caseData.brief.description.includes("##") ? (
          <div className="flex flex-col gap-2 max-w-2xl">
            {caseData.brief.description.split("##").map((part, idx) => (
              <p className="text-white/55" key={idx}>
                {part.trim()}
              </p>
            ))}
          </div>
        ) : (
          <p className="text-white/55 max-w-2xl">
            {caseData.brief.description}
          </p>
        )}
      </Section>
      <Section
        background="dark"
        fullWidth={false}
        noPadding={true}
        className="flex flex-col gap-8 justify-between"
      >
        <p className="text-red flex gap-2 uppercase tracking-[2px] text-[10px] font-semibold items-center">
          <span className="w-4 h-px bg-red" />
          Sfeerimpressie
        </p>
        <div className="space-y-1 w-full">
          <div className="grid grid-cols-3 grid-rows-2 gap-1">
            <div className="bg-gray col-span-2 row-span-2 w-full h-full" />

            <div className="bg-gray aspect-square w-full" />

            <div className="bg-gray aspect-square w-full" />
          </div>

          <div className="grid grid-cols-3 gap-1">
            <div className="bg-gray aspect-4/3 w-full" />

            <div className="bg-gray aspect-4/3 w-full" />

            <div className="bg-gray aspect-4/3 w-full" />
          </div>
        </div>
      </Section>

      <Section
        background="dark"
        fullWidth={false}
        noPadding={false}
        className="flex flex-col gap-8 justify-between"
      >
        <Header
          title="Het proces."
          subtitle="Hoe we dit hebben aangepakt"
          style="light"
          type="h3"
          isSubHeading={true}
        />
        <ItemGrid cols={3}>
          {caseData.process.map((step, index) => (
            <StepItem
              key={index}
              style="dark"
              amount={index + 1}
              title={step.title}
              description={step.description}
            />
          ))}
        </ItemGrid>
      </Section>

      <Section
        background="dark"
        fullWidth={false}
        noPadding={false}
        className="flex gap-8 justify-between max-md:flex-col"
        noTopPadding={true}
      >
        <Header
          title="Wat we hebben gedaan."
          subtitle="Onze aanpak"
          style="light"
          type="h3"
          isSubHeading={true}
        />
        {caseData.whatWeDid.description.includes("##") ? (
          <div className="flex flex-col gap-2 max-w-2xl">
            {caseData.whatWeDid.description.split("##").map((part, idx) => (
              <p className="text-white/55" key={idx}>
                {part.trim()}
              </p>
            ))}
          </div>
        ) : (
          <p className="text-white/55 max-w-2xl">
            {caseData.whatWeDid.description}
          </p>
        )}
      </Section>

      <Section
        background="dark"
        fullWidth={false}
        noPadding={false}
        className="flex flex-col gap-8 justify-between"
        noTopPadding={true}
      >
        <Header
          title="Het effect."
          subtitle="resultaten"
          style="light"
          type="h3"
          isSubHeading={true}
        />
        <ItemGrid cols={3}>
          {caseData.effect.map((step, index) => (
            <StepItem
              key={index}
              style="dark"
              amount={null}
              title={step.title}
              data={step.data}
            />
          ))}
        </ItemGrid>
      </Section>

      <Section
        background="dark"
        fullWidth={false}
        noPadding={true}
        className="flex flex-col gap-8 justify-between pb-32"
      >
        <p className="text-red flex gap-2 uppercase tracking-[2px] text-[10px] font-semibold items-center">
          <span className="w-4 h-px bg-red" />
          Bekijk het eindresultaat.
        </p>
        <div className="w-full aspect-video rounded-lg overflow-hidden border border-white/10">
          <iframe
            width="100%"
            height="100%"
            src={caseData.video.url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </Section>

      <Section
        background="light"
        fullWidth={false}
        noPadding={true}
        className="flex flex-col gap-8 justify-between py-12"
      >
        <Header
          title={nextCase.client.name}
          subtitle="Volgende case"
          style="dark"
          type="h2"
          isSubHeading={true}
          noLine={true}
        />
        <Button
          text={`Bekijk ${nextCase.button.title}`}
          href={`/cases/${nextCase.button.slug}`}
          color="dark"
        ></Button>
      </Section>
    </div>
  );
}
