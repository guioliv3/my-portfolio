import { FaChevronRight } from "react-icons/fa";

export default function Nav() {
  return (
    <nav className="hidden lg:block mt-16">
      <ul className="flex flex-col">
        <li>
          <a href="#about" className="group flex items-center py-3 active">
            <FaChevronRight className="mr-4 text-teal transition group-hover:translate-x-1" size={16} />
            <span className="text-xs font-bold uppercase tracking-widest text-black group-hover:text-black">
              Sobre
            </span>
          </a>
        </li>
        <li>
          <a href="#projects" className="group flex items-center py-3">
            <FaChevronRight className="mr-4 text-teal transition group-hover:translate-x-1" size={16} />
            <span className="text-xs font-bold uppercase tracking-widest text-black group-hover:text-black">
              Projetos
            </span>
          </a>
        </li>
        <li>
          <a href="#skills" className="group flex items-center py-3">
            <FaChevronRight className="mr-4 text-teal transition group-hover:translate-x-1" size={16} />
            <span className="text-xs font-bold uppercase tracking-widest text-black group-hover:text-black">
              Habilidades
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}