import { notFound } from "next/navigation";
import Section from "../../src/components/UI/section";
import { detailedCases } from "../../../data/cases";

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
    </div>
  );
}
