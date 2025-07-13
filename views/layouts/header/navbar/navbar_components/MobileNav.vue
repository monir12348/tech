<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Search from "./Search.vue";
import MobilebottomNav from "./MobileBottomNav.vue"
import MegaMenuComponent from "./MegaMenuComponent.vue";
import AccountProfileTab from "./AccountProfileTab.vue";

const leftDrawer = ref(false);
const rightDrawer = ref(false);
const isSticky = ref(false);
const isVisible = ref(true);
let lastScrollY = 0;

const user = {
  name: "John Doe",
  email: "john.doe@example.com",
};

const handleScroll = () => {
  const currentY = window.scrollY;
  const scrollThreshold = 10;
  const scrollDifference = Math.abs(currentY - lastScrollY);

  if (scrollDifference < scrollThreshold) return;

  if (currentY <= 50) {
    isSticky.value = false;
    isVisible.value = true;
  } else {
    isSticky.value = true;

    if (currentY > lastScrollY + scrollThreshold) {
      isVisible.value = false;
    } else if (currentY < lastScrollY - scrollThreshold) {
      isVisible.value = true;
    }
  }

  lastScrollY = currentY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, {
    passive: true,
    capture: false,
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div>
    <!-- Navbar -->
    <div
      :class="[ 
        isSticky 
          ? 'fixed top-0 left-0 w-full z-[1050] transition-transform transition-opacity duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform will-change-opacity' 
          : 'relative w-full', 
        isSticky && !isVisible 
          ? '-translate-y-full opacity-0 pointer-events-none' 
          : 'translate-y-0 opacity-100' 
      ]"
  class="z-50"
    >
      <v-row class="px-2 pt-5 shadow-lg bg-white" align="center" no-gutters>
        <v-col cols="1">
          <v-icon @click="leftDrawer = true" class="cursor-pointer">mdi-menu</v-icon>
        </v-col>

        <v-col cols="10" sm="10" class="text-center">
          <img
            src="../../../../../assets/images/logo.png"
            class="w-60 mx-auto"
            alt="logo"
          />
        </v-col>

        <v-col cols="1" class="text-right">
          <v-icon @click="rightDrawer = true" class="cursor-pointer">mdi-account-circle</v-icon>
        </v-col>

        <v-col cols="12" class="d-lg-none pb-2 mt-4 pr-0">
          <Search />
        </v-col>
      </v-row>
    </div>

    <div v-if="isSticky" class="h-[100px] transition-height duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"></div>

    <!-- Main content area -->
    <div class="relative z-[9999]">
      <v-layout>
        <!-- Left Drawer -->
        <v-navigation-drawer
          v-model="leftDrawer"
          location="left"
          temporary
          width="300"
          class="z-[1100]"
        >
          <div class="flex justify-end px-2 pt-2">
            <v-icon @click="leftDrawer = false" class="cursor-pointer">mdi-close</v-icon>
          </div>
          <div>
            <MegaMenuComponent />
          </div>
        </v-navigation-drawer>

        <!-- Right Drawer -->
        <v-navigation-drawer
          v-model="rightDrawer"
          location="right"
          temporary
          width="300"
          class="z-[1100]"
        >
          <div class="flex justify-end pt-2 pr-5">
            <v-icon @click="rightDrawer = false" class="cursor-pointer">mdi-close</v-icon>
          </div>
          <AccountProfileTab />
        </v-navigation-drawer>
      </v-layout>
    </div>

    <MobilebottomNav class="d-lg-none" />
  </div>
</template>

<style>
.v-navigation-drawer__scrim {
  background: none !important;
}
</style>
