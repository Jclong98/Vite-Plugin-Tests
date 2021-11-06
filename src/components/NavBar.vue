<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)

const links = ref([
  {
    to: '/posts',
    text: 'Posts',
  },
  {
    to: '/about',
    text: 'About',
  },
])
</script>

<template>
  <nav class="p-4 text-purple-900 bg-purple-300 dark:text-purple-100 dark:bg-purple-600">
    <div class="max-w-prose mx-auto flex flex-col items-center gap-2 sm:flex-row">
      <router-link class="text-xl py-1 rounded-xl font-semibold" to="/">Vite Plugins Test</router-link>
      <div class="flex items-center flex-1 gap-1 sm:justify-end">
        <router-link
          class="px-2 py-1 rounded-xl font-semibold nav-link"
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
        >{{ link.text }}</router-link>
        <a
          href="https://github.com/Jclong98/Vite-Plugin-Tests"
          class="ml-2 p-2 w-8 h-8 flex items-center justify-center rounded-full font-semibold"
        >
          <mdi-github />
        </a>
        <button
          class="ml-2 p-2 w-8 h-8 flex items-center justify-center rounded-full font-semibold"
          @click="toggleDark()"
        >
          <mdi-white-balance-sunny v-if="isDark" />
          <mdi-weather-night v-else />
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link.router-link-active {
  @apply "underline underline-3 underline-purple-800 dark:underline-purple-200";
}
</style>
