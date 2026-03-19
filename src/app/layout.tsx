import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Departure Desk — We Close Your Dubai Chapter",
    template: "%s | Departure Desk",
  },
  description:
    "Left Dubai and can't return? Departure Desk handles your apartment handover, car sale, deposit recovery, visa cancellation, and company wind-down — entirely remotely. Free assessment.",
  metadataBase: new URL("https://departure-desk.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://departure-desk.com",
    siteName: "Departure Desk",
    title: "Departure Desk — We Close Your Dubai Chapter",
    description:
      "Left Dubai? Your apartment, car, and deposits are costing you money every day. We handle everything remotely. Free assessment.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Departure Desk — Remote Dubai life-closure service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Departure Desk — We Close Your Dubai Chapter",
    description:
      "Left Dubai? Your apartment, car, and deposits are costing you money every day. We handle everything remotely. Free assessment.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
