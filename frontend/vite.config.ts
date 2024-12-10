import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  server: {
    proxy: {
      "/api": {
        target: "https://api.devfolio.co", // The actual API you are trying to reach
        changeOrigin: true,
        secure: false, // Set to false if you're working in a development environment with self-signed certificates
        rewrite: (path) => path.replace(/^\/api/, ""), // Rewriting /api to the API base path
      },
    },
  },
});
