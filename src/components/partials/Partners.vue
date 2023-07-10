<template>
  <section class="section-paddings-y">
    <ul class="flex items-center justify-evenly">
      <li>
        <Logitech class="w-[47px] sm:w-[85px] lg:w-[130px] fill-base-gray"/>
      </li>
      <li>
        <Google class="w-[42px] sm:w-[77px] lg:w-[130px]  fill-base-gray"/>
      </li>
      <li>
        <Logitech class="w-[47px] sm:w-[85px] lg:w-[130px]  fill-base-gray"/>
      </li>
      <li>
        <Google class="w-[42px] sm:w-[77px]  lg:w-[130px] fill-base-gray"/>
      </li>
      <li>
        <LinkedIn class="w-[53px] sm:w-[81px]  lg:w-[130px] fill-base-gray"/>
      </li>
    </ul>
  </section>
</template>

<script setup>

import Logitech from "@/components/icons/Logitech.vue";
import Google from "@/components/icons/Google.vue";
import LinkedIn from "@/components/icons/LinkedIn.vue";
</script>