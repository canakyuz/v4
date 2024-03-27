import NextLink, { LinkProps as NextLinkProps } from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

type LinkProps = {
 children: ReactNode;
 className?: string;
 underline?: boolean;
} & NextLinkProps;

export default function NewLink(props: LinkProps) {
 const isExternal = !props.href.toString().startsWith("/");
 const { underline, ...rest } = props;
 return (
  <NextLink
   {...rest}
   className={clsx(
    "underline-offset-4 text-lighter hover:text-primary hover:underline hover:border-1 transition-colors duration-200 ease-in-out",
    (isExternal || underline) && "underline",
    props.className
   )}
   target={isExternal ? "_blank" : undefined}
  >
   {props.children}
  </NextLink>
 );
}