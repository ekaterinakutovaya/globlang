<template>
  <section class="section-paddings-y sm:hidden">
    <!--   Inner container   -->
    <div class="w-full sm:flex sm:max-h-max">
      <!--   Content     -->
      <div
          class="sm:w-1/2 mr-[60px] sm:mr-0 px-[16px] pt-[32px] pb-[187px] sm:pb-[32px] sm:pl-[64px] sm:pr-[20px] bg-accent-primary rounded-r-[20px] sm:rounded-none flex flex-col gap-y-[20px]">
        <h2 class="text-[16px] sm:text-[36px] font-bold leading-normal text-white">Trusted by the World’s Leading Companies</h2>
        <p class="text-text-color-dim-green">The most valuable company in the world uses Day Translations. It’s true.
          Look it up. In fact, you’ll
          find
          that many of the World’s Top 100 Most Valuable Companies trust us with their translation service needs.</p>

        <p class="text-text-color-dim-green">Whether you are a Fortune 500 company, or a growing small start-up, we
          are thrilled to partner with you and
          help your business expand. Plus, we always treat you with the respect and professionalism you deserve, in a
          way that is rare in today’s business world.</p>

        <p class="text-text-color-dim-green">Are you ready to span the globe? We are ready to take you there.</p>

        <Button
            btnText="Get Quote"
            color="light"
            @click="$router.push('/translate')"
        />
      </div>

      <!--    Image    -->
      <div class="w-[310px] sm:w-1/2 h-[310px] sm:h-auto rounded-[20px] sm:rounded-none overflow-hidden ml-auto sm:ml-0 mr-[16px] sm:mr-0 -mt-[155px]">
        <img alt="trusted" class="w-full h-full object-cover" src="../../../assets/images/trusted.jpg">
      </div>
    </div>
  </section>
</template>

<script setup>

import Button from "@/components/global/Button.vue";
</script>
