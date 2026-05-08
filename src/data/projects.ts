
export type Project = {
  id: string;
  title: string;
  summary: string;
  image: string; // Updated to use public path
  tech: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    id: 'agrirslab',
    title: 'AgriRS Lab Website',
    summary:
      'Desenvolvimento de um website para o laboratório de Sensoriamento Remoto Agrícola do INPE com área administrativa para gerenciamento de conteúdo. Responsável pela documentação do projeto, pelo front-end e modelagem do banco de dados.',
    image: '/projectsimg/agrirslab.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
    link: '',
    repo: 'https://github.com/NightHawksDevelopers/ABP-1',
  },
  {
    id: 'estudio-muda',
    title: 'Landing Page Estúdio de arquitetura MUDA',
    summary:
      'Criação de uma landing page para o estúdio de arquitetura MUDA, focada em apresentar seus projetos e serviços de forma elegante e responsiva, e levar autonomia para o cliente na atualização de projetos.',
    image: '/projectsimg/estudio-muda.png',
    tech: ['TypeScript', 'React', 'TailwindCSS', 'SanityCMS'],
    link: 'https://www.estudiomuda.com.br/',
    repo: '',
  },
    {
    id: 'chatbot-fatec',
    title: 'Chatbot para FATEC Jacareí (EM ANDAMENTO)',
    summary:
      'Desenvolvimento de um chatbot para a FATEC Jacareí, com o objetivo de auxiliar os alunos e funcionários com informações sobre cursos, eventos e serviços. Responsável pelo desenvolvimento do backend.',
    image: '/projectsimg/chatbot.png',
    tech: ['TypeScript', 'React', 'TailwindCSS', 'PostgreSQL', 'Docker', 'Prisma ORM'],
    link: '',
    repo: 'https://github.com/seliganessesdevs/ABP---2DSM-2026',
  },
];
