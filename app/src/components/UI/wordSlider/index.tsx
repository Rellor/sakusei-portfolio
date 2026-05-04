"use client";

type CarouselProps = {
  items: string[];
};

export default function Carousel({ items }: CarouselProps) {
  const loopItems = [...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-red text-white/90">
      <div className="relative flex whitespace-nowrap">
        <div className="flex gap-16 animate-marquee py-5">
          {loopItems.map((item, index) => (
            <div key={index} className="flex items-center gap-16">
              <div className="h-px w-4 bg-white/40" />

              <span className="text-[13px] uppercase tracking-[2.5px]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
