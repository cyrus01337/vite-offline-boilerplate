import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig(({ mode }) => ({
  build: {
    // https://stackoverflow.com/a/67031599/13334840
    assetsInlineLimit: 1e10,
  },
  clearScreen: false,
  experimental: {
    renderBuiltUrl: (filename) =>
      mode === "production" ? `./${filename}` : { relative: true },
  },
  plugins: [react(), viteSingleFile()],
  preview: {
    host: true,
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
  server: {
    host: true,
    port: 3000,
  },
}));
