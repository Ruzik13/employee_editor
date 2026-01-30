<template>
  <CustomTable
    :heads="['Имя', 'Фамилия', 'Стаж', 'Возраст', 'Адрес']"
    :data="users"
    @select-bar="(index) => console.log(index)"
  />
  <button @click="userStore.addUser({name:'Игорь', surname: 'Бутусов', stage: 'd', age: 21, address: 'a'})"></button>
</template>

<script setup>
import useUserStore from "@/stores/userStore.js";
import CustomTable from "@/components/CustomTable.vue";

const userStore = useUserStore();

const users = userStore.users;
</script>

<style scoped></style>
