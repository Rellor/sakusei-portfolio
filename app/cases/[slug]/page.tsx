import { notFound } from "next/navigation";
import Section from "../../src/components/UI/section";
import { detailedCases } from "../../../data/cases";
import Header from "@/app/src/components/UI/header";

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

  return (
    <div>
      <Section
        background="dark"
        fullWidth={false}
        className="flex flex-col gap-10"
      >
        <p className="text-red uppercase text-[10px] tracking-[4px]">
          {caseData.button.title}
        </p>
        <h1 className="text-white">{caseData.client.name}</h1>
        <p className="text-white/55">{caseData.brief.description}</p>
      </Section>
      <Section
        background="gray"
        fullWidth={false}
        noPadding={true}
        parentClassName="border-y border-white/10"
        className="text-white grid grid-cols-4"
      >
        <div className="py-10 pr-10">
          <p className="tracking-[2.5px] text-white/25 text text-[12px]">
            Type
          </p>
          <h5>{caseData.project.type}</h5>
        </div>
        <div className="border-l border-white/10 p-10">
          <p className="tracking-[2.5px] text-white/25 text text-[12px]">
            Year
          </p>
          <h5>{caseData.project.year}</h5>
        </div>
        <div className="border-l border-white/10 p-10">
          <p className="tracking-[2.5px] text-white/25 text text-[12px]">
            Duration
          </p>
          <h5>{caseData.project.duration}</h5>
        </div>
        <div className="border-l border-white/10 py-10 pl-10">
          <p className="tracking-[2.5px] text-white/25 text text-[12px]">
            Platforms
          </p>
          <h5>{caseData.project.platforms.join(", ")}</h5>
        </div>
      </Section>
      <Section background="light" fullWidth={true} noPadding={true}>
        <Header
          title="Wat de klant wilde."
          subtitle="De opdracht"
          style="dark"
          type="h3"
          isSubHeading={true}
        />
      </Section>
    </div>
  );
}
