import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="text-[#E5E7EB]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p>
        Desenvolvedor web especializado em criar aplicações rápidas, escaláveis e com design limpo e minimalista. Utilizo tecnologias modernas como React, TypeScript, Vite e Tailwind CSS para transformar ideias em interfaces fluidas e de alta performance. Além do código, foco na entrega de valor real, integrando soluções como Headless CMS (Sanity) para garantir que os clientes tenham total autonomia sobre seus conteúdos. Meu objetivo é sempre unir estética, usabilidade e uma arquitetura sólida.
      </p>
    </motion.div>
  );
}