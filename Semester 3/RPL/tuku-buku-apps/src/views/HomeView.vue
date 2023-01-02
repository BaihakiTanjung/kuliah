<script setup>

import { computed, reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useProductStore } from '@/stores/product'
import { useCartStore } from '@/stores/cart'

const authStore = useAuthStore()
const productStore = useProductStore()
const cartStore = useCartStore()

const isAuth = computed(() => authStore.isAuth)
const products = computed(() => productStore.products)
const carts = computed(() => cartStore.cart)
const priceTotal = computed(() => cartStore.priceTotal)

const currency = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0
})

const handleModalLogin = () => {
  const a = document.createElement('a')
  a.href = '#modal-login'
  a.click()
}

const formLogin = reactive({
  email: 'test@gmail.com',
  password: '12345678'
})


const handleModalRegister = () => {
  const a = document.createElement('a')
  a.href = '#modal-register'
  a.click()
}

const formRegister = reactive({
  email: 'test@gmail.com',
  password: '12345678',
  confirmPassword: '12345678'
})

const handleLogin = () => {
  const a = document.createElement('a')
  a.href = '#'
  a.click()

  localStorage.setItem('isAuth', 'true')
  authStore.login()
}

const handleRegister = () => {
  const a = document.createElement('a')
  a.href = '#'
  a.click()
}

const handleAddToCart = (product) => {
  cartStore.addToCart(product)
}

const handleRemoveFromCart = (product) => {
  cartStore.removeFromCart(product)
}

const handleLogout = () => {
  authStore.logout()
}

const handleCheckout = () => {
  const a = document.createElement('a')
  a.href = '#modal-checkout'
  a.click()
}

</script>

<template>

  <!-- Modal Login -->
  <div class="py-5 modal" id="modal-login">
    <div class="modal-box">
      <form @submit.prevent="handleLogin">
        <h3 class="mb-5 text-lg font-bold text-center">Login</h3>
        <div class="grid justify-center gap-3">
          <div class="email">
            <input type="email" v-model="formLogin.email" required placeholder="Type username"
              class="w-full max-w-xs input input-bordered input-primary" />
          </div>
          <div class="password">
            <input type="password" v-model="formLogin.password" required placeholder="Type password"
              class="w-full max-w-xs input input-bordered input-primary" />
          </div>
        </div>
        <div class="flex justify-center modal-action">
          <button type="submit" class="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
  <!-- End Modal Login -->

  <!-- Modal Register -->
  <div class="py-5 modal modal-small" id="modal-register">
    <div class="modal-box">
      <form @submit.prevent="handleRegister">
        <h3 class="mb-5 text-lg font-bold text-center">Register</h3>
        <div class="grid justify-center gap-3">
          <div class="email">
            <input type="email" v-model="formRegister.email" required placeholder="Type username"
              class="w-full max-w-xs input input-bordered input-primary" />
          </div>
          <div class="password">
            <input type="password" v-model="formRegister.password" required placeholder="Type password"
              class="w-full max-w-xs input input-bordered input-primary" />
          </div>
          <div class="confirm-password">
            <input type="password" v-model="formRegister.confirmPassword" required placeholder="Type confirm password"
              class="w-full max-w-xs input input-bordered input-primary" />
          </div>
        </div>
        <div class="flex justify-center modal-action">
          <button type="submit" class="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
  <!-- End Modal Regiter -->

  <!-- Modal Checkout -->
  <div class="py-5 modal modal-small" id="modal-checkout">
    <div class="modal-box">
      <form @submit.prevent="handleRegister">
        <h3 class="mb-5 text-lg font-bold text-center">Checkout</h3>
        <div class="grid justify-center gap-3">
          <div class="email">
            <input type="email" placeholder="Type username"
              class="w-full max-w-xs input input-bordered input-primary" />
          </div>
          <div class="password">
            <input type="password" placeholder="Type password"
              class="w-full max-w-xs input input-bordered input-primary" />
          </div>
          <div class="confirm-password">
            <input type="password" placeholder="Type confirm password"
              class="w-full max-w-xs input input-bordered input-primary" />
          </div>
        </div>
        <div class="flex justify-center modal-action">
          <button type="submit" class="btn btn-primary">Checkout</button>
        </div>
      </form>
    </div>
  </div>
  <!-- End Modal Checkout -->

  <!-- Navbar -->
  <div class="mt-5 rounded-lg navbar bg-base-300">
    <div class="flex-1">
      <a class="text-xl normal-case btn btn-ghost">TukuBuku.com</a>
    </div>
    <div class="flex-none">
      <div v-if="isAuth">
        <div class="mr-2 dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span class="badge badge-sm badge-primary indicator-item">{{ carts.length }}</span>
            </div>
          </label>
          <div tabindex="0" class="mt-3 shadow card card-compact dropdown-content w-52 bg-base-100">
            <div class="card-body">
              <span class="text-lg font-bold">{{ carts.length }} Items</span>
              <span class="text-info">Subtotal: {{ currency.format(priceTotal) || currency.format(0) }}</span>
              <div v-for="cart in carts" :key="cart.id">
                <div class="flex justify-between">
                  <div class="p-3">
                    <figure><img
                        src="https://www.aspirasionline.com/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-04-at-15.03.34.jpeg"
                        alt="Shoes" width="80" height="300" />
                    </figure>
                  </div>
                  <div class="px-5">{{ cart.title }}</div>
                </div>
                <button @click="handleRemoveFromCart(cart)" class="btn btn-xs btn-error btn-block">Remove</button>
              </div>
              <hr>
              <div class="card-actions">
                <button @click="handleCheckout" class="text-white btn btn-success btn-block">Checkout</button>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul tabindex="0" class="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li><a @click="handleLogout">Logout</a></li>
          </ul>
        </div>
      </div>
      <div v-else>
        <button @click="handleModalLogin" class="mr-3 bg-transparent border-none btn">Login</button>
        <button @click="handleModalRegister" class=" btn btn-primary">Register</button>
      </div>
    </div>
  </div>
  <!-- End Navbar -->

  <!-- Content -->
  <div class="grid grid-cols-2 my-3 md:my-7 md:grid-cols-4 md:gap-x-8 gap">
    <div v-for="product in products" :key="product.id" class="m-5 shadow-xl md:m-3 card card-compact bg-base-300">
      <div class="shadow-xl card card-compact bg-base-100">
        <div class="static">
          <figure><img
              src="https://www.aspirasionline.com/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-04-at-15.03.34.jpeg"
              alt="Shoes" />

          </figure>
          <div class="absolute top-1 left-1">
            <span class="badge badge-lg badge-primary">{{ currency.format(product.price) }}</span>
          </div>
        </div>
        <div class="card-body">
          <h2 class="card-title">{{ product.title }}</h2>
          <p>{{ product.description }}</p>
          <div class="justify-end card-actions">
            <button @click="handleAddToCart(product)" class="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer  -->
  <footer class="p-4 mb-5 rounded-lg bg-base-300 footer footer-center text-base-content">
    <div>
      <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
    </div>
  </footer>
  <!-- End Footer -->
</template>
