<script setup>
import { ref } from "vue";
import ButtonComponent from "../../../components/common/ButtonComponent.vue";
import ContainerComponent from "../../../components/common/ContainerComponent.vue";
import DescriptionPortion from "./DescriptionPortion.vue";
import ProductBanner from "../../../assets/images/product-banner.png";
import SpecificationPortion from "./SpecificationPortion.vue";

const tabs = ["description", "specification", "reviews", "downloads"];
const desc_banners = [
  {
    id: 1,
    image: ProductBanner,
  },
  {
    id: 2,
    image: ProductBanner,
  },
  {
    id: 3,
    image: ProductBanner,
  },
];

const dummyProductDescription = `
  <h2 class="text-lg font-semibold mb-2">MAXIMIZING FUNCTIONALITY IN MINIMAL SPACE With Ajazz AK820 Mechanical Keyboard</h2>
  <p class="mb-4">
    The Ajazz AK820 Mechanical Keyboard comes in a 75% compact layout, offering a space-efficient design without sacrificing essential keys. This means you get the benefits of a full-sized keyboard—function keys, arrow keys, and more—while saving valuable desk real estate. The layout is further optimized by the inclusion of a tactile and responsive rotary knob. Whether you’re adjusting volume, scrolling through content, or even tweaking parameters in creative software, the rotary knob adds an extra layer of functionality, making it easier to control various aspects of your computing experience with a simple twist.
  </p>

  <h3 class="font-semibold mb-2">GASKET-MOUNTED & SOUND DAMPENING FOAMS: A NEW STANDARD FOR COMFORT AND PRECISION</h3>
  <p class="mb-4">
    Experience next-level silence and typing satisfaction with our gasket-mounted keyboard and five-layer sound dampening system. The keyboard comes with a silicon bottom pad, a bottom cotton, a PET pad, an IXPE switch sheet and a Poron PCB foam. Designed for typists who crave a quieter yet tactile keyboard experience, the Ajazz AK820 is engineered to perfection with multiple sound dampening foams.
  </p>

  <h3 class="font-semibold mb-2">TYPE-C WIRED CONNECTIVITY</h3>
  <p class="mb-4">
    Designed in favored 75% compact layout with a KNOB–RECCAZR KW75 DIY kit saves more desktop space while retaining the functions of a full keyboard. With upgraded software, the customized keyboard allows to program of the RGB backlight effect and the function of the rotary knob, and remap keys.
  </p>

  <h3 class="font-semibold mb-2">Ajazz AK820 Mechanical Keyboard is COMPATIBLE FOR WIN/MAC</h3>
  <p class="mb-4">
    It supports connection via the included Type-C USB cable. The USB Type-C interface is known for its reversible plug orientation and fast data transfer rates, making it a modern standard for wired connections. It provides a stable and reliable connection, ideal for tasks that require low latency and high-speed data transfer, such as gaming or professional work.
  </p>

  <h3 class="font-semibold mb-2">SOUTH-FACING LED ORIENTATION & 1.6M RGB BACKLIGHTING</h3>
  <p class="mb-4">
    The LEDs on this keyboard are oriented in a south-facing direction to reduce interference with keycap and switch combinations. This offers a more consistent and visually appealing lighting experience, increasing more switches in using other keycaps. The keyboard continues to pull up custom feature by the built-in 1.6M RGB backlight system. Customize your keyboard’s ambiance with 1.6 million colors and multiple dynamic lighting modes. It’s not just a keyboard; it’s an extension of your personality.
  </p>

  <h3 class="font-semibold mb-2">PBT KEYCAPS IN OEM PROFILE & AJAZZ CUSTOM SWITCHES</h3>
  <p>
    The Ajazz AK820 comes equipped with high-quality PBT keycaps in the OEM profile. Which are known for their resilience, durability, and resistance to shine over time. The keyboard features Ajazz’s customized switches. Ajazz SeaSalt switch set to a medium operation force of 40g; Ajazz Moon and Green Plum switch at a light operation force at 37g. Whether you’re gaming or typing, these switches offer smooth operation and high reliability. Ensuring that every keystroke registers precisely as intended. The use of sound dampening foams also allows for a unique and tactile experience, making your interactions with the keyboard not just functional but also enjoyable.
  </p>
`;

const spec_data = [
  {
    label: "Brand & Colors",
    values: [
      { type: "Brand", value: "Ajazz" },
      {
        type: "Colors",
        value:
          "Gray White, MOA Black-Red, Purple White, Stray Night Gray, White green",
      },
    ],
  },
  {
    label: "Keyboard",
    values: [
      { type: "Layout", value: "75%" },
      { type: "RGB option", value: "1.6m RGB" },
      { type: "Connection type", value: "USB-C" },
      { type: "Weight", value: "0.8kg" },
    ],
  },
  {
    label: "Switch",
    values: [
      { type: "Switch Type", value: "Ajazz" },
      { type: "Keycap Material", value: "PBT Keycaps" },
      { type: "Frame", value: "ABS Frame" },
      {
        type: "Switch Option",
        value:
          "Ajazz AS Red Switch, Ajazz Green Plum Switch, Ajazz Moon Switch, Ajazz Sea Salt Switch",
      },
    ],
  },
  {
    label: "Warranty",
    values: [{ type: "Warranty", value: "01 Year warranty" }],
  },
];

const currentActiveTab = ref(tabs[0]);

function getTabBg(tab) {
  return tab === currentActiveTab.value ? "!bg-neutral-900" : "!bg-neutral-40";
}
function getTextClas(tab) {
  return tab === currentActiveTab.value
    ? "!capitalize !text-neutral-0"
    : "!capitalize !text-neutral-100";
}
function getHoverClas(tab) {
  return tab === currentActiveTab.value ? "" : "hover:!bg-neutral-30";
}
</script>
<template>
  <ContainerComponent>
    <div class="!mt-15 !mb-[8.5rem]">
      <div class="flex gap-3 flex-wrap">
        <ButtonComponent
          v-for="(tab, index) in tabs"
          :key="tab"
          padding="px-4 py-2"
          :btnBg="getTabBg(tab)"
          :textStyles="getTextClas(tab)"
          :hoverBg="getHoverClas(tab)"
          @click="currentActiveTab = tab"
        >
          {{ tab }}
        </ButtonComponent>
      </div>

      <div class="mt-8">
        <DescriptionPortion
          v-if="currentActiveTab == 'description'"
          :slidersData="desc_banners"
          :data="dummyProductDescription"
        />
        <SpecificationPortion
          v-if="currentActiveTab == 'specification'"
          :data="spec_data"
        />
      </div>
    </div>
  </ContainerComponent>
</template>
