<script setup>
import ContainerComponent from "../../components/common/ContainerComponent.vue";
import Heading from "../../components/common/Heading.vue";
import HomelinkComponent from "../../components/common/HomelinkComponent.vue";
import ProductCardsLayout from "../../components/home/ProductCardsLayout.vue";
</script>

<template>
  <ContainerComponent >
    <HomelinkComponent backLink="/" currentLink="/offer">
      <template #backRoute>Home</template>
      <template #currentRoute>Offer</template>
    </HomelinkComponent>
    <Heading>
      <template #heading>Our Offers</template>
      <template #bodyText
        >By using this website <a href="https://techdiversitybd.com/" class="underline">(https://techdiversitybd.com)</a> you consent to the
        use of cookies in accordance with this Cookies Policy. You will have
        seen a pop up to this effect on your first visit to this website;
        although it will not usually appear on subsequent visits you may
        withdraw your consent at any time by following the instructions below.
      </template>
    </Heading>
  

    <div class="flex flex-col gap-40 mt-16">
      <img
        src="../../assets/images/banner.png"
        alt="Banner"
        class="block w-full h-auto"
      />
      <section>
      <ProductCardsLayout
        title="Featured Products"
        subTitle="Lorem ipsum dolor sit amet consectetur. Nibh sit duis vitae non imperdiet ut etiam in pellentesque. Amet malesuada vulputate euismod elementum in hac id nunc aliquam. Ut erat porttitor urna diam arcu curabitur. Ac mauris risus ultrices urna felis dui lobortis. Lorem ipsum."
      />

      <ProductCardsLayout
        title="Featured Products"
        subTitle="Lorem ipsum dolor sit amet consectetur. Nibh sit duis vitae non imperdiet ut etiam in pellentesque. Amet malesuada vulputate euismod elementum in hac id nunc aliquam. Ut erat porttitor urna diam arcu curabitur. Ac mauris risus ultrices urna felis dui lobortis. Lorem ipsum."
      />
      </section>
    </div>
  </ContainerComponent>
</template>
