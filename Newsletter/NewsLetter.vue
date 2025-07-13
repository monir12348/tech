<script setup>
import Button from "../components/common/Button.vue";
import newsImg from "../../../../assets/images/newsImg.png";
import Marquee from "./Marquee.vue";
</script>

<template>
  <div>
    <!--part1-->
    <div class="pt-6">
      <div
        class="pl-5 gap-10 xl:gap-76 lg:gap-10  2xl:gap-32 flex lg:items-center items-end  justify-end flex-col sm:flex-row">
        <!--leftside-->
          <div class="flex flex-col px-3 gap-2 max-w-[600px] mb-5 font left-newsletter">
            <h1
              class="text-[var(--color-Black-900)] font-semibold text-[36px]  lg:text-[48px]"
            >
              Join Our Newsletter
            </h1>
            <h3
              class="text-[var(--color-Black-900)] text-[16px] sm:text-[16px] md:text-[16px]"
            >
              Sign up for deals, new products and promotions
            </h3>

            <!--input-->
            <div
              class="flex gap-[10px] py-3 border-b-1 border-[var(--color-primary-300)] w-full">
              <div class="flex items-center gap-2 px-3 w-full">
                <div class="py-2 px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-neutral-80)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-mail"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
                    />
                    <path d="M3 7l9 6l9 -6" />
                  </svg>
                </div>

                <input
                  type="text"
                  placeholder="Email address"
                  class="w-full text-[var(--color-neutral-04-100)] text-[16px] font2"
                />

                <Button
                  text="Sign Up"
                  borderRadius="0px"
                  backgroundColor="var(--color-primary-300)"
                  buttonPadding="0px 0px"
                  icon="ti ti-arrow-right"
                  class="text-[8px] sm:text-[14px] py-3 w-full sm:w-1/2 md:3/4 lg:w-1/2"
                />
              </div>
            </div>

            <!--end-->
          </div>
        <!--end-->
        <img
          :src="newsImg"
          alt=""
          class="w-[384px] text-end lg:w-[424px] sm:w-[250px] 2xl:w-[27rem] "
        />
      </div>
    </div>

    <!--end-->
    <Marquee class="mb-6" />
  </div>
</template>

<style scoped>
.font {
  font-family: var(--font-secondery);
}
.font2 {
  font-family: var(--font-primary);
}
.left-newsletter{
    margin-right: 18%;
}
</style>
