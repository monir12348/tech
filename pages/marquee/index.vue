<script setup>
import { ref } from "vue";
import ContainerComponent from "../../components/common/ContainerComponent.vue";
import logo_1 from "../../assets/images/logo2.png";
import logo_2 from "../../assets/images/logo3.png";
import logo_3 from "../../assets/images/logo4.png";

const reviews = ref([
  {
    id: 1,
    img: logo_1,
  },
  {
    id: 2,
    img: logo_2,
  },
  {
    id: 3,
    img: logo_3,
  },
]);

// Creating multiple sets for seamless loop
const duplicatedReviews = ref([
  ...reviews.value,
  ...reviews.value,
  ...reviews.value,
  ...reviews.value,
  ...reviews.value,
  ...reviews.value,
  ...reviews.value,
  ...reviews.value,
]);
</script>

<template>
  <ContainerComponent>
    <div class="relative flex w-full overflow-hidden py-16">
      <!-- Marquee container -->
      <div class="flex animate-marquee gap-5 relative z-0">
        <div
          v-for="(review, index) in duplicatedReviews"
          :key="`${review.id}-${index}`"
          class="min-w-64 w-64 cursor-pointer overflow-hidden p-4"
        >
          <img :src="review.img" class="w-36" />
        </div>
      </div>
      <div
        class="pointer-events-none absolute inset-y-0 left-0 w-1/16 bg-gradient-to-r from-white to-transparent z-10"
      ></div>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-1/16 bg-gradient-to-l from-white to-transparent z-10"
      ></div>
    </div>
  </ContainerComponent>
</template>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-25%);
  }
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 20s linear infinite;
  will-change: transform;
  transform: translateZ(0);
}

/* Pause animation on hover */
.animate-marquee:hover {
  animation-play-state: paused;
}
</style>
