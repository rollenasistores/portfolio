<template>
  <!-- Project Detail Modal -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isVisible"
        class="fixed inset-0 z-50 pt-32 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        @click="closeModal"
      >
        <Transition
          enter-active-class="transition-all duration-500 ease-out"
          enter-from-class="opacity-0 scale-95 translate-y-8"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-8"
        >
          <div
            v-if="isVisible"
            class="relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-gray-950 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            @click.stop
          >
            <!-- Close Button - Fixed positioned over content -->
            <button
              @click="closeModal"
              class="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90 group shadow-lg"
            >
              <svg
                class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <!-- Scrollable Modal Content -->
            <div
              ref="modalContent"
              class="flex-1 overflow-y-auto overflow-x-hidden modal-scrollbar"
              @scroll="handleScroll"
            >
              <!-- Hero Section -->
              <div
                class="relative bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 dark:from-green-950/20 dark:via-emerald-950/20 dark:to-green-900/20 p-8 md:p-12"
              >
                <!-- Animated Background Elements -->
                <div class="absolute inset-0 overflow-hidden">
                  <div
                    class="absolute -top-10 -right-10 w-40 h-40 bg-green-200/30 dark:bg-green-800/20 rounded-full animate-pulse"
                  ></div>
                  <div
                    class="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-200/30 dark:bg-emerald-800/20 rounded-full animate-pulse"
                    style="animation-delay: 1s"
                  ></div>
                  <div
                    class="absolute top-1/2 left-1/2 w-24 h-24 bg-green-300/20 dark:bg-green-700/20 rounded-full animate-ping"
                    style="animation-delay: 2s"
                  ></div>
                </div>

                <div class="relative z-10">
                  <!-- Project Badge -->
                  <div
                    ref="projectBadge"
                    class="project-element opacity-0 transform translate-y-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 mb-6"
                  >
                    <div
                      class="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                    ></div>
                    <span
                      class="text-green-700 dark:text-green-300 text-sm font-medium"
                      >Featured Project</span
                    >
                  </div>

                  <!-- Project Title -->
                  <h1
                    ref="projectTitle"
                    class="project-element opacity-0 transform translate-y-4 text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
                  >
                    {{ selectedProject?.name }}
                  </h1>

                  <!-- Project Year -->
                  <p
                    ref="projectYear"
                    class="project-element opacity-0 transform translate-y-4 text-green-600 dark:text-green-400 text-lg font-medium mb-6"
                  >
                    {{ selectedProject?.year }}
                  </p>

                  <!-- Project Description -->
                  <p
                    ref="projectDescription"
                    class="project-element opacity-0 transform translate-y-4 text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl"
                  >
                    {{ selectedProject?.description }}
                  </p>

                  <!-- Technology Stack -->
                  <div
                    ref="techStack"
                    class="project-element opacity-0 transform translate-y-4 flex flex-wrap gap-3"
                  >
                    <span
                      v-for="(tech, index) in selectedProject?.technologies"
                      :key="tech"
                      ref="techBadges"
                      class="tech-badge opacity-0 transform scale-95 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium border border-green-200 dark:border-green-800 hover:bg-green-200 dark:hover:bg-green-800/40 hover:scale-105 transition-all duration-300 cursor-default"
                      :style="`transition-delay: ${index * 100 + 800}ms`"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Live Demo Section -->
              <div
                v-if="selectedProject?.liveUrl && showLiveDemo"
                ref="liveDemoSection"
                class="detail-section opacity-0 transform translate-y-8 px-8 md:px-12 py-8 border-b border-gray-200 dark:border-gray-800"
              >
                <div class="flex items-center justify-between mb-6">
                  <h2
                    class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3"
                  >
                    <div
                      class="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center"
                    >
                      <svg
                        class="w-4 h-4 text-green-600 dark:text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        ></path>
                      </svg>
                    </div>
                    Live Demo
                  </h2>

                  <!-- Live Demo Controls -->
                  <div class="flex items-center gap-3">
                    <button
                      @click="refreshIframe"
                      class="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-all duration-300"
                    >
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
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        ></path>
                      </svg>
                      Refresh
                    </button>

                    <button
                      @click="openInNewTab"
                      class="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-all duration-300"
                    >
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
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        ></path>
                      </svg>
                      Open in new tab
                    </button>
                  </div>
                </div>

                <!-- Iframe Container -->
                <div
                  class="relative bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg"
                >
                  <!-- Loading Overlay -->
                  <div
                    v-if="isIframeLoading"
                    class="absolute inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-10"
                  >
                    <div
                      class="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                    >
                      <div
                        class="w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full animate-spin"
                      ></div>
                      <span>Loading demo...</span>
                    </div>
                  </div>

                  <!-- Error State -->
                  <div
                    v-if="iframeError"
                    class="absolute inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-10"
                  >
                    <div class="text-center p-8 max-w-md">
                      <div
                        class="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <svg
                          class="w-8 h-8 text-amber-600 dark:text-amber-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
                          ></path>
                        </svg>
                      </div>
                      <h3
                        class="text-lg font-semibold text-gray-900 dark:text-white mb-3"
                      >
                        Preview Unavailable
                      </h3>
                      <p
                        class="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed"
                      >
                        This website cannot be displayed in the preview frame.
                        This is commonly due to security settings that prevent
                        embedding (X-Frame-Options) or network restrictions. The
                        site should work fine when opened directly.
                      </p>
                      <div class="space-y-3">
                        <button
                          @click="openInNewTab"
                          class="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
                        >
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
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            ></path>
                          </svg>
                          Open Live Demo
                        </button>
                        <button
                          @click="copyUrl"
                          class="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-all duration-300"
                        >
                          <svg
                            v-if="!urlCopied"
                            class="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            ></path>
                          </svg>
                          <svg
                            v-else
                            class="w-4 h-4 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          {{ urlCopied ? "Copied!" : "Copy URL" }}
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- Iframe -->
                  <iframe
                    ref="liveIframe"
                    :src="
                      iframeKey && selectedProject?.liveUrl
                        ? selectedProject.liveUrl
                        : ''
                    "
                    class="w-full h-96 md:h-[500px] lg:h-[600px] border-0"
                    :class="{ 'opacity-0': isIframeLoading || iframeError }"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
                    loading="lazy"
                    @load="handleIframeLoad"
                    @error="handleIframeError"
                  ></iframe>

                  <!-- URL Display -->
                  <div
                    class="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm text-white p-3 flex items-center justify-between"
                  >
                    <div class="flex items-center gap-2 min-w-0">
                      <svg
                        class="w-4 h-4 text-green-400 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                      <span class="text-sm truncate">{{
                        selectedProject.liveUrl
                      }}</span>
                    </div>
                    <button
                      @click="copyUrl"
                      class="flex-shrink-0 ml-2 p-1 hover:bg-white/20 rounded transition-colors duration-200"
                      :title="urlCopied ? 'Copied!' : 'Copy URL'"
                    >
                      <svg
                        v-if="!urlCopied"
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <svg
                        v-else
                        class="w-4 h-4 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Project Image Gallery -->
              <div
                v-if="
                  selectedProject?.images && selectedProject.images.length > 0
                "
                ref="imageGallery"
                class="detail-section opacity-0 transform translate-y-8 px-8 md:px-12 py-8"
              >
                <h2
                  class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3"
                >
                  <div
                    class="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center"
                  >
                    <svg
                      class="w-4 h-4 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  Project Gallery
                </h2>

                <!-- Main Featured Image -->
                <div
                  v-if="selectedProject.images[0]"
                  class="mb-6 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                  @click="openImageViewer(0)"
                >
                  <img
                    :src="
                      selectedProject.images[0].url || selectedProject.images[0]
                    "
                    :alt="
                      selectedProject.images[0].alt ||
                      `${selectedProject.name} main image`
                    "
                    class="w-full h-64 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <!-- Additional Images Grid -->
                <div
                  v-if="selectedProject.images.length > 1"
                  class="grid grid-cols-2 md:grid-cols-3 gap-4"
                >
                  <div
                    v-for="(image, index) in selectedProject.images.slice(1, 7)"
                    :key="index + 1"
                    class="aspect-square rounded-lg overflow-hidden shadow-md group cursor-pointer hover:shadow-xl transition-all duration-300"
                    @click="openImageViewer(index + 1)"
                  >
                    <img
                      :src="image.url || image"
                      :alt="
                        image.alt ||
                        `${selectedProject.name} image ${index + 2}`
                      "
                      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  <!-- Show more indicator -->
                  <div
                    v-if="selectedProject.images.length > 7"
                    class="aspect-square rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 flex items-center justify-center cursor-pointer hover:from-green-200 hover:to-emerald-200 dark:hover:from-green-800/30 dark:hover:to-emerald-800/30 transition-all duration-300"
                    @click="openImageViewer(7)"
                  >
                    <div class="text-center">
                      <div
                        class="text-2xl font-bold text-green-600 dark:text-green-400 mb-1"
                      >
                        +{{ selectedProject.images.length - 7 }}
                      </div>
                      <div class="text-sm text-gray-600 dark:text-gray-400">
                        more
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Project Details Section -->
              <div class="p-8 md:p-12">
                <div class="grid lg:grid-cols-2 gap-12">
                  <!-- Project Overview -->
                  <div
                    ref="overviewSection"
                    class="detail-section opacity-0 transform translate-x-8"
                  >
                    <h2
                      class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3"
                    >
                      <div
                        class="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center"
                      >
                        <svg
                          class="w-4 h-4 text-green-600 dark:text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          ></path>
                        </svg>
                      </div>
                      Project Overview
                    </h2>

                    <div class="space-y-6">
                      <div
                        v-if="
                          selectedProject?.features &&
                          selectedProject.features.length > 0
                        "
                        class="feature-item opacity-0 transform translate-y-4"
                        style="transition-delay: 100ms"
                      >
                        <h3
                          class="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2"
                        >
                          <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                          Key Features
                        </h3>
                        <ul class="space-y-2 text-gray-600 dark:text-gray-400">
                          <li
                            v-for="feature in selectedProject.features"
                            :key="feature"
                            class="flex items-start gap-2"
                          >
                            <svg
                              class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            {{ feature }}
                          </li>
                        </ul>
                      </div>

                      <div
                        v-if="
                          selectedProject?.challenges &&
                          selectedProject.challenges.length > 0
                        "
                        class="feature-item opacity-0 transform translate-y-4"
                        style="transition-delay: 150ms"
                      >
                        <h3
                          class="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2"
                        >
                          <div class="w-2 h-2 bg-amber-500 rounded-full"></div>
                          Challenges & Solutions
                        </h3>
                        <ul class="space-y-2 text-gray-600 dark:text-gray-400">
                          <li
                            v-for="challenge in selectedProject.challenges"
                            :key="challenge"
                            class="flex items-start gap-2"
                          >
                            <svg
                              class="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                              ></path>
                            </svg>
                            {{ challenge }}
                          </li>
                        </ul>
                      </div>

                      <div
                        v-if="
                          selectedProject?.approach ||
                          selectedProject?.methodology
                        "
                        class="feature-item opacity-0 transform translate-y-4"
                        style="transition-delay: 200ms"
                      >
                        <h3
                          class="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2"
                        >
                          <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                          {{
                            selectedProject?.approach
                              ? "Development Approach"
                              : "Methodology"
                          }}
                        </h3>
                        <p
                          class="text-gray-600 dark:text-gray-400 leading-relaxed"
                        >
                          {{
                            selectedProject?.approach ||
                            selectedProject?.methodology
                          }}
                        </p>
                      </div>

                      <div
                        v-if="
                          selectedProject?.highlights &&
                          selectedProject.highlights.length > 0
                        "
                        class="feature-item opacity-0 transform translate-y-4"
                        style="transition-delay: 250ms"
                      >
                        <h3
                          class="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2"
                        >
                          <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                          Project Highlights
                        </h3>
                        <ul class="space-y-2 text-gray-600 dark:text-gray-400">
                          <li
                            v-for="highlight in selectedProject.highlights"
                            :key="highlight"
                            class="flex items-start gap-2"
                          >
                            <svg
                              class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                              ></path>
                            </svg>
                            {{ highlight }}
                          </li>
                        </ul>
                      </div>

                      <!-- Fallback content if no project data is available -->
                      <div
                        v-if="
                          !selectedProject?.features &&
                          !selectedProject?.challenges &&
                          !selectedProject?.approach &&
                          !selectedProject?.methodology &&
                          !selectedProject?.highlights
                        "
                        class="feature-item opacity-0 transform translate-y-4"
                        style="transition-delay: 100ms"
                      >
                        <h3
                          class="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2"
                        >
                          <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                          Project Information
                        </h3>
                        <p
                          class="text-gray-600 dark:text-gray-400 leading-relaxed"
                        >
                          This project showcases modern web development
                          practices and innovative solutions. More detailed
                          information about features and implementation approach
                          will be available soon.
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- Project Metrics -->
                  <div
                    ref="metricsSection"
                    class="detail-section opacity-0 transform translate-x-8"
                  >
                    <!-- Technologies Deep Dive -->
                    <div
                      class="feature-item opacity-0 transform translate-y-4"
                      style="transition-delay: 500ms"
                    >
                      <h3
                        class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2"
                      >
                        <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                        Technical Implementation
                      </h3>
                      <div class="space-y-3">
                        <div
                          class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg"
                        >
                          <span class="text-gray-700 dark:text-gray-300"
                            >Frontend Framework</span
                          >
                          <span
                            class="text-green-600 dark:text-green-400 font-medium"
                            >{{ selectedProject?.technologies[0] }}</span
                          >
                        </div>
                        <div
                          class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg"
                        >
                          <span class="text-gray-700 dark:text-gray-300"
                            >Styling</span
                          >
                          <span
                            class="text-green-600 dark:text-green-400 font-medium"
                            >{{
                              selectedProject?.technologies[2] || "CSS3"
                            }}</span
                          >
                        </div>
                        <div
                          class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg"
                        >
                          <span class="text-gray-700 dark:text-gray-300"
                            >Backend Framework</span
                          >
                          <span
                            class="text-green-600 dark:text-green-400 font-medium"
                            >{{
                              selectedProject?.technologies[1] || "Vuex"
                            }}</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div
                  ref="actionButtons"
                  class="detail-section opacity-0 transform translate-y-8 flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-gray-200 dark:border-gray-800"
                >
                  <button
                    v-if="selectedProject?.liveUrl"
                    @click="scrollToLiveDemo"
                    class="group flex items-center justify-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                  >
                    <svg
                      class="w-5 h-5 transition-transform group-hover:scale-110"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      ></path>
                    </svg>
                    View Live Demo
                  </button>
                  <button
                    v-if="selectedProject?.githubUrl"
                    @click="openGithub"
                    class="group flex items-center justify-center gap-3 px-8 py-4 border-2 border-green-600 text-green-600 dark:text-green-400 hover:bg-green-600 hover:text-white rounded-xl font-medium transition-all duration-300 hover:scale-105"
                  >
                    <svg
                      class="w-5 h-5 transition-transform group-hover:scale-110"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      ></path>
                    </svg>
                    View Source Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>

  <!-- Image Viewer Modal -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="showImageViewer"
        class="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        style="z-index: 9999"
        @click="closeImageViewer"
        @wheel.stop.prevent
      >
        <div class="relative max-w-7xl max-h-full">
          <!-- Close Button -->
          <button
            @click="closeImageViewer"
            class="absolute -top-12 right-0 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <!-- Navigation Arrows -->
          <button
            v-if="selectedProject?.images && selectedProject.images.length > 1"
            @click.stop="previousImage"
            class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>

          <button
            v-if="selectedProject?.images && selectedProject.images.length > 1"
            @click.stop="nextImage"
            class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>

          <!-- Image -->
          <img
            v-if="currentImage"
            :src="currentImage.url || currentImage"
            :alt="currentImage.alt || `${selectedProject?.name} image`"
            class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            @click.stop
          />

          <!-- Image Counter -->
          <div
            v-if="selectedProject?.images && selectedProject.images.length > 1"
            class="absolute -bottom-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 rounded-full text-white text-sm"
          >
            {{ currentImageIndex + 1 }} / {{ selectedProject.images.length }}
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, watch, computed } from "vue";

