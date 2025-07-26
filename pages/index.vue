<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 pt-24"
  >
    <!-- Hero Section -->
    <section
      ref="heroSection"
      class="relative flex items-center justify-center min-h-screen px-8 overflow-hidden"
      id="heroSection"
    >
      <div class="max-w-4xl w-full">
        <!-- Status -->
        <div
          ref="statusElement"
          class="mb-12 hero-element opacity-0 transform translate-y-8"
        >
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 status-glow"
          >
            <div class="w-2 h-2 bg-green-500 rounded-full status-pulse"></div>
            <span class="text-green-700 dark:text-green-300 text-sm font-medium"
              >Available for work</span
            >
          </div>
        </div>

        <!-- Name -->
        <h1
          ref="nameElement"
          class="hero-element opacity-0 transform translate-y-8 text-5xl md:text-7xl font-light text-gray-900 dark:text-white mb-6 tracking-tight leading-none"
        >
          Rollen<br />
          <span class="font-normal">Asistores</span>
        </h1>

        <!-- Title -->
        <h2
          ref="titleElement"
          class="hero-element opacity-0 transform translate-y-8 text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 font-light"
        >
          Full Stack Developer
        </h2>

        <!-- Description -->
        <p
          ref="descriptionElement"
          class="hero-element opacity-0 transform translate-y-8 text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-16 max-w-2xl font-light"
        >
          I create modern web applications with clean code and thoughtful
          design. Passionate about building solutions that are both functional
          and beautiful.
        </p>

        <!-- Actions -->
        <div
          ref="actionsElement"
          class="hero-element opacity-0 transform translate-y-8 flex flex-col sm:flex-row gap-4 mb-20"
        >
          <button
            @click="scrollToWork"
            class="magnetic-button group px-6 py-3 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300 font-medium"
          >
            <span class="flex items-center gap-2">
              View work
              <svg
                class="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </span>
          </button>

          <button
            @click="openEmail"
            class="magnetic-button px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 font-medium hover:shadow-xl"
          >
            Get in touch
          </button>
        </div>

        <!-- Tech Stack -->
        <div
          ref="techStackElement"
          class="hero-element opacity-0 transform translate-y-8 border-t border-gray-200 dark:border-gray-800 pt-12"
        >
          <p
            class="text-sm text-gray-500 dark:text-gray-500 mb-6 uppercase tracking-wider font-medium"
          >
            Technologies
          </p>
          <div class="flex flex-wrap gap-x-8 gap-y-4">
            <span
              v-for="(tech, index) in technologies"
              :key="tech"
              ref="techItems"
              class="tech-item opacity-0 transform -translate-x-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-500 cursor-default hover:scale-110"
              :style="`transition-delay: ${index * 100 + 1200}ms`"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Work Section -->
    <section
      id="work"
      class="py-24 px-8 border-t border-gray-100 dark:border-gray-900"
    >
      <div class="max-w-4xl mx-auto">
        <h2
          ref="workTitle"
          class="scroll-animate text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-20"
        >
          Selected work
        </h2>

        <div class="space-y-16">
          <div
            v-for="(project, index) in projects"
            :key="project.name"
            ref="projectCards"
            class="project-card scroll-animate group border-b border-gray-100 dark:border-gray-900 pb-16 last:border-b-0 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900/30 p-6 transition-all duration-500"
            :style="`transition-delay: ${index * 200}ms`"
          >
            <div
              class="flex flex-col md:flex-row md:items-center justify-between mb-6"
            >
              <h3
                class="text-xl md:text-2xl font-medium text-green-600 dark:text-green-400 transition-colors duration-300"
              >
                {{ project.name }}
              </h3>
              <span
                class="text-sm text-gray-500 dark:text-gray-500 mt-2 md:mt-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              >
                {{ project.year }}
              </span>
            </div>

            <p
              class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-2xl transition-colors duration-300"
            >
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-x-6 gap-y-2 mb-8">
              <span
                v-for="(tech, techIndex) in project.technologies"
                :key="tech"
                class="text-sm text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300 cursor-default hover:scale-105"
                :style="`transition-delay: ${techIndex * 100}ms`"
              >
                {{ tech }}
              </span>
            </div>

            <button
              @click="openProjectDetail(project)"
              class="magnetic-button text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 text-sm font-medium flex items-center gap-2 group/btn hover:gap-3"
            >
              View project
              <svg
                class="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-24 px-8 border-t border-gray-100 dark:border-gray-900">
      <div class="max-w-4xl mx-auto">
        <h2
          ref="contactTitle"
          class="scroll-animate text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-12"
        >
          Let's work together
        </h2>

        <div class="grid md:grid-cols-2 gap-16">
          <div ref="contactContent" class="scroll-animate">
            <p
              class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8"
            >
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can bring your ideas to life.
            </p>

            <div class="space-y-4">
              <button
                @click="openScheduling"
                class="magnetic-button inline-flex items-center gap-2 text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 font-medium group"
              >
                Schedule a call
                <svg
                  class="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </button>

              <button
                @click="openEmail"
                class="magnetic-button inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 group"
              >
                asistoresrlc1@gmail.com
                <svg
                  class="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div ref="contactInfo" class="scroll-animate space-y-4">
            <div class="contact-info-item">
              <p
                class="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2"
              >
                Location
              </p>
              <p class="text-gray-700 dark:text-gray-300">
                General Trias, Cavite, PH
              </p>
            </div>

            <div class="contact-info-item">
              <p
                class="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2"
              >
                Local time & Date
              </p>
              <p class="text-gray-700 dark:text-gray-300">
                {{ currentTime }} - {{ currentMonth }} / {{ currentDay }} /
                {{ currentYear }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 px-8 border-t border-gray-100 dark:border-gray-900">
      <div class="max-w-4xl mx-auto">
        <p class="text-center text-gray-500 dark:text-gray-500 text-sm fade-in">
          © {{ currentYear }} Rollen Asistores. Crafted with care.
        </p>
      </div>
    </footer>

    <!-- Project Detail Modal -->
    <ProjectDetailModal
      :project="selectedProject"
      :is-visible="isProjectModalVisible"
      @close="closeProjectDetail"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";

// Reactive data
const currentTime = ref("");
const observer = ref(null);
const selectedProject = ref(null);
const isProjectModalVisible = ref(false);

// Template refs
const heroSection = ref(null);
const statusElement = ref(null);
const nameElement = ref(null);
const titleElement = ref(null);
const descriptionElement = ref(null);
const actionsElement = ref(null);
const techStackElement = ref(null);
const techItems = ref([]);
const workTitle = ref(null);
const projectCards = ref([]);
const contactTitle = ref(null);
const contactContent = ref(null);
const contactInfo = ref(null);

// Technologies
const technologies = [
  "JavaScript",
  "Vue.js",
  "React",
  "Node.js",
  "TypeScript",
  "Laravel",
  "PHP",
  "MySQL",
  "Redis",
  "Supabase",
];

// Projects
const projects = [
  {
    name: "Zippr.site",
    description:
      "Zippr.site is a fast, reliable URL shortening platform that transforms long, complex URLs into clean, shareable links. It offers advanced analytics, custom branding, and real-time tracking—all built without APIs, using Laravel controllers and Laravel Reverb.",
    technologies: [
      "Vue.js",
      "Tailwind CSS",
      "Laravel",
      "Laravel Reverb",
      "Inertia.js",
      "MySQL",
      "PHP",
      "TypeScript",
      "Website",
    ],
    images: [
      "/projects/zippr/1.png",
      "/projects/zippr/2.png",
      "/projects/zippr/3.png",
      "/projects/zippr/4.png",
      "/projects/zippr/5.png",
    ].map((url, index) => ({
      url,
      alt: `Zippr.site Screenshot ${index + 1}`,
    })),
    liveUrl: "https://zippr.site/",
    githubUrl: "https://github.com/rollenasistores",
    year: "2025",
    features: [
      "Shorten long URLs with custom aliases",
      "Track clicks with detailed analytics",
      "Real-time link activity tracking using Laravel Reverb",
      "Usage dashboard with quota limits (e.g., 3/100 links used)",
      "Support for custom domains (0/3 used)",
      "Basic team collaboration (0/1 members added)",
      "No API architecture — powered by standard Laravel controllers",
    ],
    challenges: [
      "Handled link shortening, redirection, and tracking without REST APIs",
      "Built usage tracking system with monthly quota enforcement",
      "Integrated Laravel Reverb for real-time updates without external services",
      "Ensured reliability and performance with minimal stack complexity",
    ],
    approach:
      "Built with a clean, controller-based Laravel architecture. Real-time functionality is powered by Laravel Reverb, making the system fast and interactive without the need for APIs or external queues.",
  },
  {
    name: "AlerTrack",
    description:
      "AlerTrack is a safety and equipment monitoring system designed for construction and industrial sites. It features a real-time dashboard that tracks equipment condition, safety scores, worker activity, incidents, compliance, and inventory health.",
    technologies: [
      "Vue.js",
      "Tailwind CSS",
      "Laravel",
      "Node.js",
      "CSS",
      "Inertia.js",
      "MySQL",
      "PHP",
      "Website",
    ],
    images: [
      "/projects/alerTrack/1.png",
      "/projects/alerTrack/2.png",
      "/projects/alerTrack/3.png",
      "/projects/alerTrack/4.png",
      "/projects/alerTrack/5.png",
      "/projects/alerTrack/6.png",
    ].map((url, index) => ({
      url,
      alt: `AlerTrack Screenshot ${index + 1}`,
    })),
    liveUrl: "https://alertrack.online/", // Replace if you have a separate AlerTrack link
    githubUrl: "https://github.com/rollenasistores",
    year: "2025",
    features: [
      "Real-time equipment health tracking (Good, Damaged, Lost, Stolen)",
      "Dashboard for monitoring safety scores, incidents, and compliance",
      "Worker management and active personnel tracking",
      "Incident report management and corrective measures tracking",
      "Inventory tracking for PPE and other safety gear",
      "Safety training logs with session and attendee summaries",
      "Non-compliance reporting system",
    ],
    challenges: [
      "Built modular dashboard components for real-time data display",
      "Handled multi-type equipment classification and status tracking",
      "Implemented conditional logic for safety score calculations",
      "Designed scalable architecture for future reporting modules",
    ],
    approach:
      "Focused on clarity and real-time feedback in the UI, using role-based data rendering and scalable backend logic to support compliance tracking and safety management.",
  },
  {
    name: "Project Match",
    description:
      "Project Match is a full-stack bidding platform that connects agencies and contractors, with an admin overseeing and verifying payments to ensure secure transactions.",
    technologies: [
      "Vue.js",
      "Tailwind CSS",
      "Laravel",
      "Node.js",
      "CSS",
      "Inertia.js",
      "Mysql",
      "PHP",
      "Website",
    ],
    images: [
      "/projects/Project Match/1.png",
      "/projects/Project Match/2.png",
      "/projects/Project Match/3.png",
      "/projects/Project Match/4.png",
      "/projects/Project Match/5.png",
      "/projects/Project Match/6.png",
      "/projects/Project Match/7.png",
      "/projects/Project Match/8.png",
      "/projects/Project Match/9.png",
      "/projects/Project Match/10.png",
      "/projects/Project Match/11.png",
      "/projects/Project Match/12.png",
    ].map((url, index) => ({
      url,
      alt: `Project Match Screenshot ${index + 1}`,
    })),
    liveUrl: "https://projectmatch.online/",
    githubUrl: "https://github.com/rollenasistores",
    year: "2025",
    features: [
      "Automated conflict-free scheduling",
      "Admin dashboard for course and room assignments",
      "Role-based user access",
      "Responsive student portal",
    ],
    challenges: [
      "Built dynamic conflict detection algorithm",
      "Handled complex relationships between classes, instructors, and rooms",
      "Integrated fallback logic for overloaded courses",
    ],
    approach:
      "Designed modular architecture with separation of concerns for maintainability",
  },

  {
    name: "DLSUD Scheduling System",
    description: "Full-stack College Scheduling System",
    technologies: [
      "Vue.js",
      "Tailwind CSS",
      "Laravel",
      "Node.js",
      "CSS",
      "Inertia.js",
      "Mysql",
      "PHP",
      "Website",
    ],
    images: [
      "/projects/DLSUD/1.png",
      "/projects/DLSUD/2.png",
      "/projects/DLSUD/3.png",
      "/projects/DLSUD/4.png",
      "/projects/DLSUD/5.png",
      "/projects/DLSUD/6.png",
      "/projects/DLSUD/7.png",
      "/projects/DLSUD/8.png",
      "/projects/DLSUD/9.png",
      "/projects/DLSUD/10.png",
      "/projects/DLSUD/login.png",
    ].map((url, index) => ({ url, alt: `DLSUD Screenshot ${index + 1}` })),
    liveUrl: "/projects/DLSUD",
    githubUrl: "https://github.com/rollenasistores",
    year: "2023",
    features: [
      "Automated conflict-free scheduling",
      "Admin dashboard for course and room assignments",
      "Role-based user access",
      "Responsive student portal",
    ],
    challenges: [
      "Built dynamic conflict detection algorithm",
      "Handled complex relationships between classes, instructors, and rooms",
      "Integrated fallback logic for overloaded courses",
    ],
    approach:
      "Designed modular architecture with separation of concerns for maintainability",
  },
  {
    name: "EvoStep E-Commerce",
    description:
      "E-Commerce Personal Project on School (Cavite State University)",
    technologies: [
      "Vue.js",
      "Tailwind CSS",
      "Laravel",
      "Node.js",
      "CSS",
      "Inertia.js",
      "Mysql",
      "Redis",
      "PHP",
      "Website",
    ],
    images: [
      {
        url: "/projects/EvoStep/1.png",
        alt: "EvoStep Homepage",
      },
    ],
    liveUrl: "https://es.techlibrary.site/",
    githubUrl: "https://github.com/rollenasistores",
    year: "2024",
    features: [
      "Product catalog with real-time inventory",
      "Discount system with voucher support",
      "Order tracking and notifications",
    ],
    challenges: [
      "Integrated Redis for cart session storage",
      "Ensured mobile-first design under 2s load time",
      "Implemented search with Laravel Scout and Algolia",
    ],
    approach:
      "Utilized a component-driven development approach with Tailwind CSS",
    highlights: [
      "Served as my final year project and was awarded a perfect grade for its functionality and presentation",
    ],
  },

  {
    name: "TechLibrary Site",
    description: "TechLibrary, E-Library System with Student Borrowing System",
    technologies: [
      "Vue.js",
      "Tailwind CSS",
      "Laravel",
      "Node.js",
      "Laravel",
      "CSS",
      "Inertia.js",
      "Mysql",
      "PHP",
      "Website",
    ],
    images: [
      "/projects/Techlibrary/1.png",
      "/projects/Techlibrary/2.png",
      "/projects/Techlibrary/3.png",
      "/projects/Techlibrary/4.png",
      "/projects/Techlibrary/5.png",
      "/projects/Techlibrary/6.png",
      "/projects/Techlibrary/7.png",
    ].map((url, index) => ({
      url,
      alt: `TechLibrary Screenshot ${index + 1}`,
    })),
    liveUrl: "https://techlibrary.site/",
    githubUrl: "https://github.com/rollenasistores",
    year: "2024",
    features: [
      "Online borrowing and return tracking",
      "Librarian dashboard with analytics",
      "Borrower penalty system",
    ],
    challenges: [
      "Developed real-time book availability syncing",
      "Built custom reporting engine for librarians",
      "Managed student-borrower relationships across multiple schools",
    ],
    methodology: "Agile development with weekly sprints and stakeholder demos",
    highlights: [
      "Used by over 1,000+ students",
      "Achieved 95% reduction in manual tracking errors",
    ],
  },
  {
    name: "Barangay Navarro System",
    description:
      "Barangay Appointment / Document Requesting System with Attendance System using Fingerprint",
    technologies: [
      "Vue.js",
      "Tailwind CSS",
      "Laravel",
      "Node.js",
      "CSS",
      "Inertia.js",
      "Mysql",
      "PHP",
      "Redis",
      "C++",
      "Fingerprint SDK",
    ],
    images: [
      {
        url: "/projects/brgynavarro/1.png",
        alt: "Barangay Navarro System Screenshot",
      },
    ],
    liveUrl: "https://brgynavarro.site/",
    githubUrl: "https://github.com/rollenasistores",
    year: "2025",
    features: [
      "Fingerprint-based attendance logging",
      "Automated document request flow",
      "Real-time appointment queue",
    ],
    challenges: [
      "Integrated biometric SDK in a browser-safe way",
      "Handled simultaneous print requests securely",
      "Implemented local offline fallback sync",
    ],
    approach:
      "Used a Laravel API-first strategy with Vue for rich interactivity",
    highlights: [
      "Improved processing time for requests by 80%",
      "Successfully adopted by barangay officers",
    ],
  },
  {
    name: "Paypark Site",
    description: "Paypark App (with Landing Page) / IOS & Android Application",
    technologies: [
      "Nuxt",
      "Tailwind CSS",
      "Laravel",
      "CSS",
      "Inertia.js",
      "Mysql",
      "PHP",
      "Redis",
      "Flutter",
      "Google API",
    ],
    images: [
      "/projects/PAYPARK/1.png",
      "/projects/PAYPARK/2.png",
      "/projects/PAYPARK/3.png",
      "/projects/PAYPARK/4.png",
    ].map((url, index) => ({ url, alt: `Paypark Screenshot ${index + 1}` })),
    liveUrl: "https://paypark.site/",
    githubUrl: "https://github.com/rollenasistores",
    year: "2024",
    features: [
      "QR-based parking system",
      "Mobile apps for drivers and admins",
      "Real-time space availability tracker",
    ],
    challenges: [
      "Built integration with Google Maps API for location-aware services",
      "Optimized Flutter app startup performance",
      "Created shared database structure across platforms",
    ],
    approach: "Used monorepo for managing web and mobile codebases efficiently",
    highlights: [
      "Reduced parking wait time by 60%",
      "Successfully demoed to private investors",
    ],
  },
  {
    name: "Sic Parvis Magna Discord Bot",
    description:
      "SPM Guild, A Discord Bot made by me to check energies of the Pegaxy project crypto",
    technologies: ["Typescript", "Javascript", "Discord.JS"],
    images: ["/projects/SPM GUILD/1.png", "/projects/SPM GUILD/2.webp"].map(
      (url, index) => ({ url, alt: `SPM Bot Screenshot ${index + 1}` })
    ),
    year: "2022",
    features: [
      "Energy lookup for NFT users",
      "Guild-only access and commands",
      "Real-time price and status checks",
    ],
    challenges: [
      "Interfaced with third-party APIs with rate limits",
      "Handled data caching with TTL logic",
      "Built command parser with TypeScript decorators",
    ],
    methodology: "Iterative testing in a live Discord server",
    highlights: [
      "Used by over 300 Pegaxy players",
      "Helped organize internal guild competitions",
    ],
  },
  {
    name: "ASGARD Discord Bot",
    description:
      "An automated registration checker / payment completed bot with website",
    technologies: ["Typescript", "Javascript", "Discord.JS"],
    images: [
      {
        url: "/projects/ASGARD/logo.png",
        alt: "ASGARD Logo",
      },
    ],
    liveUrl:
      "https://discord.com/oauth2/authorize?client_id=848174934487203851",
    githubUrl: "https://github.com/rollenasistores",
    year: "2021",
    features: [
      "Payment verification system",
      "Command-based user status checks",
      "Webhook integration with forms",
    ],
    challenges: [
      "Built Discord bot that syncs with external registration API",
      "Designed a fallback queue system for failed syncs",
      "Handled concurrency issues during peak registration",
    ],
    approach: "Focused on simplicity and reliability for tournament admins",
    highlights: [
      "Streamlined registration for 10+ tournaments",
      "Decreased admin intervention by 90%",
    ],
  },
];

// Time data
const now = new Date();
const options = { timeZone: "Asia/Manila" };
const currentMonth =
  new Date(now.toLocaleString("en-US", options)).getMonth() + 1;
const currentDay = new Date(now.toLocaleString("en-US", options)).getDate();
const currentYear = new Date(
  now.toLocaleString("en-US", options)
).getFullYear();
let timeInterval = null;

// Methods
const updateTime = () => {
  const now = new Date();
  currentTime.value = now.toLocaleTimeString("en-US", {
    timeZone: "Asia/Manila",
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
  });
};
const openEmail = () => {
  window.location.href = "mailto:asistoresrlc1@gmail.com";
};

const openScheduling = () => {
  console.log("Opening scheduling...");
};

const openProjectDetail = (project) => {
  selectedProject.value = project;
  isProjectModalVisible.value = true;
  document.body.style.overflow = "hidden";
};

const closeProjectDetail = () => {
  isProjectModalVisible.value = false;
  selectedProject.value = null;
  document.body.style.overflow = "";
};

const scrollToWork = () => {
  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
};

// Animation functions
const animateHeroElements = () => {
  const heroElements = [
    statusElement.value,
    nameElement.value,
    titleElement.value,
    descriptionElement.value,
    actionsElement.value,
    techStackElement.value,
  ];

  heroElements.forEach((element, index) => {
    if (element) {
      setTimeout(() => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, index * 200 + 300);
    }
  });

  // Animate tech items
  setTimeout(() => {
    techItems.value.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateX(0)";
      }, index * 100);
    });
  }, 1500);
};

