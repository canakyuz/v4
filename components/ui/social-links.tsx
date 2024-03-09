import { IconBrandGithub, IconBrandX, IconBrandLinkedin, IconBrandInstagram, IconMail, IconBrandMedium } from '@tabler/icons-react';

interface SocialLink {
    label: string;
    href: string;
    icon: React.ReactNode;
}

const SocialLinks: SocialLink[] = [
    {
        label: "Github",
        href: "https://github.com/canakyuz",
        icon: <IconBrandGithub className='h-5 w-5 md:h-6 md:w-6' />
    },
    {
        label: "Twitter",
        href: "https://twitter.com/canakyuz23",
        icon: <IconBrandX className='h-5 w-5 md:h-6 md:w-6' />
    },
    {
        label: "Linkedin",
        href: "https://www.linkedin.com/in/bcakyz/",
        icon: <IconBrandLinkedin className='h-5 w-5 md:h-6 md:w-6' />
    },
    /*     {
            label: "Instagram",
            href: "https://www.instagram.com/canakyuz__/",
            icon: <IconBrandInstagram className='h-5 w-5 md:h-6 md:w-6' />
        },
        {
            label: "Medium",
            href: "https://medium.com/@canakyuz",
            icon: <IconBrandMedium className='h-5 w-5 md:h-6 md:w-6' />
        }, */
    {
        label: "Email",
        href: "mailto:canakyuz23@gmail.com",
        icon: <IconMail className='h-5 w-5 md:h-6 md:w-6' />
    },
]

export default SocialLinks;