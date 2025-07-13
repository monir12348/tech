<script setup>
import ContainerComponent from "./ContainerComponent.vue";
import { useSlots } from "vue";
const slots = useSlots();
</script>
<template>
  <ContainerComponent>
    <ul v-if="slots.default" class="pl-0 list-disc lg:!pl-6 font-opensans">
      <li class="pb-2 text-xs sm:text-xl text-neutral-300"><slot /></li>
    </ul>
    <!--content-->
    <h2
      v-if="slots.heading"
      class="text-sm sm:text-[2rem] font-semibold text-[#000000] font-poppins"
    >
      <slot name="heading" />
    </h2>
    <p
      v-if="slots.bodytext"
      class="text-xs sm:text-xl font-opensans mt-4 text-neutral-300"
    >
      <slot name="bodytext" />
    </p>
  </ContainerComponent>
</template>
