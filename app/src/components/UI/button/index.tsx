import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "link" | "arrow";
  hasLine?: boolean;
  className?: string;
  color?: "dark" | "light" | "red" | "border";
}

export default function Button({
  text,
  onClick,
  href,
  type = "button",
  color = "red",
  hasLine = false,
  className,
}: ButtonProps) {
  const internalLink = href && href.startsWith("/") ? href : undefined;

  // Base styles
  const buttonBase =
    "px-6 md:py-2.5 py-3.5 md:text-[11px] text-sm tracking-[1px] font-semibold uppercase transition-colors duration-300 flex w-fit";

  const linkBase =
    "text-[11px] font-semibold uppercase transition-colors duration-300 tracking-[2.5px] py-2.5 group flex w-fit max-md:underline max-md:underline-offset-3";

  const arrowBase = "p-3 transition-colors duration-300 w-fit";

  // Color variants
  const colorStyles = {
    red: {
      button: "bg-red hover:bg-red/70 text-white",
      link: "text-white/55 hover:text-white",
      arrow: "bg-red hover:bg-red/70 text-white",
      line: "bg-white/55 group-hover:bg-white",
    },

    dark: {
      button: "bg-black hover:bg-black/70 text-white",
      link: "text-white/55 hover:text-white",
      arrow: "bg-black hover:bg-black/70 text-white",
      line: "bg-white/55 group-hover:bg-white",
    },

    light: {
      button: "bg-white hover:bg-white/70 text-red",
      link: "text-red/55 hover:text-red",
      arrow: "bg-white hover:bg-white/70 text-red",
      line: "bg-red/55 group-hover:bg-red",
    },

    border: {
      button: "border border-white/20 text-white hover:bg-red hover:border-red",
      link: "text-white/55 hover:text-white",
      arrow: "border border-white text-white hover:bg-white hover:text-white",
      line: "bg-white/55 group-hover:bg-white",
    },
  };

  const usedStyle =
    type === "button"
      ? `${buttonBase} ${colorStyles[color].button}`
      : type === "link"
        ? `${linkBase} ${colorStyles[color].link}`
        : `${arrowBase} ${colorStyles[color].arrow}`;

  const combinedClassName = `${usedStyle} ${className ?? ""}`;

  const content = (
    <div className="flex gap-2 items-center">
      {hasLine && (
        <div
          className={`h-px w-4 group-hover:w-7 transition-all duration-300 ${colorStyles[color].line}`}
        />
      )}

      <span>{type === "arrow" ? <ArrowRight /> : text}</span>
    </div>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className={combinedClassName}>
        {content}
      </button>
    );
  }

  if (internalLink) {
    return (
      <Link href={internalLink} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {content}
      </a>
    );
  }

  return <div className={combinedClassName}>{content}</div>;
}
