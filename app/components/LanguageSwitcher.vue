<script setup lang="ts">
import { Globe } from 'lucide-vue-next'

const { locale, locales, setLocale } = useI18n()

const switchLocale = () => {
  const newLocale = locale.value === 'tr' ? 'en' : 'tr'
  setLocale(newLocale)
}
</script>

<template>
  <button
    @click="switchLocale"
    class="flex items-center gap-2 p-2.5 rounded-lg bg-background-hover border border-border text-text-secondary hover:text-text-primary hover:border-harmonia-indigo/50 transition-all duration-200"
  >
    <Globe class="w-5 h-5" />
    <span class="text-sm font-medium">{{ locale === 'tr' ? 'EN' : 'TR' }}</span>
  </button>
</template>