const setupScrollAnimations = () => {
  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    },
    { threshold: 0.15, rootMargin: "50px" }
  );

  // Observe scroll-animate elements
  nextTick(() => {
    const scrollElements = document.querySelectorAll(
      ".scroll-animate, .project-card"
    );
    scrollElements.forEach((el) => observer.value?.observe(el));
  });
};

// Lifecycle
onMounted(() => {
  updateTime();
  timeInterval = setInterval(updateTime, 60000);

  // Setup animations
  setTimeout(animateHeroElements, 100);
  setupScrollAnimations();

  // Cal.com integration
  if (typeof window !== "undefined") {
    (function (C, A, L) {
      let p = function (a, ar) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", "15min", { origin: "https://app.cal.com" });
    window.Cal.ns["15min"]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }
});

onUnmounted(() => {
  if (timeInterval) {
    clearInterval(timeInterval);
  }
  if (observer.value) {
    observer.value.disconnect();
  }
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap");

* {
  box-sizing: border-box;
}

/* Hero animations */
.hero-element {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.tech-item {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Scroll animations */
.scroll-animate {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-animate.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.project-card {
  opacity: 0;
  transform: translateY(40px) scale(0.98);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card.animate-in {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.project-card:hover {
  transform: translateY(-5px) scale(1.02) !important;
}

/* Magnetic button effect */
.magnetic-button {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.magnetic-button:hover {
  transform: translateY(-2px);
}

/* Gradient text */
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 3s ease-in-out infinite;
}

@keyframes gradient-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Status pulse */
.status-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.status-glow {
  animation: status-glow 2s ease-in-out infinite alternate;
}

@keyframes status-glow {
  from {
    box-shadow: 0 0 5px rgba(34, 197, 94, 0.3);
  }
  to {
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.6), 0 0 30px rgba(34, 197, 94, 0.4);
  }
}

/* Hero background */
.hero-background {
  background: radial-gradient(
      circle at 20% 50%,
      rgba(120, 119, 198, 0.15) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(255, 119, 198, 0.15) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 40% 80%,
      rgba(120, 199, 255, 0.15) 0%,
      transparent 50%
    );
  background-size: 100% 100%;
  animation: background-float 20s ease-in-out infinite;
}

.dark .hero-background {
  background: radial-gradient(
      circle at 20% 50%,
      rgba(120, 119, 198, 0.05) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(255, 119, 198, 0.05) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 40% 80%,
      rgba(120, 199, 255, 0.05) 0%,
      transparent 50%
    );
}

@keyframes background-float {
  0%,
  100% {
    background-position: 0% 0%, 100% 0%, 50% 100%;
  }
  50% {
    background-position: 100% 100%, 0% 100%, 0% 0%;
  }
}

/* Contact info animation */
.contact-info-item {
  transition: transform 0.3s ease;
}

.contact-info-item:hover {
  transform: translateX(5px);
}

/* Fade in animation */
.fade-in {
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.5);
  border-radius: 3px;
}

.dark ::-webkit-scrollbar-thumb {
  background: rgba(75, 85, 99, 0.5);
}

/* Selection colors */
::selection {
  background-color: rgba(0, 0, 0, 0.1);
}

.dark ::selection {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Focus styles */
button:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

html {
  scroll-behavior: smooth;
}
</style>
