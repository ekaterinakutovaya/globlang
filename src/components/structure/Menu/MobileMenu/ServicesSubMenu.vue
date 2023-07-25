<template>
  <ul class="dropdown-menu container grid grid-cols-1 py-[12px]">
    <li v-for="item in menu.services" class="dropdown-item px-[14px] sm:px-[0] my-[11px] sm:pt-[20px] last:pt-0 sm:pb-[20px] last:pb-0">
      <div class="flex items-start gap-x-[10px] sm:gap-x-[20px]">
<!--        <div>-->
<!--          <i class="text-[18px] sm:text-[42px] text-black pt-[4px] pi"-->
<!--          :class="item.icon"-->
<!--        ></i></div>-->

        <div class="min-w-[30px] w-[30px] h-[30px]">
          <img :src="item.icon" alt="" class="w-full object-contain">
        </div>
        <div>
          <h3 class="text-[16px] sm:text-[20px] text-black font-semibold">{{item.title}}</h3>
          <p>{{item.text}}</p>
        </div>
      </div>
    </li>

    <router-link to="/services" class="sm:text-[16px] text-accent-primary font-semibold">See All Services</router-link>
  </ul>
</template>

<script setup>
import {menu} from '@/data/data';
</script>