// Props
const props = defineProps<{
  project: any;
  isVisible: boolean;
}>();

// Emits
const emit = defineEmits<{
  close: [];
}>();

// Refs
const modalContent = ref<HTMLElement | null>(null);
const projectBadge = ref(null);
const projectTitle = ref(null);
const projectYear = ref(null);
const projectDescription = ref(null);
const techStack = ref(null);
const techBadges = ref<any[]>([]);
const overviewSection = ref(null);
const metricsSection = ref(null);
const metricCards = ref<any[]>([]);
const actionButtons = ref(null);
const imageGallery = ref(null);
const liveDemoSection = ref(null);
const liveIframe = ref<HTMLIFrameElement | null>(null);

// Image viewer state
const showImageViewer = ref(false);
const currentImageIndex = ref(0);

// Live demo state
const isIframeLoading = ref(true);
const iframeError = ref(false);
const iframeKey = ref(0);
const urlCopied = ref(false);
const showLiveDemo = ref(false);

// Computed
const selectedProject = computed(() => props.project);
const currentImage = computed(() => {
  const images = selectedProject.value?.images || [];
  return images.length > 0 ? images[currentImageIndex.value] : null;
});

// State
let originalBodyOverflow = "";

// Methods
const closeModal = () => {
  emit("close");
};

