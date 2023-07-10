<template>
  <div class="p-[16px] bg-cards-bg rounded-[10px]">
    <div class="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] pb-[10px] lg:pb-[20px]">
      <img :src="service.icon" alt="services icon" class="w-full h-full object-contain">
    </div>

    <h3 class="text-[16px] lg:text-[20px] leading-[26px] font-semibold text-black pb-[6px]">{{ service.title }}</h3>
    <p class="lg:text-[14px] lg:leading-[22px]">{{ service.text }}</p>
  </div>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
  service: {
    type: Object,
    required: true
  }
})

</script>
