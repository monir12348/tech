<script setup>
import ContainerComponent from "../../components/common/ContainerComponent.vue";
import HeadingComponent from "../../components/common/HeadingComponent.vue";
import PageHeader from "../../components/common/PageHeader.vue";
import Policies from "../../components/common/useFullPagesComponent.vue";
import { privacyData } from "../../constants/PoliciesData";
const routes=["Home","Privacy Policy"]
</script>
<template>
  <ContainerComponent>
    <div class="font-poppins">
     <PageHeader
      :breadcrumbs="routes"
      pageName=""
      class="!border-b-0 !pb-0 !mb-0"
    />
    
     <HeadingComponent
      titlePadding=""
      descriptionPadding=""
      containerClass=""
      title="Privacy Policy" />
      <hr class="w-full  border-b  border-neutral-40 mt-12" />
      <!--content-->
      <section class="!mt-18">
        <h1 class="text-xl sm:text-[2rem] font-semibold leading-0">No unlawful or prohibited use</h1>
        <div class="font-opensans mt-9">
          <p class="mb-4 text-xs sm:text-xl text-neutral-300">
            While using this Website, you may NOT do the following:
          </p>
          <!--contentList-->
          <ul v-for="data in privacyData" :key="data.id">
         <Policies
        >
        <template #default>
        {{ data.data }}
        </template>
         </Policies>
         </ul>
        </div>
      </section>
    </div>
  </ContainerComponent>
</template>
