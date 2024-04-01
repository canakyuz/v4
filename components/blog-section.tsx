"use client";

import { Post } from '@/utils/interface';
import * as React from "react";

import { Card } from "@/components/ui/card";
import Section from './section';

import {
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
 CarouselDots
} from "@/components/ui/carousel";

type Props = {
 posts: Post[];
};

const BlogSection: React.FC<Props> = ({ posts }) => {
 const [selectedPostIndex, setSelectedPostIndex] = React.useState(0);

 const handlePostSelect = (index: number) => {
  setSelectedPostIndex(index);
 };

 return (
  <Section heading="Blog" headingAlignment='left' link='/blog'>
   <div className='animate-in'>
    <Carousel
     className="w-full"
     opts={{
      slidesToScroll: 1,
      inViewThreshold: 0.6,
      containScroll: "trimSnaps",
      align: "center",
      startIndex: 0,
     }}
    >
     <CarouselContent key="unique-key" className="-ml-1 md:px-3">
      {posts.map((post: Post, index: number) => (
       <CarouselItem
        key={post._id}
        className="p-2 my-1"
        onClick={() => handlePostSelect(index)}
       >
        <Card props={post} />
       </CarouselItem>
      ))}
     </CarouselContent>
     <CarouselPrevious />
     <CarouselNext />
     <CarouselDots />
    </Carousel>
   </div>
  </Section>
 );
};

export default BlogSection;
