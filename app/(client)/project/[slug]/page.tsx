import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Image from 'next/image';
import Header from '@/components/ui/header';
import { Badge } from '@/components/ui/badge';
import { Project, Skill } from '@/utils/interface';
import { getProject } from '@/utils/sanity';
import type { Metadata, ResolvingMetadata } from 'next';
const BlockContent = require('@sanity/block-content-to-react');

type Props = {
  params: { slug: string };
};

export const revalidate = 60;

const serializers = {
  types: {
    code: ({ node }: any) => {
      const { language, code } = node;
      return (
        <div className='w-full flex-wrap'>
          <SyntaxHighlighter
            language={language}
            style={duotoneDark}
            wrapLines={true}
            showLineNumbers={true}
            startingLineNumber={1}
            lineProps={(lineNumber: number) => {
              const style: React.CSSProperties = {};
              if (lineNumber === 2) {
                style.backgroundColor = '#f7ebc6';
              }
              return { style };
            }}
            codeTagProps={{ style: { fontFamily: 'inherit' } }}
            useInlineStyles={true}
            CodeTag={'code'}
            lineNumberStyle={{ color: '#e5f7ff80' }}
            lineNumberContainerStyle={{ width: '2em', userSelect: 'none', color: '#e5f7ff80' }}
            customStyle={{
              backgroundColor: '#2d2d2d',
              borderRadius: 'rounded-xl',
              padding: 'p-4',
              margin: 'm-4',
              border: 'border-primary',
              overflow: 'overflow-x-auto',
              width: 'w-full',
              maxWidth: 'max-w-full',
              display: 'flex',
              justifyContent: 'justify-start',
              alignItems: 'items-start',
            }}

            wrapLongLines={true}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      );
    },
  },
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const projectData: Project = await getProject(params.slug);
    return {
      title: `${projectData.title} | Can Akyuz`,
      description: projectData.description,
    };
  } catch (error) {
    console.error('Error fetching project data:', error);
    return {
      title: 'Error',
      description: 'Failed to fetch project data.',
    };
  }
}

const ProjectPage: React.FC<Props> = async ({ params }: Props) => {
  const slug = params.slug;
  const projectData: Project = await getProject(slug);

  return (
    <section className='w-full font-body animate-in'>
      <div className='min-h-screen flex flex-col max-w-4xl mx-auto space-y-4 text-pretty'>
        {/* Title */}
        <Header title={projectData.title} />
        <div className='flex md:flex-row flex-col md:items-center gap-4 justify-between'>
          {/* Badge */}
          <div className='flex items-center space-x-2 text-sm font-bold'>
            {projectData.skills.map((c: Skill, index: number) => (
              <Badge key={index} className='rounded-lg p-1'>
                #{c.name}
              </Badge>
            ))}
          </div>
          {/* Date */}
          <div className='flex items-center space-x-2 text-sm text-violet-500'>
            <p className='font-bold'>{projectData.publishedAt.toString().slice(0, 10)}</p>
          </div>
        </div>
        {/* Image */}
        <Image
          src={projectData.image}
          alt=''
          className='w-full object-cover border-2 border-violet-500 h-64 rounded-xl'
          height={500}
          width={500}
        />
        {/* Body */}
        <div className='
            prose
            prose-base
            prose-slate
            md:prose-h1:pl-0
            md:prose-h2:pl-3
            md:prose-h3:pl-6
            md:prose-h4:pl-9
            md:prose-h5:pl-12
            md:prose-p:pl-16
            md:prose-ol:pl-16
            md:prose-ul:pl-20
            max-w-full
            prose-h1:pl-0
            prose-h2:pl-1
            prose-h3:pl-2
            prose-h4:pl-3
            prose-h5:pl-4
            prose-p:pl-5
            prose-ol:pl-9
            prose-ul:pl-9
            dark:prose-invert
            prose-code
            prose-p:text-sm
            prose-li:text-sm
            mx-auto w-screen'>
          <BlockContent
            blocks={projectData.body}
            projectId='xxxxxxxx'
            dataset='production'
            serializers={serializers}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
