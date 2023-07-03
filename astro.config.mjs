import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://fywk.xyz",
  compressHTML: true,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
