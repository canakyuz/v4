"use client";

import Link from "next/link";
import { Badge } from "./ui/badge";



const Footer = () => {
 return (
  <footer className="flex flex-col max-w-4xl py-6 gap-4 text-light font-body text-sm px-6">
   <div className="flex flex-row gap-3 ">
    <Link className="hover:text-ruby hover:underline" href="/about">About</Link>
    <Link className="hover:text-ruby hover:underline" href="/blog">Blog</Link>
    <Link className="hover:text-ruby hover:underline" href="/project">Project</Link>
   </div>
   <div>
    Built with <a className="text-primary hover:text-ruby" href="https://nextjs.org/">Next.js</a>, <a className="text-primary hover:text-ruby" href="https://tailwindcss.com/">Tailwind</a>, <a className="text-primary hover:text-ruby" href="https://www.sanity.io/">Sanity</a> and <a className="text-primary hover:text-ruby" href="https://vercel.com/">Vercel</a>.
   </div>
  </footer>
 );
};

export default Footer;
