<script setup>
import { ref } from "vue";
import ButtonComponent from "./ButtonComponent.vue";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-vue";

const props = defineProps({
  label: {
    type: String,
    default: "Accordion",
  },
  byDefaultShow: {
    type: Boolean,
    default: false,
  },
  maxHeight: {
    type: String,
    default: "12rem",
  },
});

const isWindowShow = ref(props.byDefaultShow);
</script>

<template>
  <div>
    <ButtonComponent
      width="100%"
      customClass="!border-[1px] !border-neutral-40 !justify-between"
      btnBg="bg-none"
      padding="py-3 px-5"
      hoverBg="hover:bg-neutral-30"
      textStyles="!text-neutral-700 font-semibold"
      :iconRight="isWindowShow ? IconChevronUp : IconChevronDown"
      :iconStyle="{ stroke: 1, size: 20 }"
      @click="isWindowShow = !isWindowShow"
    >
      {{ label }}
    </ButtonComponent>

    <Transition name="accordion">
      <div
        v-show="isWindowShow"
        :class="[
          'flex gap-4 py-5 px-5 overflow-y-scroll',
          `max-h-[${maxHeight}]`,
        ]"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>
