<script setup>
import { ref, computed, watch } from "vue";
import ProductCard from "../../../components/common/ProductCard.vue";
import { categoryProducts } from "../../../constants/ProductData"; // 25 products here

const props = defineProps({
  itemsCount: {
    type: Number,
    default: 9,
  },
  gridType: {
    type: String,
    default: "large",
  },
});

const currentPage = ref(1);
const itemsPerPage = ref(props.itemsCount);
const productGridType = ref(props.gridType);

watch(
  [() => props.itemsCount, () => props.gridType],
  ([newItemsCount, newGridType]) => {
    itemsPerPage.value = newItemsCount;
    productGridType.value = newGridType;
    currentPage.value = 1;
  },
  { immediate: true }
);

const totalItems = computed(() => categoryProducts.length);
const totalPages = computed(() =>
  Math.ceil(totalItems.value / itemsPerPage.value)
);

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return categoryProducts.slice(start, end);
});

const handlePageChange = (page) => {
  currentPage.value = page;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const displayRange = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value + 1;
  const end = Math.min(
    currentPage.value * itemsPerPage.value,
    totalItems.value
  );
  return `${start}-${end} of ${totalItems.value}`;
});
</script>

<template>
  <div class="mt-8">
    <!-- Products Grid -->
    <v-row>
      <v-col
        cols="12"
        sm="6"
        :md="productGridType == 'default' ? 6 : 4"
        :lg="productGridType == 'default' ? 6 : 4"
        :xl="productGridType == 'default' ? 6 : 4"
        v-for="product in paginatedProducts"
        :key="product.id"
      >
        <ProductCard :product="product" />
      </v-col>
    </v-row>

    <!-- Pagination Controls -->
    <div
      class="mt-8 flex flex-col md:flex-row justify-between items-center gap-4"
    >
      <!-- Results info -->
      <div class="text-sm text-gray-600 font-poppins">
        Showing {{ displayRange }} products
      </div>

      <!-- Pagination -->
      <v-pagination
        v-model="currentPage"
        :length="totalPages"
        :total-visible="5"
        @update:model-value="handlePageChange"
        class="mt-4 md:!mt-0"
      />
    </div>
  </div>
</template>
