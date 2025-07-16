<script setup>
import { ref } from "vue";
import ContainerComponent from "../../components/common/ContainerComponent.vue";
import HeadingComponent from '../../components/common/HeadingComponent.vue'
import ProductCard from '../../components/common/ProductCard.vue'
import PageHeader from '../../components/common/PageHeader.vue'
import { categoryProducts } from "../../constants/ProductData";
import { IconChevronDown, IconColumns3Filled ,IconColumns2Filled } from "@tabler/icons-vue";
import { useRoute } from "#imports";
import ButtonComponent from "../../components/common/ButtonComponent.vue";
const route = useRoute();
const showShortList = ref(false);
//showing shortList
const showShorts = () => {
  showShortList.value = true;
};
//hidding shortList
const hiddeShorts = () => {
  showShortList.value = false;
};
//changing grid
const defaultGrid=ref(4)
const fourGrid=()=>{
defaultGrid.value=4
}
const sixGrid=()=>{
defaultGrid.value=6
}
const routes=["Home","FilterProduct"]
const rangeChange=ref(1)
const shorts = [
  { name: "Most Populer", query: "populer" },
  { name: "Best Rating", query: "rating" },
  { name: "Newest", query: "newest" },
  { name: "Price:Low to High", query: "lowPrice" },
  { name: "Price:High to Low", query: "highPrice" },
];
</script>
<template>
  <ContainerComponent class="font-poppins">
    <!--heading-->
     <PageHeader
      :breadcrumbs="routes"
      pageName=""
      class="!border-b-0 !pb-0 !mb-0"
    />   
     <HeadingComponent
      titlePadding=""
      descriptionPadding=""
      containerClass=""
      title="Filter Page" />
      <hr class="w-full  border-b  border-neutral-40 mt-12" />
      <!--content-->
    <v-row class="mt-16">
      <v-col cols="12" lg="3" class="hidden lg:block">
      <input type="range" class="w-full accent-primary-200 cursor-pointer" 
      v-model="rangeChange"
      min="20"
      max="1000"
      >
      <div class="flex justify-between mt-2 w-full text-lg ">
 <span>Min: <span class="text-primary-200">৳20</span></span>
  <span>Max: <span class="text-primary-200">৳{{ rangeChange }}</span></span>
      </div>
      <ButtonComponent custom-class="w-full mt-2">Filter</ButtonComponent>       
      </v-col>      
      <!--rightSide-->
      <v-col cols="12" lg="9" class="flex flex-col gap-5 items-end">
        <section class=" flex gap-4">
          <div class="flex gap-2 items-end">
            <div class="relative">
              <span
                class="text-lg font-medium text-neutral-700 cursor-pointer"
                @click="showShorts"
                >Sort</span
              >

              <div
                class="py-3 shadow-xl absolute top-2 right-2 w-60 flex flex-col gap-2 z-10 bg-white"
                v-if="showShortList"
                
              >
                <div
                  v-for="short in shorts"
                  :key="short.query"
                  class="pl-5 py-2 text-neutral-80 hover:text-neutral-700 cursor-pointer transition-all duration-300 hover:bg-neutral-50"
                  :class="
                    route.query.sort === short.query
                      ? 'bg-neutral-50 text-neutral-700'
                      : ''
                  "
                >
                  <NuxtLink
                    :to="{ path: '/filter', query: { sort: short.query } }"
                  >
                    <span>{{ short.name }}</span>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <IconChevronDown
              stroke="2"
              size="20"
              class="transition-all duration-500"
              :class="showShortList === true ? 'rotate-180' : 'rotate-0'"
            />
          </div>
          <div class="lg:flex gap-1 cursor-pointer hidden ">
          <IconColumns3Filled   size-20 @click="fourGrid" />
          <IconColumns2Filled @click="sixGrid" size-20/>
          </div>
        </section>
        <v-row class="gap-y-6" @click="hiddeShorts">
      <v-col
            cols="12"
            sm="6"
            md="4"
            :lg="defaultGrid"
            v-for="product in categoryProducts.slice(0, 6)"
            :key="product.id"
            
          >
            <ProductCard
              :product="product"
              @wishlist-toggle="handleWishlistToggle"
              @image-change="handleImageChange"
            />
          </v-col>
          </v-row>
      </v-col>
    </v-row>     
  </ContainerComponent>
</template>
