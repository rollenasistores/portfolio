<script setup lang="ts">
const links = [
  [
    {
      label: "Home",
      icon: "i-heroicons-home",
      to: "/",
    },
    {
      label: "About Me",
      icon: "i-heroicons-user",
      to: "/about",
    },
    {
      label: "Projects",
      icon: "i-heroicons-book-open",
      to: "/projects",
    },
  ],
  [
    {
      label: "Hire me",
      icon: "i-heroicons-light-bulb",
    },
  ],
];
</script>

<template>
  <UHorizontalNavigation
    :links="links"
    class="border-b border-gray-200 dark:border-gray-800"
  />
</template>
