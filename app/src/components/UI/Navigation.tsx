"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (hero) {
        const heroBottom = hero.offsetTop + hero.offsetHeight;
        setIsVisible(window.scrollY > heroBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-cream transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } flex items-center px-6 py-4 max-w-7xl mx-auto`}
    >
      <Image src="/logo.png" alt="Logo" width={100} height={100} />

      <ul className="absolute left-1/2 -translate-x-1/2 flex gap-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/work">Work</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
