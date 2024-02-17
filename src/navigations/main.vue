<template>
  <div class="sticky top-0 z-10 p-2">
    <div class="flex justify-between items-center">
      <topNav
        v-show="isLargeScreen"
        class="w-full flex justify-between items-center"
      />
      <mobileNav
        v-show="!isLargeScreen"
        class="w-full flex justify-between items-center"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import topNav from "./topNav.vue";
import mobileNav from "./mobileNav.vue";

let isLargeScreen = ref(window.innerWidth > 768);

onMounted(() => {
  window.addEventListener("resize", updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScreenSize);
});

function updateScreenSize() {
  isLargeScreen.value = window.innerWidth > 768;
}
</script>
