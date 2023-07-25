<template>
  <Header/>
  <main>
    <section class="w-full relative pb-[32px]">
      <div class="w-full h-[332px] lg:h-[700px] bg-[url('@/assets/images/translated.jpg')] bg-cover bg-top absolute -z-10">
        <div class="w-full h-full backdrop-blur-sm backdrop-brightness-75">

        </div>
      </div>

      <div class="container">
        <div class="w-full py-[32px] lg:py-[100px]">
          <h2 class="text-white text-[16px] sm:text-[36px] lg:text-[48px] font-bold leading-normal pb-[16px] lg:pb-[40px] lg:text-center">
            Professional Translation Services</h2>
          <p class="block lg:max-w-[80%] lg:text-[24px] lg:leading-[40px] lg:text-center my-0 mx-auto text-white">
            Globlang
            Translation supports 100+ languages with more than 500 language pairs,covering over 95% of
            the languages used by internet users around the world</p>
        </div>


        <TranslationForm/>

      </div>
    </section>

    <HowWeWork/>
  </main>

  <Footer/>
</template>

<script setup>

import {onMounted} from "vue";

onMounted(() => {
  window.scroll(0, 0);
})

import Header from "@/components/structure/Header.vue";
import Footer from "@/components/structure/Footer.vue";
import TranslationForm from "@/views/TranslatedView/TranslationForm.vue";
import HowWeWork from "@/components/partials/HowWeWork.vue";
</script>