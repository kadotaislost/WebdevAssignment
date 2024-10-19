import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Main index.html
        page1: resolve(__dirname, "self-assessment/index.html"), // Custom index.html in folder1
        page2: resolve(__dirname, "self-assessment/test/index.html"), // Custom index.html in folder1
        page3: resolve(__dirname, "resource-library/index.html"), // Custom index.html in folder2
        testJs: resolve(__dirname, "self-assessment/test/test.js"), // Add this line
        resourceJs: resolve(__dirname, "resource-library/resource.js"), // Add this line
      },
    },
  },
});
