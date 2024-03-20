"use client";
import { Project } from '@/utils/interface'
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


type Props = {
 projects: Project[];
};

export const revalidate = 60;

const ProjectSection: React.FC<Props> = ({ projects }) => {

 return (
  <section className='animate-in'>
   <SubHeader title="Projects" />
   <Carousel className="w-full">
    <CarouselContent className="-ml-1">
     {projects.map((project: Project, index: number) => (
      <CarouselItem key={project.id} className="pl-1 ">
       <Card key={index} props={project} />
      </CarouselItem>
     ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
   </Carousel>
  </section>
 );
};


export default ProjectSection;