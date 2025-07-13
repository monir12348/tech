
<template>
  <div class="fixed bottom-0 w-full z-[999] ">
    <div class="bg-white py-4 px-7 border"  >
       <div class="flex justify-center align-center gap-10 items-center">
            <!-- Love -->
            <div class="relative">
              <NuxtLink to="/">
                <IconHome size="26" />
              </NuxtLink>
            </div> 
            <div class="relative hover:text-neutral-30 ">
              <NuxtLink to="#">
                <IconHeart size="26" />
                <span
                  class="absolute top-[-2px] left-5 h-[20px] w-[20px] text-center bg-primary-300 text-white text-[12px] leading-[20px] rounded-full"
                >
                  2
                </span>
              </NuxtLink>
            </div>

            <!-- Shuffle -->
            <div class="relative hover:text-neutral-30 ">
              <NuxtLink to="#">
                <IconArrowsShuffle size="26" />
                <span
                  class="absolute top-[-2px] left-5 h-[20px] w-[20px] text-center bg-primary-300 text-white text-[12px] leading-[20px] rounded-full"
                >
                  2
                </span>
              </NuxtLink>
            </div>

            <!-- Shopping Bag -->
            <div class="relative hover:text-neutral-30 ">
              <NuxtLink to="#">
                <IconShoppingBag size="26" />
                <span
                  class="absolute top-[-2px] left-5 h-[20px] w-[20px] text-center bg-primary-300 text-white text-[12px] leading-[20px] rounded-full"
                >
                  2
                </span>
              </NuxtLink>
            </div>
          </div>
    </div>
  </div>
</template>
