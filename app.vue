<template>
  <div class="mx-auto">
    <VueLenis root :options="lenisOptions" />

    <NavigationBar />
    <NuxtRouteAnnouncer />
    <NuxtPage class="bg-grid" />
  </div>
</template>

<style>
/* Light mode grid */
.bg-grid {
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.09) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.09) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* Dark mode override */
.dark .bg-grid {
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.06) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
}
</style>

<script setup lang="ts">
import { onMounted } from "vue";
import { VueLenis, useLenis } from "lenis/vue";
import { watch } from "vue";

// SEO Configuration
const siteConfig = {
  name: "Rollen Asistores",
  description:
    "Full Stack Developer creating modern web applications with clean code and thoughtful design. Passionate about building solutions that are both functional and beautiful.",
  url: "https://rollenasistores.site", // Replace with your actual domain
  image: "/og-image.jpg", // Add your OG image to public folder
  author: "Rollen Asistores",
  keywords:
    "Full Stack Developer, Web Developer, Vue.js, Laravel, JavaScript, TypeScript, React, Node.js, PHP, MySQL, Redis, Supabase, Portfolio",
  twitterHandle: "@rollenasistores", // Replace with your Twitter handle
  locale: "en_US",
  type: "website",
};

// Global SEO Meta
useHead({
  title: siteConfig.name,
  titleTemplate: (title) =>
    title === siteConfig.name ? title : `${title} - ${siteConfig.name}`,

  meta: [
    // Primary Meta Tags
    { name: "title", content: siteConfig.name },
    { name: "description", content: siteConfig.description },
    { name: "keywords", content: siteConfig.keywords },
    { name: "author", content: siteConfig.author },
    { name: "robots", content: "index, follow" },
    { name: "language", content: "English" },
    { name: "revisit-after", content: "7 days" },

    // Viewport and Mobile
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "theme-color", content: "#ffffff" },
    { name: "color-scheme", content: "light dark" },

    // Open Graph / Facebook
    { property: "og:type", content: siteConfig.type },
    { property: "og:site_name", content: siteConfig.name },
    { property: "og:title", content: siteConfig.name },
    { property: "og:description", content: siteConfig.description },
    { property: "og:image", content: `${siteConfig.url}${siteConfig.image}` },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: `${siteConfig.name} - Portfolio` },
    { property: "og:url", content: siteConfig.url },
    { property: "og:locale", content: siteConfig.locale },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: siteConfig.twitterHandle },
    { name: "twitter:creator", content: siteConfig.twitterHandle },
    { name: "twitter:title", content: siteConfig.name },
    { name: "twitter:description", content: siteConfig.description },
    { name: "twitter:image", content: `${siteConfig.url}${siteConfig.image}` },
    { name: "twitter:image:alt", content: `${siteConfig.name} - Portfolio` },

    // Additional SEO
    { name: "format-detection", content: "telephone=no" },
    { name: "msapplication-TileColor", content: "#ffffff" },
    { name: "msapplication-config", content: "/browserconfig.xml" },
  ],

  link: [
    // Favicon
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    { rel: "manifest", href: "/site.webmanifest" },

    // Canonical URL (will be overridden by pages)
    { rel: "canonical", href: siteConfig.url },

    // Preconnect to external domains for performance
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    { rel: "preconnect", href: "https://app.cal.com" },
  ],

  script: [
    // Structured Data - Organization
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: siteConfig.author,
        url: siteConfig.url,
        image: `${siteConfig.url}${siteConfig.image}`,
        jobTitle: "Full Stack Developer",
        worksFor: {
          "@type": "Organization",
          name: "Freelance",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "General Trias",
          addressRegion: "Cavite",
          addressCountry: "PH",
        },
        email: "asistoresrlc1@gmail.com",
        sameAs: [
          "https://github.com/rollenasistores",
          // Add your social media profiles here
        ],
        knowsAbout: [
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
          "Full Stack Development",
          "Web Development",
        ],
      }),
    },
  ],
});

// Site Configuration for use in pages
useSeoMeta({
  ogSiteName: siteConfig.name,
  twitterSite: siteConfig.twitterHandle,
  twitterCreator: siteConfig.twitterHandle,
});

const lenisOptions = {
  // lenis options (optional)
};

const lenis = useLenis((lenis) => {
  // called every scroll
});

watch(
  lenis,
  (lenis) => {
    // lenis instance
  },
  { immediate: true }
);

onMounted(() => {
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
  Cal("init", "15min", { origin: "https://app.cal.com" });

  Cal.ns["15min"]("floatingButton", {
    calLink: "rollen.asistores/15min",
    config: { layout: "month_view" },
    buttonText: "Schedule a Call",
  });
  Cal.ns["15min"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
});
</script>
