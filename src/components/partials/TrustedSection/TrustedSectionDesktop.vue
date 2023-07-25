<template>
  <section class="section-paddings-y hidden sm:block">
    <!--   Inner container   -->
    <div class="w-full flex">
      <!--   Content     -->
      <div class="w-[55%] lg:w-[60%] pl-[64px] pr-[20px] lg:pl-[120px] lg:pr-[53px] py-[32px] lg:py-[100px] bg-accent-primary">
        <h2 class="text-[36px] lg:text-[48px] font-bold leading-normal text-white pb-[16px] lg:pb-[40px]">Trusted by the World’s Leading
          Companies</h2>
        <p class="text-text-color-dim-green pb-[20px]">The most valuable company in the world uses Day Translations.
          It’s true.
          Look it up. In fact, you’ll
          find
          that many of the World’s Top 100 Most Valuable Companies trust us with their translation service needs.</p>

        <p class="text-text-color-dim-green pb-[20px]">Whether you are a Fortune 500 company, or a growing small
          start-up, we
          are thrilled to partner with you and
          help your business expand. Plus, we always treat you with the respect and professionalism you deserve, in a
          way that is rare in today’s business world.</p>

        <p class="text-text-color-dim-green pb-[40px]">Are you ready to span the globe? We are ready to take you
          there.</p>

        <Button
            btnText="Get Quote"
            color="light"
            @click="$router.push('/translate')"
        />
      </div>


      <!--    Image    -->
      <div class="w-[55%] lg:w-[40%]">
        <div class="h-full overflow-hidden">
          <img alt="" class="w-full h-full object-cover" src="@/assets/images/trusted.jpg">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import Button from "@/components/global/Button.vue";
</script>
