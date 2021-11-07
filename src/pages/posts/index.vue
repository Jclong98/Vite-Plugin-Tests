<script setup lang="ts">
import { $fetch } from 'ohmyfetch'
import { Post } from '@/types'

const posts = ref<Post[]>([])

const getPosts = async () => {
  posts.value = await $fetch('https://jsonplaceholder.typicode.com/posts')
}

onMounted(getPosts)
</script>
<template>
  <div>
    <h1 class="text-size-4xl">Posts</h1>
    <router-link
      v-for="post in posts"
      :key="post.id"
      :to="`/posts/${post.id}`"
      class="
        inline-block
        border border-purple-500
        shadow-lg
        dark:(bg-gray-900
        border-gray-700)
        rounded
        my-3
        p-4
        bg-white
      "
    >
      <header class="flex justify-between gap-4 mb-5">
        <h2 class="text-size-xl">{{ post.title }}</h2>
        <div>
          <p
            class="
              opacity-75
              dark:text-purple-100
              flex
              items-center
              justify-center
              rounded-full
              w-8
              h-8
            "
          >
            #{{ post.id }}
          </p>
        </div>
      </header>
      <p>{{ post.body }}</p>
    </router-link>
  </div>
</template>
