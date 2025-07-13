<script setup>
import ProductCardsLayout from "../components/home/ProductCardsLayout.vue";
import BrandSection from "../views/pages/home/BrandSection.vue";
import HeroSection from "../views/pages/home/HeroSection.vue";

useHead({
  title: "Tech Diversity - Home",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>

<template>
  <div class="font-poppins">
    <HeroSection />
    <BrandSection />
    <ProductCardsLayout
      title="Featured Products"
      subTitle="Lorem ipsum dolor sit amet consectetur. Nibh sit duis vitae non imperdiet ut etiam in pellentesque. Amet malesuada vulputate euismod elementum in hac id nunc aliquam. Ut erat porttitor urna diam arcu curabitur. Ac mauris risus ultrices urna felis dui lobortis. Lorem ipsum."
    />
  </div>

</template>
