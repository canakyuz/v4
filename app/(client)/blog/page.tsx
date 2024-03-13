import Header from "@/components/ui/header";
import { Post } from "@/utils/interface";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Metadata } from "next";
import { getPosts } from "@/utils/sanity";

export const metadata: Metadata = {
  title: "Blog | Can Akyuz",
  description:
    "I write about programming, design, and occasionally life updates!",
};

type Props = {
  props: Post[];
}


export const revalidate = 60;

export default async function Home() {
  const posts: Post[] = await getPosts();
  console.log(posts, "posts");

  return (
    <div className="">
      <Header title="Blog" />
      <div>
        <BentoGrid className="max-w-4xl mx-auto">
          {posts.map((b: Post, index: number) => (
            <BentoGridItem className={index === 0 || index === 2 ? "md:col-span-2" : ""} key={index} props={b} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
