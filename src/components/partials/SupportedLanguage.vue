<template>
  <section class="section-paddings-y">
    <div class="container">
      <SectionHead
          text="Globlang Translation supports 100+ languages with more than
500 language pairs, covering over 95% of the languages used by internet users around the world."
          title="Supported Language"
      />

      <div class="py-[32px] w-full">
        <select
            class="languages-select appearance-none w-full sm:w-[435px] border-0 rounded-[10px] px-[10px] py-[20px] shadow-select-shadow text-[16px] font-semibold text-black block my-0 mx-auto">
<!--          <option selected>English</option>-->
          <option v-for="item in menu.languages" :key="item.title">{{ item.title }}</option>
        </select>

        <div class="py-[16px] text-[16px] font-semibold text-center">TO</div>

        <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] lg:gap-[24px]">
          <li v-for="item in menu.languages"
               class="w-full border border-border-color rounded-[10px] px-[10px] py-[20px] focus:border-accent-primary
                      text-[16px] font-semibold text-black
                ">{{ item.title }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import {menu} from '@/data/data.js';
import SectionHead from "@/components/global/SectionHead.vue";
import {ref} from "vue";

const items = ref(menu.services);

</script>

<style lang="scss" scoped>
.languages-select:focus {
  outline: none !important;
  box-shadow: 0px 0px 12px 0px rgba(15, 112, 82, 0.2) !important;
}
</style>
