<template>
  <CustomModal :is-open="isOpen" @close="handleClose">
    <template #header>
      <h2>Редактирование данных</h2>
    </template>

    <template #content>
      <form>
        <CustomInput v-model="user.name" placeholder="Имя:" />
        <CustomInput v-model="user.surname" placeholder="Фамилия:" />
        <CustomInput v-model="user.stage" placeholder="Стаж:" />
        <CustomInput v-model="user.age" placeholder="Возраст:" />
        <CustomInput v-model="user.address" placeholder="Адрес:" />
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
import {computed} from 'vue'
import CustomModal from "@/components/CustomModal.vue"
import CustomInput from "@/components/CustomInput.vue"
import CustomButton from "@/components/CustomButton.vue"

const props = defineProps({
  isOpen: Boolean,
  userData: Object
})

const emit = defineEmits(['close', 'edit', 'delete'])

const user = computed(() => props.userData)

const handleClose = () => {
  emit('close')
}

const handleAccept = () => {
  emit('edit', user.value)
  emit('close')
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
