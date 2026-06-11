<template>
  <Teleport to="body">
    <div class="overlay" @click.self="$emit('cancel')">
      <div class="modal">
        <div class="modal-icon">🚪</div>
        <h3>Quitter la partie ?</h3>
        <p>Tes données ne seront pas sauvegardées et la progression sera perdue.</p>
        <div class="modal-actions">
          <button class="btn-stay" @click="$emit('cancel')">Continuer à jouer</button>
          <button class="btn-quit" @click="$emit('confirm')">Quitter</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
defineEmits<{ cancel: []; confirm: [] }>()
</script>

<style scoped>
.overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,.6);
  display: flex; align-items: center; justify-content: center;
  z-index: 1000; backdrop-filter: blur(3px);
}
.modal {
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: 14px; padding: 2rem 1.75rem; max-width: 360px;
  width: 90%; text-align: center; box-shadow: 0 20px 60px rgba(0,0,0,.4);
}
.modal-icon { font-size: 2.5rem; margin-bottom: .5rem; }
h3 { font-size: 1.2rem; margin-bottom: .5rem; color: var(--text); }
p  { color: var(--muted2); font-size: .9rem; line-height: 1.5; margin-bottom: 1.5rem; }
.modal-actions { display: flex; gap: .75rem; justify-content: center; flex-wrap: wrap; }
.btn-stay { background: var(--accent); color: white; border: none; border-radius: 8px; padding: .65rem 1.4rem; font-size: .92rem; font-weight: 600; cursor: pointer; }
.btn-quit { background: none; border: 2px solid var(--border); border-radius: 8px; padding: .65rem 1.4rem; font-size: .92rem; color: var(--muted2); cursor: pointer; transition: border-color .15s; }
.btn-quit:hover { border-color: #ef4444; color: #f87171; }
</style>
