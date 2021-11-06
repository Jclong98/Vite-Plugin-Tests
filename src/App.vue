<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar></NavBar>

  <main class="p-3">
    <router-view></router-view>
  </main>
</template>

<style>
html,
body,
#app {
  min-height: 100vh;
  @apply 'bg-gray-200 dark:bg-black dark:text-gray-100';
}
</style>
