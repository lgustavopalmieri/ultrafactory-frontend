import path from "path"
import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import { nodePolyfills } from "vite-plugin-node-polyfills"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      protocolImports: false,
    }),
  ],
  server: {
    port: 5173,
    host: "0.0.0.0",
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Certifique-se de que todos os caminhos relativos estejam corretos
        // durante o processo de build
        manualChunks: undefined,
      },
    },
  },
  // test: {
  //   globals: true,
  //   environment: "jsdom",
  //   setupFiles: "src/setupTests",
  //   mockReset: true,
  // },
})
