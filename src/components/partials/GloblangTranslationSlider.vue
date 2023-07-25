<template>
  <swiper
      :slides-per-view="1"
      :pagination="pagination" :modules="modules"
      :loop="true"
      :effect="'fade'"
      :autoplay="{
      delay: 10000,
      disableOnInteraction: false,
    }"
  >
    <swiper-slide v-for="item in items">
      <div class="w-full h-[360px] lg:h-[700px]">
        <div class="w-full h-full overflow-hidden relative">
          <img :src="item.image" alt="" class="w-full h-full object-cover">
          <div class="w-full h-full backdrop-brightness-50 absolute top-0 bottom-0 left-0 right-0 z-10"></div>
          <div class="h-full container text-left lg:text-center text-white absolute top-0 bottom-0 left-0 right-0 z-20">
            <h1 class="text-[20px] sm:text-[24px] lg:text-[48px] font-bold leading-normal pt-[32px] pb-[10px] sm:pt-[50px] lg:pt-[100px] lg:pb-[40px]">Globlang Translation Services</h1>
            <p class="text-[13px] sm:text-[16px] leading-[22px] lg:text-[24px] lg:leading-[50px]">Globlang Translation is an international leader in the translation
              marketplace that offers a transparent,
              intuitive and cost-effective online portal to customers who need documents, web content, and video
              content
              translated guaranteeing high-quality and speed. Unlike other options currently available in the market
              (translation companies, online translation agencies, etc.), Marstranslation.com connects its customers
              with
              highly rated, certified, native translators from around the world who deliver quality translations
              according
              to company standards.</p></div>
        </div>
      </div>
    </swiper-slide>

  </swiper>

</template>

<script >
import {globlangServicesSlider} from '@/data/data.js'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      items: globlangServicesSlider
    }
  },
  setup() {
    return {
      pagination: {
        clickable: true
      },
      modules: [Autoplay, Pagination, EffectFade],
    };
  },
};

</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>