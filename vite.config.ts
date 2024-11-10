import { vitePlugin as remix } from '@remix-run/dev'
import { installGlobals } from '@remix-run/node'
import path from 'node:path'
import { defineConfig } from 'vite'

installGlobals()

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_lazyRouteDiscovery: true,
        v3_relativeSplatPath: true,
        v3_singleFetch: true,
        v3_throwAbortReason: true
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app')
    }
  }
})
