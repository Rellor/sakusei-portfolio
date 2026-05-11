import Image from "next/image";

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <div className="bg-black pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-white/55 text-[11px] flex justify-between gap-8 items-center border-t border-white/10 py-4">
          <p>© 2025 Sakusei Studio. Alle rechten voorbehouden.</p>
          <Image
            className="opacity-55"
            src="/textLogoLight.svg"
            alt="Logo"
            width={75}
            height={75}
          />
        </div>
      </div>
    </div>
  );
}
