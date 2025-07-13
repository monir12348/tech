<script setup>
import { reactive, ref } from "vue";
import {
  IconChevronRight,
  IconLayoutGridFilled,
  IconGridDots,
  IconChevronDown,
  IconFilter2,
  IconX,
} from "@tabler/icons-vue";

import ContainerComponent from "../../components/common/ContainerComponent.vue";
import SortingTopBar from "../../views/pages/category/SortingTopBar.vue";
import Products from "../../views/pages/category/Products.vue";
import FilterSidebar from "../../views/pages/category/FilterSidebar.vue";
import ButtonComponent from "../../components/common/ButtonComponent.vue";

const routes = ["Home", "Category", "Keyboards"];
const ShowItems = [9, 12, 14];
const gridTypes = [
  {
    type: "large",
    icon: IconGridDots,
  },
  {
    type: "default",
    icon: IconLayoutGridFilled,
  },
];
const showItemCount = ref(ShowItems[0]);
const showGridType = ref(gridTypes[0].type);

const sortOptionNames = reactive([
  { key: "default", label: "Default", selected: true },
  { key: "popularity", label: "Popularity", selected: false },
  { key: "averageRating", label: "Average Rating", selected: false },
  { key: "newness", label: "Newness", selected: false },
]);

const sortOptionPrices = reactive([
  { key: "priceLowToHigh", label: "Price: Low to High", selected: false },
  { key: "priceHighToLow", label: "Price: High to Low", selected: false },
]);

const filterOptions = ref([
  {
    id: "brands",
    label: "Brands",
    options: [
      { key: "apple", label: "Apple", selected: false },
      { key: "samsung", label: "Samsung", selected: true },
      { key: "google", label: "Google", selected: false },
      { key: "oneplus", label: "OnePlus", selected: false },
      { key: "oneplus", label: "OnePlus", selected: false },
    ],
  },
  {
    id: "categories",
    label: "Categories",
    options: [
      { key: "smartphones", label: "Smartphones", selected: false },
      { key: "laptops", label: "Laptops", selected: false },
      { key: "tablets", label: "Tablets", selected: true },
      { key: "accessories", label: "Accessories", selected: false },
    ],
  },
  {
    id: "price_range",
    label: "Price Range",
    options: [
      { key: "under_100", label: "Under $100", selected: false },
      { key: "100_300", label: "$100 - $300", selected: false },
      { key: "300_500", label: "$300 - $500", selected: true },
      { key: "above_500", label: "Above $500", selected: false },
    ],
  },
  {
    id: "ratings",
    label: "Customer Ratings",
    options: [
      { key: "5_stars", label: "5 Stars", selected: false },
      { key: "4_plus", label: "4+ Stars", selected: false },
      { key: "3_plus", label: "3+ Stars", selected: true },
      { key: "all", label: "All Ratings", selected: false },
    ],
  },
]);

// Mobile filter visibility
const isMobileFilterOpen = ref(false);
const isSortWindowShow = ref(false);

const handleFilterChange = ({
  filterId,
  selectedKey,
  updatedFilters,
  filterObject,
}) => {
  console.log("Filter changed:", {
    filterId,
    selectedKey,
    filterObject,
  });

  // Update the filter options
  filterOptions.value = updatedFilters;

  // Apply filtering logic here
  applyFilters(filterObject);
};

const applyFilters = (filters) => {
  console.log("Applying filters:", filters);
  // Implement your filtering logic here
};

const toggleMobileFilter = () => {
  isMobileFilterOpen.value = !isMobileFilterOpen.value;
};

useHead({
  title: "Keyboards - Search Result",
  meta: [{ name: "description", content: "My amazing site." }],
});

const handleCountSelected = (count) => {
  // console.log("Selected count:", count);
  showItemCount.value = count;
};
const handleGridSelected = (type) => {
  // console.log("Selected grid:", type);
  showGridType.value = type;
};
</script>

