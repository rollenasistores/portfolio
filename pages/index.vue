<template>
  <div class="flex flex-col min-h-screen dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="flex flex-1 items-center justify-center px-4 mt-6">
      <div class="max-w-3xl text-center">
        <!-- Name and Title -->

        <h1 class="text-5xl font-bold dark:text-white text-gray-900 mb-4">
          Rollen Asistores
        </h1>
        <h2 class="text-xl font-medium dark:text-white text-gray-600 mb-6">
          Full Stack Developer
        </h2>
        <!-- Description -->
        <p class="dark:text-gray-300 text-gray-700 leading-relaxed mb-8">
          I'm a developer passionate about crafting modern, efficient, and
          user-focused web applications. With expertise in full-stack
          development, I create solutions that combine functionality and design
          seamlessly.
        </p>

        <!-- Programming Languages & Technologies -->
        <div class="mb-12">
          <div class="flex flex-wrap justify-center gap-4">
            <div
              v-for="tech in technologies"
              :key="tech.name"
              class="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md"
            >
              <span class="dark:text-gray-300 text-gray-700">{{
                tech.name
              }}</span>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="flex justify-center gap-4">
          <a
            href="/projects"
            class="px-6 py-3 border dark:border-gray-600 border-gray-900 text-gray-900 dark:text-white font-semibold rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            class="px-6 py-3 text-white bg-gray-900 font-semibold rounded-md hover:bg-gray-700 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const technologies = [
  { name: "JavaScript" },
  { name: "Vue.js" },
  { name: "Nuxt.js" },
  { name: "React" },
  { name: "Node.js" },
  { name: "TypeScript" },
  { name: "Tailwind CSS" },
  { name: "Laravel" },
  { name: "PHP" },
  { name: "MYSQL" },
  { name: "Arduino" },
  { name: "Laravel API" },
  { name: "CSS" },
];

const projects = [
  {
    name: "Project Management App",
    description: "A comprehensive project tracking and collaboration platform.",
    image: "/projects/project-management.jpg",
    link: "#",
    technologies: ["Vue.js", "Nuxt.js", "Tailwind"],
  },
  {
    name: "E-commerce Dashboard",
    description: "Analytics and management interface for online stores.",
    image: "/projects/ecommerce-dashboard.jpg",
    link: "#",
    technologies: ["React", "Node.js", "Chart.js"],
  },
  {
    name: "Social Media Analyzer",
    description: "Real-time social media performance tracking tool.",
    image: "/projects/social-media-analyzer.jpg",
    link: "#",
    technologies: ["TypeScript", "Vue.js", "D3.js"],
  },
];
</script>
