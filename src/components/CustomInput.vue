<template>
  <div class="wrapper">
    <input
      type="text"
      :placeholder="placeholder"
      :value="model"
      @input="(e) => model = e.target.value"
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
  placeholder: {
    type: String,
    default: 'Введите значение...'
  },
  error: {
    type: String,
    default: ''
  }
});

const model = defineModel();
</script>

<style scoped>
.wrapper {
  width: 100%;
}

input {
  width: 100%;
  box-sizing: border-box;

  padding: 8px 12px;

  outline: none;
  border-radius: 8px;
  border: 2px solid #b1b1b1;

  transition: all 0.2s ease;
}

input:focus {
  box-shadow: 0 4px 8px #cdcdcd;
  border-color: #808080;
  transition: all 0.2s ease;
}
</style>
