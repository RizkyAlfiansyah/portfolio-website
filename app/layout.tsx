import type { Metadata } from "next";
import { Instrument_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rizkyalfiansyah.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rizky Alfiansyah | Frontend Developer",
    template: "%s | Rizky Alfiansyah"
  },
  description:
    "Portfolio of Rizky Alfiansyah (Ren) — frontend developer specializing in React, Next.js, and TypeScript. Based in Bali, Indonesia. Available for remote collaborations.",
  keywords: [
    "Rizky Alfiansyah",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Developer Bali",
    "Remote Frontend Developer",
    "JavaScript Developer"
  ],
  authors: [{ name: "Rizky Alfiansyah", url: siteUrl }],
  creator: "Rizky Alfiansyah",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Rizky Alfiansyah | Frontend Developer",
    description:
      "Portfolio of Rizky Alfiansyah (Ren) — frontend developer specializing in React, Next.js, and TypeScript. Based in Bali, Indonesia.",
    siteName: "Rizky Alfiansyah",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Rizky Alfiansyah — Frontend Developer" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizky Alfiansyah | Frontend Developer",
    description:
      "Portfolio of Rizky Alfiansyah (Ren) — frontend developer specializing in React, Next.js, and TypeScript.",
    images: ["/opengraph-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 }
  },
  alternates: {
    canonical: siteUrl
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning className={`${instrumentSans.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':true;document.documentElement.classList.toggle('dark',d);if(!t){localStorage.setItem('theme',d?'dark':'light')}}catch(e){}})();`
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
