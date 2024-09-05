import { cn } from "@/utils/cn";
import { Post, Tag, Project, Skill } from "@/utils/interface";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./badge";

// BentoGrid Component: A flexible grid layout to display items in the desired format.
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
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
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

// BentoGridItem Component: Displays individual grid items based on provided props.
export const BentoGridItem = ({ props, className }: BentoGridItemProps) => {
  // Check if necessary data exists to render the component
  if (!props || !props.slug || !props.slug.current) {
    return null;
  }

  // Determine if the item is a Post or a Project
  const isPost = "tags" in props;
  const linkHref = isPost
    ? `/blog/${props.slug.current}`
    : `/project/${props.slug.current}`;

  // Get tags or skills based on the item type
  const tagsOrSkills = isPost ? (props as Post).tags : (props as Project).skills;

  // Randomly decide to span two columns with a 20% probability
  const itemGridClass = Math.random() < 0.2 ? "md:col-span-2" : "md:col-span-1";

  return (
    <Link href={linkHref}>
      <div
        className={cn(
          `rounded-xl group hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border-card bg-card border-2 flex flex-col space-y-4 animate-in font-body ${itemGridClass}`,
          className
        )}
      >
        {/* Render the image if it exists */}
        {props.image && (
          <Image
            className="rounded-lg object-cover h-48 w-full object-center"
            src={props.image}
            width={300}
            height={300}
            alt={props.title || "Image"}
          />
        )}
        {/* Content Section */}
        <div className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-200 z-10 min-h-fit">
          {/* Title */}
          <div className="font-bold text-primary my-1 truncate">
            {props.title}
          </div>
          {/* Description */}
          <div className="font-normal text-light text-sm truncate">
            {props.description}
          </div>
          {/* Tags or Skills Badges */}
          <div className="flex flex-wrap">
            {tagsOrSkills.map((item: Tag | Skill, index: number) => (
              <Badge
                key={index}
                className="mt-2 mr-2"
                variant={isPost ? "ruby" : "cyan"}
              >
                {`#${item.name}`}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
