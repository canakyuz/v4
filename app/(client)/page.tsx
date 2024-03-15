// Code: Home page
import AboutSection from '@/components/about-section'
import BlogSection from '@/components/blog-section'
import ProjectSection from '@/components/project-section'
import { TechArea } from '@/components/tech-area'

export default function Home() {
  return (
    <main className='w-full font-body flex flex-col md:gap-12 gap-8'>
      <AboutSection />
      <TechArea />
      <BlogSection />
      <ProjectSection />
    </main>
  )
}
