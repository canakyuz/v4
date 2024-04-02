import Header from "@/components/ui/header";
import { Project } from "@/utils/interface";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Metadata } from "next";
import { getProjects } from "@/utils/sanity";

export const metadata: Metadata = {
  title: "Projects | Can Akyuz",
  description:
    "I write about programming, design, and occasionally life updates!",
};

type Props = {
  props: Project[];
}


export const revalidate = 60;

export default async function Home() {
  const projects: Project[] = await getProjects();

  return (
    <div>
      <Header title="Projects" />
      <div>
        <BentoGrid className="max-w-4xl mx-auto">
          {projects.map((b: Project, index: number) => (
            <BentoGridItem className={index === 0 || index === 2 ? "md:col-span-2" : ""} key={index} props={b} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}