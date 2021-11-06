<script setup lang="ts">
const clickCount = ref(0)
</script>

<template>
  <button
    class="
      p-4
      rounded-lg
      shadow-lg
      font-semibold
      dark:text-white dark:bg-blue-400
      text-blue-800
      bg-blue-300
      focus:ring-3
      ring-indigo-500
    "
    @click="clickCount++"
  >
    You've clicked this button {{ clickCount }} times!
  </button>
</template>

<style></style>
