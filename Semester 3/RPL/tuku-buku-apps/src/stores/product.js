import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", () => {
  const products = ref([
    {
      id: 1,
      title: "The Hunger Games",
      description: "The Hunger",
      price: 100000,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zt3J9ZQWL._SX331_BO1,204,203,200_.jpg",
    },
    {
      id: 1,
      title: "The Hunger Games",
      description: "The Hunger",
      price: 100000,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zt3J9ZQWL._SX331_BO1,204,203,200_.jpg",
    },
    {
      id: 1,
      title: "The Hunger Games",
      description: "The Hunger",
      price: 100000,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zt3J9ZQWL._SX331_BO1,204,203,200_.jpg",
    },
    {
      id: 1,
      title: "The Hunger Games",
      description: "The Hunger",
      price: 100000,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zt3J9ZQWL._SX331_BO1,204,203,200_.jpg",
    },
    {
      id: 1,
      title: "The Hunger Games",
      description: "The Hunger",
      price: 100000,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zt3J9ZQWL._SX331_BO1,204,203,200_.jpg",
    },
    {
      id: 1,
      title: "The Hunger Games",
      description: "The Hunger",
      price: 100000,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zt3J9ZQWL._SX331_BO1,204,203,200_.jpg",
    },
    {
      id: 1,
      title: "The Hunger Games",
      description: "The Hunger",
      price: 100000,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zt3J9ZQWL._SX331_BO1,204,203,200_.jpg",
    },
    {
      id: 1,
      title: "The Hunger Games",
      description: "The Hunger",
      price: 100000,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zt3J9ZQWL._SX331_BO1,204,203,200_.jpg",
    },
    {
      id: 1,
      title: "The Hunger Games",
      description: "The Hunger",
      price: 100000,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zt3J9ZQWL._SX331_BO1,204,203,200_.jpg",
    },
    {
      id: 1,
      title: "The Hunger Games",
      description: "The Hunger",
      price: 100000,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zt3J9ZQWL._SX331_BO1,204,203,200_.jpg",
    },
  ]);

  const getProducts = computed(() => products.value);

  function setProducts(data) {
    products.value = data;
  }

  return { products, getProducts, setProducts };
});
