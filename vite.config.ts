import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import eslintPlugin from "vite-plugin-eslint";

const resolve = {
  alias: {
    "@": fileURLToPath(new URL("./src", import.meta.url)),
    "@modules": fileURLToPath(new URL("./src/modules", import.meta.url)),
    "@global-components": fileURLToPath(
      new URL("./src/global-components", import.meta.url)
    ),
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Passwordo/",
  css: {
    devSourcemap: true,
  },
  plugins: [vue(), eslintPlugin()],
  resolve,
});
