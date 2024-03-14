import { Badge } from '@/components/ui/badge'
import Header from '@/components/ui/header'
import { Post, Tag } from '@/utils/interface'
import { getPost } from '@/utils/sanity'
import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import React from 'react'
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
  <section className='max-w-full font-body '>
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
    <Image src={postData.image} alt="" className="w-full object-cover border-2 border-violet-500 h-64 rounded-xl" height={500} width={500} />
    {/* Body */}
    <div className='prose prose-base prose-slate max-w-full prose-code:ring-lightest dark:prose-invert prose-code prose:text-balance mx-auto w-screen'>
     <BlockContent
      blocks={postData.body}
      projectId="xxxxxxxx"
      dataset="production"
      serializers={serializers}
     />
    </div>
   </div>
  </section>
 )
}

export default PostPage