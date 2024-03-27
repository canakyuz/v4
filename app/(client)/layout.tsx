import type { Metadata } from "next";
import Providers from "@/utils/providers";
import Navigation from "@/components/navigation";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from "@/components/footer"
import { GeistMono } from 'geist/font/mono';

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
    <html lang="en" className={`${outfit.variable} ${GeistMono.variable}`} suppressHydrationWarning>

      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className="antialiased bg-background m-0 transition duration-200 h-screen">
        <svg
          className="pointer-events-none fixed isolate z-50 dark:opacity-80 opacity-50 mix-blend-multiply dark:mix-blend-soft-light top-0 bottom-0 left-0 right-0 h-screen w-screen"
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
        <main className="antialiased bg-background/10 max-w-4xl md:pt-12 pt-24 pb-0 mx-auto w-full tracking-wide h-screen">
          <Providers>
            <div className="flex flex-col justify-between h-full md:gap-12 gap-8 bg-background">
              {/* Navigation + Body */}
              <div>
                <Navigation />
                <main className="px-6 md:py-14 w-full mx-auto">
                  {children}
                  <Analytics />
                  <SpeedInsights />
                </main>
              </div>
              {/* Footer */}
              <Footer />
            </div>
          </Providers>
        </main>
      </body>
    </html>

  );
}
