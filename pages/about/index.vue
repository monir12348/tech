<script setup>
import ContainerComponent from "../../components/common/ContainerComponent.vue";
import Heading from "../../components/common/Heading.vue";
import logo_1 from "../../assets/images/logo2.png";
import logo_2 from "../../assets/images/logo3.png";
import logo_3 from "../../assets/images/logo4.png";
import team_photo_1 from "../../assets/images/team_photo_1.png";
import team_photo_2 from "../../assets/images/team_photo_2.png";
import team_photo_3 from "../../assets/images/team_photo_3.png";
import { onMounted, ref } from "vue";
//for brand logo
const brandLogos = [
  { id: 1, logo: logo_1 },
  { id: 2, logo: logo_2 },
  { id: 3, logo: logo_3 },
  { id: 4, logo: logo_1 },
  { id: 5, logo: logo_2 },
  { id: 6, logo: logo_3 },
  { id: 7, logo: logo_1 },
  { id: 8, logo: logo_2 },
];
//for team
const teamImages = [
  {
    id: 1,
    img: team_photo_1,
    name: "Mezbaur Rahman Shetu​",
    designation: "Founder & Managing Director",
  },
  {
    id: 2,
    img: team_photo_2,
    name: "Mohammad Nasimus Sabah Nabil​",
    designation: "Co-founder & Director",
  },
  {
    id: 3,
    img: team_photo_3,
    name: "MD Shakil Hosen Sajal",
    designation: "Co-founder & Director",
  },
];
// Achievements data
const textAchivements = [
  {
    id: 1,
    subText: "Total earnings collected and remitted globally",
    target: 13,
  },
  {
    id: 2,
    subText: "Customers served across all regions of the nation",
    target: 78,
  },
  {
    id: 3,
    subText: "Nationwide partnerships that are active ",
    target: 55,
  },
  {
    id: 4,
    subText: "Monthly product deliveries made across the country",
    target: 99,
  },
  {
    id: 5,
    subText: "Followers who support us on social media platforms",
    target: 125,
  },
  {
    id: 6,
    subText: "Different product types listed for global buyers,Followers who support us on social media platforms",
    target: 89,
  },
  {
    id: 7,
    subText: "Positive customer reviews received through orders",
    target: 104,
  },
  {
    id: 8,
    subText: "Team members actively working in our operations",
    target: 34,
  },
];


// Step 1: Reactive values
const animatedCounters = ref(Array.from({ length: textAchivements.length }, () => 0));
const hasAnimated = ref(false); // prevent re-animation

// Step 2: Target the section
const achievementSectionRef = ref(null);

onMounted(() => {
  const animateCounters = () => {
    hasAnimated.value = true;
    textAchivements.forEach((item, index) => {
      const interval = setInterval(() => {
        if (animatedCounters.value[index] < item.target) {
          animatedCounters.value[index]++;
        } else {
          clearInterval(interval);
        }
      }, 100);
    });
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !hasAnimated.value) {
        animateCounters();
        observer.unobserve(entry.target); // Stop observing after animation
      }
    },
    {
      threshold: 0.2,               // Trigger earlier on smaller screens
      rootMargin: "0px 0px -10% 0px", // Adjust to catch short viewports
    }
  );

  if (achievementSectionRef.value) {
    observer.observe(achievementSectionRef.value);
  }
});


</script>

