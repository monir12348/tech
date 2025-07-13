<script setup>
import "vue3-carousel/carousel.css";
import ContainerComponent from "../../../components/common/ContainerComponent.vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

import { IconArrowLeft } from "@tabler/icons-vue";
import { IconArrowRight } from "@tabler/icons-vue";

import heroImg from "../../../assets/images/hero.png";
import heroImg2 from "../../../assets/images/heroImg_2.png";
import heroImg3 from "../../../assets/images/heroimg_3.png";

const images = [
  {
    id: 1,
    img: heroImg,
  },
  {
    id: 2,
    img: heroImg,
  },
  {
    id: 3,
    img: heroImg,
  },
  {
    id: 4,
    img: heroImg,
  },
];
</script>

<template>
  <ContainerComponent>
    <v-row class="mt-8" style="margin-bottom: 6.25rem;">
      <!-- Left Column: Main Image -->
      <v-col cols="12" md="7" class="mb-4 mb-md-0">
        <v-responsive aspect-ratio="16/9" class="h-100">
          <Carousel
            :items-to-show="1"
            :wrap-around="true"
            :autoplay="3000"
            :mouse-drag="true"
            :pause-autoplay-on-hover="true"
            class="overflow-hidden h-full"
            style="height: 100%"
          >
            <Slide v-for="item in images" :key="item.id">
              <router-link class="h-full" to="#">
                <img
                  :src="item.img"
                  alt=""
                  class="w-full h-full object-cover"
                />
              </router-link>
            </Slide>

            <template #addons>
              <Navigation>
                <template #prev>
                  <IconArrowLeft />
                </template>
                <template #next>
                  <IconArrowRight />
                </template>
              </Navigation>
              <Pagination />
            </template>
          </Carousel>
        </v-responsive>
      </v-col>

      <!-- Right Column: 1 image on top, 2 images below -->
      <v-col cols="12" md="5" class="flex flex-column" style="gap: 24px">
        <!-- Top Image -->
        <v-responsive aspect-ratio="16/5" class="mb-2">
          <router-link to="#">
            <img
              :src="heroImg2"
              alt="Top Right"
              class="w-100 h-100 object-cover"
            />
          </router-link>
        </v-responsive>

        <!-- Bottom Row: 2 images side by side -->
        <v-row>
          <v-col cols="6">
            <v-responsive aspect-ratio="1/1">
              <router-link to="#">
                <img
                  :src="heroImg3"
                  alt="Bottom Left"
                  class="w-100 h-100 object-cover"
                />
              </router-link>
            </v-responsive>
          </v-col>
          <v-col cols="6">
            <v-responsive aspect-ratio="1/1">
              <router-link to="#">
                <img
                  :src="heroImg3"
                  alt="Bottom Right"
                  class="w-100 h-100 object-cover"
                />
              </router-link>
            </v-responsive>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </ContainerComponent>
</template>

<style scoped>
:deep(.carousel__pagination-button) {
  background-color: #bfbfbf !important;
  width: 26px;
  height: 6px;
  margin-left: 4px;
  margin-bottom: 20px;
}

:deep(.carousel__pagination-button--active) {
  background-color: #18b7c8 !important;
  width: 54px;
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  width: 40px;
  height: 40px;
  margin-left: 1.2rem;
  margin-right: 1.2rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: white;
}
</style>
