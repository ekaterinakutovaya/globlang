<template>
<!--  <pre>{{menu.services}}</pre>-->
  <ul class="dropdown-menu container grid grid-cols-1 sm:grid-cols-4 gap-[12px] sm:gap-[30px] py-[20px]">
    <li v-for="item in menu.languages" class="dropdown-item px-[14px] py-[10px] sm:pt-[20px] last:pt-0 sm:pb-[20px] last:pb-0">
      <div class="flex items-center gap-x-[12px]">

        <div>
          <h3 class="text-[16px] sm:text-[20px] text-black font-semibold">{{item.title}}</h3>
        </div>
      </div>
    </li>

    <router-link to="/languages" class="sm:text-[16px] text-accent-primary font-semibold">See All Languages</router-link>
  </ul>
</template>

<script setup>
import {menu} from '@/data/data';
</script>