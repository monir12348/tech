<script setup>
import { products } from "../../constants/ProductData";
import ContainerComponent from "../components/common/ContainerComponent.vue";
import ProductCard from "../common/ProductCard.vue";
import ButtonComponent from "../common/ButtonComponent.vue";
import { IconArrowNarrowRight } from "@tabler/icons-vue";

const handleWishlistToggle = (productId) => {
  console.log("Wishlist toggled for product:", productId);
  // Handle wishlist logic
};

const handleImageChange = ({ productId, imageUrl }) => {
  console.log("Image changed for product:", productId, "to:", imageUrl);
  // Handle image change logic
};

defineProps({
  title: {
    type: String,
    default: "Section Title",
  },
  subTitle: {
    type: String,
    default: "Section Subtitle",
  },
  btnPath: {
    type: String,
    default: "#",
  },


});
</script>

<template>
  <ContainerComponent>
    <div  style="margin-bottom: 11.25rem;">
      <div
     
        class="flex flex-col gap-8 mb-16 lg:flex-row lg:text-left font-poppins"
      >
        <div class="w-full">
          <p
            class="font-semibold lg:text-[2.5rem] text-[2rem] leading-[150%] text-neutral-700 mb-3"
          >
            {{ title }}
          </p>
          <p class="font-normal text-base leading-[150%] text-neutral-80">
            {{ subTitle }}
          </p>
        </div>
        <div>
          <ButtonComponent
            customClass="w-full !border-[1px] !border-neutral-900"
            btnBg="!bg-none"
            hoverBg="hover:!bg-neutral-30"
            textStyles="!text-neutral-700 font-normal w-[4rem]"
            :iconRight="IconArrowNarrowRight"
            :iconStyle="{ stroke: 2, size: 24 }"
          >
            View All
          </ButtonComponent>
        </div>
      </div>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="3"
          v-for="product in products"
          :key="product.id"
        >
          <ProductCard
            :product="product"
            @wishlist-toggle="handleWishlistToggle"
            @image-change="handleImageChange"
          />
        </v-col>
      </v-row>
    </div>
  </ContainerComponent>
</template>
