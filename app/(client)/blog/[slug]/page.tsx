import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';
import Header from '@/components/ui/header';
import { Badge } from '@/components/ui/badge';
import { Post, Tag } from '@/utils/interface';
import { getPost } from '@/utils/sanity';
import type { Metadata, ResolvingMetadata } from 'next';
const BlockContent = require('@sanity/block-content-to-react');


type Props = {
 params: { slug: string }
}

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
 parent: ResolvingMetadata,
): Promise<Metadata> {
 try {
  const postData: Post = await getPost(params.slug);
  return {
   title: `${postData.title} | Can Akyuz`,
   description: postData.description,
  };
 } catch (error) {
  console.error("Error fetching project data:", error);
  return {
   title: "Error",
   description: "Failed to fetch project data.",
  };
 }
}


const PostPage = async ({ params }: Props) => {

 const slug = params.slug
 const postData: Post = await getPost(slug)


 return (
  <section className='max-w-full font-body animate-in'>
   <div className='min-h-screen flex flex-col mx-auto space-y-4 text-pretty'>
    {/* Title */}
    <Header title={postData.title} />
    <div className='flex md:flex-row flex-col md:items-center gap-4 justify-between'>
     {/* Badge */}
     <div className='flex items-center space-x-2 text-sm font-bold'>
      {postData.tags.map((c: Tag, index: number) => (
       <Badge key={index} className='bg-violet-200 rounded-lg p-1'># {c.name}</Badge>
      ))}
     </div>
     {/* Date */}
     <div className='flex items-center space-x-2 text-sm text-violet-500'>
      <p className='font-bold'>{postData.publishedAt.toString().slice(0, 10)}</p>
     </div>
    </div>
    {/* Image */}
    <Image src={postData.image} alt="" className="w-full object-cover z-0 border-2 border-violet-500 h-64 rounded-xl" height={500} width={500} />
    {/* Body */}
    <div className='prose prose-base prose-slate prose-p:pl-8 max-w-full prose-code:ring-lightest dark:prose-invert prose-code prose:text-balance mx-auto w-screen'>
     <BlockContent
      blocks={postData.body}
      projectId="xxxxxxxx"
      dataset="production"
      serializers={serializers}
      copyButton={true}
     />
    </div>
   </div>
  </section>
 )
}

export default PostPage