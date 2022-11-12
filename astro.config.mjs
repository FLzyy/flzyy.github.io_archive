import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import compress from "astro-compress";

export default defineConfig({
  site: 'https://flzyy.github.io/',
  integrations: [tailwind(), prefetch(), compress({
    css: false,
  })]
});