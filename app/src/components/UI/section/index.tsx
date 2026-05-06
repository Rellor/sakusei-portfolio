type SectionProps = {
  background: "light" | "dark" | "red";
  fullWidth: boolean;
  children: React.ReactNode;
  className: string;
};

export default function Section({
  background = "light",
  fullWidth,
  children,
  className,
}: SectionProps) {
  return (
    <div
      className={`${background === "light" ? "bg-cream" : background === "dark" ? "bg-black" : "bg-red"} py-32`}
    >
      <div
        className={`${!fullWidth && "max-w-6xl mx-auto w-full"} ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
