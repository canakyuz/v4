import { cn } from "@/utils/cn";
import { Post, Tag, Project, Skill } from "@/utils/interface";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./badge";

type BentoGridItemProps = {
 props: Post | Project;
 className?: string;
};


export const Card = ({ props, className }: BentoGridItemProps) => {
 if (!props || !props.slug || !props.slug.current) {
  return null;
 }

 const isPost = 'tags' in props;
 const linkHref = isPost
  ? `/blog/${props.slug.current}`
  : `/project/${props.slug.current}`;

 const tagsOrSkills = isPost ? (props as Post).tags : (props as Project).skills;

 return (
  <Link href={linkHref}>
   <div className={cn(
    "row-span-1 rounded-xl font-body group/bento shadow-sm shadow-input dark:shadow-none p-4 mx-1 border-card bg-card border-2 justify-between flex flex-col space-y-4 h-full animate-in",
    className
   )}>
    <Image
     className="rounded-lg object-cover h-64 w-auto object-center"
     src={props.image}

     width={300}
     height={300}
     alt={props.image}
    />
    <div className="group-hover/bento:translate-x-1 group-hover/bento:-translate-y-1 z-10 bg-gradient-to-b from-slate-300 to-slate-700 flex flex-col justify-between h-full">
     <div>
      <div className="font-bold text-primary my-1 text-base">
       {props.title}
      </div>
      <div className="font-normal text-light text-sm">
       {props.description}
      </div>
     </div>
     {/* Badge */}
     <div className="flex flex-wrap">
      {tagsOrSkills.map((item: Tag | Skill, index: number) => (
       <Badge
        key={index}
        className="mt-2 mr-2"
        variant={isPost ? "ruby" : "cyan"}
       >{`# ${item.name}`}</Badge>
      ))}
     </div>
    </div>
   </div>
  </Link >
 );
};