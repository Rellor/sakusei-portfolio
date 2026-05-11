type ItemGridProps = {
  cols: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: React.ReactNode;
};

const gridColsMap = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
};

export default function ItemGrid({
  cols,
  children,
  className = "",
}: ItemGridProps) {
  const combinedClassName = `
    grid
    gap-1
    auto-rows-fr
    ${gridColsMap[cols]}
    ${className}
  `;

  return <div className={combinedClassName}>{children}</div>;
}
