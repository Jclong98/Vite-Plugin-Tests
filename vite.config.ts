import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

const markdownWrapperClasses = 'prose prose-sm m-auto text-left'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Vite-Plugin-Tests/',
  resolve: {
    alias: {
      '@/*': path.resolve(__dirname, './src/*'),
    },
  },
  server: {
    fs: {
      strict: true,
    },
  },
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    Pages(),
    WindiCSS({
      safelist: markdownWrapperClasses,
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        // 'vue-i18n',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      extensions: ['vue'],

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/],

      resolvers: [IconsResolver({ componentPrefix: '' })],
      dts: 'src/components.d.ts',
    }),
    Icons({
      autoInstall: true,
    }),
  ],
})
