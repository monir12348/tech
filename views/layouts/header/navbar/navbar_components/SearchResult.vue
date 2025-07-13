<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import searchImg from '../../../../../assets/images/search_product.png';
import { IconCurrencyTaka } from '@tabler/icons-vue';

const activeTab = ref('products');
const showResults = ref(true); // Add this to control visibility
const searchContainer = ref(null); // Template ref for the container

const searchDetails = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  search_img: searchImg,
  product_name: i % 2 === 0
    ? "Ajazz AK820 MAX Plus Tri-Mode Mechanical..."
    : "Ajazz AK680 Tri-Mode Mechanical...",
  product_price_item: "1",
  product_price_math: "x",
  product_price_current: "3,200.00"
}));

// Click outside handler
const handleClickOutside = (event) => {
  if (searchContainer.value && !searchContainer.value.contains(event.target)) {
    showResults.value = false;
  }
};

// Show results when clicking inside
const showSearchResults = () => {
  showResults.value = true;
};

// Lifecycle hooks
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <v-row>
    <v-col class="px-0">
      <div 
        ref="searchContainer"
        @click="showSearchResults"
        class="px-2 py-3 font-poppins bg-neutral-0 border border-t-0 border-gray-300"
        v-show="showResults"
      >
        <!-- Tabs -->
        <div class="flex gap-2">
          <div
            @click="activeTab = 'products'"
            class="py-1 px-3 font-semibold text-[14px] cursor-pointer"
            :class="activeTab === 'products' ? 'bg-neutral-700 text-neutral-0' : 'bg-neutral-30 text-neutral-700'"
          >
            Products
          </div>
          <div
            @click="activeTab = 'categories'"
            class="py-1 px-3 font-semibold text-[14px] cursor-pointer"
            :class="activeTab === 'categories' ? 'bg-neutral-700 text-neutral-0' : 'bg-neutral-30 text-neutral-700'"
          >
            Categories
          </div>
        </div>

        <!-- Results -->
        <div class="flex gap-2 mt-3">
          <div class="w-full">
            <div class="h-[250px] overflow-y-auto custom-scrollbar">
              <!-- Products Tab -->
              <div v-if="activeTab === 'products'" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 pr-2">
                <div
                  v-for="(item, index) in searchDetails"
                  :key="item.id"
                  :class="[
                    'flex items-center gap-[10px] pr-2 py-2',
                    'border-b-2 border-neutral-30' ,
                    index % 2 === 0 ? 'sm:border-r-2 border-neutral-30' : ''
                  ]"
                >
                  <img :src="item.search_img" alt="product" class="w-16 h-auto" />
                  <div>
                    <p class="text-[14px] font-medium">{{ item.product_name }}</p>
                    <div class="flex gap-[4px] text-[12px]">
                      <span class="font-medium text-neutral-100">{{ item.product_price_item }}</span>
                      <span class="font-medium text-neutral-100">{{ item.product_price_math }}</span>
                      <span class="font-semibold text-primary-300 flex items-center">
                        <IconCurrencyTaka size="16" />{{ item.product_price_current }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Categories Tab -->
              <div v-else class="grid grid-cols-1 pr-2">
                <div
                  v-for="(item, index) in searchDetails"
                  :key="item.id"
                  :class="[
                    'flex items-center gap-[10px] pr-2 py-2',
                    index < searchDetails.length - 1 ? 'border-b-2 border-neutral-30' : ''
                  ]"
                >
                  <img :src="item.search_img" alt="product" class="w-16 h-auto" />
                  <p class="text-[14px] font-medium">{{ item.product_name }}</p>
                </div>
              </div>
            </div>

            <!-- View All -->
            <NuxtLink to="#">
              <div class="mt-3 font-medium text-center border border-neutral-40 text-neutral-700 text-[14px] py-2 px-4">
                View All Results
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 3px;
  background: #e4e4e4;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #dedcdc;
  border-radius: 3px;
}

.custom-scrollbar:hover::-webkit-scrollbar-thumb {
  background: #18b7c8!important;
}
</style>