// Code: Home page
import AboutSection from '@/components/about-section'
import { TechArea } from '@/components/tech-area'


export default function Home() {
  return (
    <main className='w-full font-body flex flex-col md:gap-28 gap-14'>
      <AboutSection />
      <TechArea />
    </main>
  )
}
