import Link from "next/link";

type caseItemProps = {
  category?: string;
  title: string;
  rowSpan?: number;
  src?: string;
  className?: string;
};

export default function CaseItem({
  category,
  title,
  src,
  className,
  rowSpan,
}: caseItemProps) {
  const usedStyle = rowSpan
    ? `row-span-${rowSpan} aspect-auto`
    : "aspect-[560/400]";

  return (
    <Link
      href="/"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`${usedStyle} relative flex items-end p-10`}
    >
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />

      <div className="relative text-white">
        <p>{category}</p>
        <p>{title}</p>
      </div>
    </Link>
  );
}
