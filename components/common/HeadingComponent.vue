<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  // Individual class props for title
  titleTextSize: {
    type: String,
    default: "lg:text-5xl text-3xl",
  },
  titleFontFamily: {
    type: String,
    default: "font-poppins",
  },
  titleFontWeight: {
    type: String,
    default: "font-medium",
  },
  titlePadding: {
    type: String,
    default: "pt-9 pb-8",
  },
  titleColor: {
    type: String,
    default: "text-neutral-900",
  },
  titleCustomClass: {
    type: String,
    default: "",
  },
  // Container class
  containerClass: {
    type: String,
    default: "lg:mt-12 mt-5",
  },
  descriptionColor: {
    type: String,
    default: "text-neutral-300",
  },
  descriptionFontWeight: {
    type: String,
    default: "font-normal",
  },
  descriptionFontFamily: {
    type: String,
    default: "font-opensans",
  },
  descriptionTextSize: {
    type: String,
    default: "lg:!text-xl !text-md",
  },
  descriptionPadding: {
    type: String,
    default: "!lg:px-10 px-0",
  },
  descriptionCustomClass: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div :class="containerClass" class="text-center">
    <h3
      v-if="title"
      :class="[
        titleTextSize,
        titlePadding,
        titleFontFamily,
        titleFontWeight,
        titleColor,
        titleCustomClass,
      ]"
    >
      {{ title }}
    </h3>
    <p
      v-if="description"
      :class="[
        descriptionColor,
        descriptionPadding,
        descriptionFontFamily,
        descriptionTextSize,
        descriptionFontWeight,
        descriptionCustomClass,
      ]"
    >
      {{ description }}
    </p>
  </div>
</template>