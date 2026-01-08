import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  root: "src",
  publicDir: "../assets",
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
      context: {
        provider_count: "{{provider_count}}",
        top_regions: "{{top_regions}}",
      },
    }),
  ],
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        contractServices: resolve(__dirname, "src/pages/contract-services/index.html"),
      },
    },
  },
  server: {
    open: "/pages/contract-services/index.html",
  },
});
