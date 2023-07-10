<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px] xl:gap-[76px] py-[32px]">

    <AllOurServicesGridItem
        v-for="service in allOurServices"
        :key="service.index"
        :service="service"
    />

  </div>
</template>

<script setup>
import {allOurServices} from '@/data/data.js';
import AllOurServicesGridItem from "@/components/partials/AllOurServices/AllOurServicesGridItem.vue";

</script>
