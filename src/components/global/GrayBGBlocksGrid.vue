<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-[16px] sm:gap-[23px] lg:gap-[24px] py-[32px]">
    <div v-for="item in items" class="lg:min-h-[165px] p-[16px] sm:p-[30px] bg-cards-bg rounded-[10px] flex sm:flex-col items-center sm:justify-start sm:text-center gap-x-[10px]">
      <div class="min-w-[40px] w-[40px] h-[40px]">
        <img :src="item.icon" alt="" class="w-full object-contain">
      </div>

      <h3 class="text-[16px] lg:text-[20px] leading-[26px] font-semibold text-black sm:pb-[6px] sm:mt-[20px]">{{item.title}}</h3>
    </div>
  </div>
</template>

<script setup>
import { defineProps, toRefs} from "vue";

const props = defineProps(["items"]);

const {items} = toRefs(props);
</script>
