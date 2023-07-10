<template>
  <section class="section-paddings-y">
    <div class="container">
      <div class="w-full">
        <h2 class="text-black text-[16px] sm:text-[36px] lg:text-[48px] font-bold leading-normal pb-[16px] lg:pb-[40px] lg:text-center">Our Professional
          Translation Services
        </h2>

        <!--    Mobile/Tablet    -->
        <div class="w-full flex lg:hidden justify-between gap-x-[44px]">
          <div class="w-1/2">
            <p class="sm:text-[16px] sm:leading-[32px]">From documents to websites and software, Globlang Translation
              offers professional translation services
              for all types of content in a broad range of languages. Special attention to detail, subject matter
              experts and fast turnaround make us a reliable translation company.
            </p>
          </div>
          <div class="hidden sm:block w-1/2 h-[343px] rounded-[20px] overflow-hidden">
            <img alt="services" class="w-full h-full object-cover" src="../../../assets/images/meeting.jpg">
          </div>
        </div>

        <ServicesCards/>
      </div>
    </div>
  </section>
</template>

<script setup>
import ServicesCards from "@/components/partials/ServicesSection/ServicesGrid.vue";
</script>

<style lang="scss" scoped>

</style>