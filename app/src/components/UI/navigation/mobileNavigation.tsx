"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/cases", label: "Cases" },
  { href: "/process-and-pricing", label: "Proces & prijzen" },
  { href: "/about", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`${
        isScrolled || isOpen ? "backdrop-blur-sm bg-black/90" : "bg-black/05"
      } fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-5 lg:hidden`}
    >
      <div className="flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Image src="/fullLogoLight.svg" alt="Logo" width={120} height={120} />
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Sluit menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className={`flex h-11 w-11 items-center justify-center bg-red text-white transition-transform duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "mt-5 max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 pb-2">
          {navLinks.map((link, index) => (
            <li
              key={link.href}
              className={`transition-all duration-300 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? `${index * 45}ms` : "0ms" }}
            >
              <Link
                href={link.href}
                className={`block py-3 text-[12px] font-semibold tracking-[2.5px] uppercase transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
