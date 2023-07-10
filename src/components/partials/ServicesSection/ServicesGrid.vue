<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-[32px] xl:gap-[50px] py-[32px]">

    <ServicesGridItem
        v-for="service in services"
        :key="service.index"
        :service="service"
    />

  </div>
</template>

<script setup>
import {services} from '@/data/data.js';
import ServicesGridItem from "@/components/partials/ServicesSection/ServicesGridItem.vue";

</script>

<style lang="scss" scoped>

</style>