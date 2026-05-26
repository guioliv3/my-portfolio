import Nav from './components/Nav';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Socials from './components/Socials';


function App() {
  return (
    <>
      {/* Fundo visual fixo global */}
      <div className="fixed inset-0 -z-10 bg-[#2b2b2b]">
        <div className="absolute inset-0 bg-[radial-gradient(600px_at_var(--mouse-x)_var(--mouse-y),rgba(29,78,216,0.15),transparent)]" />
      </div>

      {/* Container principal: define o padding responsivo e a largura máxima */}
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* COLUNA ESQUERDA: Fixa no topo em telas grandes */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-[#E5E7EB] sm:text-5xl">
                Guilherme Henrique <br /> 
                de Oliveira
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-[#E5E7EB] sm:text-xl">
                Full Stack Developer
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-[12px] text-[#E5E7EB]">
Desenvolvedor Full-stack e graduando em Desenvolvimento de Software pela FATEC Jacareí. Especializado na criação de interfaces sofisticadas e arquiteturas de alta performance, desenvolvendo experiências digitais que unem design, funcionalidade e estrutura técnica sólida. Transformo ideias complexas em produtos modernos, estratégicos e bem estruturados.              </p>
              {/* O Menu de navegação que criaremos a seguir */}
              <Nav />
            </div>
            {/* Redes sociais na base da coluna esquerda */}
            <Socials />
          </header>

          {/* COLUNA DIREITA: Conteúdo rolável */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <About />
            </section>
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <Projects />
            </section>
            <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <Skills />
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;