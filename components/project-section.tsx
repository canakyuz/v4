"use client";
import { getProjects } from '@/utils/sanity'
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
import { project } from '@/sanity/schemas/project';


type Props = {
 props: Project[];
}

export const revalidate = 60;

export default async function ProjectSection() {
 const project: Project[] = await getProjects();
 console.log(project, "projects");

 return (
  <section>
   <SubHeader title="Projects" />
   <Carousel className="w-full"
   >
    <CarouselContent className="-ml-1">
     {project.map((post: Project, index: number) => (
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

