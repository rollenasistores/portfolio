<template>
  <nav
    ref="navbar"
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out',
      isScrolled
        ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-800/20 shadow-lg'
        : 'bg-transparent border-b border-transparent',
    ]"
  >
    <div class="max-w-4xl mx-auto px-8 py-6">
      <div class="flex items-center justify-between">
        <!-- Logo/Name -->
        <div
          ref="logo"
          class="nav-item flex items-center opacity-0 transform -translate-x-4"
        >
          <NuxtLink
            to="/"
            @click="scrollToTop"
            class="group relative text-lg font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300"
          >
            <span class="relative z-10">Rollen Asistores</span>
            <div
              class="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300 scale-100"
            ></div>
            <div
              class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            ></div>
          </NuxtLink>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="(link, index) in mainLinks"
            :key="link.label"
            :ref="(el) => (navLinks[index] = el as HTMLElement)"
            :to="link.to"
            class="nav-item opacity-0 transform -translate-y-4 group relative text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 text-sm font-medium"
            :style="`transition-delay: ${(index + 1) * 150}ms`"
            active-class="text-gray-900 dark:text-white"
          >
            <span class="relative z-10">{{ link.label }}</span>
            <div
              class="absolute inset-0 bg-gray-100 dark:bg-gray-800 opacity-0 group-hover:opacity-100 rounded-lg transition-all duration-300 scale-0 group-hover:scale-100"
            ></div>
            <div
              class="absolute -bottom-1 left-1/2 w-1 h-1 bg-purple-600 rounded-full transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300"
            ></div>
          </NuxtLink>
        </div>

        <!-- CTA & Theme Toggle -->
        <div
          ref="actions"
          class="nav-item opacity-0 transform translate-x-4 flex items-center space-x-4"
        >
          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="theme-toggle w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-300 group"
            aria-label="Toggle theme"
          >
            <div class="relative w-5 h-5">
              <svg
                :class="[
                  'absolute inset-0 w-5 h-5 text-gray-700 transition-all duration-500',
                  isDark
                    ? 'opacity-0 rotate-180 scale-0'
                    : 'opacity-100 rotate-0 scale-100',
                ]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              </svg>
              <svg
                :class="[
                  'absolute inset-0 w-5 h-5 text-yellow-400 transition-all duration-500',
                  isDark
                    ? 'opacity-100 rotate-0 scale-100'
                    : 'opacity-0 -rotate-180 scale-0',
                ]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            </div>
          </button>

          <!-- Hire Me Button -->
          <button
            @click="openContact"
            class="hire-button hidden sm:inline-flex relative overflow-hidden px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:scale-105 transition-all duration-300 text-sm font-medium group"
          >
            <span class="relative z-10 flex items-center gap-2">
              Hire me
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
            <div
              class="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div
              class="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right group-hover:origin-left"
            ></div>
          </button>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMobileMenu"
            class="mobile-toggle md:hidden w-10 h-10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300"
            aria-label="Toggle menu"
          >
            <div class="relative w-6 h-6">
              <span
                :class="[
                  'absolute left-0 block w-6 h-0.5 bg-current transform transition-all duration-300',
                  isMobileMenuOpen ? 'top-3 rotate-45' : 'top-1',
                ]"
              ></span>
              <span
                :class="[
                  'absolute left-0 top-3 block w-6 h-0.5 bg-current transition-all duration-300',
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100',
                ]"
              ></span>
              <span
                :class="[
                  'absolute left-0 block w-6 h-0.5 bg-current transform transition-all duration-300',
                  isMobileMenuOpen ? 'top-3 -rotate-45' : 'top-5',
                ]"
              ></span>
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 transform -translate-y-4"
        enter-to-class="opacity-100 transform translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform -translate-y-4"
      >
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden mt-6 pt-6 border-t border-gray-200/30 dark:border-gray-800/30 space-y-2 backdrop-blur-sm"
        >
          <NuxtLink
            v-for="(link, index) in mainLinks"
            :key="link.label"
            :to="link.to"
            @click="closeMobileMenu"
            class="mobile-link block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-sm font-medium py-3 px-4 rounded-lg transform translate-x-4 opacity-0"
            :style="`animation-delay: ${index * 100}ms`"
            active-class="text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800"
          >
            {{ link.label }}
          </NuxtLink>

          <button
            @click="openContact"
            class="mobile-cta w-full mt-4 px-4 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-sm font-medium transform translate-x-4 opacity-0"
            style="animation-delay: 300ms"
          >
            <span class="flex items-center justify-center gap-2">
              Hire me
              <svg
                class="w-4 h-4"
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
        </div>
      </Transition>
    </div>

    <!-- Progress bar -->
    <div
      ref="progressBar"
      class="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 transition-all duration-300 ease-out"
      :style="`width: ${scrollProgress}%`"
    ></div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from "vue";

