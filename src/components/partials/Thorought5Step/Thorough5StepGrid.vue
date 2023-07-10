<template>
      <div class="grid grid-cols-1 sm:grid-cols-12 sm:gap-x-[50px] sm:gap-y-[127px] md:gap-y-[150px] my-[16px] sm:mt-[50px]
      lg:mt-[100px] relative">
          <Thorough5StepGridItem
              v-for="item in qualityControl"
              :key="item.index"
              :item="item"
              :itemsLength="qualityControl.length"
          />

        <div
            class=" absolute top-[38%] bottom-0 right-[100px] md:right-[140px] lg:right-[183px]"
        >

          <div class=" w-[380px] md:w-[505px] lg:w-[628px] h-[60px] border-dashed border-r-2 border-b-2 border-black"/>
          <div class=" w-[380px] md:w-[505px] lg:w-[628px] h-[60px] border-dashed border-l-2 border-black"/>
        </div>
      </div>
</template>

<script setup>
import {qualityControl} from '@/data/data.js';
import Thorough5StepGridItem from "@/components/partials/Thorought5Step/Thorough5StepGridItem.vue";


</script>
