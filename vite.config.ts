import { readdirSync } from 'node:fs'
import { basename, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'

const rootDir = fileURLToPath(new URL('.', import.meta.url))
const srcDir = resolve(rootDir, 'src')
const iconsDir = resolve(srcDir, 'icons')

const iconEntries = Object.fromEntries(
  readdirSync(iconsDir)
    .filter((file) => file.endsWith('.vue'))
    .map((file) => [`icons/${basename(file, '.vue')}`, resolve(iconsDir, file)]),
)

export default defineConfig({
  plugins: [
    vue(),
    dts({
      cleanVueFileName: true,
      include: ['src'],
      insertTypesEntry: true,
    }),
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: {
        index: resolve(srcDir, 'index.ts'),
        ...iconEntries,
      },
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
      },
    },
    sourcemap: true,
    target: 'es2018',
  },
})
