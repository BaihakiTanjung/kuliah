import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const users = ref([]);

  const getUsers = computed(() => users.value);

  function setUser(data) {
    users.value = data;
  }

  async function fetchUsers() {
    await fetch("http://127.0.0.1:8000/api/list-user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.code === 200) {
          setUser(json.data);
        } else {
          alert(json.message);
        }
      });
  }

  return { getUsers, fetchUsers };
});
