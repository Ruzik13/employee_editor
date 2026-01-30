<template>
  <button class="button" :class="variant">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: v => ['default', 'outline', 'danger'].includes(v),
  },
})
</script>

<style scoped>
.button {
  padding: 8px 16px;

  font-weight: 500;
  cursor: pointer;

  border-radius: 6px;
  border: none;
  transition: 0.2s;
}

.button.default {
  background: #000000;
  color: #ffffff;
}

.button.default:hover {
  background: #303030;
}
.button.outline {
  background: transparent;
  border: 1px solid #6b7280;
}

.button.outline:hover {
  background: #f3f4f6;
}

.button.danger {
  background: #ef4444;
  color: white;
}

.button.danger:hover  {
  background: #dc2626;
}

</style>
