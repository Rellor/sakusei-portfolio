import Button from "../button";

type HeaderProps = {
  title: string;
  subtitle: string;
  style: "light" | "dark";
  isSubHeading?: boolean;
  noLine?: boolean;
  type?: "h2" | "h3" | "h4" | "h5" | "default";
} & (
  | {
      link: string;
      linkText: string;
    }
  | {
      link?: undefined;
      linkText?: undefined;
    }
);

export default function Header({
  title,
  subtitle,
  style = "dark",
  isSubHeading = false,
  noLine = false,
  type = "h2",
  link,
  linkText,
}: HeaderProps) {
  const HeadingTag = ["h2", "h3", "h4", "h5"].includes(type) ? type : "h2";
  const textColor = style === "dark" ? "text-black" : "text-white";

  return (
    <div
      className={`flex flex-col relative ${isSubHeading ? "gap-0" : "gap-4"}`}
    >
      <p
        className={`flex items-center gap-2 text-red uppercase font-semibold ${isSubHeading ? "tracking-[2px] text-[10px]" : "tracking-[2px] text-[11px]"}`}
      >
        {!noLine && <span className="w-4 h-px bg-red" />}
        {subtitle}
      </p>
      {title && (
        // @ts-expect-error: JSX dynamic tag
        <HeadingTag className={`${textColor} max-w-2xl`}>{title}</HeadingTag>
      )}
      {link && linkText && (
        <Button
          text={linkText}
          type="link"
          href={link}
          hasLine={true}
          className="absolute right-0 bottom-0"
        />
      )}
    </div>
  );
}
