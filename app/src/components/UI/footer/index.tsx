import Image from "next/image";
import Link from "next/link";

const brand = {
  tagline:
    "Wanneer passie strategie ontmoet, vallen mensen op. Wij zorgen voor beide — van concept tot scherm.",
};

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "Over ons", href: "/about" },
  { label: "Cases", href: "/cases" },
  { label: "Proces & Prijzen", href: "/process-and-pricing" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Brand Films", href: "#" },
  { label: "Social Content", href: "#" },
  { label: "Marketing Strategie", href: "#" },
  { label: "Videoproductie", href: "#" },
];

const contactLinks = [
  { label: "info@sakusei.nl", href: "mailto:info@sakusei.nl" },
  { label: "Purmerend, Noord-Holland", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={`bg-black ${className ?? ""}`}>
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-0">
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-white font-semibold tracking-wide"
            >
              <svg viewBox="0 0 40 40" fill="none" width="28" height="28">
                <circle
                  cx="20"
                  cy="20"
                  r="17"
                  stroke="white"
                  strokeWidth="1.2"
                  fill="none"
                  opacity=".7"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="11"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  opacity=".5"
                />
                <circle cx="23" cy="16" r="2.5" fill="#98141A" />
              </svg>
              sakusei
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              {brand.tagline}
            </p>
          </div>

          {/* Pagina's */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm tracking-wide">
              Pagina&apos;s
            </h4>
            <ul className="flex flex-col gap-2">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Diensten */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm tracking-wide">
              Diensten
            </h4>
            <ul className="flex flex-col gap-2">
              {serviceLinks.length > 0 ? (
                serviceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))
              ) : (
                <li className="text-white/20 text-sm">Binnenkort</li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm tracking-wide">
              Contact
            </h4>
            <ul className="flex flex-col gap-2">
              {contactLinks.length > 0 ? (
                contactLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))
              ) : (
                <li className="text-white/20 text-sm">Binnenkort</li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 border-t border-white/10 py-5">
          <span className="text-white/40 text-[11px]">
            © 2025 Sakusei Studio. Alle rechten voorbehouden.
          </span>
          <Image
            className="opacity-20"
            src="/textLogoLight.svg"
            alt="Sakusei"
            width={70}
            height={20}
          />
        </div>
      </div>
    </footer>
  );
}
