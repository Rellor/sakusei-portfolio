import Link from "next/link";
import Button from "../button";

type caseItemProps = {
  category?: string;
  title: string;
  rowSpan?: number;
  src?: string;
  className?: string;
  description: string;
  aspectRatio?: "video" | "long";
};

export default function CaseItem({
  category,
  title,
  src,
  rowSpan,
  description,
  aspectRatio = "video",
}: caseItemProps) {
  const rowSpanClasses: Record<number, string> = {
    1: "row-span-1",
    2: "row-span-2",
    3: "row-span-3",
  };

  const usedStyle = rowSpan
    ? `aspect-auto ${rowSpanClasses[rowSpan]}`
    : aspectRatio === "video"
      ? "aspect-[560/400]"
      : "aspect-3/4";

  // TODO: Move aspect ratio logic to parent grid view

  return (
    <Link
      href="/"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`${usedStyle} relative flex items-end p-10 group overflow-hidden`}
    >
      {/* Default gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/50 to-transparent transition-opacity duration-300" />

      {/* Hover gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative text-white">
        <p className="text-red uppercase font-semibold tracking-[4px] text-[10px]">
          {category}
        </p>

        <h4>{title}</h4>
        <div className="max-h-0 opacity-0 group-hover:opacity-100 group-hover:max-h-40 overflow-hidden transition-all duration-700 ">
          <p className="pr-20 text-white/55">{description}</p>

          <Button
            type="arrow"
            className="absolute right-0 bottom-0 opacity-0 group-hover:opacity-100"
          />
        </div>
      </div>
    </Link>
  );
}
