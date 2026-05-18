type StepItemProps = {
  icon?: React.ReactNode;
  amount: number | null;
  title: string;
  description?: string;
  data?: string;
  style?: "light" | "dark";
};

export default function StepItem({
  icon,
  amount,
  title,
  description,
  style = "light",
  data,
}: StepItemProps) {
  return (
    <div
      className={`w-full ${style === "light" ? "bg-white hover:bg-black" : "bg-gray hover:bg-gray-light hover:border-l-2 hover:border-red"} transition-all duration-300 group p-10 flex flex-col gap-4`}
    >
      <div className="flex gap-4 justify-between items-center">
        {icon && (
          <div className="bg-red aspect-square h-10 flex items-center justify-center">
            {icon}
          </div>
        )}

        {amount !== null && (
          <span className="text-red/50 text-5xl font-unica">
            {String(amount).padStart(2, "0")}
          </span>
        )}
      </div>

      <div
        className={`${style === "light" ? "text-black group-hover:text-white" : "text-white"} transition-all duration-300 ${data && "text-center"}`}
      >
        {data && <h3 className="text-red text-5xl!">{data}</h3>}
        <h4 className={`text-2xl! ${data && "opacity-60"}`}>{title}</h4>
        {description && <p className="opacity-55">{description}</p>}
      </div>
    </div>
  );
}
