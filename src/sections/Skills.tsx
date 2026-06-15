import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export default function Skills() {
  return (
    <motion.div
      className="text-[#E5E7EB]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="inline-block text-lg font-bold uppercase tracking-widest text-white after:mt-1 after:block after:h-[2px] after:w-full after:bg-white/30">
        Habilidades
      </h3>

      <motion.div
        className="mt-6 space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          staggerChildren: 0.25,
        }}
      >
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.5 }}
          className="border-l border-[#E5E7EB] pl-6"
        >
          <h4 className="text-sm font-semibold text-[#E5E7EB]">
            Linguagens de Programação
          </h4>

          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-[#E5E7EB] sm:grid-cols-2">
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>Python</li>
          </ul>
        </motion.div>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.5 }}
          className="border-l border-[#E5E7EB] pl-6"
        >
          <h4 className="text-sm font-semibold text-[#E5E7EB]">
            Bibliotecas e Frameworks
          </h4>

          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-[#E5E7EB] sm:grid-cols-2">
            <li>React</li>
            <li>Vite</li>
            <li>Node.js</li>
            <li>TailwindCSS</li>
            <li>Prisma ORM</li>
          </ul>
        </motion.div>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.5 }}
          className="border-l border-[#E5E7EB] pl-6"
        >
          <h4 className="text-sm font-semibold text-[#E5E7EB]">
            Ferramentas e Plataformas
          </h4>

          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-[#E5E7EB] sm:grid-cols-2">
            <li>Git e GitHub</li>
            <li>Docker e Docker Compose</li>
            <li>PostgreSQL</li>
            <li>SanityCMS</li>
            <li>WordPress</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}