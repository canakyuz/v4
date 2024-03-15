"use client";
import { Post } from '@/utils/interface';
import SubHeader from "./ui/sub-header";
import * as React from "react";

import { Card } from "@/components/ui/card";
import {
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
 posts: Post[]; // Renamed props to posts to reflect the actual data being passed
};

export const revalidate = 60;

const BlogSection: React.FC<Props> = ({ posts }) => {
 return (
  <section>
   <SubHeader title="Blog" />
   <Carousel className="w-full">
    <CarouselContent className="-ml-1">
     {posts.map((post: Post, index: number) => (
      <CarouselItem key={post._id} className="pl-1">
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

export default BlogSection;
