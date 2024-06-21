// vitest.config.ts

import path from "path";

export default {
  test: {
    reporters: ["default", "html"],
    environment: "jsdom",
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};
