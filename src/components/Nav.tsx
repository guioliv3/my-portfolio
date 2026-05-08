import { FaChevronRight } from "react-icons/fa";

export default function Nav() {
  return (
    <nav className="hidden lg:block mt-16">
      <ul className="flex flex-col">
        <li>
          <a href="#about" className="group flex items-center py-3 active">
            <FaChevronRight className="mr-4 text-[#E5E7EB] transition group-hover:translate-x-1" size={16} />
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5E7EB] group-hover:text-[#E5E7EB]">
              Sobre
            </span>
          </a>
        </li>
        <li>
          <a href="#projects" className="group flex items-center py-3">
            <FaChevronRight className="mr-4 text-[#E5E7EB] transition group-hover:translate-x-1" size={16} />
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5E7EB] group-hover:text-[#E5E7EB]">
              Projetos
            </span>
          </a>
        </li>
        <li>
          <a href="#skills" className="group flex items-center py-3">
            <FaChevronRight className="mr-4 text-[#E5E7EB] transition group-hover:translate-x-1" size={16} />
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5E7EB] group-hover:text-[#E5E7EB]">
              Habilidades
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}