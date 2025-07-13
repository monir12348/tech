<script setup>
import { ref } from "vue";
import { useHead } from "nuxt/app";

import InputComponent from "../../components/common/InputComponent.vue";
import ButtonComponent from "../../components/common/ButtonComponent.vue";
import ContainerComponent from "../../components/common/ContainerComponent.vue";

const email = ref("");
const password = ref("");
const emailError = ref("");

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value && !emailRegex.test(email.value)) {
    emailError.value = "Please enter a valid email address";
  } else {
    emailError.value = "";
  }
};

useHead({
  title: "Login - Tech Diversity",
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
          <p class="font-medium text-4xl text-neutral-900">
            Login to your account
          </p>
          <p class="text-base text-neutral-400">
            Don’t have an account yet?
            <router-link
              to="/register"
              class="text-[#38CB89] font-semibold pl-1"
            >
              Register
            </router-link>
          </p>
        </div>

        <div class="flex flex-col gap-4 pb-8">
          <!-- Email input with validation -->
          <InputComponent
            v-model="email"
            type="email"
            placeholder="Email address"
            required
            :error="emailError"
            @blur="validateEmail"
          />

          <!-- Password input -->
          <InputComponent
            v-model="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <ButtonComponent customClass="w-full"> Login </ButtonComponent>

        <div class="flex justify-center items-center pt-4">
          <p
            class="text-gray-700 leading-relaxed select-none flex items-center gap-1"
          >
            Forgot password?
            <router-link
              to="#"
              class="text-neutral-600 hover:text-neutral-100 font-semibold cursor-pointer transition-colors duration-200"
            >
              Reset Password
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </ContainerComponent>
</template>
