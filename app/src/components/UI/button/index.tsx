import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  href?: string;
  type: "button" | "link" | "arrow";
  hasLine?: boolean;
  className?: string;
}

export default function Button({
  text,
  onClick,
  href,
  type = "button",
  hasLine = false,
  className,
}: ButtonProps) {
  const internalLink = href && href.startsWith("/") ? href : undefined;
  const buttonStyle =
    "px-6 py-2.5 bg-red hover:bg-red/70 text-white text-sm uppercase transition-colors duration-300 flex w-fit";
  const linkStyle =
    "text-white/55 hover:text-white text-[11px] font-bold uppercase transition-colors duration-300 tracking-[2.5px] py-2.5 group flex w-fit";
  const arrowStyle =
    "p-3 bg-red group-hover:bg-red/70 text-white transition-colors duration-300 w-fit";

  const usedStyle =
    type === "button" ? buttonStyle : type === "link" ? linkStyle : arrowStyle;

  const combinedClassName = `${usedStyle} ${className ?? ""}`;

  if (onClick) {
    return (
      <button onClick={onClick} className={combinedClassName}>
        {type === "arrow" ? <ArrowRight /> : text ? text : undefined}
      </button>
    );
  }

  if (internalLink) {
    return (
      <Link href={internalLink} className={combinedClassName}>
        <div className="flex gap-2 items-center">
          {hasLine && (
            <div className="h-px bg-white/55 w-4 group-hover:w-7 group-hover:bg-white transition-all duration-300" />
          )}
          <span>
            {" "}
            {type === "arrow" ? <ArrowRight /> : text ? text : undefined}
          </span>
        </div>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {type === "arrow" ? <ArrowRight /> : text ? text : undefined}
      </a>
    );
  }

  return (
    <div className={combinedClassName}>
      <div className="flex gap-2 items-center">
        {hasLine && (
          <div className="h-px bg-white/55 w-4 group-hover:w-7 group-hover:bg-white transition-all duration-300" />
        )}

        <span>{type === "arrow" ? <ArrowRight /> : text}</span>
      </div>
    </div>
  );
}