// Live demo methods
const refreshIframe = () => {
  isIframeLoading.value = true;
  iframeError.value = false;
  iframeKey.value += 1;

  nextTick(() => {
    if (liveIframe.value && selectedProject.value?.liveUrl) {
      liveIframe.value.src = selectedProject.value.liveUrl;

      // Additional check for immediate failures
      setTimeout(() => {
        if (liveIframe.value) {
          try {
            // Check if iframe src is still the same (some browsers reset it on X-Frame-Options)
            if (liveIframe.value.src !== selectedProject.value?.liveUrl) {
              isIframeLoading.value = false;
              iframeError.value = true;
              return;
            }
          } catch (e) {
            console.warn("Iframe src check failed:", e);
          }
        }
      }, 500);
    }
    checkIframeTimeout();
  });
};

const handleIframeLoad = () => {
  // Check if the iframe actually loaded content or just shows an error page
  setTimeout(() => {
    try {
      if (liveIframe.value) {
        const iframeDoc =
          liveIframe.value.contentDocument ||
          liveIframe.value.contentWindow?.document;

        // If we can't access the document, it might be cross-origin but loaded
        if (!iframeDoc) {
          // Cross-origin but loaded successfully
          isIframeLoading.value = false;
          iframeError.value = false;
          return;
        }

        // Check if the document contains error indicators
        const bodyText = iframeDoc.body?.textContent?.toLowerCase() || "";
        const title = iframeDoc.title?.toLowerCase() || "";

        // Common error indicators
        const errorIndicators = [
          "refused to connect",
          "this site can't be reached",
          "connection was refused",
          "err_connection_refused",
          "err_connection_reset",
          "page not found",
          "not found",
          "error 404",
          "cannot be displayed in a frame",
          "x-frame-options",
        ];

        const hasError = errorIndicators.some(
          (indicator) =>
            bodyText.includes(indicator) || title.includes(indicator)
        );

        if (hasError) {
          isIframeLoading.value = false;
          iframeError.value = true;
        } else {
          isIframeLoading.value = false;
          iframeError.value = false;
        }
      }
    } catch (e) {
      // Cross-origin restriction, but iframe might have loaded fine
      isIframeLoading.value = false;
      iframeError.value = false;
    }
  }, 1000);
};

