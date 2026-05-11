"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "backdrop-blur-sm bg-black/90" : "pt-10 bg-black/05"
      } fixed top-0 left-0 right-0 z-50  transition-padding duration-300 px-18 py-5 flex items-center justify-between`}
    >
      <Image src="/fullLogoLight.svg" alt="Logo" width={150} height={150} />

      <ul className="flex gap-6 text-white">
        <li>
          <Button text="Home" type="link" href="/" />
        </li>
        <li>
          <Button text="Cases" type="link" href="/cases" />
        </li>
        <li>
          <Button text="Proces & prijzen" type="link" href="/prices" />
        </li>
        <li>
          <Button text="Over ons" type="link" href="/about" />
        </li>
        <li>
          <Button text="Contact" type="button" href="/contact" />
        </li>
      </ul>
    </nav>
  );
}
