import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';

export default function Socials() {
  return (
    <motion.ul
      className="ml-1 mt-8 flex items-center gap-5"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.3,
      }}
    >
      <li>
        <motion.a
          href="https://github.com/guioliv3"
          target="_blank"
          rel="noreferrer"
          className="text-[#E5E7EB]"
          whileHover={{ y: -3 }}
          transition={{ duration: 0.18 }}
        >
          <FaGithub size={24} />
          <span className="sr-only">GitHub</span>
        </motion.a>
      </li>

      <li>
        <motion.a
          href="https://www.linkedin.com/in/guilhermehenriquedeoliveira5"
          target="_blank"
          rel="noreferrer"
          className="text-[#E5E7EB]"
          whileHover={{ y: -3 }}
          transition={{ duration: 0.18 }}
        >
          <FaLinkedin size={24} />
          <span className="sr-only">LinkedIn</span>
        </motion.a>
      </li>

      
      <li>
        <motion.a
          href="mailto:guilherme.hnr.oli@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-[#E5E7EB]"
          whileHover={{ y: -3 }}
          transition={{ duration: 0.18 }}
        >
          <FaEnvelope size={24} />
          <span className="sr-only">Email</span>
        </motion.a>
      </li>

      <li>
        <motion.a
          href="https://wa.me/5512988534827"
          target="_blank"
          rel="noreferrer"
          className="text-[#E5E7EB]"
          whileHover={{ y: -3 }}
          transition={{ duration: 0.18 }}
        >
          <FaWhatsapp size={24} />
          <span className="sr-only">WhatsApp</span>
        </motion.a>
      </li> 
     
    </motion.ul>
  );
}