// Code: Home page
import AboutSection from '@/components/about-section'
import BlogSection from '@/components/blog-section'
import ProjectSection from '@/components/project-section'
import { TechArea } from '@/components/tech-area'
import { getPosts, getProjects } from '@/utils/sanity'
import { Post, Project } from '@/utils/interface'

export const revalidate = 60;

export default async function Home() {
  const posts: Post[] = await getPosts();
  const projects: Project[] = await getProjects();
  return (
    <main className='w-full font-body flex flex-col md:gap-12 gap-8 animate-in md:my-12 my-6'>
      <AboutSection />
      <TechArea />
      <BlogSection posts={posts} />
      <ProjectSection projects={projects} />
    </main>
  )
}
