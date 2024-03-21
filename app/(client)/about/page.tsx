import Section from "@/components/section";
import Header from "@/components/ui/header";
import { ConnectLinks } from "@/components/ui/links";
import Link from "@/components/ui/new-link"
import Image from "next/image";
import Gallery from "./components/gallery";


export default function About() {
 return (
  <div className="font-body">
   <Header title="About" />
   <div className="md:hidden my-10">
    <div
     className="animate-in"
     style={{ "--index": 1 } as React.CSSProperties}
    >
     <Image
      src="/gallery/four.jpg"
      alt={"me and lily"}
      width={280}
      height={139}
      className="relative h-60 inset-0 object-cover bg-gray-400 shadow-md pointer-events-none rounded-2xl -rotate-6"
      priority
     />
    </div>

    <div
     className="animate-in"
     style={{ "--index": 2 } as React.CSSProperties}
    >
     <Image
      src="/gallery/two.jpg"
      alt={"me and lily"}
      width={220}
      height={260}
      className="absolute w-48 inset-0 object-cover bg-gray-400 shadow-md pointer-events-none rounded-2xl rotate-6 left-[45%] md:left-[60%] md:w-56 -top-48"
      priority
     />
    </div>
   </div>
   <div className="flex flex-col gap-20">

    <div className="md:flex hidden flex-row justify-between">
     <Gallery />
    </div>
    <Section heading="About" headingAlignment="left">
     <div className="flex flex-col gap-4 text-light">
      <p>
       Hi, I&apos;m Can Akyuz, currently based in Izmir. I&apos;m a software engineer and designer actively seeking new opportunities in the New York City.
      </p>
      <p>
       Passionate about crafting delightful user experiences and tackling complex challenges, I bring a diverse skill set to the table. With a strong background in frontend development and design, I thrive in dynamic environments where creativity meets technology.
      </p>
      <p>
       As a co-founder of <a className="text-primary" href="https://www.bento.studio/" target="_blank" rel="noopener noreferrer">Bento</a>, a platform empowering creators to build and sell digital products, I have honed my entrepreneurial spirit and problem-solving abilities.
      </p>
      <p>
       Driven by a desire to expand my horizons and contribute to innovative projects, I am eager to connect with like-minded professionals and explore opportunities for collaboration. If you&apos;re interested in discussing potential roles or partnerships, feel free to reach out to me.
      </p>

     </div>
    </Section>
    <Section heading="Connect" headingAlignment="left">
     <div className="flex flex-col w-full gap-8">
      <p className="text-light">
       Have a question or just want to chat? Feel free to{" "}
       <Link className="text-primary" href="mailto:canakyuz23@gmail.com" >
        email me
       </Link>
       . Try finding me anywhere else at @canakyuz.
      </p>
      <ul className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-2 animated-list">
       {ConnectLinks.map((link) => (
        <li className="transition-opacity col-span-1" key={link.label}>
         <Link
          href={link.href}
          className="no-underline w-full border rounded-lg p-4 border-lighter hover:border-primary transition-colors ease-in-out duration-300 inline-grid"
         >
          <div className="flex items-center gap-3">
           <span className="text-xl">{link.icon}</span>
           {link.label}
           <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 ml-auto text-secondary"
           >
            <path
             fillRule="evenodd"
             d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
             clipRule="evenodd"
            />
           </svg>
          </div>
         </Link>
        </li>
       ))}
      </ul>
     </div>
    </Section>
   </div>
  </div>
 );
}