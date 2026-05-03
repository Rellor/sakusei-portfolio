import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="relative flex items-center px-6 py-4">
      <Image src="/logo.png" alt="Logo" width={100} height={100} />

      <ul className="absolute left-1/2 -translate-x-1/2 flex gap-6">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/work">Work</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
