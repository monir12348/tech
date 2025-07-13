<script setup>
import ContainerComponent from "../../components/common/ContainerComponent.vue";
import HeadingComponent from "../../components/common/HeadingComponent.vue";
import InputComponent from '../../components/common/InputComponent.vue'
import PageHeader from "../../components/common/PageHeader.vue";
import { IconSearch } from "@tabler/icons-vue";
import TableComponent from "./table.vue";
import { ref } from "vue";
import ButtonComponent from "../../components/common/ButtonComponent.vue";


const routes=["Home","Download"]
const btnValue = [
  { id: 1, value: "Drivers" },
  { id: 2, value: "Softwares" },
  { id: 3, value: "Manuals" },
];
const activeBtn = ref("Drivers");
const searchInput = ref("");
const changeSearchValue = computed(() => {
  return `Search for ${activeBtn.value}...`;
});
</script>
<template>
  <div class="font-poppins ">
    <ContainerComponent>
      <PageHeader
      :breadcrumbs="routes"
      pageName=""
      class="!border-b-0 !pb-0 !mb-0 "
      >
      </PageHeader>

      <HeadingComponent
       titlePadding=""
       descriptionPadding=""
       containerClass=""
      title="Download"></HeadingComponent>
        <hr class="w-full  border-b  border-neutral-40 mt-12" />
<!--content-->
      <section class="mt-12 font-medium">
        <div class="flex gap-4">
  <ButtonComponent
    v-for="btn in btnValue"
    :key="btn.id"
    @click="activeBtn = btn.value"
    :customClass="activeBtn === btn.value 
      ? '!bg-neutral-700 ' 
      : '!bg-neutral-20'"
    padding="py-3 px-4"
    :textStyles="activeBtn === btn.value 
  ? '!text-white text-sm' 
  :'!text-neutral-80 text-sm'"
    :btnBg="''"
    :hoverBg="''"
  >
    {{ btn.value }}
  </ButtonComponent>
</div>
      </section>
    
        <div class="inline-flex group relative w-full items-center gap-2 py-1 pl-3 mt-4 border border-neutral-300">
    <IconSearch :stroke="2"  class="translate-y-1"/>
    <InputComponent
      v-model="searchInput"
      :placeholder="changeSearchValue"
      customClass="border-none p-0 text-neutral-500 placeholder:text-[#3B3B3B] font-medium text-sm"
    />
        </div>
      <section v-if="activeBtn==='Drivers'">
      <TableComponent/>
      </section>
      <!--softwareList-->
      <section v-if="activeBtn==='Softwares'">
      <!--softwareContent-->
      </section>
      <section v-if="activeBtn==='Manuals'">
      <!--manualContent-->
      </section>
    </ContainerComponent>
  </div>
</template>
