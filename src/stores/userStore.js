import { defineStore } from "pinia";
import { ref } from "vue";

const useUserStore = defineStore('userStore', () => {
  const users = ref({
    1: {
      name: "Игорь",
      surname: "Тарасов",
      stage: "Инженер",
      age: 25,
      address: "Москва, пр. Победы, д.21"
    },
    2: {
      name: "Женя",
      surname: "Тарасова",
      stage: "Дизайнер",
      age: 24,
      address: "Москва, пр. Победы, д.21"
    },
  });

  const addUser = ({ name, surname, stage, age, address }) => {
    const newId = Math.max(...Object.keys(users.value).map(Number), 0) + 1;

    users.value[newId] = {
      name: name?.trim() || '',
      surname: surname?.trim() || '',
      stage: stage?.trim() || '',
      age: age ? Number(age) : null,
      address: address?.trim() || ''
    };

    return newId;
  };

  const editUser = (id, userData) => {
    if (!users.value[id]) return false;

    users.value[id] = {
      ...users.value[id],
      ...userData,
      age: userData.age !== undefined ? Number(userData.age) : users.value[id].age
    };

    return true;
  };

  const deleteUser = (id) => {
    if (!users.value[id]) return false;
    delete users.value[id];
    return true;
  };

  return {
    users,
    addUser,
    editUser,
    deleteUser
  };
});

export default useUserStore;
