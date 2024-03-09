import { cn } from "@/utils/cn";
import { Post, Tag } from "@/utils/interface";
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
    "grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto ",
    className
   )}
  >
   {children}
  </div>
 );
};

type BentoGridItemProps = {
 props: Post;
 className?: string; // className özelliği eklendi
};

export const BentoGridItem = ({ props, className }: BentoGridItemProps) => {
 if (!props || !props.slug || !props.slug.current) {
  return null; // veya başka bir uygun işlem yapabilirsiniz
 }

 // Post nesnesindeki tags dizisini string olarak birleştiriyoruz
 const tagsString = props.tags.map((tag: Tag) => `#${tag.name}`).join(' ');

 return (
  <Link href={"/blog/" + props.slug.current} >
   <div className={cn(
    "row-span-1 rounded-xl font-body group/bento shadow-sm hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border-card bg-background border-2 justify-between flex flex-col space-y-4",
    className // className özelliği burada kullanıldı
   )}>
    <Image
     className="rounded-lg object-cover h-48 w-full object-center"
     src={props.image}
     width={300}
     height={300}
     alt={props.image} // Use the alt property from the image object
    />
    <div className="group-hover/bento:translate-x-1 group-hover/bento:-translate-y-1 transition duration-200 z-10 bg-gradient-to-b from-slate-300 to-slate-700 bottom-0 left-0 right-0">
     <div className="font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
      {props.title}
     </div>
     <div className="font-normal text-neutral-600 text-sm dark:text-neutral-500">
      {props.description}
     </div>
     <Badge className="mt-2">{tagsString}</Badge>
    </div>
   </div>
  </Link >
 );
};
