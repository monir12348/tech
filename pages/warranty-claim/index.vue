<script setup>
import ContainerComponent from '../../components/common/ContainerComponent.vue';
import PageHeader from '../../components/common/PageHeader.vue';
import HeadingComponent from '../../components/common/HeadingComponent.vue';
import { warrantyData } from '../../constants/PoliciesData';
import UseFullPagesComponent from '../../components/common/useFullPagesComponent.vue';
const routes=["Home","Warranty Claim"]
</script>

<template>
    <ContainerComponent>
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
      title="Warranty Claim" />
      <hr class="w-full  border-b  border-neutral-40 mt-12" />
     <!--list-->
     <section class="!mt-18">
     <ul v-for="data in warrantyData" :key="data.id">
       <UseFullPagesComponent>{{ data.data }}</UseFullPagesComponent>     
     </ul>
     </section>
    </ContainerComponent>
</template>