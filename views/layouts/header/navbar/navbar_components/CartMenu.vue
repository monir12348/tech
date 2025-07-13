
<script setup>
import { IconUserCircle, IconUserPlus,IconChevronRight,IconKeyboard, IconLogin2,IconChevronDown,IconHeart,IconShoppingBag,IconArrowsShuffle} from "@tabler/icons-vue";
import MiniDropdown from "./MiniDropdown.vue";
import { ref } from "vue";

const show = ref(false);

const builderDetails = [
  {
    id: 1,
    product_name: "Login",
    icon: IconLogin2,
    link:'/login'
  },
  {
    id: 2,
    product_name: "Register",
    icon: IconUserPlus,
    link:'/register'
  },
];

</script>
<template>
  <div class="flex items-center justify-between mt-2 ">
    <!-- Account section -->
    <div class="relative leading-[30px] cursor-pointer  h-9"    
    @mouseenter="show = true"  
    @mouseleave="show = false">
  <div class="hidden lg:flex items-center justify-center relative hover:text-neutral-80">
    <IconUserCircle size="26" />
    <p class="font-poppins mx-1">Account</p>
    <IconChevronDown size="16" />
  </div>
      <div 
        v-if="show"
        class="absolute z-[9999] w-[9.8rem] left-[-3px] top-[2.2rem] custom-builder-dropdown grid grid-cols-1  border bg-neutral-0 shadow-lg">
        <div
          v-for="(item, index) in builderDetails"
          :key="item.id"
          :class="[
            'group', 
            index < builderDetails.length - 1 ? 'border-b-2 border-neutral-30' : ''
          ]"
          class="hover:bg-primary-400"
        >
          <MiniDropdown :to="item.link">
            <template #left>
              <component :is="item.icon" class="group-hover:text-white"  />
              <p 
                class="text-[14px]  font-poppins font-medium text-neutral-700 group-hover:text-white">
                {{ item.product_name }}
              </p>
            </template>
          </MiniDropdown>
        </div>
      </div>
    </div>

    <span class="mb-2">|</span>
    <!-- Cart Icons -->
    <div class="flex justify-between gap-7 items-center mb-2">
      <!-- Love -->
      <div class="relative hover:text-neutral-300">
      <NuxtLink to="#">
        <IconHeart size="22" />
        <span
          class="absolute top-[-2px] left-5 h-[20px] w-[20px] text-center bg-primary-300 text-white text-[12px] leading-[20px] rounded-full"
        >
          2
        </span>
      </NuxtLink>
      </div>

      <!-- Shuffle -->
      <div class="relative hover:text-neutral-300">
        <NuxtLink to="#">
          <IconArrowsShuffle size="22" />
        <span
          class="absolute top-[-2px] left-5 h-[20px] w-[20px] text-center bg-primary-300 text-white text-[12px] leading-[20px] rounded-full"
        >
          2
        </span>
        </NuxtLink>
      </div>

      <!-- Shopping Bag -->
      <div class="relative hover:text-neutral-300">
        <NuxtLink to="#">
          <IconShoppingBag size="22" />
            <span
              class="absolute top-[-2px] left-5 h-[20px] w-[20px] text-center bg-primary-300 text-white text-[12px] leading-[20px] rounded-full"
            >
              2
            </span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
