<template>
  <div class="wrapper">
    <label class>
      {{label}}
    </label>
    <input
      type="text"
      :placeholder="placeholder"
      @input="handleInput"
    >
  </div>

  <div
    v-if="error"
    class="error-message">
    {{error}}
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Введите значение...'
  },
  error: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue'])

const handleInput = (value) => {
  emit('update:modelValue', value)
}
</script>

<style scoped>
.wrapper {
  width: 100%;
}

label {
  padding:0 8px;

  font-size: 14px;
  font-weight: lighter;
}

input {
  width: 100%;

  padding: 8px 12px;

  outline: none;
  border-radius: 8px;
  border: 2px solid #b1b1b1;

  transition: all 0.2s ease;
}



</style>
