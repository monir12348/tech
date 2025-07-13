<script setup>
import ContainerComponent from '../../components/common/ContainerComponent.vue';
import Heading from '../../components/common/Heading.vue';
import HomelinkComponent from '../../components/common/HomelinkComponent.vue';
import certificate from '../../assets/images/brandCertificate.png'
const affiliateCertificate=Array.from({length:9},(value,id)=>({
    id:id+1,
    img:certificate
}))

</script>

<template>
    <div>
      <ContainerComponent>
        <HomelinkComponent
        backLink="/"
        currentLink="/affiliatebrands">
            <template #backRoute>Home</template>
            <template #currentRoute>Affiliates</template>
        </HomelinkComponent>
        <Heading>
            <template #heading> Affiliate Brands</template>
            <template #bodyText> By using this website (https://techdiversitybd.com) you consent to the use of cookies in accordance with this Cookies Policy. You will have seen a pop up to this effect on your first visit to this website; although it will not usually appear on subsequent visits you may withdraw your consent at any time by following the instructions below.
</template>
        </Heading>
         
          <div class="px-5 py-5 bg-[#18B7C880]  mt-16">
          <v-row class="gap-y-6">
            <v-col cols="12" sm="6" md="4" lg="4" v-for="img in affiliateCertificate" :key="img.id">
              <img :src="img.img" alt="" >  
            </v-col>
          </v-row>
          </div>
      </ContainerComponent>
    </div>
</template>