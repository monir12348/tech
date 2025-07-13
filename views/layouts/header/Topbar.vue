<script setup>
import ContainerComponent from "../../../components/common/ContainerComponent.vue"; 
import { IconPhone, IconMail, IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-vue';
</script>

<template>
  <div class="bg-[#222] text-white text-sm py-2 px-4 overflow-hidden">
    <ContainerComponent>
      <div class="flex flex-wrap justify-between  items-center">
        <!-- Left Contact Info -->
        <div class="w-full sm:w-7/12 xl:w-2/3 flex flex-wrap justify-start sm:justify-start gap-4 items-center">
          <div class="flex items-center gap-2">
            <IconPhone stroke="1.5" />
            <a href="tel:+8801830267638" class="hover:underline">+8801830267638</a>
          </div>
          <span class="text-gray-400">|</span>
          <div class="flex items-center gap-2">
            <IconMail stroke="1.5" />
            <a href="mailto:info@techdiversitybd.com" class="hover:underline">info@techdiversitybd.com</a>
          </div>
        </div>

        <!-- Right Social + Links -->
        <div
          class="w-full sm:w-5/12 xl:w-1/3 pt-2 sm:pt-0 flex flex-wrap justify-end gap-4 items-center">
          <div class="flex items-center gap-2">
            <a href="#" aria-label="Facebook">
              <IconBrandFacebook stroke="1.5" />
            </a>
            <a href="#" aria-label="Instagram">
              <IconBrandInstagram stroke="1.5" />
            </a>
          </div>
          <div class="flex items-center gap-2">
            <NuxtLink to="#" class="hover:underline">Contact Us</NuxtLink>
            <span class="text-gray-400">|</span>
            <NuxtLink to="#" class="hover:underline">Privacy Policy</NuxtLink>
          </div>
        </div>
      </div>
    </ContainerComponent>
  </div>
</template>
