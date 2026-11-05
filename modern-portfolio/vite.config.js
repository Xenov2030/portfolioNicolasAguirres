import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { services } from "./src/data/services.js";

export default defineConfig({
  appType: "mpa",
  plugins: [
    react(),
    {
      name: "service-pages-development",
      // Development only: serve the source shell at the two known service URLs.
      // Production/preview use the actual generated directories; unknown URLs are 404.
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          const [path, query] = (req.url || "").split("?");
          if (services.some((service) => service.path === path)) {
            req.url = "/index.html" + (query ? `?${query}` : "");
          }
          next();
        });
      },
    },
  ],
});
