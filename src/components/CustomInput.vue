<template>
  <div class="wrapper">
    <div>
      <span
        v-if="label"
        :class="{'label-error' : error}"
        class="label">
        {{ label }}
      </span>
    <input
      type="text"
      :class="{'input-error' : error}"
      :placeholder="placeholder"
      :value="model"
      @input="(e) => model = e.target.value"
    >
    </div>

    <span
      v-if="error"
      class="error-message">
      {{error}}
    </span>
  </div>
</template>

<script setup>
import {watch} from "vue";

const props = defineProps({
  placeholder: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: '',
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

.label {
  margin-bottom: 4px;
  padding-left: 4px;

  color: #808080;
  font-size: 12px;
}

.label.label-error {
  color: #e74c3c;
}

input.input-error {
  border-color: #e74c3c;
}

.error-message {
  color: #e74c3c;
  font-size: 12px;
  padding-left: 4px;
}
</style>
