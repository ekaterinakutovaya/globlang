<template>
  <div class="p-[40px]">
    <ul class="grid grid-cols-2 gap-x-[20px] gap-y-[40px] pb-[40px]">
      <li v-for="item in menu.industries" class="max-w-[350px]">
        <div class="flex items-center gap-x-[10px] sm:gap-x-[20px]">
          <div class="min-w-[30px] w-[30px] h-[30px]">
            <img :src="item.icon" alt="" class="w-full object-contain">
          </div>
          <div>
            <h3 class="text-[16px] sm:text-[18px] text-black font-semibold pb-[6px] hover:text-accent-primary transition ease-in-out delay-150 lg:cursor-pointer">{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </li>
    </ul>

    <router-link to="/industries" class="text-[20px] leading-[26px] font-semibold text-accent-primary hover:underline transition ease-in-out delay-150">See All Industries</router-link>
  </div>
</template>

<script setup>
import {menu} from '@/data/data';
</script>

