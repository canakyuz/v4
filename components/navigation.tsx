"use client"
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "@/components/ui/nav-link";
import Hamburger from 'hamburger-react'
import ThemeSwitch from "@/components/ui/theme-switch";

type Link = {
 label: string;
 href: string;
};

const links: Link[] = [
 { label: "About", href: "/about" },
 { label: "Blog", href: "/blog" },
 { label: "Projects", href: "/project" },
];

const Navigation: React.FC = () => {
 const [isOpen, setIsOpen] = useState(false);
 const [isMenuOpen, setIsMenuOpen] = useState(false); // Menüyü açık mı kapalı mı kontrolü

 const toggleMenu = () => {
  setIsOpen(!isOpen);
  setIsMenuOpen(!isMenuOpen); // Menüyü açık/kapalı olarak güncelle
 };

 const closeMenu = () => {
  setIsOpen(false);
  setIsMenuOpen(false); // Menüyü kapalı olarak güncelle
 };

 return (
  <nav className="md:sticky fixed top-0 left-0 right-0 py-1 md:mt-2 items-center rounded-lg w-full bg-background/10 shadow-lg z-30 backdrop-blur-xl">
   <div className="max-w-4xl mx-auto px-4 md:pt-0 pt-[6px] flex justify-between items-start md:items-center">

    {/* Logo */}
    <div className={`${isOpen ? "h-screen" : "h-fit"}`}>
     <Link href="/">
      <svg
       width="40"
       height="44"
       viewBox="0 0 256 263"
       fill="none"
       className="text-text"
       xmlns="http://www.w3.org/2000/svg"
      >
       <path
        d="M142.613 112.102L142.614 112.103C163.975 118.353 179.245 137.98 179.245 161.255C179.245 185.346 162.896 205.452 141.227 210.693L141.221 210.694C140.314 210.914 138.96 210.209 138.96 208.603V115.158C138.96 112.845 141.002 111.631 142.613 112.102ZM114.725 210.694L114.719 210.693C93.0509 205.455 76.7013 185.346 76.7013 161.255V52.046C76.7013 51.8229 76.7883 51.6822 76.8885 51.5974C76.9399 51.554 76.9825 51.5368 77.0043 51.5308C77.0176 51.5272 77.0377 51.5224 77.0859 51.5321L77.0879 51.5325C99.6855 56.039 116.987 76.5997 116.987 101.388V208.603C116.987 210.209 115.634 210.915 114.725 210.694Z"
        stroke="currentColor"
        strokeWidth="14"
       />
      </svg>
     </Link>
    </div>
    {/* Navigation Links */}
    <div className={`md:flex md:flex-row md:space-x-4 font-body justify-center flex-col md:h-fit h-full text-center justify-items-center  ${isOpen ? "flex h-screen gap-6 transition-all" : "hidden"}`}>
     {links.map((link) => (
      <NavLink key={link.href} href={link.href} onClick={closeMenu}>
       {link.label}
      </NavLink>
     ))}
     <div className="md:hidden">
      <ThemeSwitch />
     </div>
    </div>
    {/* Hamburger Icon for Mobile */}
    <div className={`md:hidden ${isOpen ? "h-screen" : "h-fit"}`}>
     <button onClick={toggleMenu}>
      <Hamburger size={20} toggled={isMenuOpen} />
     </button>
    </div>
    {/* Theme Button */}
    <div className="hidden md:flex">
     <ThemeSwitch />
    </div>
   </div >
  </nav >
 );
};

export default Navigation;
