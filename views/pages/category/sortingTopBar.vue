<script setup>
import { ref } from "vue";
import { IconChevronDown } from "@tabler/icons-vue";
import ButtonComponent from "../../../components/common/ButtonComponent.vue";
import CheckboxComponent from "../../../components/common/CheckboxComponent.vue";

const props = defineProps({
  ShowItems: Array,
  gridTypes: Array,
  showSortWindow: Boolean,
});

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

const selectedItemsCount = ref(9); // Set default value
const selectedGridType = ref(props.gridTypes[0].type); // Set default value
const isSortWindowShow = ref(false);

const emit = defineEmits(["count-selected", "grid-changed"]);

const selectCount = (count) => {
  selectedItemsCount.value = count;
  emit("count-selected", count);
};

const selectGrid = (type) => {
  selectedGridType.value = type;
  emit("grid-changed", type);
};

const handleSortSelection = (selectedKey, group) => {
  if (group === "names") {
    // Deselect all options in names group only
    sortOptionNames.forEach((option) => (option.selected = false));
    // Select the clicked option in names group
    const option = sortOptionNames.find((opt) => opt.key === selectedKey);
    if (option) option.selected = true;
  } else if (group === "prices") {
    // Deselect all options in prices group only
    sortOptionPrices.forEach((option) => (option.selected = false));
    // Select the clicked option in prices group
    const option = sortOptionPrices.find((opt) => opt.key === selectedKey);
    if (option) option.selected = true;
  }
};
</script>

<template>
  <div>
    <div
      class="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0"
    >
      <!-- Left Section - Title and Results -->
      <div class="font-poppins">
        <p
          class="text-neutral-700 text-lg sm:text-xl font-medium leading-[1] pb-2"
        >
          Keyboards
        </p>
        <p class="text-neutral-400 text-sm sm:text-base leading-[1]">
          1000 matches found
        </p>
      </div>

      <!-- Right Section - Controls -->
      <div class="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto">
        <!-- Show Items -->
        <div class="flex gap-2 items-center">
          <p class="text-sm sm:text-base whitespace-nowrap">Show Items:</p>
          <div class="flex gap-2">
            <span
              v-for="(count, index) in ShowItems"
              :key="index"
              @click="selectCount(count)"
              :class="[
                'px-2 py-1 border cursor-pointer transition-all duration-200 text-sm sm:text-base',
                selectedItemsCount === count
                  ? 'border-neutral-600 bg-neutral-600 text-white'
                  : 'border-neutral-500 text-neutral-600 hover:!border-neutral-600',
              ]"
            >
              {{ count }}
            </span>
          </div>
        </div>

        <!-- Grid Types -->
        <div
          class="hidden lg:flex lg:flex-col lg:items-center lg:justify-center"
        >
          <div class="flex gap-2 items-center">
            <p class="text-sm sm:text-base whitespace-nowrap">Grid:</p>
            <div class="flex gap-2">
              <span
                v-for="(type, index) in gridTypes"
                :key="index"
                @click="selectGrid(type.type)"
                :class="[
                  'px-1 py-1 border cursor-pointer transition-all duration-200',
                  selectedGridType === type.type
                    ? 'border-neutral-600 bg-neutral-600 text-white'
                    : 'border-neutral-500 text-neutral-600 hover:!border-neutral-600',
                ]"
              >
                <component :is="type.icon" class="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
            </div>
          </div>
        </div>

        <!-- Sort Button -->
        <div class="hidden lg:block">
          <ButtonComponent
            customClass="!border-[1px] !border-neutral-900"
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
      </div>
    </div>

    <div
      v-show="isSortWindowShow || showSortWindow"
      class="max-h-[18rem] border flex flex-col md:flex-row gap-4 !p-5 border-neutral-40 mt-5 overflow-y-scroll"
    >
      <!-- Sort Options Names Section -->
      <div class="w-full flex flex-col gap-3">
        <h5 class="font-medium text-gray-700 mb-1">Sort By</h5>
        <CheckboxComponent
          v-for="option in sortOptionNames"
          :key="option.key"
          v-model="option.selected"
          @update:modelValue="handleSortSelection(option.key, 'names')"
        >
          {{ option.label }}
        </CheckboxComponent>
      </div>

      <!-- Sort Options Prices Section -->
      <div class="w-full flex flex-col gap-3">
        <h5 class="font-medium text-gray-700 mb-1">Price</h5>
        <CheckboxComponent
          v-for="option in sortOptionPrices"
          :key="option.key"
          v-model="option.selected"
          @update:modelValue="handleSortSelection(option.key, 'prices')"
        >
          {{ option.label }}
        </CheckboxComponent>
      </div>
    </div>
  </div>
</template>
