import type { Metadata } from "next";
import { Geist, Geist_Mono, Baloo_2 } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baloo = Baloo_2({
  variable: "--font-baloo-2",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://setfree.jesseg.example"),
  title: {
    default: "Set Free by Jesse G",
    template: "%s | Set Free by Jesse G",
  },
  description:
    "Gospel art in neon color and black — sharp, holy, unapologetically hood. Clean letters, bold scripture, street air.",
  keywords: [
    "Set Free",
    "Jesse G",
    "gospel art",
    "street art",
    "graffiti",
    "neon art",
    "hood",
    "faith",
  ],
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico" },
      { rel: "icon", url: "/set-free-jesseg-blackyellow-logo.png", type: "image/png" },
    ],
    apple: "/set-free-jesseg-blackyellow-logo.png",
  },
  openGraph: {
    type: "website",
    title: "Set Free by Jesse G",
    description:
      "Gospel art in neon color and black — sharp, holy, unapologetically hood. Clean letters, bold scripture, street air.",
    images: [
      {
        url: "/set-free-jesseg-cathedral.png",
        width: 1200,
        height: 630,
        alt: "Set Free by Jesse G — Cathedral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Set Free by Jesse G",
    description:
      "Gospel art in neon color and black — sharp, holy, unapologetically hood. Clean letters, bold scripture, street air.",
    images: ["/set-free-jesseg-cathedral.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${baloo.variable} antialiased`}
      >
        <header className="sticky top-0 z-50 w-full border-b border-black/20 bg-black shadow-lg">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative inline-block leading-none">
                <span className="font-brand text-2xl sm:text-3xl md:text-4xl font-extrabold relative">
                  <span aria-hidden className="absolute inset-0 text-[#ff69b4] text-outline-black-2 select-none">
                    JESSE G
                  </span>
                  <span className="relative text-[color:var(--yellow)] text-pink-glow">
                    JESSE G
                  </span>
                </span>
              </span>
            </Link>
            <nav className="flex items-center gap-2">
              <Link href="/" className="px-3 py-2 rounded-full text-sm font-semibold bg-[linear-gradient(135deg,var(--pink),var(--yellow))] text-black shadow-sm hover:opacity-90 transition-opacity">Home</Link>
              <Link href="#works" className="px-3 py-2 rounded-full text-sm font-semibold bg-[linear-gradient(135deg,var(--pink),var(--yellow))] text-black shadow-sm hover:opacity-90 transition-opacity">Works</Link>
              <Link href="#contact" className="px-3 py-2 rounded-full text-sm font-semibold bg-[linear-gradient(135deg,var(--pink),var(--yellow))] text-black shadow-sm hover:opacity-90 transition-opacity">Contact</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="mt-16 border-t border-black/20 bg-black/70">
          <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-center gap-3">
            <a href="https://setfreedigitaldisciples.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3">
              <img src="/set-free-digital-disciples-logo.png" alt="Set Free Digital Disciples" className="h-6 w-auto" />
              <span className="text-sm text-[color:var(--yellow)] text-pink-glow">Designed by Set Free Digital Disciples</span>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
