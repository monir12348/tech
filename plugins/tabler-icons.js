import { defineNuxtPlugin } from "#app";
import * as TablerIcons from "@tabler/icons-vue";

export default defineNuxtPlugin((nuxtApp) => {
  // Register all icons globally (can increase bundle size)
  for (const [name, component] of Object.entries(TablerIcons)) {
    nuxtApp.vueApp.component(name, component);
  }
});
