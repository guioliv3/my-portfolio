import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
export default function Socials() {
  return (
    <ul className="ml-1 mt-8 flex items-center gap-5">
      <li>
        <a 
          href="https://github.com/guioliv3" 
          target="_blank" 
          rel="noreferrer"
          className="text-black hover:text-black transition-colors"
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
          className="text-black hover:text-black transition-colors"
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
          className="text-black hover:text-black transition-colors"
        >
          <FaEnvelope size={24} />
          <span className="sr-only">Email</span>
        </a>
      </li>
    </ul>
  );
}