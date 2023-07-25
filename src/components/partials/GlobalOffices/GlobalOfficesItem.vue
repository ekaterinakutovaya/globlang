<template>
<!--  <pre>{{item}}</pre>-->
  <div class="w-full sm:w-[330px] lg:w-[580px] bg-dim-gray rounded-[10px] p-[16px] lg:p-0 lg:py-[20px] lg:px-[44px] my-0 mx-auto">
    <div class="flex gap-x-[10px] lg:gap-x-[24px]">
      <div class="w-[70px] lg:w-[160px]">
        <div class="w-[70px] h-[70px] lg:w-[160px] lg:h-[160px] rounded-full overflow-hidden">
          <img :src="item.image" alt="" class="w-full h-full object-cover">
        </div>
      </div>

      <div>
        <h2 class="text-[16px] lg:text-[26px] text-black font-semibold pb-[5px] lg:pb-[10px]">{{item.title}}</h2>
        <p class="lg:leading-[40px] text-[13px] lg:text-[16px]">{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script setup>

import {defineProps} from "vue";

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

</script>

<style lang="scss" scoped>

</style>