<template>
  <img src="../../assets/images/aboutImg.png" alt="" class="w-full !pb-32" />
  <ContainerComponent>
    <div class="flex flex-col gap-40">
      <div class="">
        <Heading>
          <template #heading>About Us</template>
          <template #bodyText>
            Our journey starts in the flight through customs to your doorsteps
            and ends with the smiles. We mainly import goods from overseas. If
            anything crosses your mind feel free to knock us and allow us to
            make you happy by serving your desired product. The “Tech diversity”
            started its journey on September 13th 2020. Within a very few time,
            we have won trust and love of lots of customers and it helped to us
            become one of the most popular online shops in Tech arena. This has
            been made possible by our tireless efforts to delight its consumers.
            Tech diversity has risen to the top of the E-Commerce Site and is
            also one of the major Computer and Technology goods sellers by
            focusing on customer satisfaction, providing consumers with the
            items they desire, and staying true to their motto, "your need our
            responsibility." Currently the business is operating from Uttara
            Dhaka yet delivers its products all over Bangladesh.</template
          >
        </Heading>
      </div>
      <div class="flex flex-col gap-16">
        <img src="../../assets/images/aboutImg_2.png" alt="" />
        <div class="flex flex-col gap-[120px]">
          <section class="">
            <Heading>
              <template #heading>Our Services</template>
              <template #bodyText>
                Being Tech enthusiasts, we sell technological products. We offer
                the highest-quality items at the most affordable prices to our
                consumers. Our consumers have a variety of items from which to
                pick. The product line including Mouse, Keyboards, gaming Chair,
                PS keyboard kits, mouse accessories and many more. Before being
                supplied to our loyal customers, each of our items is thoroughly
                inspected and examined. You are the driving force behind our
                efforts to improve in all facets of the service
                industry.</template
              >
            </Heading>
          </section>
          

          <section>
            <h1
              class="text-2xl font-medium text-center sm:text-5xl font-poppins"
            >
              Top selling brand
            </h1>
            <v-row class="mt-16">
              <v-col
                cols="12"
                sm="6"
                md="4"
                lg="3"
                xl="3"
                v-for="logo in brandLogos"
                :key="logo.id"
              >
                <div class="flex justify-center px-12 py-13 bg-neutral-20">
                  <img :src="logo.logo" alt="" />
                </div>
              </v-col>
            </v-row>
            <Heading class="mt-16">
              <template #bodyText
                >We have several top selling brands such as
                Keychron, Ajazz, SteelSeries, X-raypads, Kemove, T.M.K.B,
                Dierya, Royal Kludge, EPOMAKER, Regragon, FLCMMK, Razer, HyperX,
                Logitech, Moto speed, Glorious,  Fantech, Bloody and many other
                popular brands. . You will be able to receive the most
                up-to-date items and service facilities because they are
                top-selling and demanding brands. We will also provide you with
                excellent after-sales service. We will be able to quickly
                resolve any issues that arise with these brand items. After
                resolving the issue, we will be able to restore and deliver the
                product to its original condition. These Brand Products are of
                excellent quality and give excellent service to clients. We make
                certain that the goods you receive is of the highest possible
                quality. You don't have to second-guess what you're getting if
                you buy the top-selling Brand items.
              </template>
            </Heading>
          </section>
        
          <section>
            <heading>
              <template #heading>Customer satisfaction</template>
              <template #bodyText
                >We've been in the market for quite a time and have a good
                understanding of what people want. We've made modifications to
                the environment surrounding our clients so that we can meet each
                of their needs. We wish to keep improving so that we can provide
                everyone with their wanted or dreamed-of items. We provide our
                clients with online purchasing options as well as delivery
                services for all of our items throughout Bangladesh.
              </template>
            </heading>
          </section>
        </div>
      </div>
    </div>
  </ContainerComponent>
 <section class="lg:!py-32 py-15 lg:!mt-50 !mt-20 bg-neutral-20" ref="achievementSectionRef">
    <ContainerComponent>
      <h1 class="text-3xl font-medium text-center sm:text-3xl lg:text-5xl font-poppins">
        Our Achievements
      </h1>
      <v-row class="mt-12 items-stretch">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="3"
          v-for="(text, index) in textAchivements"
          :key="text.id"
          class="flex"
        >
          <div
            class="flex flex-col items-center gap-3 px-12 py-13 bg-neutral-0 font-poppins"
          >
            <div>
              <span class="text-[2rem] font-medium sm:text-3xl lg:text-5xl">
                {{ animatedCounters[index] }}B+
              </span>
            </div>
            <div class="text-center text-md">
              {{ text.subText }}
            </div>
          </div>
        </v-col>
      </v-row>
    </ContainerComponent>
  </section>
  <section class="!mt-32">
    <ContainerComponent>
      <h1 class="text-2xl font-medium text-center sm:text-5xl font-poppins">
        Our Team
      </h1>
      <hr class="w-full h-[1px] border-b border-neutral-40 mt-6" />
      <v-row class="mt-16 font-poppins ">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="4"
          v-for="team in teamImages"
          :key="team.id"
          
        >
          <img :src="team.img" alt="" />
          <p class="mt-6 text-xl font-medium">{{ team.name }}</p>
          <p class="mt-2 text-md text-neutral-300">{{ team.designation }}</p>
        </v-col>
      </v-row>
    </ContainerComponent>
  </section>
</template>
