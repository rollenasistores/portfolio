<script setup lang="ts">
import { ref, computed } from "vue";
import { portfolioItems } from "~/data/portfolio";

// Filter technologies
const uniqueTechnologies = computed(() => {
  return [...new Set(portfolioItems.flatMap((item) => item.technologies))];
});

// Filtering options
const selectedTechnology = ref<string | null>(null);
const searchQuery = ref("");
const showArchivedProjects = ref(false);

const filteredProjects = computed(() => {
  return portfolioItems.filter((item) => {
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
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold dark:text-white text-gray-900 mb-4">
        My Portfolio
      </h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        A collection of projects showcasing my skills and expertise in web
        development.
      </p>
    </div>

    <!-- Filters and Search -->
    <div
      class="mb-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
    >
      <!-- Left Side Filters -->
      <div class="flex flex-wrap gap-4 items-center">
        <!-- Technology Filter -->
        <div class="flex flex-row gap-3">
          <p>Show Archives</p>
          <UToggle
            v-model="showArchivedProjects"
            label="Show Archived Projects"
            color="primary"
          />
        </div>
        <br />
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-gray-600 dark:text-gray-400 mr-2">Filter by:</span>
          <UButton
            v-for="tech in uniqueTechnologies"
            :key="tech"
            size="sm"
            :color="selectedTechnology === tech ? 'primary' : 'gray'"
            variant="soft"
            @click="
              selectedTechnology = selectedTechnology === tech ? null : tech
            "
          >
            {{ tech }}
          </UButton>
        </div>

        <!-- Archived Projects Toggle -->
      </div>

      <!-- Search Input -->
      <UInput
        v-model="searchQuery"
        icon="i-heroicons-magnifying-glass"
        placeholder="Search projects..."
        class="w-full md:w-64"
      />
    </div>

    <!-- Projects Grid -->
    <div
      v-if="filteredProjects.length"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <PortfolioCard
        v-for="(item, index) in filteredProjects"
        :key="index"
        :item="item"
      />
    </div>

    <!-- No Projects Found -->
    <div
      v-else
      class="text-center py-12 bg-gray-100 dark:bg-gray-800 rounded-lg"
    >
      <p class="text-gray-600 dark:text-gray-400 text-xl">
        No projects found matching your search or filter.
      </p>
      <UButton
        color="gray"
        variant="soft"
        class="mt-4"
        @click="
          () => {
            searchQuery = '';
            selectedTechnology = null;
            showArchivedProjects = false;
          }
        "
      >
        Reset Filters
      </UButton>
    </div>
  </div>
</template>
