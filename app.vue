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
