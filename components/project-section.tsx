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
import Section from './section';


type Props = {
 projects: Project[];
};

export const revalidate = 60;

const ProjectSection: React.FC<Props> = ({ projects }) => {

 return (
  <Section heading="Projects" headingAlignment='left'>
   <section className='animate-in'>
    <Carousel className="w-full flex flex-col">
     <CarouselContent className="-ml-1">
      {projects.map((project: Project, index: number) => (
       <CarouselItem key={project.id} className="p-2 my-1">
        <Card key={project.id} props={project} />
       </CarouselItem>
      ))}
     </CarouselContent>
     <CarouselPrevious />
     <CarouselNext />
    </Carousel>
   </section>
  </Section>
 );
};


export default ProjectSection;