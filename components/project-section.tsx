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


type Props = {
 projects: Project[];
};

export const revalidate = 60;

const ProjectSection: React.FC<Props> = ({ projects }) => {

 return (
  <Section heading="Projects" headingAlignment='left'>
   <section className='animate-in'>
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
     }>
     <CarouselContent className="-mx-1 md:px-3">
      {projects.map((project: Project, index: number) => (
       <CarouselItem key={project.id} className="p-2 my-1">
        <Card key={project.id} props={project} />
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