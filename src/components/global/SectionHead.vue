<template>
  <div class="w-full">
    <h2 class="text-black text-[16px] sm:text-[36px] lg:text-[48px] font-bold leading-normal pb-[16px] lg:pb-[40px] lg:text-center">{{title}}</h2>
    <p class="block lg:max-w-[80%] lg:text-[24px] lg:leading-[40px] lg:text-center my-0 mx-auto">{{text}}</p>
  </div>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
  title: String,
  text: String
})
</script>
