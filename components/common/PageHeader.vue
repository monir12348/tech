<script setup>
import { IconChevronLeft } from "@tabler/icons-vue";
import { useRouter } from "vue-router";
const router = useRouter();
const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1);
  } else {
    navigateTo("/");
  }
};
defineProps({
  breadcrumbs: Array,
  pageName: {
    type: String,
    default: "Page Title",
  },
  pageDetails: {
    type: String,
    default: "",
  },
  showBackBtn: {
    type: Boolean,
    default: false,
  },
  contentMaxWidth: {
    type: String,
    default: "max-w-[25rem] md:max-w-none md:w-full",
  },
  customClass: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div
    :class="[
      'flex flex-col items-center justify-center font-poppins gap-5 !mt-13.5 pb-12 mb-9 border-b border-b-neutral-40',
      customClass,
    ]"
  >
    <div
      :class="[
        'flex flex-col items-center justify-center gap-5 leading-[1]',
        contentMaxWidth,
      ]"
    >
      <div class="flex flex-col-reverse md:flex-row w-full">
        <div
          @click="goBack"
          v-if="showBackBtn"
          class="cursor-pointer flex gap-1 items-center justify-center mt-8 pr-2 md:!pr-0 md:!mt-0"
        >
          <IconChevronLeft stroke="{2}" />
          <p>Back</p>
        </div>
        <div class="flex flex-col gap-6.5 w-full">
          <p
            v-if="breadcrumbs"
            class="text-xs md:text-sm flex gap-2 flex-wrap items-center justify-center text-center"
          >
            <NuxtLink
              v-for="(route, index) in breadcrumbs"
              :to="route.path ? route.path : '#'"
              :key="index"
              class="flex gap-1 items-center !text-neutral-500 hover:!text-neutral-600"
            >
              {{ route?.name || route }}
              <IconChevronRight
                v-if="index !== breadcrumbs.length - 1"
                :stroke="1"
                :size="16"
              />
            </NuxtLink>
          </p>
          <div class="flex flex-col items-center w-full">
            <h2
              class="font-medium leading-[1] w-full text-4xl lg:text-5xl text-center"
            >
              {{ pageName }}
            </h2>
            <p class="px-15 text-center text-sm sm:text-base pt-6 !text-neutral-300 leading-[1.5]">
              {{ pageDetails }}
            </p>
          </div>
        </div>
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>














