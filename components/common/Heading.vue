<script setup>
import { useSlots } from "vue";

const props = defineProps({
  customClass: {
    type: String,
    default: "",
  },
});
const slots = useSlots();
</script>
<template>
  <div :class="customClass">
    <div class="font-poppins">
      <div
        class="flex flex-col pb-12 px-0 border-b border-neutral-30 font-medium text-center lg:!px-16 pt-9 text-neutral-900"
      >
        <span class="text-3xl capitalize sm:text-5xl">
          <slot name="heading"
        /></span>
        <span
          v-if="slots.bodyText"
          class="text-sm font-normal text-[#575757] mt-6 sm:text-lg"
          ><slot name="bodyText"
        /></span>
      </div>
    </div>
  </div>
</template>
