<template>
  <CustomButton @click="openAddForm">
    Добавить
  </CustomButton>
  <CustomTable
    :heads="['Имя', 'Фамилия', 'Стаж', 'Возраст', 'Адрес']"
    :data="users"
    @select-bar="(index) => console.log(index)"
  />
  <AddUserForm
    :is-open="showAddForm"
    @close="closeAddForm"
    @accept="(user) => addUser(user)"
  />
</template>

<script setup>
import useUserStore from "@/stores/userStore.js";
import CustomTable from "@/components/CustomTable.vue";
import CustomModal from "@/components/CustomModal.vue";
import {computed, ref} from "vue";
import CustomButton from "@/components/CustomButton.vue";
import CustomInput from "@/components/CustomInput.vue";
import AddUserForm from "@/components/AddUserForm.vue";

const userStore = useUserStore();
const users = computed(() => userStore.users)

const showAddForm = ref(true);

const openAddForm = () => {
  showAddForm.value = true;
}

const closeAddForm = () => {
  showAddForm.value = false;
}

const addUser = (user) => {
  userStore.addUser(user);
  showAddForm.value = false;
}
</script>

<style scoped></style>
