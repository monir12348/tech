<script setup>
import { ref, computed } from "vue";
import {
  IconEye,
  IconEyeOff,
  IconChevronDown,
} from "@tabler/icons-vue";

const props = defineProps({
  modelValue: [String, Number],
  placeholder: String,
  label: String,
  type: {
    type: String,
    default: "text",
  },
  customClass: {
    type: String,
    default: null,
  },
  error: {
    type: String,
    default: null,
  },
  options: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits([
  "update:modelValue",
  "focus",
  "blur",
  "keydown",
  "keyup",
]);

const showPassword = ref(false);
const isFocused = ref(false);

const model = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
</script>

<template>
  <div class="relative w-full">
    <!-- Label -->
    <label
      v-if="label"
      class="block mb-2 text-sm font-semibold uppercase text-neutral-700"
    >
      {{ label }}<span class="text-neutral-700">*</span>
    </label>

    <!-- Text / Password Input -->
    <input
      v-if="type !== 'select'"
      :type="showPassword ? 'text' : type"
      v-model="model"
      :placeholder="placeholder"
      :class="[
        'w-full px-1 pb-2 pt-4 text-sm outline-none border-b transition-colors duration-200',
        error
          ? '!border-red-500 focus:!border-red-500'
          : '!border-gray-300 focus:!border-b-neutral-07-100',
        customClass,
        type === 'password' ? 'pr-8' : '',
      ]"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      @keydown="$emit('keydown', $event)"
      @keyup="$emit('keyup', $event)"
    />

    <!-- Select Input with Chevron -->
    <div v-else class="relative">
      <select
        v-model="model"
        :class="[
          'w-full appearance-none px-1 pb-2 pt-4 text-sm outline-none border-b transition-colors duration-200',
          error
            ? '!border-red-500 focus:!border-red-500'
            : '!border-gray-300 focus:!border-b-neutral-07-100',
          customClass,
        ]"
        @focus="isFocused = true; $emit('focus', $event)"
        @blur="isFocused = false; $emit('blur', $event)"
      >
        <option value="" disabled selected hidden>
          {{ placeholder || 'Select an option' }}
        </option>
        <option
          v-for="(option, index) in options"
          :key="index"
          :value="option.value ?? option"
        >
          {{ option.label ?? option }}
        </option>
      </select>

      <!-- Chevron icon with rotation on focus -->
      <IconChevronDown
        :class="[
          'absolute  right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 transition-transform duration-300',
          isFocused ? 'rotate-180' : 'rotate-0',
        ]"
        :size="18"
      />
    </div>

    <!-- Password Toggle Icon -->
    <button
      v-if="type === 'password'"
      type="button"
      @click="showPassword = !showPassword"
      class="absolute text-gray-500 transform -translate-y-1/2 right-1 top-1/2 hover:text-black"
    >
      <IconEye v-if="showPassword" :stroke="2" class="w-5 h-5" />
      <IconEyeOff v-else :stroke="2" class="w-5 h-5" />
    </button>

    <!-- Error Message -->
    <p v-if="error" class="mt-1 text-xs text-red-500 animate-fade-in">
      {{ error }}
    </p>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.2s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
