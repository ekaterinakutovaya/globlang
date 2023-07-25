<template>
  <div class="w-[700px] flex rounded-[4px]">
    <ul class="w-1/2 p-[40px]">
      <li v-for="item in menu.about" class="pb-[35px] last:pb-0">
        <div class="flex items-center gap-x-[10px] sm:gap-x-[20px]">
          <div class="min-w-[30px] w-[30px] h-[30px]">
            <img :src="item.icon" alt="" class="w-full object-contain">
          </div>
          <div>
            <router-link :to="item.path" class="text-[16px] sm:text-[18px] text-black font-semibold hover:text-accent-primary transition ease-in-out delay-150 lg:cursor-pointer">{{item.title}}</router-link>
          </div>
        </div>
      </li>
    </ul>

    <div class="w-1/2 bg-[#EEEEEE] rounded-bl-[4px] p-[40px]">
      <h4 class="text-[16px] sm:text-[20px] text-black font-semibold pb-[5px]">About</h4>
      <p>Globlang Translation is a known, ISO-Certified translation service provider, providing a whole range of
        language solutions with the help of a global network of native and experienced translators for 200+ languages.
        We have subject matter experts for 25+ industries. Translation. Localization. Interpretation and whatnot!</p>
    </div>
  </div>
</template>

<script setup>
import {menu} from '@/data/data';
</script>

