<template>
  <span :class="['fi', `fi-${cc}`, { 'fis': square }]" :style="{ fontSize: size + 'px', borderRadius: square ? '3px' : '2px' }"></span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { flagClass } from '@/utils/flagCode'

const props = withDefaults(defineProps<{
  lang: string
  size?: number
  square?: boolean
}>(), { size: 24, square: false })

const MAP: Record<string, string> = {
  es:'es', en:'gb', de:'de', it:'it', pt:'pt', nl:'nl',
  pl:'pl', tr:'tr', ru:'ru', ja:'jp', ko:'kr', zh:'cn', ar:'sa', hi:'in',
}
const cc = computed(() => MAP[props.lang] ?? props.lang)
</script>

<style scoped>
.fi { display: inline-block; vertical-align: middle; box-shadow: 0 0 0 1px rgba(0,0,0,.15); }
</style>
