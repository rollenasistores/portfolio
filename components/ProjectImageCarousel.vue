<template>
  <div class="relative group">
    <Carousel
      v-if="images.length > 0"
      :items-to-show="1"
      :wrap-around="images.length > 1"
      class="rounded-lg overflow-hidden"
    >
      <Slide v-for="(image, index) in images" :key="index">
        <div class="carousel__item h-48 md:h-64 w-full">
          <img
            :src="image"
            :alt="`Project image ${index + 1}`"
            class="w-full h-full object-cover"
          />
        </div>
      </Slide>

      <template #addons>
        <Navigation v-if="images.length > 1" class="carousel-navigation" />
        <Pagination v-if="images.length > 1" class="carousel-pagination" />
      </template>
    </Carousel>

    <!-- Fallback for no images -->
    <div
      v-else
      class="h-48 md:h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-lg"
    >
      <p class="text-gray-500 dark:text-gray-400">No image available</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const props = defineProps({
  images: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
});
</script>

<style scoped>
/* Custom styling for carousel navigation and pagination */
:deep(.carousel__navigation) {
  @apply absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 z-10;
}

:deep(.carousel__navigation-button) {
  @apply bg-white/50 dark:bg-white/50 rounded-full p-2 hover:bg-white/75 dark:hover:bg-black/75 transition;
}

:deep(.carousel__navigation-button--prev) {
  @apply left-2;
}

:deep(.carousel__navigation-button--next) {
  @apply right-2;
}

:deep(.carousel__pagination) {
  @apply flex justify-center space-x-2 mt-2 py-2;
}

:deep(.carousel__pagination-button) {
  @apply w-2 h-2 rounded-full transition-all;
}

:deep(.carousel__pagination-button--active) {
  @apply bg-primary-500;
}

:deep(.carousel__pagination-button--inactive) {
  @apply bg-gray-300 dark:bg-gray-600;
}
</style>
