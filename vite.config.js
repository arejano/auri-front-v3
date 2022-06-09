import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@assets": resolve(__dirname, "src/asses"),
      "@domain": resolve(__dirname, "src/domain"),
      "@components": resolve(__dirname, "src/components"),
      "@middlewares": resolve(__dirname, "src/middlewares"),
      "@core": resolve(__dirname, "src/services/core"),
      "@icons": resolve(__dirname, "src/components/icons"),
      "@router": resolve(__dirname, "src/router"),
      "@services": resolve(__dirname, "src/services"),
      "@utils": resolve(__dirname, "src/utils"),
      "@views": resolve(__dirname, "src/views"),
    },
  },
  server: {
    open: true,
  },
});
