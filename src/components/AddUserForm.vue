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
          placeholder="Имя:"
          v-model="user.name"
        />
        <CustomInput
          placeholder="Фамилия:"
          v-model="user.surname"
        />
        <CustomInput
          placeholder="Стаж:"
          v-model="user.stage"
        />
        <CustomInput
          placeholder="Возраст:"
          v-model="user.age"
        />
        <CustomInput
          placeholder="Адрес:"
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
import {reactive} from "vue";

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

const resetForm = () => {
  user.name = null;
  user.surname = null;
  user.stage = null;
  user.age = null;
  user.address = null;
}

const handleClose = () => {
  emit("close");
  resetForm();
}

const handleAccept = () => {
  emit("accept", user);
  resetForm();
  emit('close')
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
