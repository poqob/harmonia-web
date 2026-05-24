export interface Feature {
  id: string
  icon: string
  titleKey: string
  descriptionKey: string
}

export const features: Feature[] = [
  { id: 'solfeggio', icon: 'Music', titleKey: 'features.solfeggio.title', descriptionKey: 'features.solfeggio.description' },
  { id: 'binaural', icon: 'Headphones', titleKey: 'features.binaural.title', descriptionKey: 'features.binaural.description' },
  { id: 'isochronic', icon: 'Activity', titleKey: 'features.isochronic.title', descriptionKey: 'features.isochronic.description' },
  { id: 'aura', icon: 'Sparkles', titleKey: 'features.aura.title', descriptionKey: 'features.aura.description' },
  { id: 'studio', icon: 'Settings2', titleKey: 'features.studio.title', descriptionKey: 'features.studio.description' },
  { id: 'analytics', icon: 'BarChart3', titleKey: 'features.analytics.title', descriptionKey: 'features.analytics.description' },
  { id: 'background', icon: 'Radio', titleKey: 'features.background.title', descriptionKey: 'features.background.description' },
]

export interface SolfeggioFrequency {
  hz: number
  key: string
  color: string
}

export const solfeggioFrequencies: SolfeggioFrequency[] = [
  { hz: 396, key: 'freq_396', color: '#7C3AED' },
  { hz: 417, key: 'freq_417', color: '#F97316' },
  { hz: 432, key: 'freq_432', color: '#6366F1' },
  { hz: 528, key: 'freq_528', color: '#10B981' },
  { hz: 639, key: 'freq_639', color: '#EC4899' },
  { hz: 741, key: 'freq_741', color: '#F59E0B' },
  { hz: 852, key: 'freq_852', color: '#8B5CF6' },
  { hz: 963, key: 'freq_963', color: '#FBBF24' },
  { hz: 777, key: 'freq_777', color: '#D946EF' },
  { hz: 888, key: 'freq_888', color: '#3B82F6' },
  { hz: 999, key: 'freq_999', color: '#14B8A6' },
]

export const screenshots = [
  { src: '/images/screenshots/ss_01.png', label: '11 Solfeggio Frekansı' },
  { src: '/images/screenshots/ss_02.png', label: 'İmmersif Görsel Deneyim' },
  { src: '/images/screenshots/ss_03.png', label: 'Binaural & İzochronik' },
  { src: '/images/screenshots/ss_04.png', label: 'Frekans Laboratuvarı' },
  { src: '/images/screenshots/ss_05.png', label: 'Dinleme Analizleri' },
  { src: '/images/screenshots/ss_06.png', label: 'Koyu & Açık Tema' },
]
