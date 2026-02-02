<template>
  <CustomModal
    :is-open="isOpen"
    @close="handleClose"
  >
    <template #header>
      <h2>Добавить пользователя</h2>
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
       <CustomButton
         variant="outline"
         @click="handleClose"
       >
         Отмена
       </CustomButton>
       <CustomButton
        @click="handleAccept"
       >
         Подтвердить
       </CustomButton>
     </div>
    </template>
  </CustomModal>
</template>

<script setup>
import CustomModal from "@/components/CustomModal.vue";
import CustomInput from "@/components/CustomInput.vue";
import CustomButton from "@/components/CustomButton.vue";
import {reactive, ref} from "vue";

defineProps({
  isOpen: Boolean,
})

const emit = defineEmits(['close', 'accept']);

const user = reactive({
  name: null,
  surname: null,
  stage: null,
  age: null,
  address: null,
});

const errors = ref({})

const validateError = () => {
  const newErrors = {};

  if (!user.name) newErrors.name = 'Введите имя';
  if (!user.surname) newErrors.surname = 'Введите фамилию';
  if (!user.stage) newErrors.stage = 'Введите стаж';
  if (!user.age) {
    newErrors.age = 'Введите возраст';
  } else if (!/^\d+$/.test(user.age)) {
    newErrors.age = 'Только цифры';
  }
  if (!user.address) newErrors.address = 'Введите адрес';

  errors.value = newErrors;
  return Object.keys(newErrors).length === 0;
}

const resetForm = () => {
  user.name = null;
  user.surname = null;
  user.stage = null;
  user.age = null;
  user.address = null;
  errors.value = {};
}

const handleClose = () => {
  emit("close");
  resetForm();
}

const handleAccept = () => {
  if (!validateError()) {
  } else {
    emit("accept", user);
    resetForm();
    emit('close')
  }
}
</script>

<style scoped>
.button-area {
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 8px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
}
</style>
