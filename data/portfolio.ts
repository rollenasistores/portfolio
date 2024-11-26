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
    technologies: ['Vue.js', 'Nuxt', 'Tailwind CSS', 'Node.js','Laravel','CSS', 'Inertia.js','Mysql', 'PHP', 'Website'],
    isArchived: false,
    archivedReason: 'I\'m not doing this project'
  }),
  normalizeProjectImages({
    title: 'EvoStep E-Commerce',
    description: 'E-Commerce Personal Project on School ( Cavite State University )',
    image: '/projects/EvoStep/1.png',
    link: 'https://es.techlibrary.site/',
    githubLink: 'https://github.com/rollenasistores',
    technologies: ['Vue.js', 'Nuxt', 'Tailwind CSS', 'Node.js','Laravel','CSS', 'Inertia.js','Mysql', 'Redis', 'PHP','Website'],
    isArchived: false,
    archivedReason: 'I\'m not doing this project'
  }),
  normalizeProjectImages({
    title: 'TechLibrary Site',
    description: 'TechLibrary, E-Library System with Student Borrowing System',
    images: [
      '/projects/Techlibrary/1.png',
      '/projects/Techlibrary/2.png',
      '/projects/Techlibrary/3.png',
      '/projects/Techlibrary/4.png',
      '/projects/Techlibrary/5.png',
      '/projects/Techlibrary/6.png',
      '/projects/Techlibrary/7.png',
    ],
    link: 'https://techlibrary.site/',
    githubLink: 'https://github.com/rollenasistores',
    technologies: ['Vue.js','Tailwind CSS', 'Node.js','Laravel','CSS', 'Inertia.js','Mysql','PHP','Website'],
    isArchived: false,
    archivedReason: 'I\'m not doing this project'
  }),

  normalizeProjectImages({
    title: 'Barangay Navarro System',
    description: 'Baranggay Appointment / Document Requesting System with Attendance System using Fingerprint',
    image: '/projects/brgynavarro/1.png',
    link: 'https://brgynavarro.site/',
    githubLink: 'https://github.com/rollenasistores',
    technologies: ['Vue.js','Tailwind CSS', 'Node.js','Laravel','CSS', 'Inertia.js','Mysql','PHP', 'Redis'],
    isArchived: false,
    archivedReason: 'I\'m not doing this project'
  }),
  normalizeProjectImages({
    title: 'Paypark Site',
    description: 'Paypark App ( with Landing Page ) / IOS & Android Application',
    images: [
      '/projects/PAYPARK/1.png',
      '/projects/PAYPARK/2.png',
      '/projects/PAYPARK/3.png',
      '/projects/PAYPARK/4.png',
    ],
    link: 'https://paypark.site/',
    githubLink: 'https://github.com/rollenasistores',
    technologies: ['Vue.js','Tailwind CSS', 'Node.js','Laravel','CSS', 'Inertia.js','Mysql','PHP', 'Redis', 'flutter', 'Google API'],
    isArchived: false,
    archivedReason: 'I\'m not doing this project'
  }),
  normalizeProjectImages({
    title: 'Sic Parvis Magna Discord Bot',
    description: 'SPM Guild, A Discord Bot made by me to check energies of the pegaxy project crypto',
    images: [
      '/projects/SPM GUILD/1.png',
      '/projects/SPM GUILD/2.webp',
    ],
    link: 'https://techlibrary.site/',
    githubLink: 'https://github.com/rollenasistores',
    technologies: ['Typescript','Javascript','Discord.JS'],
    isArchived: true,
    archivedReason: 'I\'m not doing this project'
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