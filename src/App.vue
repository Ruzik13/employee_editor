<template>
  <CustomTable
    :heads="['Имя', 'Фамилия', 'Стаж', 'Возраст', 'Адрес']"
    :data="users"
    @select-bar="(index) => console.log(index)"
  />
  <CustomButton @click="userStore.addUser({name:'Игорь', surname: 'Бутусов', stage: 'd', age: 21, address: 'a'})">
    Добавить
  </CustomButton>
  <CustomModal
    :is-open="showModal"
    @click-outside="closeModal"
  >
  </CustomModal>
  <custom-input
    label="Имя:"
    placeholder="Введите имя:"
  ></custom-input>
</template>

<script setup>
import useUserStore from "@/stores/userStore.js";
import CustomTable from "@/components/CustomTable.vue";
import CustomModal from "@/components/CustomModal.vue";
import {computed, ref} from "vue";
import CustomButton from "@/components/CustomButton.vue";
import CustomInput from "@/components/CustomInput.vue";

const userStore = useUserStore();
const users = computed(() => userStore.users)

const showModal = ref(true);

const closeModal = () => {
  showModal.value = false;
}
</script>

<style scoped></style>
