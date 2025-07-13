<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  customClass: {
    type: String,
    default: "",
  },
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="inline-block">
    <label class="flex items-center gap-3 cursor-pointer group" :for="'check_'+ modelValue">
      <input
       :id="'check_'+ modelValue"
        type="checkbox"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
        :class="[
          'w-5 h-5 appearance-none ring-1 ring-neutral-50 ring-offset-1 bg-white transition-all duration-200 hover:ring-gray-600 cursor-pointer flex-shrink-0 mt-0.5 relative',
          'checked:after:content-[\'✓\'] checked:after:text-sm checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:font-bold',
          customClass,
        ]"
        :disabled="disabled"
        placeholder="Something"
      />
      <div class="text-gray-700 leading-relaxed select-none">
        <slot />
      </div>
    </label>
  </div>
</template>