<template>
  <ContainerComponent>
    <div class="w-full font-poppins !mb-[11.25rem]">
      <!-- Breadcrumb and Title Section -->
      <!-- mt-6 md:mt-10 pb-6 md:pb-9 mb-6 md:mb-9 -->
      <div
        class="flex flex-col items-center justify-center font-poppins gap-5 !mt-13.5 pb-12 mb-9 border-b border-b-neutral-40"
      >
        <div
          class="max-w-[25rem] flex flex-col items-center justify-center gap-5 leading-[1]"
        >
          <p
            class="text-xs md:text-sm flex gap-2 flex-wrap items-center justify-center text-center"
          >
            <router-link
              to="#"
              v-for="(route, index) in routes"
              :key="index"
              class="flex gap-1 items-center !text-neutral-500 hover:!text-neutral-600"
            >
              {{ route }}
              <IconChevronRight
                v-if="index !== routes.length - 1"
                :stroke="1"
                :size="16"
              />
            </router-link>
          </p>
          <h2 class="font-medium leading-[1] text-4xl lg:text-5xl text-center">
            {{ "Keyboards" }}
          </h2>
        </div>
      </div>

      <!-- Main Content -->
      <div class="w-full">
        <!-- Mobile Filter Toggle Button -->
        <div
          class="lg:hidden flex justify-between pb-4 mb-4 border-b border-b-neutral-50"
        >
          <ButtonComponent
            customClass="!border-[1px] !border-neutral-50"
            btnBg="bg-none"
            padding="py-2 px-4"
            hoverBg="hover:bg-neutral-30"
            textStyles="!text-neutral-700 text-sm"
            :iconRight="IconFilter2"
            :iconStyle="{ stroke: 1, size: 20 }"
            @click="toggleMobileFilter"
          >
            Filters
          </ButtonComponent>
          <ButtonComponent
            customClass="!border-[1px] !border-neutral-50"
            btnBg="bg-none"
            padding="py-2 px-4"
            hoverBg="hover:bg-neutral-30"
            textStyles="!text-neutral-700 text-sm"
            :iconRight="IconChevronDown"
            :iconStyle="{ stroke: 1, size: 20 }"
            @click="isSortWindowShow = !isSortWindowShow"
          >
            Sort By
          </ButtonComponent>
        </div>

        <!-- Desktop Layout - using v-row/v-col -->
        <!-- Sidebar - Desktop Only -->
        <div class="hidden lg:flex lg:gap-6 xl:gap-8">
          <v-row class="flex-1" no-gutters>
            <!-- Sidebar Column -->
            <v-col xl="3" lg="3" md="3">
              <div class="sticky top-4 pr-6 xl:pr-8">
                <FilterSidebar
                  :filter-options="filterOptions"
                  @filter-changed="handleFilterChange"
                />
              </div>
            </v-col>

            <!-- Main Content Column -->
            <v-col xl="9" lg="9" md="9">
              <div>
                <SortingTopBar
                  @count-selected="handleCountSelected"
                  @grid-changed="handleGridSelected"
                  :ShowItems="ShowItems"
                  :gridTypes="gridTypes"
                  :nameOptions="sortOptionNames"
                  :priceOptions="sortOptionPrices"
                />
                <Products
                  :itemsCount="showItemCount"
                  :gridType="showGridType"
                />
              </div>
            </v-col>
          </v-row>
        </div>

        <!-- Mobile Layout -->
        <div class="lg:hidden">
          <!-- Mobile Filter Overlay -->
          <div
            v-if="isMobileFilterOpen"
            class="fixed inset-0 z-50 overflow-hidden"
          >
            <!-- Backdrop -->
            <div
              class="absolute inset-0 bg-neutral-600/70 bg-opacity-50"
              @click="toggleMobileFilter"
            />

            <!-- Filter Sidebar -->
            <div
              class="absolute top-0 left-0 h-full px-4 pt-4 w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto"
            >
              <div
                class="!py-2 pb-4 mb-4 border-b border-gray-200 flex items-center justify-between"
              >
                <h3 class="text-lg font-semibold text-gray-900">Filters</h3>
                <button
                  @click="toggleMobileFilter"
                  class="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <IconX stroke="{2}" />
                </button>
              </div>
              <div class="p-4">
                <FilterSidebar
                  :filter-options="filterOptions"
                  @filter-changed="handleFilterChange"
                />
              </div>
            </div>
          </div>

          <!-- Mobile Content -->
          <div class="px-4 space-y-4 md:space-y-6">
            <SortingTopBar
              @count-selected="handleCountSelected"
              :ShowItems="ShowItems"
              :gridTypes="gridTypes"
              :nameOptions="sortOptionNames"
              :priceOptions="sortOptionPrices"
              :showSortWindow="isSortWindowShow"
            />
            <Products :itemsCount="showItemCount" />
          </div>
        </div>
      </div>
    </div>
  </ContainerComponent>
</template>
