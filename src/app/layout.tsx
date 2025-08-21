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
  title: "Set Free by Jesse G",
  description: "Gospel art in crimson and black — sharp, holy, and unapologetically hood.",
  icons: { icon: "/set-free-jesseg-logo.png" },
  openGraph: {
    title: "Set Free by Jesse G",
    description: "Gospel art in crimson and black — sharp, holy, and unapologetically hood.",
    images: ["/set-free-jesseg-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Set Free by Jesse G",
    description: "Gospel art in crimson and black — sharp, holy, and unapologetically hood.",
    images: ["/set-free-jesseg-logo.png"],
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
                    SET FREE by JESSE G
                  </span>
                  <span className="relative text-[color:var(--yellow)] text-pink-glow">
                    SET FREE by JESSE G
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
      </body>
    </html>
  );
}
