<script setup>
defineProps({
  customClass: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="mx-auto max-w-[1320px]  px-4 lg:!px-0 xl:!px-0 sm:!px-6 md:!px-8 " :class="customClass && customClass">
    <slot />
  </div>
</template>
