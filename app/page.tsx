import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className="py-40 relative" id="hero">
          <Image src="/logo.png" alt="Logo" width={250} height={250} />
          <div className="flex gap-8 items-center">
            <div className="h-px bg-black w-full" />
            <h4 className="uppercase max-w-70">
              When passion meets strategy people can't help but notice.
            </h4>
          </div>
          <img
            src="/swoosh.svg"
            alt="swoosh"
            className="absolute left-0 right-0 bottom-0 h-auto"
          />
        </div>

        <div className="mb-800" />
      </main>
    </div>
  );
}
