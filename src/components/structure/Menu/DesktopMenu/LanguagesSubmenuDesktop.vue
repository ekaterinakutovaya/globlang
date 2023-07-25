<template>
  <div class="p-[40px]">
    <ul class="grid grid-cols-4 gap-x-[50px] gap-y-[40px] pb-[40px]">
      <li v-for="item in menu.languages" class="max-w-[350px]">
        <div class="flex items-start gap-x-[10px] sm:gap-x-[20px]">
          <div><i class="text-[30px] text-icon-color pi"
                  :class="item.icon"
          ></i></div>
          <div>
            <span class="text-[16px] sm:text-[18px] text-black font-semibold pb-[6px] hover:text-accent-primary transition ease-in-out delay-150 lg:cursor-pointer">{{ item.title }}</span>
          </div>
        </div>
      </li>
    </ul>

    <router-link to="/languages" class="text-[20px] leading-[26px] font-semibold text-accent-primary">See All Languages</router-link>
  </div>
</template>

<script setup>
import {menu} from '@/data/data';
</script>

