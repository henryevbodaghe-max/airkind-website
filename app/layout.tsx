import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://airkind.example"),
  title: {
    default: "AirKind | Premium Collagen + Mushroom Wellness",
    template: "%s | AirKind"
  },
  description:
    "AirKind creates premium collagen and mushroom wellness supplements that support healthy skin, focus, immune health, energy, healthy aging, and joint comfort.",
  openGraph: {
    title: "AirKind",
    description: "Wellness as essential as the air you breathe.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
