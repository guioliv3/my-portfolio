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
        Desenvolvedor Full Stack e graduando em Desenvolvimento de Software
        Multiplataforma pela FATEC Jacareí (2025–2028). Desenvolvo aplicações
        web utilizando React, TypeScript, PostgreSQL e Docker, participando de
        todas as etapas do desenvolvimento, da modelagem de dados à entrega da
        interface final.
      </p>
    </motion.div>
  );
}