<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useHead } from "nuxt/app";

import ButtonComponent from "../../components/common/ButtonComponent.vue";
import ContainerComponent from "../../components/common/ContainerComponent.vue";

useHead({
  title: "Verify - Tech Diversity",
  meta: [{ name: "description", content: "" }],
});

const otp = ref("");
const timer = ref(0);
const timerDuration = 10; // seconds 
const isResendDisabled = ref(false);
let timerInterval = null;

const startTimer = () => {
  timer.value = timerDuration;
  isResendDisabled.value = true;

  timerInterval = setInterval(() => {
    if (timer.value > 0) {
      timer.value--;
    } else {
      isResendDisabled.value = false;
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }, 1000);
};

const resendCode = () => {
  if (!isResendDisabled.value) {
    console.log("Resending OTP code...");
    // Add your resend logic here (API call, etc.)
    startTimer();
  }
};

const handleFinish = (value) => {
  console.log("OTP completed:", value);
  // Handle OTP verification here
};

// Start timer when component mounts
onMounted(() => {
  startTimer();
});

// Clean up timer when component unmounts
onUnmounted(() => {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
});
</script>

<template>
  <ContainerComponent>
    <div
      class="flex flex-col justify-center items-center !pt-[6.25rem] !pb-[8.25rem] font-poppins"
    >
      <div class="w-full lg:w-[35rem] flex flex-col justify-center">
        <div class="flex flex-col items-center gap-4 pb-8">
          <div class="flex flex-col items-center gap-2">
            <p class="font-medium text-4xl text-neutral-900">
              OTP Verification
            </p>
            <p class="text-base text-neutral-400">Don't have an account yet?</p>
          </div>
          <p class="px-3 py-2 bg-neutral-30 font-semibold tracking-wide">
            +88 01707605657
          </p>
        </div>

        <div class="flex flex-col gap-4 mb-8">
          <div class="">
            <v-otp-input
              v-model="otp"
              :length="5"
              @finish="handleFinish"
              class="otp-input"
            />
          </div>

          <div class="flex flex-col items-center gap-2">
            <p>Haven't received the code yet?</p>
            <ButtonComponent
              padding="px-2 py-1"
              :btnBg="isResendDisabled ? '!bg-neutral-200' : '!bg-neutral-30'"
              :textStyles="
                isResendDisabled
                  ? '!text-neutral-0 text-sm cursor-not-allowed'
                  : '!text-neutral-700 text-sm'
              "
              :disabled="isResendDisabled"
              hoverBg="hover:!bg-neutral-300"
              :class="{ 'pointer-events-none': isResendDisabled }"
              @click="resendCode"
              to="#"
            >
              <span v-if="isResendDisabled">
                Send Code Again ({{ timer }}s)
              </span>
              <span v-else> Send Code Again </span>
            </ButtonComponent>
          </div>
        </div>

        <ButtonComponent customClass="w-full hover:bg-neutral-600" to="#">
          Verify & Redirect To Dashboard
        </ButtonComponent>
      </div>
    </div>
  </ContainerComponent>
</template>

<style scoped>
.otp-input :deep(.v-field) {
  margin: 0px 2px;
}

.otp-input :deep(.v-field__input) {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
}

.otp-input :deep(.v-field--variant-outlined) {
  border-radius: 0;
}
</style>
