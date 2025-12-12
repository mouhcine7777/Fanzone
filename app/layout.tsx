import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";

/* ---------- Local Fonts ---------- */
const forselafont = localFont({
  src: "./fonts/Forsela.ttf",
  variable: "--font-forsela",
  display: "swap",
});

const edofont = localFont({
  src: "./fonts/edo.ttf",
  variable: "--font-edo",
  display: "swap",
});

/* ---------- Google Font ---------- */
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

/* ---------- SEO Metadata ---------- */
export const metadata: Metadata = {
  title: {
    default:
      "Fanzone CAN Casablanca 2025 | Parc & Vélodrome – Matchs & Animations",
    template: "%s | Fanzone CAN Casablanca",
  },
  description:
    "Découvrez la Fanzone officielle de la CAN 2025 à Casablanca au Parc & Vélodrome : diffusion des matchs en direct, animations, food court et expériences uniques pour les supporters.",

  metadataBase: new URL("https://fanzonecan.com"),

  keywords: [
    "Fanzone CAN",
    "CAN 2025 Casablanca",
    "Fanzone Casablanca",
    "Parc Vélodrome Casablanca",
    "Coupe d'Afrique des Nations",
    "matchs CAN en direct",
    "fan zone Maroc",
    "événement football Casablanca",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  twitter: {
    card: "summary_large_image",
    title: "Fanzone CAN Casablanca 2025 | Parc & Vélodrome",
    description:
      "Vivez la Fanzone officielle de la CAN 2025 à Casablanca : matchs en direct, animations et expérience supporters.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://fanzonecan.com",
  },
};

/* ---------- Root Layout ---------- */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-MA">
      <body
        className={`${montserrat.variable} ${forselafont.variable} ${edofont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
