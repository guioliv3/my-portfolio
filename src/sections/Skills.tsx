export default function Skills() {
  return (
    <div className="text-[#E5E7EB]">
      <h3 className="text-xs font-bold uppercase tracking-widest text-[#E5E7EB]">Habilidades</h3>
      <div className="mt-6 space-y-10">
        <div className="border-l border-[#E5E7EB] pl-6">
          <h4 className="text-sm font-semibold text-[#E5E7EB]">Linguagens de Programacao</h4>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-[#E5E7EB] sm:grid-cols-2">
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>Python</li>
          </ul>
        </div>

        <div className="border-l border-[#E5E7EB] pl-6">
          <h4 className="text-sm font-semibold text-[#E5E7EB]">Bibliotecas e Frameworks</h4>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-[#E5E7EB] sm:grid-cols-2">
            <li>React</li>
            <li>Vite</li>
            <li>Node.js</li>
            <li>TailwindCSS</li>
            <li>Prisma ORM</li>
          </ul>
        </div>

        <div className="border-l border-[#E5E7EB] pl-6">
          <h4 className="text-sm font-semibold text-[#E5E7EB]">Ferramentas e Plataformas</h4>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-[#E5E7EB] sm:grid-cols-2">
            <li>Git e GitHub</li>
            <li>Docker e Docker Compose</li>
            <li>PostgreSQL</li>
            <li>SanityCMS</li>
            <li>Wordpress</li>
          </ul>
        </div>
      </div>
    </div>
  );
}