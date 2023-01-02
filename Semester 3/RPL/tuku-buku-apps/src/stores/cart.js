import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([
    {
      id: 1,
      title: "The Hunger Games",
      description: "The Hunger",
      price: 100000,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zt3J9ZQWL._SX331_BO1,204,203,200_.jpg",
    },
    {
      id: 2,
      title: "The Hunger Games",
      description: "The Hunger",
      price: 100000,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zt3J9ZQWL._SX331_BO1,204,203,200_.jpg",
    },
  ]);

  const getCart = computed(() => cart.value);
  const priceTotal = computed(() => {
    let sum = 0;
    cart.value.forEach((item) => {
      sum += item.price;
    });
    return sum;
  });

  function addToCart(book) {
    cart.value.push(book);
  }

  function removeFromCart(book) {
    cart.value = cart.value.filter((item) => item.id !== book.id);
  }

  function clearCart() {
    cart.value = [];
  }

  return { cart, getCart, priceTotal, addToCart, removeFromCart, clearCart };
});
