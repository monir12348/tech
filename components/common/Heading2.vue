<script setup>
import ContainerComponent from "./ContainerComponent.vue";
</script>

<template>
  <ContainerComponent>
    <section
      class="w-full mt-11 !pt-[10px] !px-[10px] pr-0 lg:!pr-[480px] pb-9 border-b border-neutral-30"
    >
      <div
        class="flex flex-col lg:flex-row items-center justify-between gap-[1.63rem]"
      >
        <div class="flex items-center text-[#605F5F] gap-2 text-sm pl-8">
          <NuxtLink to="/">
            <slot name="linkName" />
          </NuxtLink>
          <IconChevronRight
            :stroke="2"
            width="12"
            height="12"
            color="#605F5F"
          />
        </div>
        <span
          class="text-3xl capitalize sm:text-5xl font-medium text-neutral-900"
          ><slot name="headingText"
        /></span>
      </div>
    </section>
  </ContainerComponent>
</template>
