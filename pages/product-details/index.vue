<script setup>
import { ref, computed } from "vue";
import { IconStarFilled, IconStarHalf,IconChevronRight,IconChevronLeft } from "@tabler/icons-vue";
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import ContainerComponent from "../../components/common/ContainerComponent.vue";
import img_1 from "../assets/images/keyboard1.png";
import img_2 from "../assets/images/keyboard2.png";
import img_3 from "../assets/images/keyboard3.png";
const images = [
  {
    id: 1,
    img: img_1,
    imgDetails: [
      {
        id: 1,
        name: "Ajaj AK820 MAX Plus Tri-Mode Mechanical Keyboard",
        rating: 4.5,
        count: 100,
        brand: "Ajaj",
        category: "Keyboards",
        model: "AK208",
      },
    ],
  },
  {
    id: 2,
    img: img_2,
    imgDetails: [
      {
        id: 2,
        name: "Mir AK820 MAX Plus Tri-Mode Mechanical Keyboard",
        rating: 5,
        count: 100,
        brand: "Mir",
        category: "Keyboards",
        model: "AK208",
      },
    ],
  },
  {
    id: 3,
    img: img_3,
    imgDetails: [
      {
        id: 3,
        name: "Monir AK820 MAX Plus Tri-Mode Mechanical Keyboard ",
        rating: 4,
        count: 100,
        brand: "Monir",
        category: "Keyboards",
        model: "AK208",
      },
      
    ],
  },
   {
    id: 4,
    img: img_3,
    imgDetails: [
      {
        id: 4,
        name: "Monir AK820 MAX Plus Tri-Mode Mechanical Keyboard ",
        rating: 4,
        count: 100,
        brand: "Monir",
        category: "Keyboards",
        model: "AK208",
      },
      
    ],
  },

   {
    id: 5,
    img: img_3,
    imgDetails: [
      {
        id: 5,
        name: "Monir AK820 MAX Plus Tri-Mode Mechanical Keyboard ",
        rating: 4,
        count: 100,
        brand: "Monir",
        category: "Keyboards",
        model: "AK208",
      },
      
    ],
  },

   {
    id: 6,
    img: img_3,
    imgDetails: [
      {
        id: 6,
        name: "Monir AK820 MAX Plus Tri-Mode Mechanical Keyboard ",
        rating: 4,
        count: 100,
        brand: "Monir",
        category: "Keyboards",
        model: "AK208",
      },
      
    ],
  },

   {
    id: 7,
    img: img_3,
    imgDetails: [
      {
        id: 7,
        name: "Monir AK820 MAX Plus Tri-Mode Mechanical Keyboard ",
        rating: 4,
        count: 100,
        brand: "Monir",
        category: "Keyboards",
        model: "AK208",
      },
      
    ],
  },


   {
    id: 8,
    img: img_3,
    imgDetails: [
      {
        id: 8,
        name: "Monir AK820 MAX Plus Tri-Mode Mechanical Keyboard ",
        rating: 4,
        count: 100,
        brand: "Monir",
        category: "Keyboards",
        model: "AK208",
      },
      
    ],
  },
   {
    id: 9,
    img: img_3,
    imgDetails: [
      {
        id: 9,
        name: "Monir AK820 MAX Plus Tri-Mode Mechanical Keyboard ",
        rating: 4,
        count: 100,
        brand: "Monir",
        category: "Keyboards",
        model: "AK208",
      },
      
    ],
  },
];
const imgSlide = ref(0);
const imgDescription = computed(() => {
  return images[imgSlide.value]?.imgDetails || [];
});
const belowImg=ref()
const scrollSmoothly = (target, distance, step = 2, interval = 5) => {
  let scrolled = 0;
  const direction = Math.sign(distance);
  const scrollInterval = setInterval(() => {
    target.scrollBy({ left: step * direction });
    scrolled += step;
    if (Math.abs(scrolled) >= Math.abs(distance)) {
      clearInterval(scrollInterval);
    }
  }, interval);
};
const leftSlide=()=>{
   scrollSmoothly(belowImg.value, 100,1,5);
}
const rightSlide=()=>{
  scrollSmoothly(belowImg.value, -100,1,5);
}
</script>
<template>
  <ContainerComponent class="font-poppins pb-10">
    <div class="grid grid-cols-12 gap-4 mt-12">
      <!--image content-->
      <div class="col-span-12 lg:col-span-6 w-full flex flex-col gap-5">
        <Carousel
          :items-to-show="1"
          v-model="imgSlide"
          :wrap-around="true"
          :autoplay="false"
          :mouse-drag="true"
          :pause-autoplay-on-hover="true"
          class="relative"
        >
          <Slide v-for="img in images" :key="img.id">
            <Magnifier
              :src="img.img"
              :zoom-scale="3"
              :size="250"
              class="w-full h-180 object-cover"
            />
            <div
              class="flex flex-col gap-2 text-center items-start absolute left-3 top-3 z-50"
            >
              <span class="bg-sky-500 text-sm py-2 px-2">Best Seller</span>
              <span
                class="border-2 border-sky-500 text-sm font-medium py-2 px-3"
                >New</span
              >
              <span
                class="bg-green-600 text-sm text-white font-medium py-2 px-3"
                >50%</span
              >
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
        <!--thumbnail-->
        <section class="relative" >
        <div class="flex gap-4 overflow-x-scroll hide-scrollbar pb-10 cursor-pointer " ref="belowImg">
          <div
            v-for="(img, index) in images"
            :key="img.id" 
            @click="imgSlide = index"
            class="min-w-24 flex items-center justify-center " 
            :class="
              imgSlide === index ? 'border-2 border-neutral-80' : 'border-0'
            "
          >
            <img :src="img.img" alt="" class="w-20 h-20" />
          </div>
        </div>
        
       <IconChevronLeft 
       @click="rightSlide"
       stroke='2'
       size="24" 
       class="absolute left-0 bottom-19 cursor-pointer z-50"
       />
      <IconChevronRight
      @click="leftSlide" 
       stroke='2'
       size="24"
       class="absolute right-0 bottom-20 cursor-pointer z-50"
        />
    
        </section>
      </div>
      <!--imgdescription-->
      <div
        class="col-span-12 lg:col-span-6 w-full"
        v-for="detail in imgDescription"
        :key="detail.id"
      >
        <p class="text-xl sm:text-3xl leading-base">{{ detail.name }}</p>
        <div class="mt-3 flex items-center gap-1">
          <!--starIcon for rating-->
          <div v-for="star in 5" :key="star" class="flex items-center">
            <IconStarFilled
              v-if="star <= detail.rating"
              size="16"
              class="text-neutral-700"
            />
            <IconStarHalf
              v-if="star - 0.5 === detail.rating"
              size="16"
              class="text-neutral-700"
            />
          </div>
          <span class="text-sm text-neutral-100 font-medium">{{
            detail.rating
          }}</span
          ><span class="text-sm text-neutral-100 font-medium"
            >({{ detail.count }})</span
          >
        </div>
        <!--brandModel-->
        <div class="flex gap-3 flex-wrap mt-5">
          <div
            class="py-3 px-3 border-2 border-neutral-40 text-xs text-neutral-700 leading-0"
          >
            <span class="text-neutral-200">Brand: </span>{{ detail.brand }}
          </div>
          <div
            class="py-3 px-3 border-2 border-neutral-40 text-xs text-neutral-700 leading-0"
          >
            <span class="text-neutral-200">Category: </span
            >{{ detail.category }}
          </div>
          <div
            class="py-3 px-3 border-2 border-neutral-40 text-xs text-neutral-700 leading-0"
          >
            <span class="text-neutral-200">Model: </span>{{ detail.model }}
          </div>
        </div>
        <hr class="border-b border-neutral-40 w-full h-[1px] bg-none mt-4"/>
           <div class="flex gap-4 pb-10 cursor-pointer mt-2">
          <div
            v-for="(img, index) in images"
            :key="img.id"
            @click="imgSlide = index" 
            :class="
              imgSlide === index ? 'border-2 border-neutral-80' : 'border-0'
            "
          >
            <img :src="img.img" alt="" class="w-10 h-10" />
          </div>
        </div>
        
      </div>
    </div>
  </ContainerComponent>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
} 
</style>