// Refs
const navbar = ref(null);
const logo = ref<HTMLElement | null>(null);
const actions = ref<HTMLElement | null>(null);
const progressBar = ref(null);
const navLinks = ref<(HTMLElement | null)[]>([]);

// State
const isMobileMenuOpen = ref(false);
const isDark = ref(false);
const isScrolled = ref(false);
const scrollProgress = ref(0);

// Navigation links
const mainLinks = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Projects",
    to: "/projects",
  },
];

// Scroll handler
const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  // Update scroll state
  isScrolled.value = scrollTop > 50;

  // Update progress bar
  scrollProgress.value = (scrollTop / documentHeight) * 100;
};

// Methods
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;

  // Animate mobile menu items
  if (isMobileMenuOpen.value) {
    nextTick(() => {
      const mobileLinks = document.querySelectorAll(
        ".mobile-link, .mobile-cta"
      );
      mobileLinks.forEach((link, index) => {
        setTimeout(() => {
          const el = link as HTMLElement;
          if (el) {
            el.style.opacity = "1";
            el.style.transform = "translateX(0)";
          }
        }, index * 100);
      });
    });
  }
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Store theme preference
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
};

const openContact = () => {
  window.location.href = "mailto:asistoresrlc1@gmail.com";
  closeMobileMenu();
};

const scrollToTop = () => {
  document
    .getElementById("heroSection")
    ?.scrollIntoView({ behavior: "smooth" });
};
// Animation functions
const animateNavItems = () => {
  const elements = [
    { el: logo.value, delay: 0 },
    { el: actions.value, delay: 600 },
  ];

  elements.forEach(({ el, delay }) => {
    if (el) {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateX(0)";
      }, delay);
    }
  });
};

// Lifecycle
onMounted(() => {
  // Initialize theme
  const savedTheme = localStorage.getItem("theme");
  const systemDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && systemDark)) {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  }

  // Setup scroll listener
  window.addEventListener("scroll", handleScroll, { passive: true });

  // Initial scroll state
  handleScroll();

  // Animate navigation items
  setTimeout(animateNavItems, 100);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Navigation item base styles */
.nav-item {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Theme toggle animation */
.theme-toggle {
  position: relative;
}

.theme-toggle:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.dark .theme-toggle:hover {
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
}

/* Hire button animations */
.hire-button {
  position: relative;
  overflow: hidden;
}

.hire-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: left 0.5s ease;
}

.hire-button:hover::before {
  left: 100%;
}

/* Mobile toggle animation */
.mobile-toggle:hover {
  transform: scale(1.1);
}

/* Mobile menu animations */
.mobile-link,
.mobile-cta {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-link:hover,
.mobile-cta:hover {
  transform: translateX(4px);
}

/* Progress bar glow effect */
.progress-bar {
  position: relative;
}

.progress-bar::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.6));
  border-radius: 0 2px 2px 0;
}

/* Backdrop blur support */
@supports (backdrop-filter: blur(12px)) {
  .nav-backdrop {
    backdrop-filter: blur(12px);
  }
}

/* Focus styles for accessibility */
button:focus-visible,
a:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Active link styles */
.router-link-active {
  color: rgb(17 24 39) !important;
  background: rgba(107, 114, 128, 0.1);
  border-radius: 8px;
  padding: 8px 12px;
  margin: -8px -12px;
}

.dark .router-link-active {
  color: rgb(255 255 255) !important;
  background: rgba(156, 163, 175, 0.1);
}

/* Smooth transitions for all elements */
* {
  transition-property: color, background-color, border-color, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Custom scrollbar for mobile menu */
.mobile-menu::-webkit-scrollbar {
  width: 4px;
}

.mobile-menu::-webkit-scrollbar-track {
  background: transparent;
}

.mobile-menu::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.3);
  border-radius: 2px;
}

.dark .mobile-menu::-webkit-scrollbar-thumb {
  background: rgba(75, 85, 99, 0.3);
}

/* Logo hover effect */
.logo-hover {
  position: relative;
  overflow: hidden;
}

.logo-hover::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(147, 51, 234, 0.1),
    transparent
  );
  transition: left 0.6s ease;
}

.logo-hover:hover::before {
  left: 100%;
}

/* Magnetic effect for interactive elements */
@media (hover: hover) {
  .magnetic-element {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .magnetic-element:hover {
    transform: translateY(-2px);
  }
}

/* Glowing border effect */
.glow-border {
  position: relative;
}

.glow-border::before {
  content: "";
  position: absolute;
  inset: 0;
  padding: 1px;
  background: linear-gradient(45deg, #22c55e, #16a34a, #4ade80);
  border-radius: inherit;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.glow-border:hover::before {
  opacity: 1;
}
</style>
