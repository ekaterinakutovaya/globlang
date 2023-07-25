<template>
  <Header/>
  <main>
    <ServicesWeRender/>
    <WeAreAlwaysOnline/>
  </main>

  <Footer/>
</template>

<script setup>

import Header from "@/components/structure/Header.vue";
import Footer from "@/components/structure/Footer.vue";
import ServicesWeRender from "@/components/partials/ServicesWeRender.vue";
import WeAreAlwaysOnline from "@/components/partials/WeAreAlwaysOnline.vue";
</script>

