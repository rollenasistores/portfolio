<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300"
  >
    <div class="max-w-6xl mx-auto px-8 py-24">
      <!-- Header -->
      <div class="mb-20">
        <h1
          ref="titleElement"
          class="hero-element opacity-0 transform translate-y-8 text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight"
        >
          Projects
        </h1>
        <p
          ref="descriptionElement"
          class="hero-element opacity-0 transform translate-y-8 text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
        >
          A collection of projects that showcase my approach to solving problems
          through code, design, and thoughtful user experiences.
        </p>
      </div>

      <!-- Filters -->
      <div
        ref="filtersElement"
        class="hero-element opacity-0 transform translate-y-8 mb-16 space-y-8"
      >
        <!-- Search -->
        <div class="max-w-md">
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search projects..."
              class="w-full px-4 py-3 pl-10 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700 focus:border-transparent transition-all duration-300"
            />
            <svg
              class="absolute left-3 top-3.5 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>

        <!-- Filter Controls -->
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <!-- Technology Filters -->
          <div class="flex flex-wrap items-center gap-3">
            <span class="text-sm text-gray-500 dark:text-gray-500 font-medium"
              >Filter:</span
            >
            <button
              v-for="(tech, index) in uniqueTechnologies"
              :key="tech"
              ref="techFilterButtons"
              @click="toggleTechnology(tech)"
              :class="[
                'tech-filter-button opacity-0 transform -translate-x-4 px-3 py-1.5 text-sm rounded-md border transition-all duration-300',
                selectedTechnology === tech
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-gray-900 dark:border-white'
                  : 'bg-transparent text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-900 dark:hover:text-white magnetic-button',
              ]"
              :style="`transition-delay: ${index * 50 + 800}ms`"
            >
              {{ tech }}
            </button>
          </div>

          <!-- Archive Toggle -->
          <div class="flex items-center gap-3">
            <label class="flex items-center gap-2 cursor-pointer">
              <input
                v-model="showArchivedProjects"
                type="checkbox"
                class="w-4 h-4 text-gray-900 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-400 dark:bg-gray-800 dark:border-gray-600"
              />
              <span class="text-sm text-gray-600 dark:text-gray-400"
                >Show archived</span
              >
            </label>
          </div>
        </div>

        <!-- Active Filters Display -->
        <div
          v-if="selectedTechnology || searchQuery"
          class="flex items-center gap-2"
        >
          <span class="text-sm text-gray-500 dark:text-gray-500"
            >Active filters:</span
          >

          <button
            v-if="selectedTechnology"
            @click="selectedTechnology = null"
            class="magnetic-button inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            {{ selectedTechnology }}
            <svg
              class="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <button
            v-if="searchQuery"
            @click="searchQuery = ''"
            class="magnetic-button inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            "{{ searchQuery }}"
            <svg
              class="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div v-if="filteredProjects.length" class="space-y-16">
        <div
          v-for="(project, index) in filteredProjects"
          :key="index"
          ref="projectCards"
          class="project-card scroll-animate group border-b border-gray-100 dark:border-gray-900 pb-16 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-900/30 rounded-lg p-6 transition-all duration-500"
          :style="`transition-delay: ${index * 150}ms`"
        >
          <div class="grid md:grid-cols-2 gap-12 items-start">
            <!-- Project Info -->
            <div class="space-y-6">
              <div>
                <div class="flex items-center gap-3 mb-3">
                  <h2
                    class="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300"
                  >
                    {{ project.title }}
                  </h2>
                  <span
                    v-if="project.isArchived"
                    class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-md"
                  >
                    Archived
                  </span>
                </div>

                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {{ project.description }}
                </p>
              </div>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(tech, techIndex) in project.technologies"
                  :key="tech"
                  class="px-2 py-1 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 cursor-default"
                  :style="`transition-delay: ${techIndex * 50}ms`"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Links -->
              <div class="flex items-center gap-6">
                <a
                  v-if="project.liveUrl"
                  :href="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="magnetic-button inline-flex items-center gap-2 text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 font-medium group/link"
                >
                  View live
                  <svg
                    class="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:scale-110"
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
                </a>

                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="magnetic-button inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 group/link"
                >
                  <svg
                    class="w-4 h-4 transition-transform group-hover/link:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                  Code
                </a>
              </div>
            </div>

            <!-- Project Image/Preview -->
            <div class="relative group/image">
              <div
                class="aspect-video bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden"
              >
                <img
                  v-if="project.image"
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-500"
                />
                <div
                  v-else
                  class="w-full h-full flex items-center justify-center"
                >
                  <svg
                    class="w-12 h-12 text-gray-400 transition-transform group-hover/image:scale-110 duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- No Projects Found -->
      <div v-else class="text-center py-20 scroll-animate">
        <svg
          class="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-6 transition-transform hover:scale-110 duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.172-2.291M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          ></path>
        </svg>

        <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-2">
          No projects found
        </h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Try adjusting your search or filter criteria.
        </p>

        <button
          @click="resetFilters"
          class="magnetic-button px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300 font-medium hover:shadow-xl"
        >
          Reset filters
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";

