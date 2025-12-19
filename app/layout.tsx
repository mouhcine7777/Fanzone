import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import Script from "next/script";
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
    "can fanzone",
    "casablanca fanzone",
    "fanzone",
    "can casablanca",
    "can 2025",
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
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X3NT1NJV9P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X3NT1NJV9P');
          `}
        </Script>
      </head>

      <body
        className={`${montserrat.variable} ${forselafont.variable} ${edofont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
