"use client";
import { Post } from '@/utils/interface';
import * as React from "react";

import { Card } from "@/components/ui/card";

import ClassNames from "classnames";
import { EmblaPluginType } from 'embla-carousel'

import {
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
 CarouselDots
} from "@/components/ui/carousel";
import Section from './section';
import { plugin } from 'postcss';
import useEmblaCarousel from 'embla-carousel-react'

type Props = {
 posts: Post[];
};

type PropType = {
 plugins?: EmblaPluginType[]
}

export const revalidate = 60;

const BlogSection: React.FC<Props> = ({ posts }) => {
 return (
  <Section heading="Blog" headingAlignment='left'>
   <div className='animate-in'>
    <Carousel
     className="w-full"
     opts={
      {
       slidesToScroll: 1,
       loop: true,
       inViewThreshold: 0.5,
       containScroll: "trimSnaps",
       align: "center",
      }
     }

    >
     <CarouselContent className="-mx-1 md:px-3">
      {posts.map((post: Post, index: number) => (
       <CarouselItem key={post.id} className="p-2 my-1">
        <Card key={index} props={post} />
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