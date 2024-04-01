"use client";
import { Project } from '@/utils/interface'
import SubHeader from "./ui/sub-header";
import * as React from "react"

import { Card } from "@/components/ui/card"
import {
 Carousel,
 CarouselContent,
 CarouselDots,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
} from "@/components/ui/carousel"
import Section from './section';
import { project } from '@/sanity/schemas/project';


type Props = {
 projects: Project[];
};

export const revalidate = 60;

const ProjectSection: React.FC<Props> = ({ projects }) => {

 return (
  <Section heading="Projects" headingAlignment='left' link='/project'>
   <section className='animate-in'>
    <Carousel
     className="w-full"
     opts={
      {
       slidesToScroll: 1,
       inViewThreshold: 0.5,
       containScroll: "trimSnaps",
       align: "center",
      }
     }>
     <CarouselContent key="unique-key" className="-ml-1 md:px-3">
      {projects.map((project: Project, index: number) => (
       <CarouselItem key={project._id} className="p-2 my-1">
        <Card props={project} />
       </CarouselItem>
      ))}
     </CarouselContent>
     <CarouselPrevious />
     <CarouselNext />
     <CarouselDots />
    </Carousel>
   </section>
  </Section>
 );
};


export default ProjectSection;