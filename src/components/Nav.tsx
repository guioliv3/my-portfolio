import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [activeSection, setActiveSection] = useState('about');

useEffect(() => {
  const sections = ['about', 'projects', 'skills'];

  const handleScroll = () => {
    const scrollPosition =
      window.scrollY + window.innerHeight * 0.4;

    let currentSection = sections[0];

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (
        section &&
        scrollPosition >= section.offsetTop
      ) {
        currentSection = id;
      }
    });

    setActiveSection(currentSection);
  };

  window.addEventListener('scroll', handleScroll);

  handleScroll();

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  const navItems = [
    { id: 'about', label: 'Sobre' },
    { id: 'projects', label: 'Projetos' },
    { id: 'skills', label: 'Habilidades' },
  ];

  return (
    <motion.nav
      className="hidden lg:block mt-16"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
    >
      <ul className="flex flex-col">
        {navItems.map((item) => {
          const active = activeSection === item.id;

          return (
            <li key={item.id}>
              <motion.a
                href={`#${item.id}`}
                className="group flex items-center py-3"
                whileHover={{ x: active ? 0 : 4 }}
                transition={{ duration: 0.18 }}
              >
                <FaChevronRight
                  size={16}
                  className={`mr-4 transition-all duration-300 ${
                    active
                      ? 'translate-x-2 text-white'
                      : 'text-white/50 group-hover:translate-x-1 group-hover:text-white'
                  }`}
                />

                <span
                  className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    active
                      ? 'text-white'
                      : 'text-white/50 group-hover:text-white'
                  }`}
                >
                  {item.label}
                </span>
              </motion.a>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}