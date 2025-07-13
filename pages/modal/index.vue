<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { IconX } from "@tabler/icons-vue";
import ContainerComponent from "../../components/common/ContainerComponent.vue";
import InputComponent from "../../components/common/InputComponent.vue";
import ButtonComponent from "../../components/common/ButtonComponent.vue";

const editAddress = ref({
  address: "",  
  city: "",
  state: "",
  zipCode: "",
  country: ""
});

const modal = ref(false)

const openModal = () => {
  modal.value = true
}

const closeModal = () => {
  modal.value = false
}


</script>

<template>
  <ContainerComponent>
    <ButtonComponent @click="openModal">Open Modal</ButtonComponent>

    <!-- Modal -->
    <div v-if="modal" class="  inset-0 z-50 flex items-center justify-center ">
      <!-- Overlay -->
      <div
        class="fixed inset-0  bg-gray-300 opacity-40 bg-opacity-30 backdrop-blur-sm"
        @click="closeModal"
      ></div>

      <!-- Modal Content -->
      <section
        class="relative bg-white  w-full max-w-4xl mx-auto  animate-fade-in-up"
      >
        <!-- Header -->
        <div class="px-6 py-6 border-b border-neutral-200 flex items-center justify-between">
          <span class="text-neutral-800 text-lg font-semibold">Edit Address</span>
          <div class="p-[6px] cursor-pointer hover:bg-gray-100 rounded-full" @click="closeModal">
            <IconX stroke="2" size="20" color="#949494" />
          </div>
        </div>

        <!-- Content -->
        <div class="flex flex-col gap-6 font-poppins px-6 pt-6 pb-8">
          <span class="text-xl font-medium text-neutral-700">Shipping Address</span>

          <InputComponent
            v-model="editAddress.address"
            label="Street Address"
            placeholder="Street Address"
            type="text"
          />

          <InputComponent
            v-model="editAddress.country"
            label="Country"
            placeholder="Bangladesh"
            type="select"
            :options="[
              { label: 'Bangladesh', value: 'BD' },
              { label: 'India', value: 'IN' },
              { label: 'United States', value: 'US' },
              { label: 'Canada', value: 'CA' }
            ]"
          />

          <InputComponent
            v-model="editAddress.city"
            label="Town / City"
            placeholder="Town / City"
            type="text"
          />

          <div class="flex flex-col gap-4 md:flex-row">
            <InputComponent
              v-model="editAddress.state"
              label="State"
              placeholder="State"
              type="text"
            />
            <InputComponent
              v-model="editAddress.zipCode"
              label="Zip Code"
              placeholder="Zip Code"
              type="text"
            />
          </div>

          <!-- Footer Buttons -->
          <div class="flex gap-4 justify-end pt-4">
            <ButtonComponent padding="!px-[20px] !py-[10px]" :disabled="true">
              Discard
            </ButtonComponent>
            <ButtonComponent padding="!px-[20px] !py-[10px]">
              Save Changes
            </ButtonComponent>
          </div>
        </div>
      </section>
    </div>
  </ContainerComponent>
</template>

<style scoped>
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 0.3s ease-out;
}
</style>
