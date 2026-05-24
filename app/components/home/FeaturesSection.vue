<script setup lang="ts">
import { features } from '~/data/content'
import { Activity, BarChart3, Headphones, Music, Radio, Settings2, Sparkles } from 'lucide-vue-next'
import type { Component } from 'vue'

const { container, revealed } = useStaggerReveal()

const iconMap: Record<string, Component> = {
  Activity,
  BarChart3,
  Headphones,
  Music,
  Radio,
  Settings2,
  Sparkles,
}
</script>

<template>
  <section id="features" class="section-padding bg-background-card/30">
    <div ref="container" class="container-custom">
      <div class="text-center mb-16 section-header">
        <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-4 reveal" :class="{ 'reveal-visible': revealed }">
          {{ $t('features.title') }} <span class="gradient-text">{{ $t('features.titleAccent') }}</span>
        </h2>
        <p class="text-text-secondary max-w-2xl mx-auto reveal" :class="{ 'reveal-visible': revealed }" :style="{ transitionDelay: '100ms' }">
          {{ $t('features.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(feature, index) in features"
          :key="feature.id"
          class="card group hover:scale-[1.02] hover:shadow-glow-indigo card-reveal"
          :class="{ 'reveal-visible': revealed }"
          :style="{ transitionDelay: `${index * 80}ms` }"
        >
          <div class="w-12 h-12 rounded-xl bg-harmonia-indigo/10 flex items-center justify-center mb-4 group-hover:bg-harmonia-indigo/20 transition-colors">
            <component :is="iconMap[feature.icon]" class="w-6 h-6 text-harmonia-indigo" />
          </div>
          <h3 class="text-lg font-semibold text-text-primary mb-2">{{ $t(feature.titleKey) }}</h3>
          <p class="text-text-secondary text-sm">{{ $t(feature.descriptionKey) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
