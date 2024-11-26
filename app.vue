<template>
  <div class="mx-auto">
    <NavigationBar />
    <NuxtRouteAnnouncer />
    <NuxtPage class="bg-grid" />
  </div>
</template>

<style>
/* Custom Grid Background */
.bg-grid {
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.02) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
  background-size: 40px 40px; /* Adjust for larger or smaller grids */
}

/* Dark mode grid background */
@media (prefers-color-scheme: dark) {
  .bg-grid {
    background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.02) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  }
}
</style>