const handleIframeError = () => {
  isIframeLoading.value = false;
  iframeError.value = true;
};

// Add a timeout to detect loading issues
const checkIframeTimeout = () => {
  setTimeout(() => {
    if (isIframeLoading.value) {
      // If still loading after 8 seconds, consider it an error
      isIframeLoading.value = false;
      iframeError.value = true;
    }
  }, 8000);
};

const openInNewTab = () => {
  if (selectedProject.value?.liveUrl) {
    window.open(selectedProject.value.liveUrl, "_blank", "noopener,noreferrer");
  }
};

const scrollToLiveDemo = () => {
  if (!showLiveDemo.value) {
    // Show the live demo section
    showLiveDemo.value = true;
    // Reset iframe state for fresh load
    isIframeLoading.value = true;
    iframeError.value = false;
    iframeKey.value += 1;

    // Wait for the section to render, then scroll to it
    nextTick(() => {
      if (liveDemoSection.value && modalContent.value) {
        setTimeout(() => {
          liveDemoSection.value.style.opacity = "1";
          liveDemoSection.value.style.transform = "translateY(0)";

          setTimeout(() => {
            liveDemoSection.value.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 300);
        }, 100);
      }
      checkIframeTimeout();
    });
  } else {
    // Section already visible, just scroll to it
    if (liveDemoSection.value && modalContent.value) {
      liveDemoSection.value.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
};

const openGithub = () => {
  if (selectedProject.value?.githubUrl) {
    window.open(
      selectedProject.value.githubUrl,
      "_blank",
      "noopener,noreferrer"
    );
  }
};

const copyUrl = async () => {
  if (selectedProject.value?.liveUrl) {
    try {
      await navigator.clipboard.writeText(selectedProject.value.liveUrl);
      urlCopied.value = true;
      setTimeout(() => {
        urlCopied.value = false;
      }, 2000);
    } catch (err) {
      console.error("Failed to copy URL:", err);
    }
  }
};

// Image viewer methods
const openImageViewer = (index: number) => {
  currentImageIndex.value = index;
  showImageViewer.value = true;
  lockBodyScroll();
};

const closeImageViewer = () => {
  showImageViewer.value = false;
  if (!props.isVisible) unlockBodyScroll();
};

const nextImage = () => {
  const images = selectedProject.value?.images || [];
  if (images.length > 0) {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
  }
};

const previousImage = () => {
  const images = selectedProject.value?.images || [];
  if (images.length > 0) {
    currentImageIndex.value =
      currentImageIndex.value === 0
        ? images.length - 1
        : currentImageIndex.value - 1;
  }
};

const lockBodyScroll = () => {
  originalBodyOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
};

const unlockBodyScroll = () => {
  document.body.style.overflow = originalBodyOverflow || "";
  document.documentElement.style.overflow = "";
};

// Animation functions
const animateProjectElements = () => {
  const elements = [
    { el: projectBadge.value, delay: 200 },
    { el: projectTitle.value, delay: 400 },
    { el: projectYear.value, delay: 600 },
    { el: projectDescription.value, delay: 800 },
    { el: techStack.value, delay: 1000 },
  ];

  elements.forEach(({ el, delay }) => {
    if (el) {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, delay);
    }
  });

  // Animate tech badges
  setTimeout(() => {
    techBadges.value.forEach((badge, index) => {
      if (badge) {
        setTimeout(() => {
          badge.style.opacity = "1";
          badge.style.transform = "scale(1)";
        }, index * 100);
      }
    });
  }, 1200);
};

const animateDetailSections = () => {
  const sections = [
    { el: liveDemoSection.value, delay: 1200 },
    { el: imageGallery.value, delay: 1400 },
    { el: overviewSection.value, delay: 1600 },
    { el: metricsSection.value, delay: 1800 },
    { el: actionButtons.value, delay: 2000 },
  ];

  sections.forEach(({ el, delay }) => {
    if (el) {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateX(0) translateY(0)";
      }, delay);
    }
  });

  // Animate feature items
  setTimeout(() => {
    const featureItems = document.querySelectorAll(".feature-item");
    featureItems.forEach((item, index) => {
      setTimeout(() => {
        (item as HTMLElement).style.opacity = "1";
        (item as HTMLElement).style.transform = "translateY(0)";
      }, index * 200);
    });
  }, 2000);

  // Animate metric cards
  setTimeout(() => {
    metricCards.value.forEach((card, index) => {
      if (card) {
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        }, index * 100);
      }
    });
  }, 2200);
};

