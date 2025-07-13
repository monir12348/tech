<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { IconMenu2 } from "@tabler/icons-vue";

import ProductMenubar from "~/views/layouts/header/navbar/navbar_components/ProductMenubar.vue";
import CartMenu from "~/views/layouts/header/navbar/navbar_components/CartMenu.vue";
import Search from "~/views/layouts/header/navbar/navbar_components/Search.vue";
import CustomBuilder from "~/views/layouts/header/navbar/navbar_components/CustomBuilder.vue";
import ContainerComponent from "~/components/common/ContainerComponent.vue";
import MegaMenuComponent from "~/views/layouts/header/navbar/navbar_components/MegaMenuComponent.vue";

const drawer = ref(false);
const isVisible = ref(true);
let lastScrollY = 0;
let ticking = false;

const handleScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const currentY = window.scrollY;
      const scrollDifference = Math.abs(currentY - lastScrollY);
      
      // Always show navbar at the top
      if (currentY <= 50) {
        isVisible.value = true;
      } 
      // Hide when scrolling down past threshold with sufficient scroll distance
      else if (currentY > lastScrollY && currentY > 200 && scrollDifference > 8) {
        isVisible.value = false;
      } 
      // Show when scrolling up with sufficient scroll distance
      else if (currentY < lastScrollY && scrollDifference > 8) {
        isVisible.value = true;
      }

      lastScrollY = currentY;
      ticking = false;
    });
    
    ticking = true;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div
    class="sticky top-0 z-[99] bg-white d-none d-lg-block"
    :class="{
      'transform translate-y-0 opacity-100 transition-all duration-500 ease-out': isVisible,
      'transform -translate-y-full opacity-0 transition-all duration-300 ease-in pointer-events-none': !isVisible
    }"
  >
    <v-row class="pb-5 px-2 px-lg-0 mt-4 align-center">
      <v-col xl="1" lg="1" cols="2">
        <div class="side_menubar ms-lg-8">
          <IconMenu2 class="cursor-pointer" @click="drawer = !drawer" />
        </div>
      </v-col>

      <v-col xl="10" lg="10" cols="10" class="ps-0">
        <ContainerComponent>
          <v-row class="header-container">
            <v-col xl="9" lg="9" cols="12" class="ps-0">
              <div class="d-lg-flex d-block justify-center align-center gap-5">
                <div class="header-img">
                  <NuxtLink to="/">
                    <img
                      class="cursor-pointer"
                      src="../../../../assets/images/logo.png"
                      width="350"
                      alt="logo"
                    />
                  </NuxtLink>
                </div>
                <Search />
                <CustomBuilder />
              </div>
            </v-col>
            <v-col xl="3" lg="3" class="d-none d-lg-block">
              <CartMenu />
            </v-col>
          </v-row>
        </ContainerComponent>
      </v-col>
    </v-row>

    <div>
      <hr class="border-t border-gray-300" />
      <ProductMenubar @toggleDrawer="drawer = !drawer" />
      <hr class="border-t border-gray-300" />
    </div>
  </div>

  <v-layout>
    <v-navigation-drawer v-model="drawer" location="left" temporary>
      <div class="flex justify-end p-2">
        <button
          @click="drawer = false"
          class="px-2 pt-4 rounded hover:bg-gray-200 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div class="p-4">
        <MegaMenuComponent />
      </div>
    </v-navigation-drawer>
  </v-layout>
</template>