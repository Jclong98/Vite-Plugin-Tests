<script setup lang="ts">
import { $fetch } from 'ohmyfetch'
import { User, Post } from '@/types'

const route = useRoute()
const { id } = route.params

const post = ref<Post>({
  id: -1,
  userId: -1,
  title: '',
  body: '',
})

const user = ref<User>({} as User)

const get = async () => {
  post.value = await $fetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  )

  user.value = await $fetch<User>(
    `https://jsonplaceholder.typicode.com/users/${post.value.userId}`
  )
}

onMounted(() => {
  get()
})
</script>

<template>
  <div class="mx-auto w-prose">
    <h1 class="text-size-4xl">{{ post.title }}</h1>

    <p class="my-4">
      Author: <span class="font-bold">{{ user.name }}</span>
    </p>

    <p>{{ post.body }}</p>
  </div>
</template>
