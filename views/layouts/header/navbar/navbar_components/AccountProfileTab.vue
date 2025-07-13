<script setup>
import { ref } from "vue";

const accountItem = [
  { id: 1, name: "Dashboard" },
  { id: 2, name: "Pre-Orders" },
  { id: 3, name: "Orders" },
  { id: 4, name: "Addresses" },
  { id: 5, name: "Gift Cards" },
  { id: 6, name: "Account Details" },
  { id: 7, name: "My Coupons" },
  { id: 8, name: "My Store Credits" },
  { id: 9, name: "Wishlists" },
  { id: 10, name: "Logout" },
];
const name="Mir Monuruzzaman Monuruzzaman"
const email="moniruzzaman.cit.bd@gmail.com"
const activeItem = ref("Dashboard");
</script>

<template>
  <div class="px-2 py-4 font-poppins">
    <!-- Account -->
    <div class="flex flex-col items-center gap-2">
      <div class="w-[80px] h-[80px] rounded-full overflow-hidden">
        <img
          src="../../../../../assets/images/avater.png"
          alt="Avatar"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="flex flex-col items-center">
      <h4 class="text-[15px] font-medium text-neutral-700">
        {{ name.length > 20 ? name.slice(0, 20) + '...' : name }}
      </h4>        
      <h6 class="text-[13px] text-neutral-100"> {{ email.length >30 ? email.slice(0,30) + '...' : email }}</h6>
      </div>
    </div>
    <div class="px-2 pt-2 font-poppins text-neutral-700">
        <hr class="w-full h-[2px] mt-1 border-t-2 border-gray-300" />
    </div>

    <!-- Bottom content -->
    <div class="flex flex-col  px-2 mt-4 text-neutral-700">
      <div
        v-for="item in accountItem"
        :key="item.id"
        @click="activeItem = item.name"
        class="px-2 py-2 cursor-pointer text-[14px] sm:text-[16px] transition-all duration-300"
        :class="{
          'bg-neutral-900 text-white': activeItem === item.name,
          'hover:bg-neutral-900 hover:text-white': activeItem !== item.name
        }"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
