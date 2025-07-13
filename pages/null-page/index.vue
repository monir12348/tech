<script setup>
import ContainerComponent from "../../components/common/ContainerComponent.vue";
import ButtonComponent from "../../components/common/ButtonComponent.vue";
</script>
<template>
  <ContainerComponent class="font-poppins">
    <div class="flex flex-col items-center justify-center mt-16">
      <img src="../../assets/images/404Img.png" alt="" />
      
      <div class="flex flex-col items-center gap-4 text-center md:gap-6 mt-9 text-neutral-700">
        <span class="text-4xl font-medium md:text-8xl">404 </span>
        <span class="text-2xl font-medium md:text-5xl">Page Not Found</span>
        <span class="font-medium text-md md:text-xl text-neutral-400"
          >The page you are looking for does not exists, please return to
          home.</span
        >
      </div>
      <NuxtLink to="#" class="mt-7">
        <ButtonComponent padding="px-5 py-2">
          Return to shop
        </ButtonComponent>
      </NuxtLink>
    </div>
  </ContainerComponent>
</template>
