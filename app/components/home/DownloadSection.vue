<script setup lang="ts">
import { Download, Shield } from 'lucide-vue-next'

const { container, revealed } = useStaggerReveal()
</script>

<template>
  <section id="download" class="section-padding bg-gradient-to-b from-background to-background-card">
    <div ref="container" class="container-custom">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-4 reveal" :class="{ 'reveal-visible': revealed }">
          {{ $t('download.title') }} <span class="gradient-text">{{ $t('download.titleAccent') }}</span>
        </h2>
        <p class="text-text-secondary mb-8 reveal" :class="{ 'reveal-visible': revealed }" :style="{ transitionDelay: '100ms' }">
          {{ $t('download.subtitle') }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center reveal" :class="{ 'reveal-visible': revealed }" :style="{ transitionDelay: '150ms' }">
          <a
            href="https://play.google.com/store/apps/details?id=com.dag.harmonia"
            target="_blank"
            class="btn-primary inline-flex items-center px-8 py-4 text-lg"
          >
            <Download class="w-6 h-6 mr-3" />
            {{ $t('download.googlePlay') }}
          </a>
        </div>

        <div class="mt-6 reveal" :class="{ 'reveal-visible': revealed }" :style="{ transitionDelay: '200ms' }">
          <a
            :href="$t('download.privacyUrl')"
            target="_blank"
            class="inline-flex items-center gap-2 text-text-muted hover:text-harmonia-indigo transition-colors text-sm"
          >
            <Shield class="w-4 h-4" />
            {{ $t('download.privacy') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
