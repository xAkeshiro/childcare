import { Navbar } from '@/sections/navbar'
import { Hero } from '@/sections/hero'
import { About } from '@/sections/about'
import { Programs } from '@/sections/programs'
import { Day } from '@/sections/day'
import { Tuition } from '@/sections/tuition'
import { Abcs } from '@/sections/abcs'
import { Steps } from '@/sections/steps'
import { Faq } from '@/sections/faq'
import { Visit } from '@/sections/visit'
import { Footer } from '@/sections/footer'

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only-focusable z-[60] rounded-md bg-marker px-4 py-2 font-bold text-ink">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Programs />
        <Day />
        <Tuition />
        <Abcs />
        <Steps />
        <Faq />
        <Visit />
      </main>
      <Footer />
    </>
  )
}
