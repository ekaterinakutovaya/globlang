<template>
  <section class="section-paddings-y">
    <div class="container">
      <div class="w-full">
        <h2 class="text-black text-[16px] sm:text-[36px] lg:text-[48px] font-bold leading-normal pb-[16px] lg:pb-[40px] lg:text-center">Our Professional
          Translation Services
        </h2>

        <p class="sm:text-[16px] sm:leading-[32px]">From documents to websites and software, Globlang Translation
          offers professional translation services
          for all types of content in a broad range of languages. Special attention to detail, subject matter
          experts and fast turnaround make us a reliable translation company.
        </p>
      </div>

      <ServicesCards/>
    </div>
  </section>
</template>

<script setup>
import ServicesCards from "@/components/partials/ServicesSection/ServicesGrid.vue";
</script>

<style lang="scss" scoped>

</style>