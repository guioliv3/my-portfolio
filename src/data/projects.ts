
export type Project = {
  id: string;
  title: string;
  summary: string;
  image: string; 
  tech: string[];
  link?: string;
  repo?: string;
};

export const projectsacademic: Project[] = [
      {
    id: 'chatbot-fatec',
    title: 'Chatbot para FATEC Jacareí — 2DSM - 2º Sem 2026 ',
    summary:
      'Desenvolvimento de um chatbot para a FATEC Jacareí, com o objetivo de auxiliar os alunos e funcionários com informações sobre cursos, eventos e serviços. Responsável pelo desenvolvimento do backend.',
    image: `${import.meta.env.BASE_URL}projectsimg/chatbot.png`,
    tech: ['TypeScript', 'React', 'TailwindCSS', 'PostgreSQL', 'Docker', 'Prisma ORM'],
    link: '',
    repo: 'https://github.com/seliganessesdevs/ABP---2DSM-2026',
  },
   {
    id: 'agrirslab',
    title: 'AgriRS Lab Website — 1DSM - 1º Sem. 2025',
    summary:
      'Desenvolvimento de um website para o laboratório de Sensoriamento Remoto Agrícola do INPE com área administrativa para gerenciamento de conteúdo. Responsável pela documentação do projeto, pelo front-end e modelagem do banco de dados.',
    image: `${import.meta.env.BASE_URL}projectsimg/agrirslab.png`,
    tech: ['HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
    link: '',
    repo: 'https://github.com/NightHawksDevelopers/ABP-1',
  },
  


];

export const projects: Project[] = [  {
    id: 'nuestro-arquitetura',
    title: 'Website para Estúdio de arquitetura Nuestro',
    summary:
      'Criação de um website para o estúdio de arquitetura Nuestro, focada em apresentar seus projetos e serviços de forma elegante e responsiva, e levar autonomia para o cliente na atualização de projetos.',
    image: `${import.meta.env.BASE_URL}projectsimg/nuestro-arquitetura.png`,
    tech: ['Wordpress', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://www.nuestro.com.br/',
    repo: '',
  },

  {
    id: 'estudio-muda',
    title: 'Website para Estúdio de arquitetura MUDA',
    summary:
      'Criação de um website para o estúdio de arquitetura MUDA, focada em apresentar seus projetos e serviços de forma elegante e responsiva, e levar autonomia para o cliente na atualização de projetos.',
    image: `${import.meta.env.BASE_URL}projectsimg/estudio-muda.png`,
    tech: ['TypeScript', 'React', 'TailwindCSS', 'SanityCMS'],
    link: 'https://www.estudiomuda.com.br/',
    repo: '',
  },]

