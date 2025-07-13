<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { IconSearch, IconX } from "@tabler/icons-vue"
import SearchResult from "./SearchResult.vue"

const searchText = ref('')

const showResult = ref(false)

const searchContainer = ref(null)

watch(searchText, (newVal) => {
  if (searchText.value.trim() !== '') {
    showResult.value = true
  } else {
    showResult.value = false
  }
})

function clearSearch() {
  searchText.value = ''
}

function handleInputFocus() {
  if (searchText.value.trim() !== '') {
    showResult.value = true
  }
}

function handleInputClick(event) {
  event.stopPropagation()
  if (searchText.value.trim() !== '') {
    showResult.value = true
  }
}

function handleOutsideClick(event) {
  if (searchContainer.value && !searchContainer.value.contains(event.target)) {
    showResult.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
})

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick)
})
</script>

<template>
  <div ref="searchContainer" class="w-full relative">
    <input
      v-model="searchText"
      @focus="handleInputFocus"
      @click="handleInputClick"
      type="text"
      placeholder="Search..."
      class="w-full pl-10 pr-10 !py-[10px] text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
    />
    <!-- Search Icon -->
    <IconSearch
      class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
    />
        
    <!-- Clear (X) Icon: only show when there is text -->
    <button
      v-if="searchText"
      @click="clearSearch"
      type="button"
      aria-label="Clear search"
      class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
    >
      <IconX class="w-5 h-5" />
    </button>

    <!-- Search results dropdown -->
      <SearchResult
        v-if="showResult"
        class="absolute top-8 left-3 z-50 w-full mt-1 "
      />
  </div>
</template>