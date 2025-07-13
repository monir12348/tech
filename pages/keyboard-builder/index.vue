<script setup>
import ButtonComponent from "../../components/common/ButtonComponent.vue";
import ContainerComponent from "../../components/common/ContainerComponent.vue";
import {
  IconLibraryPhoto,
  IconX,
  IconCpu,
  IconRefreshDot,
} from "@tabler/icons-vue";
import { computed } from "vue";

import CheckboxComponent from "../../components/common/CheckboxComponent.vue";
import PageHeader from "../../components/common/PageHeader.vue";
import HeadingComponent from "../../components/common/HeadingComponent.vue";
const allComponents = [
  {
    id: 1,
    name: "Stabilizer",
    selectOption: "Select A Component",
    required: true,
    category: "main",
  },
  {
    id: 2,
    name: "Keycap",
    selectOption: "Select A Component",
    required: true,
    category: "main",
  },
  {
    id: 3,
    name: "Swtich",
    selectOption: "Select A Component",
    required: true,
    category: "main",
  },
  
  {
    id: 4,
    name: "Keyboard",
    selectOption: "Select A Component",
    required: false,
    category: "recommendation",
  },
  {
    id: 5,
    name: "Mouse",
    selectOption: "Select A Component",
    required: false,
    category: "recommendation",
  },
  {
    id: 6,
    name: "Headphone",
    selectOption: "Select A Component",
    required: false,
    category: "recommendation",
  },
];
const mainComponents = computed(() =>
  allComponents.filter((item) => item.category === "main")
);
const recommendedComponents = computed(() =>
  allComponents.filter((item) => item.category === "recommendation")
)
const routes=["Back",""]
</script>
<template>
  <ContainerComponent class="font-poppins">
    <section
      class="w-full !pt-[10px]  "
    >
      <div
        class="flex flex-col lg:flex-row items-center justify-between gap-[1.63rem] pr-0 lg:!pr-[30rem]"
      >
        <div class="flex items-center text-[#605F5F] gap-2 text-sm pl-8">
          <PageHeader
          :breadcrumbs="routes"
          pageName=""
          class="!border-b-0 !pb-0 !mb-0"/>
          
        </div>
       <HeadingComponent
       title="Keyboard Builder"
      titlePadding=""
      descriptionPadding=""
      containerClass=""
       />
      </div>
     <hr class="w-full  border-b  border-neutral-40 mt-5" />
    </section>
      
    <section class="!mt-[117px]">
      <v-row class="gap-y-6">
        <v-col cols="12" sm="6" md="4" lg="4" xl="4" class="">
            <div class="flex flex-col gap-4 ">
          <img src="../../assets/images/logo.png" alt="" class="w-64"/>
          <div class="flex flex-col gap-3 leading-0">
          <span class=" text-xl font-medium text-black">
            Keyboard Builder - Build Your Own Keyboard
          </span>
          <div class="flex items-center gap-2 ">            
          <CheckboxComponent></CheckboxComponent>  
            <span class="text-md text-neutral-04-100 leading-0"
              >Hide Unconfigured Components</span
            >
          </div>
          </div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="4">
          <div
            class="flex flex-col gap-[10px] align-center px-4 py-3 bg-neutral-20 text-neutral-700"
          >
            <span class="font-medium text-md">Total Price</span>
            <div class="flex flex-col gap-1 align-center">
              <span class="font-semibold text-[2rem]">14,800৳</span>
              <span class="text-sm font-medium">5 items</span>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="4">
          <div class="flex flex-col gap-4">
            <div
              class="flex items-center justify-center w-full gap-2 px-4 py-3 text-xl font-medium border cursor-pointer border-neutral-50 text-neutral-700"
            >
              <IconLibraryPhoto 
              color="#1c1c1c" 
              :size="24" 
              :stroke="2" />
              <span>Save a Screenshot</span>
            </div>
            <div
              class="flex items-center justify-center w-full gap-2 px-4 py-3 text-xl font-medium border cursor-pointer border-neutral-50 text-neutral-700"
            >
              <IconX 
              color="#6C7275" 
              :size="24" 
              :stroke="2" />
              <span>Clear All Selections</span>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- components section -->
       <section v-if="allComponents.length>0">
      <div class="w-full px-4 py-3 mt-12 text-xl font-medium bg-neutral-20">
        <span>Components</span>
      </div>
      <!-- Selected component preview (example only) -->
      <section 
        class="flex flex-col items-center justify-between px-5 py-5 mt-5 border sm:flex-row sm border-neutral-40"
      >
        <div class="flex flex-col items-center gap-4 sm:flex-row">
          <img src="../../assets/images/Keyboard.png" alt="" class="w-20 h-20" />
          <div>
            <div
              class="flex flex-col items-center gap-2 sm:items-start text-neutral-500"
            >
              <div class="flex items-center flex-wrap gap-[10px]">
                <span class="font-semibold text-md text-primary-400"
                  >Barebone</span
                >
                <span
                  class="text-[6px] sm:text-[12px] font-medium !px-[10px] !py-[6px] bg-neutral-30 text-neutral-700"
                >
                  Required
                </span>
              </div>
              <span
                class="font-semibold text-md sm:text-xl font-inter text-neutral-700"
              >
               Akko 5075S Starry Night RGB Wired Keyboard Kit
              </span>
            </div>
          </div>
        </div>
        <div class="flex">
          <div
            class="flex py-8 pr-5 text-lg font-medium border-r border-neutral-40 sm:text-2xl text-neutral-700"
          >
            <span>14,800৳</span>
          </div>
          <div
            class="flex cursor-pointer gap-4 py-8 pl-5 pr-4 text-lg font-medium sm:text-2xl text-neutral-700"
          >
            <IconX 
            color="#666666" 
            :size="24" 
            :stroke="2" />
            <IconRefreshDot 
            color="#666666" 
            :size="24" 
            :stroke="2" />
          </div>
        </div>
      </section>
      <!-- Main component list -->
      <section class="flex flex-col gap-5 py-5">
        <div v-for="data in mainComponents" :key="data.id">
          <div class="px-5 py-5 border border-neutral-40">
            <div class="flex items-start sm:items-center flex-col sm:flex-row   justify-between gap-4">
              <div class="flex items-center gap-4">
                <div class="px-3 py-3 text-3xl bg-neutral-30">
                  <IconCpu color="#1c1c1c" :size="28" :stroke="2" />
                </div>
                <div class="flex flex-col text-neutral-500">
                  <div class="flex items-center flex-wrap gap-[10px]">
                    <span
                      class="text-xl font-semibold font-inter text-neutral-700"
                      >{{ data.name }}</span
                    >
                    <span
                      class="text-xs font-medium !px-[10px] !py-[6px] bg-neutral-30 text-neutral-700"
                      :class="data.required ? 'block' : 'hidden'"
                    >
                      Required
                    </span>
                  </div>
                  <span class="pt-2 text-md font-opensans">{{
                    data.selectOption
                  }}</span>
                </div>
              </div>
              <ButtonComponent padding="px-4 py-2 w-full sm:w-auto">Select</ButtonComponent>
            </div>
          </div>
        </div>
      </section>
      <!-- Recommendation section -->
      <div class="w-full px-4 py-3 text-xl font-medium bg-neutral-20">
        <span>Recommendations</span>
      </div>
      <section class="flex flex-col gap-5 py-5">
        <div v-for="data in recommendedComponents" :key="data.id">
          <div class="px-5 py-5 border border-neutral-40">
            <div class="flex items-start sm:items-center flex-col sm:flex-row   justify-between gap-4">
              <div class="flex items-center gap-4">
                <div class="px-3 py-3 text-3xl bg-neutral-30">
                  <IconCpu 
                  color="#1c1c1c" 
                  :size="28" 
                  :stroke="2" />
                </div>
                <div class="flex flex-col text-neutral-500">
                  <div class="flex items-center flex-wrap gap-[10px]">
                    <span
                      class="text-xl font-semibold font-inter text-neutral-700"
                      >{{ data.name }}</span
                    >
                    <span
                      class="text-xs font-medium !px-[10px] !py-[6px] bg-neutral-30 text-neutral-700"
                      :class="data.required ? 'block' : 'hidden'"
                    >
                      Required
                    </span>
                  </div>
                  <span class="pt-2 text-md font-opensans">{{
                    data.selectOption
                  }}</span>
                </div>
              </div>
             <ButtonComponent padding="px-4 py-2 w-full sm:w-auto">Select</ButtonComponent>
            </div>
          </div>
        </div>
      </section>
      <ButtonComponent customClass="w-full">PlaceOrder</ButtonComponent>
      </section>
      <section v-else class="text-center mt-12">
      <span class="text-neutral-80  font-medium text-xl sm:text-3xl">There is no item</span>
      </section>
    </section>

  </ContainerComponent>
</template>
