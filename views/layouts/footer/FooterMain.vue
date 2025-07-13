<script setup>
import logo from "../../assets/images/logo.png";
import FooterContact from "../footer/FooterContact.vue";
import FooterLink from "../footer/FooterLink.vue";
import FooterSupport from "./FooterSupport.vue";
import ContainerComponent from "../../../components/common/ContainerComponent.vue";
</script>

<template>
  <!--logo-->
  <ContainerComponent>
    <v-row class="py-15 overflow-x-hidden">
      <v-col xl="4" sm="6" cols="12" lg="3" class="ml-2 pl-sm-10 pl-lg-5 pl-xl-0 ml-sm-0 ml-xl-0">
        <div class="flex flex-col gap-6">
          <img :src="logo" alt="" class="w-64" />
          <div>
            <p class="font-poppins text-neutral-900 text-4">
              We mainly import goods from overseas. If anything crosses your
              mind feel free to knock us and allow us to make you happy by
              serving your desired product
            </p>
          </div>

          <div class="flex gap-6">
            <!--facebook-->
            <div>
              <a href="#" target="_blank">
                <img src="../../../assets/images/facebook.png" alt="facebook" /></a>
            </div>
            <!--end-->
            <!--instagram-->
            <div>
              <a href="#" target="_blank">
                <img src="../../../assets/images/insta.png" alt="insta" />
              </a>
            </div>
            <!--end-->
            <!--linkedin-->
            <div class="mt-1">
              <a href="#" target="_blank">
                <img src="../../../assets/images/linkdln.png" alt="linkdln" />
              </a>
            </div>
            <!--end-->
          </div>
        </div>
      </v-col>
      <v-col xl="3" sm="6" cols="12" lg="3" class="ml-2 pl-sm-10 pl-xl-15 pl-lg-5 pl-xl-0 ml-sm-0 ml-xl-0">
        <div class="flex items-center">
          <FooterLink />
        </div>
      </v-col>
      <v-col xl="2" sm="6" cols="12" lg="3" class="ml-2 pl-sm-10 pl-lg-5 pl-xl-0 ml-sm-0 ml-xl-0">
        <FooterSupport />
      </v-col>
      <v-col xl="3" sm="6" cols="12" lg="3" class="ml-2 pl-sm-10 pl-lg-5 pl-xl-0 ml-sm-0 ml-xl-0">
        <FooterContact />
      </v-col>
    </v-row>
  </ContainerComponent>
</template>
