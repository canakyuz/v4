"use client";

import React from "react";
import { IconApi, IconBrandAdobe, IconBrandBootstrap, IconBrandCss3, IconBrandFigma, IconBrandGit, IconBrandGithub, IconBrandHtml5, IconBrandJavascript, IconBrandMysql, IconBrandNextjs, IconBrandNodejs, IconBrandPython, IconBrandReact, IconBrandReactNative, IconBrandSass, IconBrandSolidjs, IconBrandStackshare, IconBrandTailwind, IconBrandTypescript, IconBrandVue, IconBrandBitbucket, IconBrandGraphql } from "@tabler/icons-react";
import { InfiniteMoving } from "./ui/infinite-moving";


export function TechArea() {
    return (
        <div className="flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center text-light relative overflow-hidden border-t-[1px] border-b-[1px] z-0">
            <InfiniteMoving
                items={testimonials}
                direction="left"
                speed="normal"
            />
        </div>
    );
}

const testimonials = [
    {
        label: "HTML",
        icon: <IconBrandHtml5 className="h-7 w-7" />,
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
        label: "CSS",
        icon: <IconBrandCss3 className="h-7 w-7" />,
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
        label: "JavaScript",
        icon: <IconBrandJavascript className="h-7 w-7" />,
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        label: "React",
        icon: <IconBrandReact className="h-7 w-7" />,
        href: "https://reactjs.org/",
    },
    {
        label: "Bootstrap",
        icon: <IconBrandBootstrap className="h-7 w-7" />,
        href: "https://getbootstrap.com/",

    },
    {
        label: "Tailwind CSS",
        icon: <IconBrandTailwind className="h-7 w-7" />,
        href: "https://tailwindcss.com/",
    },
    {
        label: "Sass",
        icon: <IconBrandSass className="h-7 w-7" />,
        href: "https://sass-lang.com/",
    },
    {
        label: "Figma",
        icon: <IconBrandFigma className="h-7 w-7" />,
        href: "https://www.figma.com/",
    },
    {
        label: "Adobe",
        icon: <IconBrandAdobe className="h-7 w-7" />,
        href: "https://www.adobe.com/",
    },
    {
        label: "TypeScript",
        icon: <IconBrandTypescript className="h-7 w-7" />,
        href: "https://www.typescriptlang.org/",
    },
    {
        label: "Next.js",
        icon: <IconBrandNextjs className="h-7 w-7" />,
        href: "https://nextjs.org/",
    },
    {
        label: "Solid.js",
        icon: <IconBrandSolidjs className="h-7 w-7" />,
        href: "https://solidjs.com/",
    },
    {
        label: "Vue.js",
        icon: <IconBrandVue className="h-7 w-7" />,
        href: "https://vuejs.org/",
    },
    {
        label: "React Native",
        icon: <IconBrandReactNative className="h-7 w-7 hover:text-primary" />,
        href: "https://reactnative.dev/",
    },
    {
        label: "Python",
        icon: <IconBrandPython className="h-7 w-7 hover:text-primary" />,
        href: "https://www.python.org/",
    },
    {
        label: "Git",
        icon: <IconBrandGit className="h-7 w-7 hover:text-primary" />,
        href: "https://git-scm.com/"
    },
    {
        label: "GitHub",
        icon: <IconBrandGithub className="h-7 w-7 hover:text-primary" />,
        href: "https://github.com"
    },
    {
        label: "Bitbucket",
        icon: <IconBrandBitbucket className="h-7 w-7 hover:text-primary" />,
        href: "https://bitbucket.org"
    },
    {
        label: "Design Principles",
        icon: <IconBrandStackshare className="h-7 w-7 hover:text-primary" />,
        href: "https://principles.design/"
    },
    {
        label: "Node.js",
        icon: <IconBrandNodejs className="h-7 w-7 hover:text-primary" />,
        href: "https://nodejs.org/"
    },
    {
        label: "SQL",
        icon: <IconBrandMysql className="h-7 w-7 hover:text-primary" />,
        href: "https://www.mysql.com/"
    },
    {
        label: "RESTful",
        icon: <IconApi className="h-7 w-7 hover:text-primary" />,
        href: "https://restfulapi.net/"
    },
    {
        label: "GraphQL",
        icon: <IconBrandGraphql className="h-7 w-7 hover:text-primary" />,
        href: "https://graphql.org/"
    }
];
