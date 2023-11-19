import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    // 一些自己关于这些的理解
    /*
    resolvers表示要解决自动导入问题的resolver
    components表示用于自动解压的resolver
    */
  AutoImport({
    resolvers:[ElementPlusResolver()]
  }),
Components({resolvers:[ElementPlusResolver()]})],
})
