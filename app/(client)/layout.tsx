import type { Metadata } from "next";
import Providers from "@/utils/providers";
import Navigation from "@/components/navigation";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

// Fonts
import { Outfit } from 'next/font/google'
import "../globals.css";

const outfit = Outfit({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--outfit'
})

export const metadata: Metadata = {
  title: "Home | Can Akyuz",
  description: "Seasoned Front End Engineer specializing in crafting accessible web products",
  icons: "./favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>

      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className="antialiased bg-background p-0 m-0 transition duration-200">
        <svg
          className="pointer-events-none fixed isolate z-50 dark:opacity-90 opacity-40 mix-blend-multiply dark:mix-blend-soft-light top-0 bottom-0 left-0 right-0 h-screen w-screen"
          width="screen"
          height="screen"
        >
          <filter id="pedroduarteisalegend">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.80"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect
            width="100%"
            height="100%"
            filter="url(#pedroduarteisalegend)"
          ></rect>
        </svg>
        <main className="antialiased bg-background/10 max-w-4xl mx-auto w-full tracking-wide text-text">
          <Providers>
            <Navigation />
            <main className="px-6 pt-16 pb-24 md:pt-20 md:pb-44 w-full mx-auto h-full">
              {children}
              <Analytics />
              <SpeedInsights />
            </main>
          </Providers>
        </main>
      </body>
    </html>

  );
}