// Projects data from index.vue
const projects = [
  {
    title: "Zippr.site",
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
    ],
    image: "/projects/zippr/1.png",
    liveUrl: "https://zippr.site/",
    githubUrl: "https://github.com/rollenasistores",
    year: "2025",
    isArchived: false,
  },
  {
    title: "AlerTrack",
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
    ],
    image: "/projects/alerTrack/1.png",
    liveUrl: "https://alertrack.online/",
    githubUrl: "https://github.com/rollenasistores",
    year: "2025",
    isArchived: false,
  },
  {
    title: "Project Match",
    description:
      "Project Match is a full-stack bidding platform that connects agencies and contractors, with an admin overseeing and verifying payments to ensure secure transactions.",
    technologies: [
      "Vue.js",
      "Tailwind CSS",
      "Laravel",
      "Node.js",
      "CSS",
      "Inertia.js",
      "MySQL",
      "PHP",
    ],
    image: "/projects/Project Match/1.png",
    liveUrl: "https://projectmatch.online/",
    githubUrl: "https://github.com/rollenasistores",
    year: "2025",
    isArchived: false,
  },
  {
    title: "DLSUD Scheduling System",
    description:
      "Full-stack College Scheduling System with automated conflict-free scheduling and comprehensive admin dashboard.",
    technologies: [
      "Vue.js",
      "Tailwind CSS",
      "Laravel",
      "Node.js",
      "CSS",
      "Inertia.js",
      "MySQL",
      "PHP",
    ],
    image: "/projects/DLSUD/1.png",
    liveUrl: "/projects/DLSUD",
    githubUrl: "https://github.com/rollenasistores",
    year: "2023",
    isArchived: false,
  },
  {
    title: "EvoStep E-Commerce",
    description:
      "E-Commerce Personal Project on School (Cavite State University) with real-time inventory and advanced discount system.",
    technologies: [
      "Vue.js",
      "Tailwind CSS",
      "Laravel",
      "Node.js",
      "CSS",
      "Inertia.js",
      "MySQL",
      "Redis",
      "PHP",
    ],
    image: "/projects/EvoStep/1.png",
    liveUrl: "https://es.techlibrary.site/",
    githubUrl: "https://github.com/rollenasistores",
    year: "2024",
    isArchived: false,
  },
  {
    title: "TechLibrary Site",
    description:
      "TechLibrary, E-Library System with Student Borrowing System and real-time availability tracking.",
    technologies: [
      "Vue.js",
      "Tailwind CSS",
      "Laravel",
      "Node.js",
      "CSS",
      "Inertia.js",
      "MySQL",
      "PHP",
    ],
    image: "/projects/Techlibrary/1.png",
    liveUrl: "https://techlibrary.site/",
    githubUrl: "https://github.com/rollenasistores",
    year: "2024",
    isArchived: false,
  },
  {
    title: "Barangay Navarro System",
    description:
      "Barangay Appointment / Document Requesting System with Attendance System using Fingerprint authentication.",
    technologies: [
      "Vue.js",
      "Tailwind CSS",
      "Laravel",
      "Node.js",
      "CSS",
      "Inertia.js",
      "MySQL",
      "PHP",
      "Redis",
      "C++",
      "Fingerprint SDK",
    ],
    image: "/projects/brgynavarro/1.png",
    liveUrl: "https://brgynavarro.site/",
    githubUrl: "https://github.com/rollenasistores",
    year: "2025",
    isArchived: false,
  },
  {
    title: "Paypark Site",
    description:
      "Paypark App (with Landing Page) / IOS & Android Application for smart parking management.",
    technologies: [
      "Nuxt",
      "Tailwind CSS",
      "Laravel",
      "CSS",
      "Inertia.js",
      "MySQL",
      "PHP",
      "Redis",
      "Flutter",
      "Google API",
    ],
    image: "/projects/PAYPARK/1.png",
    liveUrl: "https://paypark.site/",
    githubUrl: "https://github.com/rollenasistores",
    year: "2024",
    isArchived: false,
  },
  {
    title: "Sic Parvis Magna Discord Bot",
    description:
      "SPM Guild, A Discord Bot made by me to check energies of the Pegaxy project crypto with real-time tracking.",
    technologies: ["TypeScript", "JavaScript", "Discord.JS"],
    image: "/projects/SPM GUILD/1.png",
    githubUrl: "https://github.com/rollenasistores",
    year: "2022",
    isArchived: true,
  },
  {
    title: "ASGARD Discord Bot",
    description:
      "An automated registration checker / payment completed bot with website integration and webhook support.",
    technologies: ["TypeScript", "JavaScript", "Discord.JS"],
    image: "/projects/ASGARD/logo.png",
    liveUrl:
      "https://discord.com/oauth2/authorize?client_id=848174934487203851",
    githubUrl: "https://github.com/rollenasistores",
    year: "2021",
    isArchived: true,
  },
];

