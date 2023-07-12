<template>
  <Header/>
  <main>
    <HeroSection/>
    <Partners/>
    <div class="sm:hidden">
      <ServicesSectionMobile/>
    </div>
    <div class="hidden sm:block lg:hidden">
      <ServicesSectionTablet/>
    </div>
    <div class="hidden lg:block">
      <ServicesSection/>
    </div>

    <Statistics/>
    <INeedTranslation/>
    <AllOurServices/>
    <TrustedSection/>
    <Thorough5Step/>
  </main>
  
  <Footer/>
</template>

<script setup>

import HeroSection from "@/components/partials/HeroSection.vue";
import Partners from "@/components/partials/Partners.vue";
import ServicesSection from "@/components/partials/ServicesSection/ServicesSection.vue";
import ServicesSectionMobile from "@/components/partials/ServicesSection/ServicesSectionMobile.vue";
import ServicesSectionTablet from "@/components/partials/ServicesSection/ServicesSectionTablet.vue";
import Statistics from "@/components/partials/Statistics.vue";
import INeedTranslation from "@/components/partials/INeedTranslation.vue";
import AllOurServices from "@/components/partials/AllOurServices/AllOurServices.vue";
import TrustedSection from "@/components/partials/TrustedSection.vue";
import Thorough5Step from "@/components/partials/Thorought5Step/Thorough5Step.vue";
import Header from "@/components/structure/Header.vue";
import Footer from "@/components/structure/Footer.vue";
</script>

<style lang="scss" scoped>

</style>