"use client";

import { ReactNode } from "react";
import clsx from "clsx";
import { useTheme } from "next-themes";
import Link from "next/link";


type SectionProps = {
 heading: string;
 headingAlignment?: "right" | "left";
 children: ReactNode;
 link: any;
};

export default function Section({
 heading,
 headingAlignment,
 children,
 link,
}: SectionProps) {

 const { theme } = useTheme();

 return (
  <section className="flex flex-col md:flex-row gap-2 md:gap-9 col-reverse animate-in">
   <Link href={link}>
    <h2
     className={clsx(
      "md:w-32 text-primary shrink-0 text-lg font-semibold font-body hover:text-light transition duration-200 cursor-pointer",
      headingAlignment === "right" && "md:text-right",
     )}
    >
     {heading}
    </h2>
   </Link>
   {children}
  </section>
 );
}