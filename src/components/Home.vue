<template>
  <div>
    <section
      class="w-full h-screen grid grid-cols-1 md:grid-cols-2 items-center"
    >
      <div
        class="flex justify-center md:justify-start px-4 text-center md:text-left m-4 md:m-0"
      >
        <div class="space-y-6">
          <h1 class="font-bold text-5xl text-iron-800 font-zodiak" id="myName">
            Hello, I'm
            <span class="text-iron-600 font-melodrama">Niman</span>
          </h1>
          <p class="text-iron-700 font-zodiak text-base" id="intro">
            I'm a programmer from Minneapolis. Skilled in
            <span
              class="font-semibold underline decoration-iron-600 decoration-2"
              >Python</span
            >,
            <span
              class="font-semibold underline decoration-iron-500 decoration-2"
              >Java</span
            >, and
            <span
              class="font-semibold underline decoration-iron-500 decoration-2"
              >Vue 3</span
            >. Always eager to learn, innovate, and contribute to the coding
            community.
          </p>
        </div>
      </div>

      <div class="flex justify-center items-center m-4 md:m-0">
        <img
          :src="photo_me"
          alt="my photo"
          class="w-full md:w-3/4 h-auto object-cover rounded-r-full rounded-l-full rounded-t-3xl rounded-b-full shadow-lg transition-all duration-300 ease-in-out"
        />
      </div>
    </section>

    <!-- about me section -->
    <section class="w-full h-screen flex items-center text-iron-800 p-8">
      <div class="max-w-4xl mx-auto space-y-4 font-zodiak">
        <h2
          class="text-4xl font-bold text-iron-400 border-b-2 border-iron-300 pb-3 font-melodrama"
        >
          About Me
        </h2>
        <p class="text-lg text-iron-600">
          My passion was ignited in middle school, setting the trajectory for my
          career aspirations to become a software developer. While honing my
          technical skills, I maintain a strong commitment to community service,
          always eager to make a positive impact and ensuring that every
          interaction leaves a lasting, favorable impression.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import photo_me from "@/assets/my_Photo.jpg";
import { gsap } from "gsap";
import SplitType from "split-type";

onMounted(() => {
  // myname split aniamtion
  let nameSplit = new SplitType("#myName", {
    types: "lines, words, chars",
    tagName: "span",
  });

  // intro split animation
  const intro = new SplitType("#intro", {
    types: "lines, words, chars",
    tagName: "span",
  });

  // timeline for the split animation
  const tl = gsap.timeline();

  // animation for the name split
  tl.from(nameSplit.chars, {
    y: "100%",
    opacity: 0,
    duration: 0.5,
    ease: "back.out(1.7)",
    stagger: 0.2,
  });

  // animation for the intro split
  tl.from(
    intro.chars,
    {
      duration: 0.5,
      opacity: 0,
      y: 20,
      ease: "back.out(1.7)",
      stagger: 0.2,
    },
    "-=0.25"
  );
});
</script>
