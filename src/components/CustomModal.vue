<template>
  <div
    class="wrapper"
    v-if="isOpen"
    @click.self="emit('close')"
  >
    <div class="modal">
      <slot name="header"/>
      <slot name="content"/>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'

defineProps({
  isOpen: Boolean,
});
const emit = defineEmits(['close'])

</script>

<style scoped>
.wrapper {
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  background: rgba(0, 0, 0, 0.5);
  animation: fadeIn 0.2s ease;
}

.modal {
  position: relative;

  padding: 16px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;

  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  animation: scaleIn 0.25s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes scaleIn {
  from { transform: scale(0.95); opacity: 0; }
  to   { transform: scale(1);    opacity: 1; }
}
</style>
