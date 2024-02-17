<template>
  <div id="app">
    <mainNav />
    <transition name="fade">
      <router-view
        v-slot="{ Component }"
        class="mx-auto w-full p-2 max-w-full sm:max-w-[1700px] px-0 sm:px-4 py-4 scroll overflow-x-hidden"
      >
        <component :is="Component" />
      </router-view>
    </transition>

    <div
      :class="[
        'g-cursor',
        { 'g-cursor_hover': hover },
        { 'g-cursor_hide': hideCursor },
      ]"
    >
      <div :style="cursorCircle" class="g-cursor__circle"></div>
      <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { onBeforeMount, onBeforeUnmount, watchEffect } from "vue";

import mainNav from "./navigations/main.vue";
import Footer from "./navigations/footer.vue";

let xChild = ref(0);
let yChild = ref(0);
let xParent = ref(0);
let yParent = ref(0);
let hover = ref(false);
let hideCursor = ref(true);

let cursorCircle = computed(
  () =>
    `transform: translateX(${xParent.value}px) translateY(${yParent.value}px) translateZ(0) translate3d(0, 0, 0);`
);
let cursorPoint = computed(
  () =>
    `transform: translateX(${xChild.value - 3}px) translateY(${
      yChild.value - 3
    }px) translateZ(0) translate3d(0, 0, 0);`
);

const moveCursor = (e) => {
  xChild.value = e.clientX;
  yChild.value = e.clientY;
  setTimeout(() => {
    xParent.value = e.clientX - 15;
    yParent.value = e.clientY - 15;
  }, 100);
};

onMounted(() => {
  document.addEventListener("mousemove", moveCursor);
  document.addEventListener("mouseleave", (e) => {
    hideCursor.value = true;
  });
  document.addEventListener("mouseenter", (e) => {
    hideCursor.value = false;
  });
});

let unwatch;

onBeforeMount(() => {
  unwatch = watchEffect(() => {
    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", (e) => {
      hideCursor.value = true;
    });
    document.addEventListener("mouseenter", (e) => {
      hideCursor.value = false;
    });
  });
});

onBeforeUnmount(() => {
  document.removeEventListener("mousemove", moveCursor);
  document.removeEventListener("mouseleave", (e) => {
    hideCursor.value = true;
  });
  document.removeEventListener("mouseenter", (e) => {
    hideCursor.value = false;
  });
  unwatch();
});
</script>

<style lang="scss">
body,
html {
  background-color: #1e1e1e;
  cursor: none;
}
/* page transition fade  */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

button,
a {
  cursor: none;
}
.g-cursor {
  &_hide {
    opacity: 0;
    width: 60px;
    height: 60px;
    transition:
      width 0.6s ease,
      height 0.6s ease,
      opacity 0.6s ease;
  }

  &__circle {
    pointer-events: none;
    user-select: none;
    top: 0;
    left: 0;
    position: fixed;
    width: 30px;
    height: 30px;
    border: 2px solid #fff;
    border-radius: 100%;
    z-index: 5555;
    backface-visibility: hidden;
    transition: opacity 0.6s ease;
  }

  &__point {
    top: 0;
    left: 0;
    position: fixed;
    width: 10px;
    height: 10px;
    pointer-events: none;
    user-select: none;
    border-radius: 100%;
    background: #fff;
    z-index: 55555555;
    backface-visibility: hidden;
    will-change: transform;
  }

  &_hover {
    .g-cursor__circle {
      opacity: 0;
      width: 60px;
      height: 60px;
      transition:
        width 0.6s ease,
        height 0.6s ease,
        opacity 0.6s ease;
    }
  }
}
</style>