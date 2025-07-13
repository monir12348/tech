<script setup>
import ContainerComponent from "../../components/common/ContainerComponent.vue";
import HeadingComponent from "../../components/common/HeadingComponent.vue";
import PageHeader from "../../components/common/PageHeader.vue";
import ProductCard from "../../components/common/ProductCard.vue";
import { categoryProducts } from "../../constants/ProductData";
import { IconDeviceGamepad2 } from "@tabler/icons-vue";
import { ref } from "vue";

const brandCategories =Array.from({length:12},(value,id)=>({
  id:id+1,
  icon:IconDeviceGamepad2,
  name:"Gaming Gadget"
}))
const activeCategory = ref(brandCategories[0].id || null);
const routes=["Home","Brand"]
</script>
<template>
  <div >
    <ContainerComponent>
     <PageHeader
      :breadcrumbs="routes"
      pageName=""
      class="!border-b-0 !pb-0 !mb-0 "
     >

     </PageHeader>
      <HeadingComponent 
      titlePadding=""
       descriptionPadding="pt-6"
       containerClass=""
      title="Our Brands"
      description="By using this website (https://techdiversitybd.com) you consent to the use of cookies in accordance with this Cookies Policy. You will have seen a pop up to this effect on your first visit to this website; although it will not usually appear on subsequent visits you may withdraw your consent at any time by following the instructions below.
">

      </HeadingComponent>
      <hr class="w-full  border-b  border-neutral-40 mt-12" />
      <!--category-->
        <v-row class="mt-13 font-opensans ">
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="2"
            v-for="item in brandCategories"
            :key="item.id"
          >
            <div
              @click="activeCategory = item.id"
              class="cursor-pointer flex flex-col gap-1 items-center text-[#575757] text-center  border-[#e3e3e3] px-9 py-9 hover:bg-primary-300 border  hover:text-white"
          
            >
              <component
                :is="item.icon"
                stroke="1"
                height="64"
                width="64"
              
              />
              <span
                :class="
                  activeCategory === item.id
                 
                "
                >{{ item.name }}</span
              >
            </div>
          </v-col>
        </v-row>
        <!--cardLayout-->
        <v-row class="gap-y-1 items-stretch mt-14">
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            xl="3"
            v-for="product in categoryProducts.slice(0, 8)"
            :key="product.id"
            class="flex"
          >
            <ProductCard
              :product="product"
              @wishlist-toggle="handleWishlistToggle"
              @image-change="handleImageChange"
            />
          </v-col>
        </v-row>
      
    </ContainerComponent>
  </div>
</template>
