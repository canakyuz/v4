import { cn } from "@/utils/cn";
import { Post, Project, Tag, Skill } from "@/utils/interface";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./badge";

// Define the types for the BentoGrid component props
interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

// BentoGrid component: Sets up the grid layout
export const BentoGrid: React.FC<BentoGridProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

// Define types for BentoGridItem props
interface BentoGridItemProps {
  props: Post | Project;
  className?: string;
}

export const BentoGridItem: React.FC<BentoGridItemProps> = ({ props, className }) => {
  // Check if the necessary properties exist
  if (!props || !props.slug || !props.slug.current) {
    console.warn("Missing slug or ID in item:", props);
    return null; // Prevent rendering if essential data is missing
  }

  // Determine if the item is a Post based on the presence of 'tags'
  const isPost = "tags" in props;
  const linkHref = isPost
    ? `/blog/${props.slug.current}`
    : `/project/${props.slug.current}`;

  // Tags for posts, skills for projects
  const tagsOrSkills = isPost ? (props as Post).tags : (props as Project).skills;

  return (
    <Link href={linkHref}>
      <div
        className={cn(
          `rounded-xl group hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border-card bg-card border-2 flex flex-col space-y-4 animate-in font-body ${className}`
        )}
      >
        {/* Image rendering */}
        {props.image && (
          <Image
            className="rounded-lg object-cover h-48 w-full object-center"
            src={props.image}
            width={300}
            height={300}
            alt={props.title || "Image"}
          />
        )}
        <div className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-200 z-10 min-h-fit">
          {/* Title and Description */}
          <div className="font-bold text-primary my-1 truncate">
            {props.title || "Untitled"}
          </div>
          <div className="font-normal text-light text-sm truncate">
            {props.description || "No description available."}
          </div>
          {/* Tags or Skills Display */}
          <div className="flex flex-wrap">
            {tagsOrSkills &&
              tagsOrSkills.map((item: Tag | Skill, index: number) => (
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
