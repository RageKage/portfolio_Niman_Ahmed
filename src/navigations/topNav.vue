<template>
  <nav>
    <div class="flex items-center space-x-2">
      <a href="/">
        <h1 class="font-melodrama text-3xl text-iron-300 hover:text-iron-100">
          Niman Ahmed
        </h1>
      </a>
    </div>

    <ul
      class="flex items-center space-x-4 lg:space-x-8 xl:space-x-12 2xl:space-x-16 font-zodiak"
    >
      <li v-for="link in navLinks" :key="link.name">
        <router-link
          :to="link.path"
          class="text-iron-300 transition duration-300 ease-in-out"
        >
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useNavigation } from "../composables/useNavigation";

const { navLinks } = useNavigation();
</script>
