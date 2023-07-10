<template>
  <div class="flex flex-col gap-y-[10px]">
    <div class="w-[50px] h-[50px]">
      <img :src="service.icon" alt="services icon" class="w-full h-full object-contain">
    </div>
    <h3 class="text-[16px] leading-[22px] font-semibold text-black">{{ service.title }}</h3>
    <p>Your words are personal. We respect that. So, your words stay in human hands from beginning to end.
      Your documents are human translated & human approved.</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  service: {
    type: Object,
    required: true
  }
})

</script>

<style lang="scss" scoped>

</style>