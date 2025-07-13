import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  ssr: true,
  devtools: { enabled: false },
  link: [
    {
      rel: "stylesheet",
    },
  ],
  css: [
    "vuetify/styles",
    "@mdi/font/css/materialdesignicons.css",
    "@/assets/css/style.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  plugins: ["~/plugins/vuetify"],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    plugins: [tailwindcss()],
  },
});
