<script setup>
import ContainerComponent from "../../components/common/ContainerComponent.vue";
import PageHeader from "../../components/common/PageHeader.vue";
import HeadingComponent from "../../components/common/HeadingComponent.vue";
import UseFullPagesComponent from "../../components/common/useFullPagesComponent.vue";
const routes=["Home","Cookie Policy"]
</script>
<template>
  <ContainerComponent class="font-poppins">
        <PageHeader
      :breadcrumbs="routes"
      pageName=""
      class="!border-b-0 !pb-0 !mb-0"
   />
     <HeadingComponent
      titlePadding=""
      descriptionPadding=""
      containerClass=""
      title="Cookie Policy" />
      <hr class="w-full  border-b  border-neutral-40 mt-12" />
      <!--content-->
    <section class="!mt-[4.4375rem]">
     <UseFullPagesComponent>
      <template #heading>Consent</template>
      <template #bodytext>  By using this website (https://techdiversitybd.com) you consent to the
          use of cookies in accordance with this Cookies Policy. You will have
          seen a pop up to this effect on your first visit to this website;
          although it will not usually appear on subsequent visits you may
          withdraw your consent at any time by following the instructions below.</template>
     </UseFullPagesComponent> 
    </section>
    <!--disabling cookies-->
    <UseFullPagesComponent class="mt-5">
      <template #heading> Disabling Cookies</template>
      <template #bodytext> If you do not agree to the use of these cookies, please disable them by
        following the instructions for your browser set out here. Please note
        that some of the services may not function if cookies are disabled.
        <br />
        Where the organization setting the cookie provides an automated
        disabling tool in respect of its cookie(s) we list the name of that
        organization, and the category of cookies it sets together with a link
        to its automated disabling tool. In all other cases, we list the names
        of the cookies themselves and their source at the date of this Cookies
        policy so that you can easily identify and disable them if you want
        through your browser controls. Some browsers make it possible for you to
        signal that you do not want your internet browsing activity to be
        tracked. Disabling tracking may interfere with some uses of the Website
        and the services provided on the Website. <br />
        After your initial visit to the Website, we may change the cookies we
        use. This cookies policy will always allow you to know who is placing
        cookies, for what purpose the cookies are placed, and give you the means
        to disable them so you should check it from time to time.</template>
    </UseFullPagesComponent>
  </ContainerComponent>
</template>
