<script setup lang="ts">
useHead({
  title: 'Home',
})
</script>

<template>
  <div>
    <h1 class="text-3xl text-center">This is the home page!</h1>

    <div>
      <router-link
        to="/about"
        class="mt-10 p-4 rounded-lg shadow-lg font-semibold dark:text-white dark:bg-blue-400 text-blue-800 bg-blue-300 focus:ring-3 ring-indigo-500 flex items-center justify-center hover:bg-blue-400 dark:hover:bg-blue-500"
      >
        Learn More About This Project
        <mdi-chevron-right class="ml-1" />
      </router-link>
    </div>
  </div>
</template>

<style>
</style>
