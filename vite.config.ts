import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsConfigPaths from "vite-tsconfig-paths";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsConfigPaths(),
    TanStackRouterVite(),
    react(),
    basicSsl({
      /** name of certification */
      name: "TEST",
      /** custom trust domains */
      domains: ["*.local.com"],
      /** custom certification directory */
      certDir: "./.ssl",
    }),
  ],
});
