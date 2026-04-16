import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: "variable",
});

export const metadata: Metadata = {
  title: "SalesSpeak - Sales Intelligence for Print Businesses",
  description:
    "SalesSpeak helps print businesses close more deals with real-time sales intelligence, pipeline management, and automated follow-ups.",
  keywords:
    "sales intelligence, print business, pipeline management, CRM, sales automation, quote management",
  metadataBase: new URL("https://salesspeak.com"),
  alternates: {
    canonical: "https://salesspeak.com",
  },
  openGraph: {
    title: "SalesSpeak - Sales Intelligence for Print Businesses",
    description:
      "Close more deals with real-time sales intelligence, pipeline management, and automated follow-ups.",
    url: "https://salesspeak.com",
    siteName: "SalesSpeak",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SalesSpeak",
  url: "https://salesspeak.com",
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SalesSpeak",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Sales intelligence platform for print businesses.",
  url: "https://salesspeak.com",
  creator: {
    "@type": "Organization",
    name: "SalesSpeak",
    url: "https://salesspeak.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema),
          }}
        />
      </head>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
