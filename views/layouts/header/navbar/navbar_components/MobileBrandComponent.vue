
<script setup>const activeName = ref('Dareu')

const menuCategory = [
  { id: 1, name: 'Dareu' },
  { id: 2, name: 'Thunderobot' },
  { id: 3, name: 'Machenike' },
  { id: 4, name: 'Yeston' },
  { id: 5, name: 'E-Yosoo' },
  { id: 6, name: 'Monka' },
  { id: 7, name: 'Wishlist' },
  { id: 8, name: 'Compare' }
]
</script>
<template>
    <div
        v-for="menu in menuCategory"
        :key="menu.id"
        @click="activeName = menu.name"
        class="w-full border-b-2 cursor-pointer  pl-4 border-neutral-30 py-3 text-[14px] hover:bg-neutral-700 hover:border-0 hover:text-neutral-0"
        :class="activeName === menu.name
          ? 'bg-neutral-700 text-neutral-0'
          : 'text-neutral-700 bg-none border-b-2'"
      >
        <span>{{ menu.name }}</span>
      </div>
</template>