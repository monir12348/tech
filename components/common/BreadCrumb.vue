<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import { IconChevronRight } from "@tabler/icons-vue";

const route = useRoute();
const router = useRouter();

const segments = computed(() => {
  const parts = route.path.replace(/^\//, "").split("/").filter(Boolean);
  return parts.map((part) => ({
    text: part.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
  }));
});

const goBackHome = () => {
  router.back();
};
</script>

<template>
  <p
    class="text-xs md:text-sm flex gap-2 flex-wrap items-center justify-center text-center"
  >
    <nuxt-link
      to="/"
      class="flex gap-1 items-center !text-neutral-500 hover:!text-neutral-600"
    >
      Home
    </nuxt-link>

    <span
      v-for="(segment, index) in segments"
      :key="index"
      class="flex gap-1 items-center"
    >
      <IconChevronRight :stroke="1" :size="16" />
      <template v-if="index !== segments.length - 1">
        <button
          @click="goBackHome"
          class="!text-neutral-500 hover:!text-neutral-600"
        >
          {{ segment.text }}
        </button>
      </template>
      <template v-else>
        <span class="!text-neutral-500">{{ segment.text }}</span>
      </template>
    </span>
  </p>
</template>