// Keyboard navigation
const handleKeyDown = (event: KeyboardEvent) => {
  if (showImageViewer.value) {
    if (event.key === "Escape") closeImageViewer();
    else if (event.key === "ArrowLeft") previousImage();
    else if (event.key === "ArrowRight") nextImage();
  } else if (props.isVisible && event.key === "Escape") {
    closeModal();
  }
};

// Watch for visibility changes
watch(
  () => props.isVisible,
  (newValue) => {
    if (newValue) {
      lockBodyScroll();
      // Reset iframe state
      isIframeLoading.value = true;
      iframeError.value = false;
      iframeKey.value += 1;
      showLiveDemo.value = false; // Reset live demo visibility

      nextTick(() => {
        if (modalContent.value) {
          modalContent.value.scrollTop = 0;
        }
        animateProjectElements();
        animateDetailSections();
      });
    } else {
      if (!showImageViewer.value) unlockBodyScroll();
      showImageViewer.value = false;
      showLiveDemo.value = false; // Reset when modal closes
    }
  }
);

// Watch for project changes
watch(
  () => props.project?.id || props.project?.name,
  () => {
    // Reset live demo state when project changes
    showLiveDemo.value = false;
    isIframeLoading.value = true;
    iframeError.value = false;
    iframeKey.value += 1;
  }
);

// Lifecycle
onMounted(() => {
  if (props.isVisible) lockBodyScroll();
  document.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  unlockBodyScroll();
  document.removeEventListener("keydown", handleKeyDown);
});
</script>

<style scoped>
.modal-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #10b981 transparent;
}

.modal-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.modal-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.modal-scrollbar::-webkit-scrollbar-thumb {
  background-color: #10b981;
  border-radius: 3px;
}

.modal-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #059669;
}

.project-element,
.detail-section,
.tech-badge,
.feature-item {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
