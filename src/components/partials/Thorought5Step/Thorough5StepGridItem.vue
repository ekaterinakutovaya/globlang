<template>
  <!--<pre>{{itemsLength-1 == item.index || itemsLength-2 == item.index}}</pre>-->
  <!-- Mobile view -->
  <div class="w-full sm:hidden">
    <div
        :class="{'ml-0': item.index % 2 === 0, 'ml-[30%]': item.index % 2 !== 0 }"
    >
      <div class="w-[50px] h-[50px] bg-accent-primary rounded-full text-white text-[24px] flex items-center
          justify-center mb-[10px]"

      >
        <i :class="item.icon" aria-hidden="true"
           class="fa"
        ></i>
      </div>
      <h3 class="text-[16px] text-black font-semibold pb-[5px]">{{ item.title }}</h3>
      <p class="pb-[5px]">{{ item.text }}</p>
    </div>

    <!--  Curve Lines   -->
    <div
        v-if="itemsLength-1 != item.index"
        :class="{'border-l-2': item.index % 2 === 0, 'border-r-2': item.index % 2 !== 0}"
        class="w-1/2 h-[50px] border-dashed border-b-2 border-black"
    ></div>
    <div v-if="itemsLength-1 != item.index"
         :class="{'border-r-2': item.index % 2 === 0, 'border-l-2': item.index % 2 !== 0}"
         class="w-1/2 h-[50px] border-dashed border-black"
    ></div>

  </div>

  <!-- Tablet/Desktop view -->
  <div :class="{'col-span-4': itemsLength-1 != item.index || itemsLength-2 != item.index, 'col-start-3': itemsLength-2 == item.index, 'col-start-7': itemsLength-1 == item.index, 'row-start-2': itemsLength-1 == item.index || itemsLength-2 == item.index}"
       class="w-full hidden sm:flex justify-center"
  >
    <div class="max-w-[220px] lg:max-w-[320px] flex flex-col text-center items-center">
      <div class="w-[80px] h-[80px] bg-accent-primary rounded-full text-white text-[32px] flex items-center
          justify-center mb-[20px] relative">
        <i :class="item.icon" aria-hidden="true"
           class="fa"
        ></i>

        <div
            v-if="item.index == 0 || item.index == 1 || item.index == 3"
            class="w-[120px] md:w-[175px] lg:w-[240px] border-dashed border-b-2 border-black absolute right-[-180%]
            md:right-[-267%] lg:right-[-365%] top-0 bottom-[50%]"
        />


      </div>
      <h3 class="text-[16px] lg:text-[20px] lg:leading-[32px] text-black font-semibold pb-[5px]">{{ item.title }}</h3>
      <p class="text-[13px] lg:text-[14px] leading-[22px] pb-[5px] lg:pb-0">{{ item.text }}</p>
    </div>


  </div>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  itemsLength: Number
})

</script>
