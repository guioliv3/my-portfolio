import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
export default function Socials() {
  return (
    <ul className="ml-1 mt-8 flex items-center gap-5">
      <li>
        <a 
          href="https://github.com/guioliv3" 
          target="_blank" 
          rel="noreferrer"
          className="text-[#E5E7EB] hover:text-[#E5E7EB] transition-colors"
        >
          <FaGithub size={24} />
          <span className="sr-only">GitHub</span>
        </a>
      </li>
      <li>
        <a 
          href="https://www.linkedin.com/in/guilhermehenriquedeoliveira5" 
          target="_blank" 
          rel="noreferrer"
          className="text-[#E5E7EB] hover:text-[#E5E7EB] transition-colors"
        >
          <FaLinkedin size={24} />
          <span className="sr-only">LinkedIn</span>
        </a>
      </li>
            <li>
        <a 
          href="mailto:guilherme.hnr.oli@gmail.com" 
          target="_blank" 
          rel="noreferrer"
          className="text-[#E5E7EB] hover:text-[#E5E7EB] transition-colors"
        >
          <FaEnvelope size={24} />
          <span className="sr-only">Email</span>
        </a>
      </li>
      <li>
        <a 
          href="https://wa.me/5512988534827" 
          target="_blank" 
          rel="noreferrer"
          className="text-[#E5E7EB] hover:text-[#E5E7EB] transition-colors"
        >
          <FaWhatsapp size={24} />
          <span className="sr-only">WhatsApp</span>
        </a>
      </li>
    </ul>
  );
}