<script setup>
import paymentImg from "../../../../assets/images/payment.png";
</script>

<template>
  <div
    class="bg-neutral-20 w-full py-6 mb-15 mb-lg-0 flex items-center justify-center pt-5"
  >
    <div class="flex flex-col px-8 gap-4 items-center">
      <h4 class="text-center text-[0.875rem] sm:text-[1rem]">
        &copy; {{ new Date().getFullYear() }} Tech Diversity. All rights
        reserved. Unauthorized use is strictly prohibited by law.
      </h4>
      <img :src="paymentImg" alt="" class="w-80" />
    </div>
  </div>
</template>
