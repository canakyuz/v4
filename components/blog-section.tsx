"use client";
import { getPosts } from '@/utils/sanity'
import { Post } from '@/utils/interface'
import SubHeader from "./ui/sub-header";
import * as React from "react"

import { Card } from "@/components/ui/card"
import {
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
} from "@/components/ui/carousel"
import { post } from '@/sanity/schemas/post';


type Props = {
 props: Post[];
}

export const revalidate = 60;

export default async function BlogSection() {
 const posts: Post[] = await getPosts();
 console.log(posts, "posts");

 return (
  <section>
   <SubHeader title="Blog" />
   <Carousel className="w-full"
   >
    <CarouselContent className="-ml-1">
     {posts.map((post: Post, index: number) => (
      <CarouselItem className="pl-1 ">
       <Card key={index} props={post} />
      </CarouselItem>
     ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
   </Carousel>
  </section>
 );
};

