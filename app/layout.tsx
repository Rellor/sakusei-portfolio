import type { Metadata } from "next";
import { Montserrat, Unica_One } from "next/font/google";
import "./src/styles/theme.css";
import "./src/styles/globals.css";
import Navigation from "./src/components/UI/navigation/Navigation";
import MobileNavigation from "./src/components/UI/navigation/mobileNavigation";
import Cursor from "./src/components/UI/cursor";
import Footer from "./src/components/UI/footer";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const unica = Unica_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-unica",
});

export const metadata: Metadata = {
  title: {
    default: "Sakusei Studio — Videoproductie & Marketing Purmerend",
    template: "%s | Sakusei Studio",
  },
  description:
    "Sakusei Studio vertaalt de identiteit van uw bedrijf naar cinematische videocontent die raakt, blijft hangen en vertrouwen opbouwt. Gebaseerd in Purmerend, Noord-Holland.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${unica.variable} h-full antialiased`}
    >
      <body className="min-h-full max-w-screen overflow-x-hidden flex flex-col bg-cream">
        <header>
          <Navigation />
          <MobileNavigation />
        </header>
        <main>
          <div>
            {/*<Cursor />*/}
            {children}
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
