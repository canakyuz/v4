import { cn } from "@/utils/cn";
import { Post, Tag, Project, Skill } from "@/utils/interface";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./badge";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>

  );
};

type BentoGridItemProps = {
  props: Post | Project;
  className?: string;
};

export const BentoGridItem = ({ props, className }: BentoGridItemProps) => {
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
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border-card bg-background border-2 justify-between flex flex-col space-y-4 animate-in font-body",
        className
      )}>
        <Image
          className="rounded-lg object-cover h-48 w-full object-center"
          src={props.image}
          width={300}
          height={300}
          alt={props.image}
        />
        <div className="group-hover/bento:translate-x-1 group-hover/bento:-translate-y-1 transition duration-200 z-10 min-h-fit">
          <div className="font-bold text-primary my-1 truncate">
            {props.title}
          </div>
          {/* 100 character */}
          <div className="font-normal text-light text-sm truncate">
            {props.description}
          </div>
          <div className="flex flex-wrap">
            {tagsOrSkills.map((item: Tag | Skill, index: number) => (
              <Badge
                key={index}
                className="mt-2 mr-2"
                variant={
                  isPost ? "ruby" : "cyan"}
              >{`#${item.name}`}</Badge>
            ))}
          </div>
        </div>
      </div>
    </Link >
  );
};