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
import { EmblaOptionsType } from 'embla-carousel';
import Section from './section';

type Props = {
 posts: Post[]; // Renamed props to posts to reflect the actual data being passed
};

export const revalidate = 60;

const BlogSection: React.FC<Props> = ({ posts }) => {
 const OPTIONS: EmblaOptionsType = { align: 'start' }
 return (
  <Section heading="Blog" headingAlignment='left'>
   <div className='animate-in'>
    <Carousel className="w-full" opts={OPTIONS}>
     <CarouselContent className="-ml-1">
      {posts.map((post: Post, index: number) => (
       <CarouselItem key={post.id} className="pl-1 my-1">
        <Card key={index} props={post} />
       </CarouselItem>
      ))}
     </CarouselContent>
     <CarouselPrevious />
     <CarouselNext />
    </Carousel>
   </div>
  </Section>
 );
};

export default BlogSection;
