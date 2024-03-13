"use client";

import Avatar from "../public/avatar.png";
import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import SocialLinks from "./ui/social-links";

const AboutSection = () => {
    return (
        <header>
            <div className="grid grid-cols-12 grid-rows-4 gap-2">
                {/* Image */}
                <div className="self-center col-span-3 row-span-4">
                    <Image
                        className="rounded-full sm:border-none border-2 h-fit sm:w-10/12 brightness-100"
                        width={448}
                        height={448}
                        src={Avatar}
                        alt="avatar"
                        loading="lazy"
                    />
                </div>
                {/* Name */}
                <div className="self-center col-span-9 col-start-4 sm:row-span-1 row-span-2">
                    <h1 className="sm:text-4xl text-3xl font-semibold">
                        Bekircan Akyüz
                    </h1>
                </div>
                {/* Description */}
                <div className="self-center sm:col-span-9 sm:col-start-4 sm:row-start-2 col-span-12 row-span-2 col-start-1 row-start-5 ">
                    <h3 className="text-light sm:text-base text-sm">
                        I design web interfaces on Figma and develop software. My focus is on creating accessible products for the web. I work on both design and coding, aiming to create web experiences that are easy for everyone to use.
                    </h3>
                </div>
                {/* Connect Links */}
                <div className="self-center sm:row-start-4 col-span-9 row-span-2 col-start-4 row-start-3">
                    <ul className="flex flex-row gap-3 justify-start text-end text-text">
                        {SocialLinks.map((link) => (
                            <li key={link.label}>
                                {/*  */}
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="flex flex-row md:mx-[2px] m-[2px] md:p-2 p-[2px] rounded-md hover:bg-card items-center text-light hover:text-primary"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {link.icon}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default AboutSection;
