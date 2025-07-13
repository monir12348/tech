<script setup>
import ContainerComponent from "../../components/common/ContainerComponent.vue";
import PageHeader from "../../components/common/PageHeader.vue";
import HeadingComponent from "../../components/common/HeadingComponent.vue";
import useFullPagesComponent from "../../components/common/useFullPagesComponent.vue";
import { refundPolicyData } from "../../constants/PoliciesData";
const routes=["Home","Refund Policy"]
</script>
<template>
  <ContainerComponent class="font-poppins">
    <PageHeader
     :breadcrumbs="routes"
      pageName=""
      class="!border-b-0 !pb-0 !mb-0"
    >
    </PageHeader>
     <HeadingComponent
      titlePadding=""
      descriptionPadding=""
      containerClass=""
      title="Refund Policy" />
      <hr class="w-full  border-b  border-neutral-40 mt-12" />
    <!--list-->
    <section class="!mt-18">
      <ul v-for="data in refundPolicyData" :key="data.id">
        <useFullPagesComponent >{{ data.data }}</useFullPagesComponent>
      </ul>
    </section>
  </ContainerComponent>
</template>
