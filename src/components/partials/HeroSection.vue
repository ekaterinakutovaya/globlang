<template>
  <section class="w-full max-h-max pt-[32px] lg:pt-[100px] mb-[112px] relative">
    <div class="after:content-[''] after:w-full after:h-[366px] sm:after:h-[545px] xl:after:h-[914px] after:bg-accent-primary after:absolute after:top-0 after:-z-10"/>
      <div class="container flex flex-col gap-y-[20px] lg:gap-y-[40px] lg:items-center lg:text-center">
        <h1 class="sm:max-w-[90%] lg:max-w-[80%] text-[16px] sm:text-[36px] lg:text-[48px] leading-[22px] sm:leading-normal font-bold text-white">
          Professional translation services and
          human interpreting solutions that
          connect you <span class="text-accent-secondary">to the world</span>
        </h1>

        <p class="lg:max-w-[80%] sm:text-[16px] lg:text-[24px] sm:leading-[22px] lg:leading-[40px] text-text-color-dim-green lg:text-center">
          Certified professionals in over 100+ languages. Free certificates of accuracy. 24/7 support.
          Whether you’re an individual or a Fortune 500 Business, we’re the translation company for you.
        </p>


        <Button
            btnText="Translate Now"
            color="bg-accent-secondary"
        />

        <div
            class="w-[295px] sm:w-[694px] lg:w-[1047px] h-[157px] sm:h-[369px] lg:h-[600px] rounded-[20px] overflow-hidden mt-[25px] mx-auto">
          <img alt="hero-img" class="w-full h-full object-cover" src="@/assets/images/hero-img.jpg">
        </div>

      </div>

  </section>
</template>

<script setup>

import Button from "@/components/global/Button.vue";
</script>

<style lang="scss" scoped>

</style>