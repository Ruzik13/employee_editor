import { defineStore } from "pinia";
import { ref } from "vue";

const useUserStore = defineStore('userStore', () => {
  const users = ref([{
      name: "Игорь",
      surname: "Тарасов",
      stage: "Инженер",
      age: 25,
      address: "Москва, пр. Победы, д.21"
    }, {
      name: "Женя",
      surname: "Тарасова",
      stage: "Дизайнер",
      age: 24,
      address: "Москва, пр. Победы, д.21"
    }
  ]);

  const addUser = ({ name, surname, stage, age, address }) => {
    users.value.push({
      name: name.trim(),
      surname: surname.trim(),
      stage: stage.trim(),
      age:Number(age),
      address: address.trim(),
    });

  };

  const editUser = (id, userData) => {
    users.value[id] = {
      ...users.value[id],
      ...userData,
    };
  };

  const deleteUser = (id) => {
    if (users.value[id]) {
      delete users.value[id];
    }
  };

  return {
    users,
    addUser,
    editUser,
    deleteUser
  };
});

export default useUserStore;
