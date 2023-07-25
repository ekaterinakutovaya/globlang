<template>
  <Header/>
  <main>
    <section class="section-paddings-y">
      <div class="container">
        <SectionHead
          title="Global Offices"
          text="Globlang Translation has global offices for better customer support.You can
contact us if you have any question or feedback."
        />

        <div class="py-[16px]"></div>

        <GlobalOfficesItem
          :item="headOffice"
        />
      </div>
    </section>

    <section class="section-paddings-y">
      <div class="container">
        <SectionHead
            title="Head Offices"
            text="Globlang Translation has global offices for better customer support.You can
contact us if you have any question or feedback."
        />

        <div class="py-[16px]"></div>

        <div class="grid grid-cols-1 sm:grid-cols-2 pb-[16px] gap-y-[32px] sm:gap-y-[24px]">
          <GlobalOfficesItem v-for="item in globalOffices" :key="item.title"
            :item="item"
          />
        </div>
      </div>
    </section>
  </main>

  <Footer/>
</template>

<script setup>
import {globalOffices} from '@/data/data';
import Header from "@/components/structure/Header.vue";
import Footer from "@/components/structure/Footer.vue";
import ServicesWeRender from "@/components/partials/ServicesWeRender.vue";
import WeAreAlwaysOnline from "@/components/partials/WeAreAlwaysOnline.vue";
import SectionHead from "@/components/global/SectionHead.vue";
import GlobalOfficesItem from "@/components/partials/GlobalOffices/GlobalOfficesItem.vue";
import {ref} from "vue";

const headOffice = ref({title: 'Washington', text: 'Lorem ipsum dolor sit amet consectetur. Massa sit eu tempor elit eu aenean venenatis.', image: '/global-offices/global-offices001.png'});
</script>

