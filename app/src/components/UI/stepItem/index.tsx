type StepItemProps = {
  icon: React.ReactNode;
  amount: number;
  title: string;
  description: string;
};

export default function StepItem({
  icon,
  amount,
  title,
  description,
}: StepItemProps) {
  return (
    <div className="w-full bg-white hover:bg-black transition-all duration-300 group p-8">
      <div className="flex gap-4 justify-between items-center">
        <div className="bg-red aspect-square h-10 flex items-center justify-center">
          {icon}
        </div>

        <span className="text-red/50 text-7xl font-unica">
          {String(amount).padStart(2, "0")}
        </span>
      </div>

      <div className="text-black group-hover:text-white transition-all duration-300">
        <h3>{title}</h3>

        <p className="opacity-55">{description}</p>
      </div>
    </div>
  );
}
