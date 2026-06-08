import { notFound } from "next/navigation";
import Section from "../../src/components/UI/section";
import { detailedCases } from "../../../data/cases";
import Header from "@/app/src/components/UI/header";
import ItemGrid from "@/app/src/components/UI/itemGrid";
import StepItem from "@/app/src/components/UI/stepItem";
import Button from "@/app/src/components/UI/button";
import Link from "next/link";
import Image from "next/image";

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

  const hasValue = (value: unknown) => {
    if (value === null || value === undefined) return false;
    if (typeof value === "string") return value.trim().length > 0;
    if (Array.isArray(value)) return value.length > 0;
    return true;
  };

  const briefDescription = caseData.brief?.description ?? "";
  const whatWeDidDescription = caseData.whatWeDid?.description ?? "";

  const projectItems = [
    { label: "Type", value: caseData.project?.type },
    { label: "Year", value: caseData.project?.year },
    { label: "Duration", value: caseData.project?.duration },
    {
      label: "Platforms",
      value: caseData.project?.platforms?.length
        ? caseData.project.platforms.join(", ")
        : undefined,
    },
  ].filter((item) => hasValue(item.value));

  const processItems = (
    "process" in caseData && Array.isArray(caseData.process)
      ? caseData.process
      : []
  ).filter((step) => hasValue(step.title) || hasValue(step.description));

  const effectItems = (
    "effect" in caseData && Array.isArray(caseData.effect)
      ? caseData.effect
      : []
  ).filter((item) => hasValue(item.title) || hasValue(item.data));

  const hasBrief = hasValue(briefDescription);
  const hasWhatWeDid = hasValue(whatWeDidDescription);
  const hasProcess = processItems.length > 0;
  const hasEffect = effectItems.length > 0;
  const video =
    "video" in caseData &&
    caseData.video &&
    typeof caseData.video === "object"
      ? caseData.video
      : undefined;
  const videoUrl =
    video && "url" in video && typeof video.url === "string"
      ? video.url
      : undefined;
  const hasVideo = hasValue(videoUrl);
  const photos = "photos" in caseData ? caseData.photos : undefined;
  const hasPhotos =
    hasValue(photos?.main) ||
    hasValue(photos?.subs) ||
    hasValue(photos?.bottom);

  const toImageSrc = (src: string) => (src.startsWith("/") ? src : `/${src}`);

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
        {hasBrief && <p className="text-white/55">{briefDescription}</p>}
      </Section>
      {projectItems.length > 0 && (
        <Section
          background="gray"
          fullWidth={false}
          noPadding={true}
          parentClassName="border-y border-white/10 max-md:px-0!"
          className="text-white grid grid-cols-2 md:grid-cols-4"
        >
          {projectItems.map((item, index) => (
            <div
              key={item.label}
              className={`${index > 0 ? "border-l" : ""} ${index >= 2 ? "max-md:border-t max-md:border-l-0" : ""} border-white/10 p-10 max-md:p-6 ${index === 0 ? "md:py-10 md:pr-10" : "md:pl-10"}`}
            >
              <p className="tracking-[2.5px] text-white/25 text text-[12px]">
                {item.label}
              </p>
              <h5>{String(item.value)}</h5>
            </div>
          ))}
        </Section>
      )}
      {hasBrief && (
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

          {briefDescription.includes("##") ? (
            <div className="flex flex-col gap-2 max-w-2xl">
              {briefDescription.split("##").map((part, idx) => (
                <p className="text-white/55" key={idx}>
                  {part.trim()}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-white/55 max-w-2xl">{briefDescription}</p>
          )}
        </Section>
      )}
      {hasPhotos && (
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
            {/* <div className="grid grid-cols-3 grid-rows-2 gap-1">
              <Image
                src={toImageSrc(photos?.main || "cases/placeholder-main.jpg")}
                alt="Main photo"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 66vw"
                quality={95}
                className="bg-gray col-span-2 row-span-2 w-full h-full object-cover"
              />

              <Image
                src={toImageSrc(
                  photos?.subs?.[0] || "cases/placeholder-sub1.jpg",
                )}
                alt="Sub photo 1"
                width={400}
                height={400}
                sizes="(max-width: 768px) 50vw, 22vw"
                quality={92}
                className="bg-gray aspect-square w-full object-cover"
              />

              <Image
                src={toImageSrc(
                  photos?.subs?.[1] || "cases/placeholder-sub2.jpg",
                )}
                alt="Sub photo 2"
                width={400}
                height={400}
                sizes="(max-width: 768px) 50vw, 22vw"
                quality={92}
                className="bg-gray aspect-square w-full object-cover"
              />
            </div> */}

            <div className="grid grid-cols-3 gap-1">
              <Image
                src={toImageSrc(photos?.main || "cases/placeholder-main.jpg")}
                alt="Bottom photo 1"
                width={400}
                height={300}
                sizes="(max-width: 768px) 33vw, 22vw"
                quality={90}
                className="bg-gray aspect-4/3 w-full object-cover"
              />
              <Image
                src={toImageSrc(
                  photos?.subs?.[0] || "cases/placeholder-sub1.jpg",
                )}
                alt="Bottom photo 2"
                width={400}
                height={300}
                sizes="(max-width: 768px) 33vw, 22vw"
                quality={90}
                className="bg-gray aspect-4/3 w-full object-cover"
              />
              <Image
                src={toImageSrc(
                  photos?.subs?.[1] || "cases/placeholder-sub2.jpg",
                )}
                alt="Bottom photo 3"
                width={400}
                height={300}
                sizes="(max-width: 768px) 33vw, 22vw"
                quality={90}
                className="bg-gray aspect-4/3 w-full object-cover"
              />
              <Image
                src={toImageSrc(
                  photos?.bottom?.[0] || "cases/placeholder-bottom1.jpg",
                )}
                alt="Bottom photo 1"
                width={400}
                height={300}
                sizes="(max-width: 768px) 33vw, 22vw"
                quality={90}
                className="bg-gray aspect-4/3 w-full object-cover"
              />
              <Image
                src={toImageSrc(
                  photos?.bottom?.[1] || "cases/placeholder-bottom2.jpg",
                )}
                alt="Bottom photo 2"
                width={400}
                height={300}
                sizes="(max-width: 768px) 33vw, 22vw"
                quality={90}
                className="bg-gray aspect-4/3 w-full object-cover"
              />
              <Image
                src={toImageSrc(
                  photos?.bottom?.[2] || "cases/placeholder-bottom3.jpg",
                )}
                alt="Bottom photo 3"
                width={400}
                height={300}
                sizes="(max-width: 768px) 33vw, 22vw"
                quality={90}
                className="bg-gray aspect-4/3 w-full object-cover"
              />
            </div>
          </div>
        </Section>
      )}

      {hasProcess && (
        <Section
          background="dark"
          fullWidth={false}
          noPadding={!hasPhotos}
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
            {processItems.map((step, index) => (
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
      )}

      {hasWhatWeDid && (
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
          {whatWeDidDescription.includes("##") ? (
            <div className="flex flex-col gap-2 max-w-2xl">
              {whatWeDidDescription.split("##").map((part, idx) => (
                <p className="text-white/55" key={idx}>
                  {part.trim()}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-white/55 max-w-2xl">{whatWeDidDescription}</p>
          )}
        </Section>
      )}

      {hasEffect && (
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
            {effectItems.map((step, index) => (
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
      )}

      {hasVideo && (
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
              src={videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Section>
      )}

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
