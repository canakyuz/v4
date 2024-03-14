import { Badge } from '@/components/ui/badge'
import { Project, Skill } from '@/utils/interface'
import { getProject } from '@/utils/sanity'
import { PortableText } from '@portabletext/react'
import { toPlainText } from '@portabletext/react'
import Image from 'next/image'
import React from 'react'
import type { Metadata, ResolvingMetadata } from "next";
import Header from '@/components/ui/header'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  params: { slug: string }
}

const BlockContent = require('@sanity/block-content-to-react')
const serializers = {
  types: {
    code: (props: any) => (
      <div className='my-2 bg-ghost border-primary w-full flex-wrap'>
        <SyntaxHighlighter language={props.node.language} style={oneDark}>
          {props.node.code}
        </SyntaxHighlighter>
      </div>
    ),
  },
}

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
        {/* Title */}
        <Header title={projectData.title} />
        <div className='flex md:flex-row flex-col md:items-center gap-4 justify-between'>
          {/* Badge */}
          <div className='flex items-center space-x-2 text-sm font-bold'>
            {projectData.skills.map((c: Skill, index: number) => (
              <Badge key={index} className='rounded-lg p-1'>#{c.name}</Badge>
            ))}
          </div>
          {/* Date */}
          <div className='flex items-center space-x-2 text-sm text-violet-500'>
            <p className='font-bold'>{projectData.publishedAt.toString().slice(0, 10)}</p>
          </div>
        </div>
        {/* Image */}
        <Image src={projectData.image} alt="" className="w-full object-cover border-2 border-violet-500 h-64 rounded-xl" height={500} width={500} />
        {/* Body */}
        <div className='prose prose-base prose-slate max-w-full prose-code:ring-lightest dark:prose-invert prose-code prose:text-balance mx-auto w-screen'>
          <BlockContent
            blocks={projectData.body}
            projectId="xxxxxxxx"
            dataset="production"
            serializers={serializers}
          />
        </div>
      </div>
    </section>
  )
}

export default ProjectPage