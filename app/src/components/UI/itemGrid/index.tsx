import Button from "../button";

type itemGridProps = {
  cols: number;
  className?: string;
  children: React.ReactNode;
};

export default function ItemGrid({ cols, children, className }: itemGridProps) {
  const usedGrid = `${"grid-cols-" + cols}`;
  const combinedClassName = `grid gap-1 auto-rows-fr ${usedGrid} ${className ?? ""}`;
  return <div className={combinedClassName}>{children}</div>;
}
