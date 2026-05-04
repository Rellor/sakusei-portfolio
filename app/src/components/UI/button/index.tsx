import Link from "next/link";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  type: "button" | "link";
}

export default function Button({
  text,
  onClick,
  href,
  type = "button",
}: ButtonProps) {
  const internalLink = href && href.startsWith("/") ? href : undefined;
  const buttonStyle =
    "px-6 py-2.5 bg-red hover:bg-red/70 text-white text-sm uppercase transition-colors duration-300";
  const linkStyle =
    "text-white/70 hover:text-white text-sm font-[500] uppercase transition-colors duration-300";
  const usedStyle = type === "button" ? buttonStyle : linkStyle;

  if (onClick) {
    return (
      <button onClick={onClick} className={usedStyle}>
        {text}
      </button>
    );
  }

  if (internalLink) {
    return (
      <Link href={internalLink} className={usedStyle}>
        {text}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={usedStyle}>
        {text}
      </a>
    );
  }

  return null;
}
