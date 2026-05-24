<script setup lang="ts">
import { screenshots } from '~/data/content'

const { container, revealed } = useStaggerReveal()

const selectedIndex = ref(0)
const isExpanded = ref(false)

const nextSlide = () => {
  selectedIndex.value = (selectedIndex.value + 1) % screenshots.length
}

const prevSlide = () => {
  selectedIndex.value = (selectedIndex.value - 1 + screenshots.length) % screenshots.length
}
</script>

<template>
  <section id="screenshots" class="section-padding bg-background-card/30 overflow-hidden">
    <div ref="container" class="container-custom">
      <div class="text-center mb-12 section-header">
        <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-4 reveal" :class="{ 'reveal-visible': revealed }">
          {{ $t('screenshots.title') }} <span class="gradient-text">{{ $t('screenshots.titleAccent') }}</span>
        </h2>
        <p class="text-text-secondary max-w-2xl mx-auto reveal" :class="{ 'reveal-visible': revealed }" :style="{ transitionDelay: '100ms' }">
          {{ $t('screenshots.subtitle') }}
        </p>
      </div>

      <div class="max-w-5xl mx-auto reveal" :class="{ 'reveal-visible': revealed }">
        <div class="relative">
          <div class="flex justify-center">
            <div
              class="relative w-full max-w-sm aspect-[9/16] bg-background rounded-3xl overflow-hidden border-4 border-border shadow-2xl transition-all duration-500"
              :class="{ 'scale-105 shadow-glow-indigo-lg': isExpanded }"
            >
              <img
                :src="screenshots[selectedIndex].src"
                :alt="screenshots[selectedIndex].label"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <button
            @click="prevSlide"
            class="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background-card/80 border border-border text-text-secondary hover:text-text-primary hover:bg-background-hover transition-all z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button
            @click="nextSlide"
            class="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background-card/80 border border-border text-text-secondary hover:text-text-primary hover:bg-background-hover transition-all z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        <div class="flex justify-center gap-2 mt-6">
          <button
            v-for="(ss, idx) in screenshots"
            :key="idx"
            @click="selectedIndex = idx"
            class="w-2.5 h-2.5 rounded-full transition-all duration-300"
            :class="selectedIndex === idx ? 'bg-harmonia-indigo w-6' : 'bg-border hover:bg-text-muted'"
          />
        </div>

        <p class="text-center text-sm text-text-muted mt-3">
          {{ screenshots[selectedIndex].label }}
        </p>
      </div>
    </div>
  </section>
</template>
