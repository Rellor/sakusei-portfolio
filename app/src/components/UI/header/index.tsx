import Button from "../button";

type HeaderProps = {
  title: string;
  subtitle: string;
  style: "light" | "dark";
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
  link,
  linkText,
}: HeaderProps) {
  return (
    <div className="flex flex-col gap-4 relative">
      <p className="flex items-center gap-2 text-red uppercase font-semibold tracking-[4px] text-[11px]">
        <span className="w-4 h-px bg-red" />
        {subtitle}
      </p>

      <h2
        className={`${style === "dark" ? "text-black" : "text-white"} max-w-2xl`}
      >
        {title}
      </h2>
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
