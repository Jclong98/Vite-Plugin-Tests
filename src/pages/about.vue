<script setup lang="ts">
useHead({
  title: 'About',
})
</script>

<template>
  <div class="w-prose mx-auto">
    <h1 class="text-3xl">This is the about page!</h1>
    <p class="my-5">
      This project is just a learning experience for me. A few notable things
      that I've learned while creating this project:
    </p>
    <ul class="list-circle pl-5">
      <li>
        Vite
        <ul class="list-circle pl-5">
          <li>deployment on Github Pages</li>
        </ul>
      </li>
      <li>Vue with TypeScript</li>
      <li>Vue script setup</li>
      <li>Vueuse</li>
      <li>
        How To use Vite Plugings
        <ul class="list-circle pl-5">
          <li>
            WindiCSS
            <ul>
              <li>Dark Mode</li>
            </ul>
          </li>
          <li>Pages</li>
          <li>Auto import</li>
        </ul>
      </li>
      <li>ohmyfetch</li>
    </ul>
  </div>
</template>

<style></style>
