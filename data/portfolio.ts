import { type ProjectItem, normalizeProjectImages } from '~/types/portfolio'

export const portfolioItems: ProjectItem[] = [
  normalizeProjectImages({
    title: 'DLSUD Scheduling System',
    description: 'Full-stack College Scheduling System',
    images: [ // Multiple images case
      '/projects/DLSUD/1.png',
      '/projects/DLSUD/2.png',
      '/projects/DLSUD/3.png',
      '/projects/DLSUD/4.png',
      '/projects/DLSUD/5.png',
      '/projects/DLSUD/6.png',
      '/projects/DLSUD/7.png',
      '/projects/DLSUD/8.png',
      '/projects/DLSUD/9.png',
      '/projects/DLSUD/10.png',
      '/projects/DLSUD/login.png',
    ],
    link: '/projects/DLSUD',
    githubLink: 'https://github.com/rollenasistores',
    technologies: ['Vue.js', 'Nuxt', 'Tailwind CSS', 'Node.js','Laravel','CSS', 'Inertia.js','Mysql', 'PHP']
  }),
  normalizeProjectImages({
    title: 'EvoStep E-Commerce',
    description: 'E-Commerce Personal Project on School ( Cavite State University )',
    image: '/projects/EvoStep/1.png',
    link: 'https://es.techlibrary.site/',
    githubLink: 'https://github.com/rollenasistores',
    technologies: ['Vue.js', 'Nuxt', 'Tailwind CSS', 'Node.js','Laravel','CSS', 'Inertia.js','Mysql', 'Redis', 'PHP']
  }),
  normalizeProjectImages({
    title: 'ASGARD Discord Bot',
    description: 'A automated registration checker / payment completed bot with website',
    image: '/projects/ASGARD/logo.png',
    link: 'https://discord.com/oauth2/authorize?client_id=848174934487203851',
    githubLink: 'https://github.com/rollenasistores',
    technologies: ['Typescript','Javascript','Discord.JS'],
    isArchived: true,
    archivedReason: 'I\'m not doing this project / tournament thingy anymore.'
  }),
]