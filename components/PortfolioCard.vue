<template>
  <UCard
    class="group overflow-hidden relative"
    :class="{
      'opacity-60': item.isArchived,
      'border-gray-300 dark:border-gray-700': item.isArchived,
    }"
  >
    <!-- Archived Badge -->
    <div
      v-if="item.isArchived"
      class="absolute top-2 right-2 z-10 bg-gray-500 text-white px-2 py-1 rounded-full text-xs"
    >
      Archived
    </div>

    <!-- Image Carousel -->
    <ProjectImageCarousel :images="item.images" :key="item.title" />

    <div class="mt-4">
      <div class="flex-col justify-between items-start">
        <div class="flex-grow">
          <h3
            class="text-xl font-bold mb-2"
            :class="
              item.isArchived
                ? 'text-gray-500 dark:text-gray-400'
                : 'text-gray-900 dark:text-white'
            "
          >
            {{ item.title }}
          </h3>
          <p
            class="text-sm mb-2"
            :class="
              item.isArchived
                ? 'text-gray-500 dark:text-gray-500'
                : 'text-gray-600 dark:text-gray-400'
            "
          >
            {{ item.description }}
          </p>

          <!-- Archived Reason -->
          <p
            v-if="item.isArchived && item.archivedReason"
            class="text-xs italic text-gray-500 dark:text-gray-600 mb-2"
          >
            Reason: {{ item.archivedReason }}
          </p>
        </div>

        <!-- Technology Tags -->
        <div class="flex flex-wrap gap-1 ml-2">
          <UBadge
            v-for="tech in item.technologies"
            :key="tech"
            variant="soft"
            :color="item.isArchived ? 'gray' : 'primary'"
            size="xs"
          >
            {{ tech }}
          </UBadge>
        </div>
      </div>

      <!-- Actions -->
      <div class="mt-4 flex justify-between items-center">
        <UButton
          :to="item.link"
          variant="ghost"
          :color="item.isArchived ? 'gray' : 'primary'"
          class="group-hover:text-primary transition-colors"
        >
          View Project
          <template #trailing>
            <UIcon
              name="i-heroicons-arrow-right"
              class="w-5 h-5 transition-transform group-hover:translate-x-1"
            />
          </template>
        </UButton>

        <div class="flex items-center space-x-2">
          <UTooltip text="GitHub Repository" v-if="item.githubLink">
            <UButton
              :to="item.githubLink"
              variant="ghost"
              icon="i-simple-icons-github"
              :color="item.isArchived ? 'gray' : 'primary'"
            />
          </UTooltip>
          <UTooltip text="Website URL" v-if="item.link">
            <UButton
              :to="item.link"
              variant="ghost"
              icon="i-heroicons-link"
              :color="item.isArchived ? 'gray' : 'primary'"
            />
          </UTooltip>
        </div>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import { type ProjectItem } from "~/types/portfolio";

const props = defineProps({
  item: {
    type: Object as PropType<ProjectItem>,
    required: true,
  },
});
</script>
