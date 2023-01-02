import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const isAuth = ref(localStorage.getItem("isAuth") ? true : false);
  const getIsAuth = computed(() => isAuth.value);

  const login = () => {
    isAuth.value = true;
  };

  const logout = () => {
    isAuth.value = false;
    localStorage.removeItem("isAuth");
  };

  return { isAuth, getIsAuth, login, logout };
});
