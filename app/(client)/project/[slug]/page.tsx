import { Badge } from '@/components/ui/badge'
import { Project, Skill } from '@/utils/interface'
import { getProject } from '@/utils/sanity'
import { PortableText } from '@portabletext/react'
import { toPlainText } from '@portabletext/react'
import Image from 'next/image'
import React from 'react'
import type { Metadata, ResolvingMetadata } from "next";
import Header from '@/components/ui/header'


type Props = {
  params: { slug: string }
}

// Dynamic metadata title

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  try {
    const projectData: Project = await getProject(params.slug);
    return {
      title: `${projectData.title} | Can Akyuz`,
      description: projectData.description,
    };
  } catch (error) {
    console.error("Error fetching project data:", error);
    return {
      title: "Error",
      description: "Failed to fetch project data.",
    };
  }
}


const ProjectPage = async ({ params }: Props) => {

  const slug = params.slug
  const projectData: Project = await getProject(slug)


  return (
    <section className='w-full font-body'>
      <div className='min-h-screen flex flex-col max-w-4xl mx-auto space-y-4 text-pretty'>
        <Header title={projectData.title} />
        <div className='flex md:flex-row flex-col md:items-center gap-4 justify-between'>
          <div className='flex items-center space-x-2 text-sm font-bold'>
            {projectData.skills.map((c: Skill, index: number) => (
              <Badge key={index} className='rounded-lg p-1'>#{c.name}</Badge>
            ))}
          </div>
          <div className='flex items-center space-x-2 text-sm text-violet-500'>
            <p className='font-bold'>{projectData.publishedAt.toString().slice(0, 10)}</p>
          </div>
        </div>
        <Image src={projectData.image} alt="" className="w-full object-cover border-2 border-violet-500 h-64 rounded-xl" height={500} width={500} />
        <PortableText
          value={projectData.body}
        />
      </div>
    </section>
  )
}

export default ProjectPage