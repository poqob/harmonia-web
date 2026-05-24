<script setup lang="ts">
import { Download, Sparkles, ArrowRight } from 'lucide-vue-next'

const { isDark } = useTheme()
const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 pb-8">
    <div
      class="absolute inset-0 transition-colors duration-500 overflow-hidden"
      :class="isDark ? 'hero-gradient-dark' : 'hero-gradient-light'"
    />

    <div class="hero-blob hero-blob-1" />
    <div class="hero-blob hero-blob-2" />
    <div class="hero-blob hero-blob-3" />

    <div class="container-custom relative z-10 flex-1 flex flex-col items-center justify-center">
      <div class="max-w-4xl mx-auto text-center">
        <div
          class="inline-flex items-center justify-center mb-8 animate-fade-in"
          :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-4': !isVisible }"
        >
          <img
            src="/images/harmonia-logo.png"
            alt="Harmonia Logo"
            class="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain drop-shadow-2xl rounded-3xl"
            :class="isDark ? 'drop-shadow-[0_0_40px_rgba(99,102,241,0.25)]' : 'drop-shadow-[0_0_30px_rgba(99,102,241,0.2)]'"
          />
        </div>

        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in"
          :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-4': !isVisible }"
          style="animation-delay: 100ms"
        >
          <span class="gradient-text">Harmonia</span>
        </h1>

        <p
          class="text-lg sm:text-xl md:text-2xl text-text-secondary mb-4 max-w-2xl mx-auto animate-fade-in"
          :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-4': !isVisible }"
          style="animation-delay: 200ms"
        >
          {{ $t('hero.tagline') }}
        </p>

        <p
          class="text-base text-text-muted mb-4 max-w-xl mx-auto animate-fade-in"
          :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-4': !isVisible }"
          style="animation-delay: 250ms"
        >
          {{ $t('hero.description') }}
        </p>

        <div
          class="flex flex-wrap items-center justify-center gap-3 mb-8 animate-fade-in"
          :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-4': !isVisible }"
          style="animation-delay: 280ms"
        >
          <span class="px-3 py-1 rounded-full text-xs font-medium bg-harmonia-indigo/10 text-harmonia-indigo border border-harmonia-indigo/20">
            {{ $t('hero.features') }}
          </span>
        </div>

        <div
          class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
          :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-4': !isVisible }"
          style="animation-delay: 350ms"
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.dag.harmonia"
            target="_blank"
            class="btn-primary"
          >
            <Download class="w-5 h-5 mr-2" />
            {{ $t('hero.download') }}
          </a>
          <a href="#features" class="btn-secondary group">
            {{ $t('hero.learnMore') }}
            <ArrowRight class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>

    <div
      class="relative z-10 w-full mt-8 animate-bounce"
      :class="{ 'opacity-100': isVisible, 'opacity-0': !isVisible }"
      style="animation-delay: 500ms"
    >
      <span class="text-xs text-text-muted block mb-2 text-center">{{ $t('hero.scrollHint') }}</span>
      <div class="w-6 h-10 rounded-full border-2 border-text-muted flex items-start justify-center p-2 mx-auto">
        <div class="w-1 h-2 bg-text-muted rounded-full animate-pulse" />
      </div>
    </div>
  </section>
</template>
