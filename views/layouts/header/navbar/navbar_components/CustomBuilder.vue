<script setup>
import ButtonComponent from "../../../../../components/common/ButtonComponent.vue";
import MiniDropdown from "./MiniDropdown.vue";
import {
  IconTool,
  IconChevronDown,
  IconDeviceDesktop,
  IconChevronRight,
  IconKeyboard,
} from "@tabler/icons-vue";

import { ref } from "vue";

const show = ref(false);

const builderDetails = [
  {
    id: 1,
    product_name: "PC Builder",
    icon: IconDeviceDesktop,
    path:"/pc-builder"
  },
  {
    id: 2,
    product_name: "Keyboard Builder",
    icon: IconKeyboard,
    path:"/keyboard-builder"
  },
];
</script>

<template>
  <div
    class="relative"
    @mouseenter="show = true"
    @mouseleave="show = false"
  >                                                                                                                 
    <ButtonComponent
        width="230px"
        class="!border-[1px] !border-neutral-300"
        btnBg="!bg-primary-300"
        hoverBg="hover:!bg-primary-400"
        textStyles="font-poppins !text-neutral-0 font-medium text-[0.9rem]"
        :iconLeft="IconTool"
        :iconRight="IconChevronDown"
        :iconStyle="{ size: '18', color: '#fff' }"
      >
        Custom Builder
      </ButtonComponent>

    <div
      v-if="show"
      class="absolute z-10 w-full custom-builder-dropdown grid grid-cols-1 border bg-neutral-0 shadow-lg">
      <div
        v-for="(item, index) in builderDetails"
        :key="item.id"
        :class="[ 
          'group',
          index < builderDetails.length - 1 ? 'border-b-2 border-neutral-30' : ''
        ]"
        class="hover:bg-primary-400 hover:text-white cursor-pointer"
      >
        <MiniDropdown :to="item.path">
          <template #left>
            <component :is="item.icon" />
            <p 
              class="text-[14px] font-poppins font-medium text-neutral-700 group-hover:text-white" 
            >
              {{ item.product_name }}
            </p>
          </template>
        </MiniDropdown>
      </div>
    </div>

  </div>
</template>
