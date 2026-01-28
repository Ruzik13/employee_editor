<template>
  <div v-for="({name, age}) in users" >
    <p>{{name}}</p>
    <p>{{age}}</p>
  </div>
</template>

<script setup>
import useUserStore from "@/stores/userStore.js";

const userStore = useUserStore();

const users = userStore.users;
</script>

<style scoped></style>
