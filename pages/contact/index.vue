<script setup>
import HomelinkComponent from "../../components/common/HomelinkComponent.vue";
import InputComponent from "../../components/common/InputComponent.vue";
import ButtonComponent from "../../components/common/ButtonComponent.vue";
import ContainerComponent from "../components/common/ContainerComponent.vue";
import Heading from "../../components/common/Heading.vue";
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  phoneNumber: "",
  message: "",
});

const contactCards = [
  {
    title: "Head Office & Pickup Location",
    address: [
      "House : 14 (Shamoly Housing), Road : 5/A,",
      "Sector : 5, Uttara, Dhaka 1230"
    ],
    phones: [
      "+8801688597726",
      "+8801622321268"
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.0525812523883!2d90.38562707439618!3d23.887754083491135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c54378b8da0b%3A0x80ae056d5349d64!2s14%20house!5e0!3m2!1sen!2sbd!4v1750825210538!5m2!1sen!2sbd"
  },
   {
    title: "Head Office & Pickup Location",
    address: [
      "House : 14 (Shamoly Housing), Road : 5/A,",
      "Sector : 5, Uttara, Dhaka 1230"
    ],
    phones: [
      "+8801688597726",
      "+8801622321268"
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.0525812523883!2d90.38562707439618!3d23.887754083491135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c54378b8da0b%3A0x80ae056d5349d64!2s14%20house!5e0!3m2!1sen!2sbd!4v1750825210538!5m2!1sen!2sbd"
  },
   {
    title: "Head Office & Pickup Location",
    address: [
      "House : 14 (Shamoly Housing), Road : 5/A,",
      "Sector : 5, Uttara, Dhaka 1230"
    ],
    phones: [
      "+8801688597726",
      "+8801622321268"
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.0525812523883!2d90.38562707439618!3d23.887754083491135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c54378b8da0b%3A0x80ae056d5349d64!2s14%20house!5e0!3m2!1sen!2sbd!4v1750825210538!5m2!1sen!2sbd"
  }
  // Add more card objects here if needed
];
</script>

<template>
  <ContainerComponent>
    <div class="font-poppins">
     <HomelinkComponent
     backLink="/"
     currentLink="/contact">
      <template #backRoute>Home</template>
      <template #currentRoute>Contact</template>
     </HomelinkComponent>

      <div class="mt-6 mb-12 font-medium text-center text-neutral-900">
        <p class="text-5xl">Contact Us</p>
      </div>
      <hr class="w-full h-[1px] border-b-1 border-neutral-40" />

      <!--input field-->
      <div class="flex flex-col gap-6 px-6 py-6 mt-12">
        <InputComponent
          v-model="form.name"
          label=" Name"
          placeholder="Enter name"
        />

        <div class="flex flex-col gap-3 lg:flex-row">
          <InputComponent
            v-model="form.email"
            label=" Email"
            placeholder="Enter email address"
          />
          <InputComponent
            v-model="form.phoneNumber"
            label=" phone number"
            placeholder="Enter phone number"
          />
        </div>
        <InputComponent
          v-model="form.message"
          label=" message"
          placeholder="Write your message..."
        />
        <!--buttton-->
        <div class="flex justify-end gap-4 mt-4">
          <ButtonComponent disabled="true"> Discard </ButtonComponent>
          <ButtonComponent> Confirm Request </ButtonComponent>
        </div>
      </div>
      <div >
       <Heading  customClass="mt-12">
        <template #heading>Our Branches</template>
       </Heading>
        <v-row class="mt-6">
  <v-col
    v-for="(card, index) in contactCards"
    :key="index"
    xl="4"
    sm="6"
    md="4"
    cols="12"
  >
    <div class="flex h-full pr-2">
      <div class="w-[2px] h-auto bg-primary-200"></div>
      <div class="h-full px-6 py-6 rounded-sm w-100 bg-neutral-0">
        <div class="flex flex-col justify-between h-full font-opensans">
          <!-- Title -->
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2">
              <div class="px-2 py-2 bg-primary-300">
                <IconMapPinFilled class="text-white" />
              </div>
              <p class="text-[16px] sm:text-[20px] text-neutral-900 font-semibold">
                {{ card.title }}
              </p>
            </div>

            <!-- Address -->
            <div class="flex flex-col gap-1">
              <p
                v-for="(line, lineIndex) in card.address"
                :key="lineIndex"
                class="text-[14px] sm:text-[16px] text-neutral-900"
              >
                {{ line }}
              </p>

              <!-- Phone Numbers -->
              <p
                v-for="(phone, phoneIndex) in card.phones"
                :key="phoneIndex"
                class="text-[14px] sm:text-[16px] text-neutral-900"
              >
                <a :href="`tel:${phone}`" class="hover:text-primary-300">
                  {{ phone }}
                </a>
              </p>
            </div>
          </div>

          <!-- Button -->
           <div class="mt-6">
          <ButtonComponent
            width="161px"
            padding="py-3 px-[18px]"
            class="!border-[1px]  !border-neutral-300"
            btnBg="!bg-primary-300"
            hoverBg="hover:!bg-primary-400"
            textStyles="font-poppins !text-neutral-0 font-medium text-[0.9rem]"
            :iconLeft="IconTool"
            :iconRight="IconArrowRight"
            :iconStyle="{ size: '18', color: '#fff' }"
          >
            Locate In Map
          </ButtonComponent>
          </div>
          <!-- Google Map -->
          <div  v-if="card.mapSrc" class="mt-6 w-full h-[238px] overflow-hidden">
            <iframe
              :src="card.mapSrc"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div v-else>
            mir
          </div>
        </div>
      </div>
    </div>
  </v-col>
</v-row>
      </div>
    </div>
  </ContainerComponent>
</template>
