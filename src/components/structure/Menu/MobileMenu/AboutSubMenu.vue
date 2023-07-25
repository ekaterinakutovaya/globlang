<template>
<!--  <pre>{{menu.services}}</pre>-->
  <ul class="dropdown-menu container grid grid-cols-1 gap-[12px] py-[12px] sm:py-[20px]">
    <li v-for="item in menu.about" class="dropdown-item px-[14px] py-[10px]">
      <div class="flex items-center gap-x-[12px] sm:gap-x-[20px]">
        <div class="min-w-[30px] w-[30px] h-[30px]">
          <img :src="item.icon" alt="" class="w-full object-contain">
        </div>
        <div>
          <router-link :to="item.path" class="text-[16px] sm:text-[20px] text-black font-semibold">{{item.title}}</router-link>
        </div>
      </div>
    </li>
    <li class="bg-[#EEEEEE] mx-[-16px] sm:mx-[-64px] px-[16px] sm:px-[64px]">
      <div class="py-[30px]">
        <h4 class="text-[16px] sm:text-[20px] text-black font-semibold pb-[5px]">About</h4>
        <p>Globlang Translation is a known, ISO-Certified translation service provider, providing a whole range of
          language solutions with the help of a global network of native and experienced translators for 200+ languages.
          We have subject matter experts for 25+ industries. Translation. Localization. Interpretation and whatnot!</p>
      </div>
    </li>
  </ul>


</template>

<script setup>
import {menu} from '@/data/data';
</script>