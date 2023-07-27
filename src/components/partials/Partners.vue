<template>
  <section class="section-paddings-y">
    <div class="container">
      <swiper
          :autoplay="{
            delay: 5000
          }"
          :loop="true"
          :slides-per-view="4"
          :modules="modules"
      >
        <swiper-slide >
          <div class="w-full flex justify-center">
            <Logitech class="w-[47px] sm:w-[85px] lg:w-[130px] fill-base-gray"/>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="w-full flex justify-center">
            <Google class="w-[42px] sm:w-[77px] lg:w-[130px]  fill-base-gray"/>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="w-full flex justify-center">
            <LinkedIn class="w-[53px] sm:w-[81px]  lg:w-[130px] fill-base-gray"/>
          </div>
        </swiper-slide>
        <swiper-slide >
          <div class="w-full flex justify-center">
            <Logitech class="w-[47px] sm:w-[85px] lg:w-[130px] fill-base-gray"/>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="w-full flex justify-center">
            <Google class="w-[42px] sm:w-[77px] lg:w-[130px]  fill-base-gray"/>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="w-full flex justify-center">
            <LinkedIn class="w-[53px] sm:w-[81px]  lg:w-[130px] fill-base-gray"/>
          </div>
        </swiper-slide>

      </swiper>
    </div>

  </section>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay} from 'swiper/modules';

import Logitech from "@/components/icons/Logitech.vue";
import Google from "@/components/icons/Google.vue";
import LinkedIn from "@/components/icons/LinkedIn.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    Logitech,
    Google,
    LinkedIn
  },
  setup() {
    return {
      modules: [Autoplay]
    };
  },
};
</script>