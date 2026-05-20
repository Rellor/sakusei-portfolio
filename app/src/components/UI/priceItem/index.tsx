import { Check } from "lucide-react";
import Button from "../button";

type PriceItemProps = {
  plan: string;
  price: string;
  period: string;
  features: string[];
  featured?: boolean;
  badge?: string;
};

export default function PriceItem({
  plan,
  price,
  period,
  features,
  featured = false,
  badge,
}: PriceItemProps) {
  return (
    <div
      className={`relative h-full flex flex-col gap-8 p-10 transition-all duration-300 text-white ${
        featured ? "bg-red border-red" : "bg-gray border-gray-light"
      }`}
    >
      {badge && (
        <span className="absolute top-0 right-0 bg-white text-red text-[10px] font-semibold uppercase tracking-[1px] px-4 py-2">
          {badge}
        </span>
      )}

      <div>
        <p
          className={`uppercase text-[10px] tracking-[2px] font-semibold mb-2 ${
            featured ? "text-white/70" : "text-red"
          }`}
        >
          {plan}
        </p>
        <h3 className="text-5xl! font-unica">{price}</h3>
        <p
          className={`text-sm mt-1 ${featured ? "text-white/70" : "text-white/55"}`}
        >
          {period}
        </p>
      </div>

      <ul className={`flex flex-col gap-3 ${featured ? "flex-1" : ""}`}>
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 pb-3 border-b border-white/10"
          >
            <span className={featured ? "text-white" : "text-red"}>→</span>
            <span
              className={`text-sm ${featured ? "text-white/90" : "text-white/55"}`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        href="/contact"
        type="button"
        color={featured ? "light" : "border"}
        text="Plan gesprek"
        className=" w-full justify-center"
      />
    </div>
  );
}
