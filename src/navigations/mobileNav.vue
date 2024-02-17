<template>
  <div>
    <div class="flex items-center space-x-2">
      <a href="/">
        <h1 class="font-melodrama text-3xl text-iron-300 hover:text-iron-100">
          Niman Ahmed
        </h1>
      </a>
    </div>

    <div class="relative" ref="menuContainer">
      <button
        @click="showLinks = !showLinks"
        class="text-iron-300 focus:outline-none focus:ring-2 focus:ring-iron-300 focus:ring-offset-2 focus:ring-offset-iron-300 transition duration-300 ease-in-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </button>
      <nav
        v-show="showLinks"
        class="absolute right-0 z-50 top-full mt-2 w-64 p-4 bg-danube-700 transition duration-300 ease-in-out"
        ref="menu"
        id="menu"
      >
        <ul
          class="flex flex-col space-y-4 text-iron-300 font-melodrama text-2xl transition duration-300 ease-in-out"
        >
          <li v-for="link in navLinks" :key="link.name" class="text-right">
            <router-link
              :to="link.path"
              class="transition duration-300 ease-in-out"
              @click="showLinks = false"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useNavigation } from "../composables/useNavigation";

const { navLinks } = useNavigation();
let showLinks = ref(false);
let menuContainer = ref(null);

onMounted(() => {
  window.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("click", handleClickOutside);
});

const handleClickOutside = (event) => {
  if (
    showLinks.value &&
    !menuContainer.value.contains(event.target) &&
    event.target.id !== "menu"
  ) {
    console.log("clicked outside");
    showLinks.value = false;
  }
};
</script>
