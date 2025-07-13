<script setup>
import { ref } from "vue";

import InputComponent from "../../components/common/InputComponent.vue";
import ButtonComponent from "../../components/common/ButtonComponent.vue";
import ContainerComponent from "../../components/common/ContainerComponent.vue";
import { useHead } from "nuxt/app";

const form = ref({
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  agreePolicy: "",
});

useHead({
  title: "Register Account - Tech Diversity",
  meta: [{ name: "description", content: "" }],
});
</script>

<template>
  <ContainerComponent>
    <div
      class="flex flex-col justify-center items-center !pt-[6.25rem] !pb-[8.25rem] font-poppins"
    >
      <div class="w-full lg:w-[35rem] flex flex-col justify-center">
        <div class="flex flex-col gap-6 pb-8">
          <p class="text-4xl font-medium text-neutral-900">Register account</p>
          <p class="text-base text-neutral-400">
            Already have an account?
            <NuxtLink to="/login" class="text-[#38CB89] font-semibold pl-1">
              Login
            </NuxtLink>
          </p>
        </div>

        <div class="flex flex-col gap-4">
          <InputComponent v-model="form.name" placeholder="Your name" />
          <InputComponent
            v-model="form.email"
            placeholder="Email address"
            type="email"
          />
          <InputComponent
            v-model="form.phone"
            placeholder="Phone number"
            type="tel"
          />
          <InputComponent
            v-model="form.password"
            placeholder="Password"
            type="password"
          />
          <InputComponent
            v-model="form.confirmPassword"
            placeholder="Confirm password"
            type="password"
          />
        </div>

        <div class="py-8 pl-1">
          <label class="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              v-model="form.agreePolicy"
              class="w-5 h-5 appearance-none border-2 border-gray-700 ring-1 ring-neutral-500 ring-offset-1 bg-white transition-all duration-200 hover:ring-gray-400 cursor-pointer flex-shrink-0 mt-0.5 relative checked:after:content-['✓'] checked:after:text-sm checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:font-bold"
            />
            <p
              class="flex items-center gap-1 leading-relaxed text-gray-700 select-none"
            >
              I agree with
              <span
                class="font-semibold transition-colors duration-200 cursor-pointer text-neutral-600 hover:text-neutral-100"
              >
                Privacy Policy
              </span>
              and
              <span
                class="font-semibold transition-colors duration-200 cursor-pointer text-neutral-600 hover:text-neutral-100"
              >
                Terms of Use
              </span>
            </p>
          </label>
        </div>

        <ButtonComponent customClass="w-full" to="/otp-verify">
          Register
        </ButtonComponent>
      </div>
    </div>
  </ContainerComponent>
</template>
