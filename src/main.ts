import { createApp } from 'vue'
import { createHead } from '@vueuse/head'

import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'

import App from './App.vue'

import 'virtual:windi.css'

// this tailwind starter really helped with setting up the router
// https://github.com/posva/vite-tailwind-starter/blob/master/src/main.js
const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
const head = createHead()

app.use(router)
app.use(head)

app.mount('#app')
