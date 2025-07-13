<template>
  <div class="flex mb-1">
    <span class="text-neutral-900 font-bold text-[12px]">4.8</span>
    <div class="star leading-[14px] mx-2">
      <i
        v-for="icon in Array.fill(5)"
        class="ti ti-star-filled text-[10px] my-0 mx-[1px] text-[rgba(253, 154, 36, 1)]"
      ></i>
    </div>
    <span style="color: #fd9a24; font-weight: 700; font-size: 11px"
      >(14.4 k)</span
    >
  </div>
</template>
