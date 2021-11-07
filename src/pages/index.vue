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
        to="/posts"
        class="
          mt-10
          p-4
          rounded-lg
          shadow-lg
          font-semibold
          hover:bg-blue-400
          dark:(text-white
          bg-blue-400
          hover:bg-blue-500)
          text-blue-800
          bg-blue-300
          focus:ring-3
          ring-indigo-500
          flex
          items-center
          justify-center
        "
      >
        See json placeholder posts
        <mdi-chevron-right class="ml-1" />
      </router-link>
      <router-link
        to="/about"
        class="
          flex
          justify-center
          items-center
          mt-5
          p-4
          rounded-lg
          font-semibold
          hover:underline
        "
      >
        Learn More About This Project
        <mdi-chevron-right class="ml-1" />
      </router-link>
    </div>
  </div>
</template>

<style></style>
