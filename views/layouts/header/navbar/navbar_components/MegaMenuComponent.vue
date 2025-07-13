<script setup>
import { ref } from 'vue'
import MobileBrandComponent from "./MobileBrandComponent.vue"

const activeLeftBrand = ref('category')

</script>

<template>
  <div class="font-poppins mt-3 ">
    <!-- Top Toggle Tabs -->
    <div class="flex w-full">
    <div
    @click="activeLeftBrand = 'category'"
    class="py-3 w-1/2 text-center text-[16px] font-semibold cursor-pointer transition duration-300 ease-in-out"
    :class="activeLeftBrand === 'category'
        ? 'text-neutral-700 border-neutral-700 xl:border-none xl:bg-transparent border-b-2 bg-neutral-20'
        : 'text-neutral-700 hover:text-neutral-700 hover:border-neutral-300'"
    >
    <span>Categories</span>
    </div>
      
      <div
        @click="activeLeftBrand = 'brand'"
        class="xl:hidden py-3 w-1/2 text-center text-[16px] font-semibold cursor-pointer transition duration-300 ease-in-out "
        :class="activeLeftBrand === 'brand'
          ? 'text-neutral-700 border-neutral-700 border-b-2 bg-neutral-20'
          : 'text-neutral-700 border-neutral-40'">
        <span>Brand</span>
      </div>
    </div>

    <!-- Category Section -->
    <div v-if="activeLeftBrand === 'category'" class="w-full pl-4 ">
      <!-- Add your category content here -->
    </div>

    <!-- Brand Section -->
    <div v-else class="flex flex-col w-full mt-1 xl:hidden">
      <MobileBrandComponent />
    </div>
  </div>
</template>