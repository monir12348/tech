<script setup>
import ContainerComponent from "../../components/common/ContainerComponent.vue";
import PageHeader from "../../components/common/PageHeader.vue";
import HeadingComponent from "../../components/common/HeadingComponent.vue";
import UseFullPagesComponent from "../../components/common/useFullPagesComponent.vue";
const routes = ["Home", "After Sales Policy"];
</script>
<template>
  <ContainerComponent>
    <PageHeader
      :breadcrumbs="routes"
      pageName=""
      class="!border-b-0 !pb-0 !mb-0"
    >
    </PageHeader>
    <HeadingComponent
      titlePadding=""
      descriptionPadding=""
      containerClass=""
      title="After Sales Policy"
    />
    <hr class="w-full border-b border-neutral-40 mt-12" />
    <section class="!mt-[4.4375rem]">
      <UseFullPagesComponent
        ><template #bodytext
          >Our first priority id to serve our customer’s need. After purchasing
          product you will get all documents that and we will provide full
          assistance if you are facing nay difficulties to use the product.
          Product return, and cancelation is not allowed getting the product on
          hands. In case of defective product, Tech diversity will take full
          responsibility. Customer can substitute the product before unboxing
          it. If customer change the order after getting product on their hand,
          they will bare transportation cost of substituting the
          product.</template
        ></UseFullPagesComponent
      >
    </section>
  </ContainerComponent>
</template>
