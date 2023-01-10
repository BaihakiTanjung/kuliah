import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const usePaymentStore = defineStore("payment", () => {
  const payments = ref([]);

  const getPayments = computed(() => payments.value);

  function setPayments(data) {
    payments.value = data;
  }

  async function fetchPayments() {
    await fetch("http://127.0.0.1:8000/api/payment", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.code === 200) {
          setPayments(json.data);
        } else {
          alert(json.message);
        }
      });
  }

  return { getPayments, fetchPayments };
});
