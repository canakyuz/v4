"use client";

import { ReactNode } from "react";
import clsx from "clsx";
import { useTheme } from "next-themes";


type SectionProps = {
 heading: string;
 headingAlignment?: "right" | "left";
 children: ReactNode;
};

export default function Section({
 heading,
 headingAlignment,
 children,
}: SectionProps) {

 const { theme } = useTheme();

 return (
  <section className="flex flex-col md:flex-row gap-2 md:gap-9 col-reverse animate-in">
   <h2
    className={clsx(
     "md:w-32 text-primary shrink-0 text-lg font-semibold font-body",
     headingAlignment === "right" && "md:text-right",
    )}
   >
    {heading}
   </h2>
   {children}
  </section>
 );
}