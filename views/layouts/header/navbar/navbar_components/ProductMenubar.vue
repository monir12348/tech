<script setup>
import { ref } from "vue";
import { IconMenu2, IconChevronDown } from "@tabler/icons-vue";
import { useRoute } from "vue-router";
import ContainerComponent from "../../../../../components/common/ContainerComponent.vue";

const emit = defineEmits(["toggleDrawer"]);
const route = useRoute();
const showDropdown = ref(false);

const navItems = [
  { label: "Ajaaz", path: "#" },
  { label: "Keychron", path: "#" },
  { label: "Dareu", path: "#" },
  { label: "MCHOSE", path: "#" },
  { label: "Akko", path: "#" },
  { label: "Logitech", path: "#" },
  { label: "Razer", path: "#" },
  { label: "Steelseries", path: "#" }
];

const visibleItems = navItems.slice(0, 6);
const dropdownItems = navItems.slice(6);
</script>

<template>
  <ContainerComponent>
    <v-row>
      <v-col lg="8" class="mx-auto">
        <ul class="flex items-center gap-4 py-4 font-poppins text-neutral-700 relative">
          <!-- All Categories -->
          <li class="flex items-center cursor-pointer" @click="emit('toggleDrawer')">
            <IconMenu2 size="22" class="mr-2" />
            <p class="pr-3 border-r-2 border-neutral-300">All Categories</p>
          </li>

          <!-- Visible Nav Items -->
          <template v-for="item in visibleItems" :key="item.path">
            <div class="flex items-center">
              <NuxtLink :to="item.path" class="relative px-2 cursor-pointer group">
                <span class="text-[16px] font-medium capitalize">{{ item.label }}</span>
                <span
                  class="absolute bottom-0 left-0 top-7 h-[2px] bg-neutral-700 transition-all duration-300 ease-in-out w-[0%] group-hover:w-[100%]"
                  :class="{ 'w-[100%]': route.path === item.path }"
                ></span>
              </NuxtLink>
            </div>
          </template>

          <!-- Dropdown if items exceed 6 -->
          <div v-if="dropdownItems.length" class="relative"
              @mouseenter="showDropdown = true"
              @mouseleave="showDropdown = false"
            >
              <!-- Icon -->
              <div class="flex items-center cursor-pointer px-2">
               Other's <IconChevronDown size="20" />
              </div>
              <!-- Dropdown -->
             <transition name="fade">
                <ul
                  v-if="showDropdown"
                  class="absolute top-full left-0 mt-1 w-40 bg-white shadow rounded z-50"
                >
                  <li
                    v-for="item in dropdownItems"
                    :key="item.path"
                    class="relative px-4 py-2 cursor-pointer group"
                  >
                    <NuxtLink :to="item.path" class="block w-full text-neutral-700 group-hover:text-neutral-900">
                      <span class="relative block">
                        {{ item.label }}
                        <span
                          class="absolute bottom-0 left-0 h-[2px] bg-neutral-700 transition-all duration-300 ease-in-out w-[0%] group-hover:w-[100%]"
                        ></span>
                      </span>
                    </NuxtLink>
                  </li>
                </ul>
              </transition>
            </div>
        </ul>
      </v-col>
    </v-row>
  </ContainerComponent>
</template>
