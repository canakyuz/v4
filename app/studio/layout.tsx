import Link from "next/link";
import "../globals.css";
import { IconHomeBolt } from "@tabler/icons-react";


export const metadata = {
  title: 'Studio | Can Akyuz',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="p-3 h-fit">
          <div className="flex items-center w-full px-4 bg-background to-cardHover border-2 rounded-lg mx-auto text-primary h-12">
            <Link className="hover:text-amber" href="/">
              <IconHomeBolt size={24} />
            </Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}

