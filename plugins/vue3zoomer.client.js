// plugins/vue3zoomer.client.js

import { defineNuxtPlugin } from '#app';
import { Magnifier } from 'vue3-zoomer';


export default defineNuxtPlugin((nuxtApp) => {
  // Register the component globally
  nuxtApp.vueApp.component('Magnifier', Magnifier);
});
