import { Badge } from '@/components/ui/badge'
import { Post, Tag } from '@/utils/interface'
import { getPost } from '@/utils/sanity'
import { PortableText } from '@portabletext/react'
import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import React from 'react'

type Props = {
 params: { slug: string }
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
  <section className='max-w-full mt-16 font-body text-pretty'>
   <div className='min-h-screen flex flex-col max-w-7xl mx-auto space-y-4'>
    <h1 className='font-extrabold text-3xl'>{postData.title}</h1>
    <div className='flex items-center justify-between'>
     <div className='flex items-center space-x-2 text-sm font-bold'>
      {postData.tags.map((c: Tag, index: number) => (
       <Badge key={index} className='bg-violet-200 rounded-lg p-1'>{c.name}</Badge>
      ))}
     </div>
     <div className='flex items-center space-x-2 text-sm text-violet-500'>
      <p className='font-bold'>{postData.publishedAt.toString().slice(0, 10)}</p>
     </div>
    </div>
    <Image src={postData.image} alt="" className="w-full object-cover border-2 border-violet-500 h-64 rounded-xl" height={500} width={500} />
    <div className='prose dark:prose-invert prose-code max-w-prose prose:text-balance'>
     <PortableText
      value={postData.body}
     />
    </div>
   </div>
  </section>
 )
}

export default PostPage


const richTextStyle = `
text-balance
`