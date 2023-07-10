<template>
  <section class="section-paddings-y">
    <div class="container">
      <SectionHead
          text="Certified professionals
                in over 100+ languages. Free certificates of accuracy.
                24/7 support.
                Whether you’re an individual or a Fortune 500 Business,
                we’re the translation company for you."
          title="Our Professional Translation Services"
      />

      <div class="w-full flex items-center gap-x-[47px] py-[100px]">
        <div class="w-1/2">
          <ServicesGrid/>
        </div>

        <div class="w-[511px] h-[700px] rounded-[20px] overflow-hidden">
          <img alt="services" class="w-full h-full object-cover" src="../../../assets/images/meeting.jpg">
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import SectionHead from "@/components/global/SectionHead.vue";
import ServicesGrid from "@/components/partials/ServicesSection/ServicesGrid.vue";
</script>
