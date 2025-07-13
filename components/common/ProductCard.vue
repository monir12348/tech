<script setup>
import { ref, computed } from "vue";
import {
  IconStarFilled,
  IconHeart,
  IconArrowNarrowRight,
  IconZoom,
  IconArrowsShuffle,
} from "@tabler/icons-vue";
import ButtonComponent from "./ButtonComponent.vue";

// Props
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

// Emits
const emit = defineEmits(["wishlist-toggle", "image-change", "card-click"]);

// Reactive data
const selectedImage = ref(null);

// Computed
const currentImage = computed(() => {
  return selectedImage.value || props.product.thumbnail;
});

// Methods
const changeImage = (imageUrl) => {
  selectedImage.value = imageUrl;
  emit("image-change", { productId: props.product.id, imageUrl });
};

const toggleWishlist = () => {
  emit("wishlist-toggle", props.product.id);
};
</script>

<template>
  <div class="relative flex flex-col gap-6 font-poppins">
    <div class="flex flex-col gap-3">
      <!-- Image + Overlay container -->
      <div
        class="group relative cursor-pointer overflow-hidden px-[10px] py-[10px]"
      >
        <!-- Image -->
        <img
          :src="currentImage"
          :alt="product.name"
          class="w-full cursor-pointer"
        />

        <!-- Top-right Wishlist icon -->
        <div class="absolute top-3 right-3 py-[6px]">
          <!-- Heart Icon -->
          <IconHeart
            :stroke="2"
            class="cursor-pointer hover:text-red-500 transition-colors"
            @click="toggleWishlist"
          />
        </div>

        <!-- Top-left Badges -->
        <div
          class="flex flex-col box-border text-[14px] gap-2 absolute top-3 left-3 items-start"
        >
          <div
            v-if="product.popolarity"
            class="py-2 px-2 font-medium bg-primary-200 text-neutral-700 leading-[1]"
          >
            {{ product.popolarity }}
          </div>
          <div
            v-if="product.status"
            class="px-2 py-2 font-medium shadow-inner border-1 border-primary-200 text-neutral-700 leading-[1]"
          >
            {{ product.status }}
          </div>
          <div
            v-if="product.discount"
            class="py-2 px-2 font-medium bg-[#38CB89] text-white leading-[1]"
          >
            {{ product.discount }}
          </div>
        </div>

        <!-- Bottom buttons -->
        <div
          class="absolute transition-all duration-500 translate-y-10 opacity-1 group-hover:opacity-70 group-hover:translate-y-0 w-full bottom-0 px-3 py-3 flex justify-center overflow-hidden gap-[10px]"
        >
          <ButtonComponent
            width="100%"
            padding="py-3"
            customClass="w-full bg-neutral-700/70 hover:bg-neutral-600"
            textStyles="text-sm"
            :iconLeft="IconZoom"
            :iconStyle="{ stroke: 2, size: 18, color: '#fff' }"
          >
            Quick View
          </ButtonComponent>
          <ButtonComponent
            width="100%"
            padding="py-3"
            customClass="w-full bg-neutral-700/70 hover:bg-neutral-600"
            textStyles="text-sm"
            :iconLeft="IconArrowsShuffle"
            :iconStyle="{ stroke: 2, size: 18, color: '#fff' }"
          >
            Compare
          </ButtonComponent>
        </div>
      </div>

      <!-- Content below the image -->
      <div class="flex gap-3 w-full" v-if="product.attribute_images?.length">
        <div
          v-for="img in product.attribute_images"
          :key="img.id"
          class="cursor-pointer hover:opacity-70 transition-opacity w-[3.5rem] h-[3.5rem]"
        >
          <img
            :src="img.image"
            :alt="`${product.name} variant`"
            @click="changeImage(img.image)"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    <!-- Content below card -->
    <div class="flex flex-col gap-3">
      <div
        class="flex flex-col items-start border-b border-neutral-60 gap-4 pb-6"
      >
        <a href="#">
          <p
            class="text-xl h-[3.5rem] cursor-pointer font-medium text-neutral-700 line-clamp-2"
          >
            {{ product.name }}
          </p>
        </a>

        <!-- Rating -->
        <div class="flex items-center gap-2" v-if="product.avg_rating">
          <div class="flex items-center gap-1">
            <IconStarFilled
              v-for="star in Math.floor(product.avg_rating)"
              :key="`star-${star}`"
              size="14"
              class="text-neutral-800"
            />
          </div>
          <span class="text-sm text-neutral-100 font-medium">
            {{ product.avg_rating }} ({{ product.rating_count }})
          </span>
        </div>

        <!-- Category -->
        <div
          v-if="product.category"
          class="px-2 py-2 border  border-neutral-80 text-neutral-80 hover:border-neutral-600 hover:text-neutral-600 leading-[1]"
        >
          <a href="#">
            {{ product.category }}
          </a>
        </div>
      </div>

      <!-- Price -->
      <p
        class="text-sm font-poppins flex items-center text-neutral-900 font-semibold leading-[1]"
      >
        <span class="font-semibold text-lg">{{ product.price_range }}</span>
        <span
          v-if="product.actual_price"
          class="ml-3 font-normal line-through text-neutral-04-100 leading-[1]"
        >
          ৳ {{ product.actual_price }}
        </span>
      </p>
    </div>

    <ButtonComponent
      customClass="w-full bg-neutral-900 hover:bg-neutral-600"
      :iconRight="IconArrowNarrowRight"
      :iconStyle="{ stroke: 2, size: 18, color: '#fff' }"
    >
      View Details
    </ButtonComponent>
  </div>
</template>
