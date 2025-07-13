
<script setup>
  import { IconMapPin, IconPhone, IconMail,IconClipboardText } from "@tabler/icons-vue";

</script>
<template>
  <div class="flex ml-xl-15 flex-col gap-2 font-poppins text-neutral-900">
    <h3 class="font-semibold text-5">Contact Information</h3>
    <div class="flex flex-col text-[1rem] gap-2">
      <!--location-->
      <div class="flex flex-col gap-2 items-start pb-2">
        <div class="flex gap-2">
          <IconMapPin size="50" />
          <p>Address: Bari / DAG-1142, Road-5/a Dolipara, Turag, Dhaka-1230</p>
        </div>

        <div class="flex gap-2 items-start pb-2">
          <IconPhone size="25" />
          <a href="tel:+8801830267638"><p>(880) 1830267638</p></a>
        </div>

        <div class="flex gap-2 items-start pb-2">
          <IconMail size="25" />

          <a href="malito:info@techdiversitybd.com">
            <p class="w-[10.9375rem]">info@techdiversitybd.com</p></a
          >
        </div>

        <div class="flex gap-2 items-start">
          <IconClipboardText size="25" />

          <div class="flex flex-col gap-2">
            <p class="">Tin Certificate Number:</p>
            <p>472722415210</p>
          </div>
        </div>
      </div>
      <!--end-->
    </div>
  </div>
</template>
