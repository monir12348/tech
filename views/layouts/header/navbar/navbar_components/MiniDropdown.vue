<!-- components/MenuLink.vue -->
<script setup>
import { IconChevronRight } from "@tabler/icons-vue";
import { defineProps } from 'vue';

defineProps({
  to: {
    type: [String, Object],
    required: true,
  },
  showRightIcon: {
    type: Boolean,
    default: true,
  }
});
</script>

<template>
  <NuxtLink
    :to="to"
    class="flex justify-between hover:text-white items-center  gap-2 px-3 py-2 hover:bg-primary-50 transition-all duration-200"
  >
    <!-- Left content -->
    <div class="flex items-center gap-[10px] ">
      <slot name="left" />
    </div>

    <!-- Optional Right Icon -->
    <IconChevronRight v-if="showRightIcon" size="16" />
  </NuxtLink>
</template>
