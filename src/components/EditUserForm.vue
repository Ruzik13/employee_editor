<template>
  <CustomModal :is-open="isOpen" @close="handleClose">
    <template #header>
      <h2>Редактирование данных</h2>
    </template>

    <template #content>
      <form>
        <CustomInput
          label="Имя:"
          :error="errors.name"
          v-model="user.name"
        />
        <CustomInput
          label="Фамилия:"
          :error="errors.surname"
          v-model="user.surname"
        />
        <CustomInput
          label="Стаж:"
          :error="errors.stage"
          v-model="user.stage"
        />
        <CustomInput
          label="Возраст:"
          :error="errors.age"
          v-model="user.age"
        />
        <CustomInput
          label="Адрес:"
          :error="errors.address"
          v-model="user.address"
        />
      </form>

      <div class="button-area">
        <CustomButton variant="danger" @click="handleDelete">
          Удалить
        </CustomButton>

        <div class="button-group">
          <CustomButton variant="outline" @click="handleClose">
            Отмена
          </CustomButton>
          <CustomButton @click="handleAccept">
            Подтвердить
          </CustomButton>
        </div>
      </div>
    </template>
  </CustomModal>
</template>

<script setup>
import {computed, ref, watch} from 'vue'
import CustomModal from "@/components/CustomModal.vue"
import CustomInput from "@/components/CustomInput.vue"
import CustomButton from "@/components/CustomButton.vue"

const props = defineProps({
  isOpen: Boolean,
  userData: Object
})

const emit = defineEmits(['close', 'edit', 'delete'])

const user = ref(null);

watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen && props.userData) {
      user.value = { ...props.userData }   // глубокая копия
      errors.value = {}
    }
  },
  { immediate: true }
)

const errors = ref({})

const validateError = () => {
  const newErrors = {};

  if (!user.value.name) newErrors.name = 'Введите имя';
  if (!user.value.surname) newErrors.surname = 'Введите фамилию';
  if (!user.value.stage) newErrors.stage = 'Введите стаж';
  if (!user.value.age) {
    newErrors.age = 'Введите возраст';
  } else if (!/^\d+$/.test(user.value.age)) {
    newErrors.age = 'Только цифры';
  }
  if (!user.value.address) newErrors.address = 'Введите адрес';

  errors.value = newErrors;
  return Object.keys(newErrors).length === 0;
}

const resetForm = () => {
  user.value.name = null;
  user.value.surname = null;
  user.value.stage = null;
  user.value.age = null;
  user.value.address = null;
  errors.value = {};
}

const handleClose = () => {
  emit('close');
  resetForm();
}

const handleAccept = () => {
  if (!validateError()) {
  } else {
    emit("edit", {...user.value});
    resetForm();
    emit('close')
  }
}

const handleDelete = () => {
  emit('delete')
  emit('close')
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
}

.button-area {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.button-group {
  display: flex;
  gap: 8px;
}
</style>
