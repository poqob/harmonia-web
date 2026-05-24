<script setup lang="ts">
import { solfeggioFrequencies } from '~/data/content'

const { container, revealed } = useStaggerReveal()
</script>

<template>
  <section id="frequencies" class="section-padding">
    <div ref="container" class="container-custom">
      <div class="text-center mb-16 section-header">
        <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-4 reveal" :class="{ 'reveal-visible': revealed }">
          {{ $t('frequencies.title') }} <span class="gradient-text">{{ $t('frequencies.titleAccent') }}</span>
        </h2>
        <p class="text-text-secondary max-w-2xl mx-auto reveal" :class="{ 'reveal-visible': revealed }" :style="{ transitionDelay: '100ms' }">
          {{ $t('frequencies.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div
          v-for="(freq, index) in solfeggioFrequencies"
          :key="freq.hz"
          class="card flex items-center gap-4 p-4 card-reveal"
          :class="{ 'reveal-visible': revealed }"
          :style="{ transitionDelay: `${index * 60}ms`, borderLeftColor: freq.color, borderLeftWidth: '3px' }"
        >
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-lg"
            :style="{ backgroundColor: freq.color + '20', color: freq.color }"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 18V5l12-2v13"/>
              <circle cx="6" cy="18" r="3"/>
              <circle cx="18" cy="16" r="3"/>
            </svg>
          </div>
          <div class="min-w-0 flex-1">
            <div class="flex items-baseline gap-2">
              <span class="font-mono font-bold text-sm" :style="{ color: freq.color }">{{ freq.hz }} {{ $t('frequencies.hz') }}</span>
              <span class="font-semibold text-text-primary text-sm truncate">{{ $t(`frequencies.${freq.key}.name`) }}</span>
            </div>
            <p class="text-xs text-text-muted mt-0.5 truncate">{{ $t(`frequencies.${freq.key}.sub`) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
