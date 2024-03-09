"use client";

import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type NavLinkProps = {
 href: string;
 children: ReactNode;
 onClick: () => void;
};

export default function NavLink({ href, children }: NavLinkProps) {
 const pathname = `/${usePathname().split("/")[1]}`; // active paths on dynamic subpages
 const isActive = pathname === href;

 return (

  <Link
   className={clsx(
    "px-[12px] py-[6px] m-3 rounded-md text-md text-light font-normal hover:transition-all hover:duration-200",
    isActive ? "text-primary bg-card font-medium" : "hover:text-primary hover:bg-card hover:font-medium"
   )}
   href={href}
  >
   {children}
  </Link>
 );
}