<template>
  <div v-if="tips.length > 0" class="coach-widget">
    <div class="coach-header">
      <span class="coach-title">🧠 Ton coach</span>
    </div>
    <TransitionGroup name="tip" tag="div" class="tips-list">
      <div
        v-for="tip in tips"
        :key="tip.type"
        class="tip-card"
        :class="'tip-' + tip.type"
      >
        <span class="tip-icon">{{ tip.icon }}</span>
        <div class="tip-body">
          <p class="tip-message">{{ tip.message }}</p>
          <RouterLink
            v-if="tip.action && tip.action_label"
            :to="tip.action"
            class="tip-action"
          >{{ tip.action_label }} →</RouterLink>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { fetchCoachTips, type CoachTip } from '@/api/coach'

const tips = ref<CoachTip[]>([])

async function load() {
  tips.value = await fetchCoachTips()
}

onMounted(load)

defineExpose({ reload: load })
</script>

<style scoped>
.coach-widget {
  margin-bottom: 1.25rem;
}
.coach-header {
  margin-bottom: 0.5rem;
}
.coach-title {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--muted2);
}
.tips-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.tip-card {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  padding: 0.7rem 0.85rem;
  background: #1e1e2e;
  border: 1px solid var(--border);
  border-radius: 10px;
  transition: border-color 0.2s, transform 0.2s;
}
.tip-card:hover {
  border-color: var(--accent);
  transform: translateY(-1px);
}
.tip-card.tip-srs { border-left: 3px solid #6366f1; }
.tip-card.tip-streak_danger { border-left: 3px solid #f59e0b; }
.tip-card.tip-difficult { border-left: 3px solid #ef4444; }
.tip-card.tip-discover_mode { border-left: 3px solid #22c55e; }
.tip-card.tip-weak_theme { border-left: 3px solid #f97316; }
.tip-card.tip-first_session { border-left: 3px solid #8b5cf6; }
.tip-card.tip-encouragement { border-left: 3px solid #22c55e; }
.tip-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
  line-height: 1;
  margin-top: 0.1rem;
}
.tip-body {
  flex: 1;
  min-width: 0;
}
.tip-message {
  margin: 0;
  color: var(--text);
  font-size: 0.88rem;
  line-height: 1.4;
}
.tip-action {
  display: inline-block;
  margin-top: 0.35rem;
  color: var(--accent);
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none;
}
.tip-action:hover {
  text-decoration: underline;
}
.tip-enter-active, .tip-leave-active {
  transition: all 0.3s ease;
}
.tip-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}
.tip-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