// Template refs
const titleElement = ref(null);
const descriptionElement = ref(null);
const filtersElement = ref(null);
const techFilterButtons = ref([]);
const projectCards = ref([]);
const observer = ref(null);

// Filter technologies
const uniqueTechnologies = computed(() => {
  return [...new Set(projects.flatMap((item) => item.technologies))].sort();
});

// Filtering options
const selectedTechnology = ref<string | null>(null);
const searchQuery = ref("");
const showArchivedProjects = ref(false);

const filteredProjects = computed(() => {
  return projects.filter((item) => {
    // Search matching
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.value.toLowerCase());

    // Technology filtering
    const matchesTechnology =
      !selectedTechnology.value ||
      item.technologies.includes(selectedTechnology.value);

    // Archived project filtering
    const matchesArchivedStatus =
      showArchivedProjects.value || !item.isArchived;

    return matchesSearch && matchesTechnology && matchesArchivedStatus;
  });
});

// Methods
const toggleTechnology = (tech: string) => {
  selectedTechnology.value = selectedTechnology.value === tech ? null : tech;
};

const resetFilters = () => {
  searchQuery.value = "";
  selectedTechnology.value = null;
  showArchivedProjects.value = false;
};

// Animation functions
const animateHeroElements = () => {
  const heroElements = [
    titleElement.value,
    descriptionElement.value,
    filtersElement.value,
  ];

  heroElements.forEach((element, index) => {
    if (element) {
      setTimeout(() => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, index * 200 + 200);
    }
  });

  // Animate tech filter buttons
  setTimeout(() => {
    techFilterButtons.value.forEach((button, index) => {
      if (button) {
        setTimeout(() => {
          button.style.opacity = "1";
          button.style.transform = "translateX(0)";
        }, index * 50);
      }
    });
  }, 800);
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
  // Setup animations
  setTimeout(animateHeroElements, 100);
  setupScrollAnimations();
});

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap");

/* Hero animations */
.hero-element {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.tech-filter-button {
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
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.dark .project-card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.25),
    0 10px 10px -5px rgba(0, 0, 0, 0.1);
}

/* Magnetic button effect */
.magnetic-button {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.magnetic-button:hover {
  transform: translateY(-2px);
}

/* Smooth transitions */
* {
  transition-property: color, background-color, border-color, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Focus styles for accessibility */
input:focus,
button:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

/* Custom checkbox styling */
input[type="checkbox"]:checked {
  background-color: rgb(17 24 39);
  border-color: rgb(17 24 39);
}

.dark input[type="checkbox"]:checked {
  background-color: rgb(255 255 255);
  border-color: rgb(255 255 255);
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

/* Staggered animation delays for tech tags */
.project-card .space-y-6 > div:last-child span:nth-child(1) {
  transition-delay: 0ms;
}
.project-card .space-y-6 > div:last-child span:nth-child(2) {
  transition-delay: 50ms;
}
.project-card .space-y-6 > div:last-child span:nth-child(3) {
  transition-delay: 100ms;
}
.project-card .space-y-6 > div:last-child span:nth-child(4) {
  transition-delay: 150ms;
}
.project-card .space-y-6 > div:last-child span:nth-child(5) {
  transition-delay: 200ms;
}
.project-card .space-y-6 > div:last-child span:nth-child(6) {
  transition-delay: 250ms;
}

/* Gradient text effect for project titles on hover */
.project-card h2:hover {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Image hover effects */
.group\/image:hover .aspect-video {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.dark .group\/image:hover .aspect-video {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

/* Filter button hover glow */
.tech-filter-button:hover {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.15);
}

.dark .tech-filter-button:hover {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.25);
}

/* Subtle pulse animation for active filters */
@keyframes subtle-pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

.tech-filter-button.bg-gray-900 {
  animation: subtle-pulse 2s ease-in-out infinite;
}

/* Loading state for images */
img {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

img.loaded {
  opacity: 1;
}

/* Responsive improvements */
@media (max-width: 768px) {
  .project-card {
    margin: 0 -1rem;
  }

  .magnetic-button:hover {
    transform: none;
  }
}
</style>
