<script setup>
import Topbar from "~/views/layouts/header/Topbar.vue";
import FooterComponent from "~/views/layouts/footer/FooterComponent.vue";
import Navbar from "~/views/layouts/header/navbar/Navbar.vue";
import MobileNav from "~/views/layouts/header/navbar/navbar_components/MobileNav.vue";
</script>

<template>
  <Topbar class="hidden md:block" />
    <Navbar class="hidden md:block"  />
    <MobileNav class="xl:hidden"  />
    <main>
    <slot />
  </main>
  <FooterComponent />
</template>
