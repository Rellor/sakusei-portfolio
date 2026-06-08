import Link from "next/link";
import Button from "../button";

type caseItemProps = {
  category?: string;
  title: string;
  slug: string;
  rowSpan?: number;
  src?: string;
  className?: string;
  description: string;
  aspectRatio?: "video" | "long";
  long?: boolean;
};

export default function CaseItem({
  category,
  title,
  slug,
  src,
  rowSpan,
  description,
  aspectRatio = "video",
}: caseItemProps) {
  const rowSpanClasses: Record<number, string> = {
    1: "md:row-span-1",
    2: "md:row-span-2",
    3: "md:row-span-3",
  };

  const usedStyle =
    rowSpan && rowSpan > 1
      ? `md:aspect-auto max-sm:row-span-1 ${rowSpanClasses[rowSpan]}`
      : aspectRatio === "video"
        ? "aspect-[560/400]"
        : "aspect-3/4";

  // TODO: Move aspect ratio logic to parent grid view

  return (
    <Link
      href={`/cases/${slug}`}
      style={{
        backgroundImage: src ? `url(/${src.replace(/^\//, "")})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`${usedStyle} aspectStyle relative flex items-end md:p-10 p-4 group overflow-hidden`}
    >
      {/* Default gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/50 md:via-black/35 via-black/50 to-transparent transition-opacity duration-300" />

      {/* Hover gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative text-white">
        <p className="text-red uppercase font-semibold tracking-[2px] text-[10px]">
          {category}
        </p>

        <h4>{title}</h4>
      </div>
      <Button
        type="arrow"
        className="absolute right-8 bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </Link>
  );
}
