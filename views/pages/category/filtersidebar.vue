<script setup>
import { ref } from "vue";
import AccordionComponent from "../../../components/common/AccordionComponent.vue";
import CheckboxComponent from "../../../components/common/CheckboxComponent.vue";
import ButtonComponent from "../../../components/common/ButtonComponent.vue";

const props = defineProps({
  filterOptions: {
    type: Array,
    default: () => [],
  },
  priceRange: {
    type: Object,
    default: () => ({
      min: 0,
      max: 10000,
      initialMin: 20,
      initialMax: 5000,
      step: 10,
    }),
  },
});

const emit = defineEmits(["filter-changed", "price-filter-applied"]);

const currentPriceRange = ref([
  props.priceRange.initialMin,
  props.priceRange.initialMax,
]);

const handleFilterSelection = (selectedKey, filterId) => {
  const updatedFilters = props.filterOptions.map((filterGroup) => {
    if (filterGroup.id === filterId) {
      const updatedOptions = filterGroup.options.map((option) => {
        if (option.key === selectedKey) {
          return {
            ...option,
            selected: !option.selected, // Toggle the selection
          };
        }
        return option;
      });

      return {
        ...filterGroup,
        options: updatedOptions,
      };
    }
    return filterGroup;
  });

  const filterObject = createFilterObject(updatedFilters);

  emit("filter-changed", {
    filterId,
    selectedKey,
    updatedFilters,
    filterObject,
  });
};

const createFilterObject = (filters) => {
  const filterObj = {};

  filters.forEach((filterGroup) => {
    const selectedOption = filterGroup.options.find(
      (option) => option.selected
    );
    if (selectedOption) {
      filterObj[filterGroup.id] = {
        key: selectedOption.key,
        label: selectedOption.label,
      };
    }
  });

  return filterObj;
};

const handlePriceRangeChange = (value) => {
  currentPriceRange.value = value;
};

const applyPriceFilter = () => {
  emit("price-filter-applied", {
    min: currentPriceRange.value[0],
    max: currentPriceRange.value[1],
    range: currentPriceRange.value,
  });
};

const resetPriceFilter = () => {
  currentPriceRange.value = [
    props.priceRange.initialMin,
    props.priceRange.initialMax,
  ];
  emit("price-filter-applied", {
    min: currentPriceRange.value[0],
    max: currentPriceRange.value[1],
    range: currentPriceRange.value,
    reset: true,
  });
};

const validateMinPrice = () => {
  if (currentPriceRange.value[0] > currentPriceRange.value[1]) {
    currentPriceRange.value[0] = currentPriceRange.value[1];
  }
  if (currentPriceRange.value[0] < props.priceRange.min) {
    currentPriceRange.value[0] = props.priceRange.min;
  }
};

const validateMaxPrice = () => {
  if (currentPriceRange.value[1] < currentPriceRange.value[0]) {
    currentPriceRange.value[1] = currentPriceRange.value[0];
  }
  if (currentPriceRange.value[1] > props.priceRange.max) {
    currentPriceRange.value[1] = props.priceRange.max;
  }
};
</script>

<template>
  <div class="flex flex-col gap-6">
    <!-- Price Range Filter Section -->
    <div class="w-full font-poppins p-6">
      <!-- Header -->
      <div class="mb-6">
        <h2
          class="text-xl font-bold text-gray-900 mb-3 pb-3 border-b border-b-neutral-40"
        >
          Filter By Price
        </h2>
      </div>

      <!-- Vuetify Range Slider -->
      <div class="mb-6 px-3">
        <v-range-slider
          v-model="currentPriceRange"
          :min="priceRange.min"
          :max="priceRange.max"
          :step="priceRange.step"
          color="#18b7c8"
          track-color="#949494"
          thumb-color="#18b7c8"
          thumb-size="16"
          track-size="4"
          class="custom-price-slider"
          hide-details
          @update:model-value="handlePriceRangeChange"
        />
      </div>

      <!-- Input Fields for Manual Entry -->
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2"
            >Min Price</label
          >
          <input
            v-model.number="currentPriceRange[0]"
            type="number"
            :min="priceRange.min"
            :max="currentPriceRange[1]"
            class="w-full px-3 py-2 border border-neutral-400 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-transparent text-sm"
            @input="validateMinPrice"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2"
            >Max Price</label
          >
          <input
            v-model.number="currentPriceRange[1]"
            type="number"
            :min="currentPriceRange[0]"
            :max="priceRange.max"
            class="w-full px-3 py-2 border border-neutral-400 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-transparent text-sm"
            @input="validateMaxPrice"
          />
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-3">
        <ButtonComponent padding="!py-2" width="100%" @click="applyPriceFilter">
          Apply Filter
        </ButtonComponent>
        <ButtonComponent
          padding="!py-2 px-5"
          btnBg="!bg-neutral-300"
          hoverBg="hover:!bg-neutral-300"
          textStyles="!text-neutral-700 font-semibold"
          @click="resetPriceFilter"
        >
          Reset
        </ButtonComponent>
      </div>
    </div>

    <!-- Filter Accordions Section -->
    <div class="flex flex-col gap-5">
      <AccordionComponent
        v-for="filterGroup in filterOptions"
        :key="filterGroup.id"
        :label="filterGroup.label"
        :byDefaultShow="true"
      >
        <div class="flex flex-col gap-2">
          <CheckboxComponent
            v-for="option in filterGroup.options"
            :key="option.key"
            @click="handleFilterSelection(option.key, filterGroup.id)"
            :modelValue="option.key"
          >
            {{ option.label }}
          </CheckboxComponent>
        </div>
      </AccordionComponent>
    </div>
  </div>
</template>

<style scoped>
/* Custom styles for Vuetify range slider */
:deep(.v-slider-track__background) {
  border-radius: 2px !important;
  opacity: 0.3 !important;
}

:deep(.v-slider-track__fill) {
  background: linear-gradient(90deg, #18b7c8, #18b7c8) !important;
}

/* Custom spacing for the slider */
.custom-price-slider {
  margin: 20px 0 !important;
}

/* Input number styling */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
