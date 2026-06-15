import { motion } from 'framer-motion';

import Nav from './components/Nav';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Socials from './components/Socials';
import MouseGlow from './components/MouseGlow';

function App() {
  return (
    <>
  <MouseGlow />

  {/* Background base */}
  <div className="fixed inset-0 -z-20 bg-[#2b2b2b]" />

  {/* Glow do mouse */}
  <MouseGlow />

  {/* Background base */}
  <div className="fixed inset-0 -z-20 bg-[#2b2b2b]" />



      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold tracking-tight text-[#E5E7EB] sm:text-5xl"
              >
                Guilherme Henrique
                <br />
                de Oliveira
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                }}
                className="mt-3 text-lg font-medium tracking-tight text-[#E5E7EB] sm:text-xl"
              >
                Full Stack Developer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
                className="mt-4 max-w-xs leading-normal text-[12px] text-[#E5E7EB]"
              >
                Desenvolvedor Full Stack especializado em React, TypeScript e
                Node.js. Crio websites, landing pages e aplicações web focadas
                em performance, experiência do usuário e manutenção de longo
                prazo.
              </motion.p>

              <Nav />
            </div>

            <Socials />
          </header>

          <main className="pt-24 lg:w-1/2 lg:py-24">
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <About />
            </section>

            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <Projects />
            </section>

            <section
              id="skills"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <Skills />
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;