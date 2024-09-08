import { cn } from "@/utils/cn";
import { Post, Project, Tag, Skill } from "@/utils/interface";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./badge";

type BentoGridItemProps = {
  props: Post | Project;
  className?: string;
  layout?: "vertical" | "horizontal"; // New prop to control layout
};

export const Card = ({
  props,
  className,
  layout = "vertical", // Default layout is vertical
}: BentoGridItemProps) => {
  if (!props || !props.slug || !props.slug.current) {
    return null;
  }

  const isPost = "tags" in props;
  const linkHref = isPost
    ? `/blog/${props.slug.current}`
    : `/project/${props.slug.current}`;

  const tagsOrSkills = isPost ? (props as Post).tags : (props as Project).skills;

  return (
    <Link href={linkHref}>
      <div
        className={cn(
          "rounded-xl font-body group/bento shadow-sm shadow-input dark:shadow-none p-4 border-card bg-card border-2 flex max-h-fit	",
          className,
          layout === "horizontal"
            ? "md:flex-row flex-col md:w-full md:h-[240px] max-h-fit" // Fixed height for horizontal layout
            : "md:flex-col flex-row w-full h-[400px]" // 50% width for vertical layout with fixed height
        )}
      >
        <div className="flex-none w-full md:w-1/2 relative">
          <Image
            className="rounded-lg object-cover"
            src={props.image}
            width={1904}
            height={500}
            alt={props.title}
            style={{ width: "100%", height: "100%" }} // Fill the card height
          />
        </div>
        <div
          className={cn(
            "flex flex-col justify-between p-4",
            layout === "horizontal" ? "md:w-1/2 w-full" : "w-full"
          )}
        >
          <div>
            <div className="font-bold text-primary my-1 text-base">
              {props.title}
            </div>
            <div className="font-normal text-light text-sm">
              {props.description}
            </div>
          </div>
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
    </Link>
  );
};
