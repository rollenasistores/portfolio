<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300"
  >
    <div class="max-w-4xl mx-auto px-8 py-24">
      <!-- Header Section -->
      <div class="mb-24">
        <div class="flex flex-col md:flex-row md:items-center gap-12">
          <!-- Profile Image -->
          <div class="flex-shrink-0">
            <div class="relative">
              <img
                ref="profileImage"
                src="/personal/WHITE BACKGROUND.jpg"
                alt="Rollen Asistores"
                class="hero-element opacity-0 transform translate-y-8 w-32 h-32 md:w-40 md:h-40 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div
                ref="statusDot"
                class="hero-element opacity-0 transform translate-y-8 absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-950 status-pulse"
              ></div>
            </div>
          </div>

          <!-- Header Content -->
          <div class="flex-1">
            <h1
              ref="headerTitle"
              class="hero-element opacity-0 transform translate-y-8 text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4 tracking-tight"
            >
              About me
            </h1>
            <p
              ref="headerDescription"
              class="hero-element opacity-0 transform translate-y-8 text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-2xl"
            >
              I'm a passionate full-stack developer who loves creating digital
              experiences that are both beautiful and functional. Currently
              pursuing my degree while building projects that solve real-world
              problems.
            </p>

            <!-- Social Links -->
            <div
              ref="socialLinks"
              class="hero-element opacity-0 transform translate-y-8 flex items-center gap-6"
            >
              <a
                v-for="(social, index) in socialLinksData"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                :ref="(el) => setSocialLinkRef(el, index)"
                class="social-link opacity-0 transform -translate-x-4 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 group magnetic-button"
                :style="`transition-delay: ${index * 150 + 1000}ms`"
              >
                <component
                  :is="social.icon"
                  class="w-4 h-4 transition-transform group-hover:scale-110"
                />
                <span class="text-sm font-medium">{{ social.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Grid -->
      <div class="space-y-20">
        <!-- Experience Section -->
        <section ref="experienceSection" class="scroll-animate">
          <h2
            class="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-12"
          >
            Experience
          </h2>

          <div
            class="border-l-2 border-gray-100 dark:border-gray-900 pl-8 ml-4"
          >
            <div class="relative">
              <!-- Timeline dot -->
              <div
                class="absolute -left-10 w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded-full border-4 border-white dark:border-gray-950 timeline-dot"
              ></div>

              <div class="pb-12">
                <div
                  class="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
                >
                  <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                    Freelance Developer
                  </h3>
                  <span
                    class="text-sm text-gray-500 dark:text-gray-500 mt-1 md:mt-0"
                  >
                    2022 - 2023
                  </span>
                </div>

                <p class="text-gray-600 dark:text-gray-400 mb-4">
                  AscendProfit
                </p>

                <div class="space-y-2">
                  <p
                    class="text-gray-700 dark:text-gray-300 text-sm experience-point"
                  >
                    • Developed web applications and managed social media
                    presence
                  </p>
                  <p
                    class="text-gray-700 dark:text-gray-300 text-sm experience-point"
                  >
                    • Created visual designs and handled video content
                    production
                  </p>
                  <p
                    class="text-gray-700 dark:text-gray-300 text-sm experience-point"
                  >
                    • Managed multiple projects simultaneously with tight
                    deadlines
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Education Section -->
        <section ref="educationSection" class="scroll-animate">
          <h2
            class="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-12"
          >
            Education
          </h2>

          <div
            class="border-l-2 border-gray-100 dark:border-gray-900 pl-8 ml-4"
          >
            <div class="relative">
              <!-- Timeline dot -->
              <div
                class="absolute -left-10 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-950 timeline-dot"
              ></div>

              <div class="pb-12">
                <div
                  class="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
                >
                  <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                    Bachelor of Science in Information Technology
                  </h3>
                  <span
                    class="text-sm text-gray-500 dark:text-gray-500 mt-1 md:mt-0"
                  >
                    2022 - Present
                  </span>
                </div>

                <p class="text-gray-600 dark:text-gray-400">
                  Cavite State University
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Skills Section -->
        <section ref="skillsSection" class="scroll-animate">
          <h2
            class="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-12"
          >
            Skills & Technologies
          </h2>

          <div class="grid md:grid-cols-3 gap-12">
            <div
              v-for="(skillGroup, groupIndex) in skills"
              :key="skillGroup.category"
              :ref="(el) => setSkillGroupRef(el, groupIndex)"
              class="skill-group opacity-0 transform translate-y-4"
              :style="`transition-delay: ${groupIndex * 200}ms`"
            >
              <h3
                class="text-sm font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-4"
              >
                {{ skillGroup.category }}
              </h3>
              <div class="space-y-2">
                <p
                  v-for="(skill, skillIndex) in skillGroup.items"
                  :key="skill"
                  :ref="(el) => setSkillRef(el, groupIndex, skillIndex)"
                  class="skill-item opacity-0 transform -translate-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 cursor-default hover:scale-105"
                  :style="`transition-delay: ${
                    groupIndex * 200 + skillIndex * 100 + 500
                  }ms`"
                >
                  {{ skill }}
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section
          ref="contactSection"
          class="scroll-animate border-t border-gray-100 dark:border-gray-900 pt-20"
        >
          <h2
            class="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-12"
          >
            Get in touch
          </h2>

          <div class="grid md:grid-cols-2 gap-12">
            <div>
              <p
                class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8"
              >
                I'm always open to discussing new opportunities, interesting
                projects, or just having a conversation about technology and
                development.
              </p>

              <div class="space-y-4">
                <a
                  href="mailto:asistoresrlc1@gmail.com"
                  class="magnetic-button flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 group"
                >
                  <Mail
                    class="w-4 h-4 transition-transform group-hover:scale-110"
                  />
                  <span>asistoresrlc1@gmail.com</span>
                </a>

                <div
                  class="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                >
                  <MapPin class="w-4 h-4" />
                  <span>General Trias, Cavite, Philippines</span>
                </div>
              </div>
            </div>

            <div>
              <div class="space-y-4">
                <div class="contact-info-item">
                  <p
                    class="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2"
                  >
                    Status
                  </p>
                  <div class="flex items-center gap-2">
                    <div
                      class="w-2 h-2 bg-green-500 rounded-full status-pulse"
                    ></div>
                    <span class="text-gray-700 dark:text-gray-300"
                      >Available for work</span
                    >
                  </div>
                </div>

                <div class="contact-info-item">
                  <p
                    class="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2"
                  >
                    Response time
                  </p>
                  <p class="text-gray-700 dark:text-gray-300">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { Mail, MapPin, Github, Linkedin } from "lucide-vue-next";

// Template refs
const profileImage = ref(null);
const statusDot = ref(null);
const headerTitle = ref(null);
const headerDescription = ref(null);
const socialLinks = ref(null);
const experienceSection = ref(null);
const educationSection = ref(null);
const skillsSection = ref(null);
const contactSection = ref(null);

// Dynamic refs arrays
const socialLinkRefs = ref([]);
const skillGroupRefs = ref([]);
const skillRefs = ref([]);

// Observer for scroll animations
const observer = ref(null);

// Data
const socialLinksData = [
  {
    icon: Github,
    name: "GitHub",
    url: "https://github.com/rollenasistores",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rollen-asistores-1985b1195/",
  },
];

const skills = [
  {
    category: "Frontend",
    items: ["JavaScript", "Vue.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Laravel", "PHP", "MySQL", "Redis"],
  },
  {
    category: "Tools & Others",
    items: [
      "Git",
      "Arduino",
      "Graphic Design",
      "Video Editing",
      "Social Media",
    ],
  },
];

// Methods for setting dynamic refs
const setSocialLinkRef = (el, index) => {
  if (el) {
    socialLinkRefs.value[index] = el;
  }
};

const setSkillGroupRef = (el, index) => {
  if (el) {
    skillGroupRefs.value[index] = el;
  }
};

const setSkillRef = (el, groupIndex, skillIndex) => {
  if (el) {
    if (!skillRefs.value[groupIndex]) {
      skillRefs.value[groupIndex] = [];
    }
    skillRefs.value[groupIndex][skillIndex] = el;
  }
};

// Animation functions
const animateHeroElements = () => {
  const heroElements = [
    profileImage.value,
    statusDot.value,
    headerTitle.value,
    headerDescription.value,
    socialLinks.value,
  ];

  heroElements.forEach((element, index) => {
    if (element) {
      setTimeout(() => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, index * 200 + 300);
    }
  });

  // Animate social links
  setTimeout(() => {
    socialLinkRefs.value.forEach((link, index) => {
      if (link) {
        setTimeout(() => {
          link.style.opacity = "1";
          link.style.transform = "translateX(0)";
        }, index * 150);
      }
    });
  }, 1000);
};

const animateSkillsOnScroll = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.target === skillsSection.value) {
      // Animate skill groups
      skillGroupRefs.value.forEach((group, groupIndex) => {
        if (group) {
          setTimeout(() => {
            group.style.opacity = "1";
            group.style.transform = "translateY(0)";
          }, groupIndex * 200);
        }
      });

      // Animate individual skills
      setTimeout(() => {
        skillRefs.value.forEach((skillGroup, groupIndex) => {
          if (skillGroup) {
            skillGroup.forEach((skill, skillIndex) => {
              if (skill) {
                setTimeout(() => {
                  skill.style.opacity = "1";
                  skill.style.transform = "translateX(0)";
                }, groupIndex * 200 + skillIndex * 100);
              }
            });
          }
        });
      }, 500);
    }
  });
};

const setupScrollAnimations = () => {
  observer.value = new IntersectionObserver(
    (entries) => {
      // Handle skill animations separately
      animateSkillsOnScroll(entries);

      // Handle other scroll animations
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");

          // Special handling for timeline dots
          const timelineDots = entry.target.querySelectorAll(".timeline-dot");
          timelineDots.forEach((dot, index) => {
            setTimeout(() => {
              dot.classList.add("timeline-animate");
            }, index * 200 + 300);
          });

          // Special handling for experience points
          const experiencePoints =
            entry.target.querySelectorAll(".experience-point");
          experiencePoints.forEach((point, index) => {
            setTimeout(() => {
              point.classList.add("fade-in-up");
            }, index * 150 + 500);
          });

          // Special handling for contact info items
          const contactItems =
            entry.target.querySelectorAll(".contact-info-item");
          contactItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("slide-in-right");
            }, index * 200 + 400);
          });
        }
      });
    },
    { threshold: 0.15, rootMargin: "50px" }
  );

  // Observe scroll-animate elements
  nextTick(() => {
    const scrollElements = document.querySelectorAll(".scroll-animate");
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

* {
  box-sizing: border-box;
  transition-property: color, background-color, border-color, transform, filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Hero animations */
.hero-element {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.social-link {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.skill-group {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.skill-item {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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

/* Timeline animations */
.timeline-dot {
  opacity: 0;
  transform: scale(0);
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.timeline-dot.timeline-animate {
  opacity: 1;
  transform: scale(1);
}

/* Experience points animation */
.experience-point {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.experience-point.fade-in-up {
  opacity: 1;
  transform: translateY(0);
}

/* Contact info animation */
.contact-info-item {
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-info-item.slide-in-right {
  opacity: 1;
  transform: translateX(0);
}

.contact-info-item:hover {
  transform: translateX(5px);
}

/* Magnetic button effect */
.magnetic-button {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.magnetic-button:hover {
  transform: translateY(-2px);
}

/* Status pulse animation */
.status-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Image hover effects */
img {
  transition: filter 0.5s ease;
}

/* Focus styles for accessibility */
a:focus-visible,
button:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Selection colors */
::selection {
  background-color: rgba(0, 0, 0, 0.1);
}

.dark ::selection {
  background-color: rgba(255, 255, 255, 0.1);
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

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Enhanced hover effects */
.skill-item:hover {
  transform: translateX(5px) scale(1.05);
}

/* Staggered animations for better visual flow */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Add subtle background patterns for visual interest */
.scroll-animate:nth-child(even) {
  position: relative;
}

.scroll-animate:nth-child(even)::before {
  content: "";
  position: absolute;
  top: -10px;
  left: -20px;
  right: -20px;
  bottom: -10px;
  background: linear-gradient(
    135deg,
    transparent 0%,
    rgba(0, 0, 0, 0.01) 50%,
    transparent 100%
  );
  border-radius: 10px;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.dark .scroll-animate:nth-child(even)::before {
  background: linear-gradient(
    135deg,
    transparent 0%,
    rgba(255, 255, 255, 0.01) 50%,
    transparent 100%
  );
}

.scroll-animate:nth-child(even).animate-in::before {
  opacity: 1;
}
</style>
