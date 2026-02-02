<template>
  <div class="button-section">
    <CustomButton
      @click="openAddForm"
    >
      Добавить
    </CustomButton>
  </div>
  <CustomTable
    :heads="['Имя', 'Фамилия', 'Стаж', 'Возраст', 'Адрес']"
    :data="users"
    @select-bar="openEditForm"
  />
  <AddUserForm
    :is-open="showAddForm"
    @close="closeAddForm"
    @accept="addUser"
  />
  <EditUserForm
    :is-open="showEditForm"
    :user-data="selectedUser"
    @close="closeEditForm"
    @edit="editUser"
    @delete="deleteUser"
  />
</template>

<script setup>
import useUserStore from "@/stores/userStore.js"
import CustomTable from "@/components/CustomTable.vue"
import { computed, ref } from "vue"
import CustomButton from "@/components/CustomButton.vue"
import AddUserForm from "@/components/AddUserForm.vue"
import EditUserForm from "@/components/EditUserForm.vue"

const userStore = useUserStore()
const users = computed(() => userStore.users)

const selectedId = ref(null)
const selectedUser = ref(null)

const showAddForm = ref(false)
const showEditForm = ref(false)

const openAddForm = () => {
  showAddForm.value = true
}

const openEditForm = (index) => {
  selectedId.value = index
  selectedUser.value = { ...users.value[index] }
  showEditForm.value = true
}

const closeAddForm = () => {
  showAddForm.value = false
}

const closeEditForm = () => {
  showEditForm.value = false
  selectedUser.value = null
}

const addUser = (user) => {
  userStore.addUser(user)
}

const editUser = (updatedData) => {
  userStore.editUser(selectedId.value, updatedData)
}

const deleteUser = () => {
  if (selectedId.value === null) return
  userStore.deleteUser(selectedId.value)
}
</script>

<style scoped>
.button-section {
  margin-bottom: 16px;
}
</style>
