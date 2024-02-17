<template>
  <section class="py-12 text-iron-300 font-zodiak">
    <section
      class="w-full h-screen flex items-center justify-center p-8 flex-col"
    >
      <h1
        class="text-5xl font-bold pb-3 font-melodrama border-b-4 border-copperfield-400"
      >
        Projects
      </h1>
      <div
        class="space-y-6 font-zodiak flex flex-col items-center justify-center text-sm sm:text-sm md:text-md lg:text-lg"
      >
        <p>
          Here are some of the projects I have worked on. Click on the project
          to view the source code.
        </p>
      </div>
    </section>
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Projects -->
        <div class="shadow-lg" v-for="project in projects" :key="project.id">
          <div class="p-6">
            <h3 class="text-2xl font-bold pb-3 font-melodrama">
              {{ project.name }}
            </h3>
            <p class="mb-4">
              {{ project.description }}
            </p>
            <div class="flex justify-between">
              <a
                target="_blank"
                class="text-danube-500 hover:underline"
                v-if="project.liveDemoLink"
                :href="project.liveDemoLink"
                >View Live</a
              >
              <a
                target="_blank"
                class="text-danube-500 hover:underline "
                v-if="project.liveDemoLink"
                :href="project.githubLink"
                >View Source</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useProjects } from "../composables/project";

const { projects } = useProjects();
</script>
