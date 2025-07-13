<script setup>
import { computed } from "vue";

const props = defineProps({
  to: {
    type: [String, Object],
  },
  width: String,
  iconLeft: [Object, Function],
  iconRight: [Object, Function],
  iconStyle: {
    type: Object,
    default: () => ({ stroke: 1, color: "#fff", size: 18 }),
  },
  type: {
    type: String,
    default: "button", // submit | reset | button
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  padding: {
    type: String,
    default: "py-3 px-8",
  },
  customClass: {
    type: String,
    default: "",
  },
  textStyles: {
    type: String,
    default: "text-base",
  },
  btnBg: {
    type: String,
    default: "!bg-neutral-900",
  },
  hoverBg: {
    type: String,
    default: "hover:!bg-neutral-800",
  },
  transparentBg: {
    type: String,
    default: "",
  },
  isBtnBlock: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);

const wrapperStyle = computed(() =>
  props.width ? `width: ${props.width}` : ""
);

</script>

<template>
  <!-- Link Button -->
  <nuxt-link
    v-if="to"
    :to="to"
    :style="wrapperStyle"
    :class="[
      'inline-flex items-center justify-center gap-2',
      padding,
      btnBg,
      hoverBg,
      customClass,
      transparentBg,
      isBtnBlock ? 'w-full' : '',
      disabled ? 'opacity-50 cursor-not-allowed' : '',
    ]"
  >
    <component :is="iconLeft" v-if="iconLeft" v-bind="iconStyle" />
 <span :class="['font-medium text-white',textStyles ]">
      <slot />
    </span>
    <component :is="iconRight" v-if="iconRight" v-bind="iconStyle" />
  </nuxt-link>

  <!-- Normal Button -->
  <button
    v-else
    :type="type"
    :disabled="disabled"
    @click="$emit('click')"
    :style="wrapperStyle"
    :class="[
      'inline-flex items-center justify-center gap-2',
      padding,
      btnBg,
      hoverBg,
      customClass,
      transparentBg,
      isBtnBlock ? 'w-full' : '',
      disabled ? 'opacity-50 cursor-not-allowed' : '',
    ]"
  >
    <component :is="iconLeft" v-if="iconLeft" v-bind="iconStyle" />
    <span :class="['font-medium text-white',textStyles ]">
      <slot />
    </span>
    <component :is="iconRight" v-if="iconRight" v-bind="iconStyle" />
  </button>
</template>
