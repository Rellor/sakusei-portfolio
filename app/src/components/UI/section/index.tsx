type SectionProps = {
  background: "light" | "dark" | "red" | "gray" | "gradient";
  fullWidth: boolean;
  noPadding?: boolean;
  noTopPadding?: boolean;
  children: React.ReactNode;
  className?: string;
  parentClassName?: string;
};

export default function Section({
  background = "light",
  fullWidth,
  noPadding = false,
  noTopPadding = false,
  children,
  className,
  parentClassName,
}: SectionProps) {
  return (
    <div
      className={`${background === "light" ? "bg-cream" : background === "dark" ? "bg-black" : background === "red" ? "bg-red" : background === "gray" ? "bg-gray" : "bg-gradient-hero bg-black"} ${noPadding ? "" : "lg:py-32 py-12"} ${noTopPadding ? "pt-0" : ""} ${parentClassName} lg:px-8 px-4`}
    >
      <div
        className={`${!fullWidth && "max-w-6xl mx-auto w-full"} ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
