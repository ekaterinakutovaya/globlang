<template>
  <section class="section-paddings-y">
    <div class="container">
      <SectionHead
          text="An Industry expert has the ability to bring accuracy, crispness and quality to the translated material. Their experience will
allow you to have your translated material on time and in superior quality. And our Industry experts bring."
          title="Industry Expertise"
      />

      <div class="sm:hidden">
        <GrayBGBlocksGrid
            :items="menu.industries"
        />
      </div>

      <div class="hidden sm:block pt-[57px]">
        <ul class="industries-grid grid grid-cols-4 lg:grid-cols-5">
          <li v-for="item in menu.industries" class="w-[176px] h-[177px] lg:w-[240px] lg:h-[240px] border border-[#585757] flex flex-col items-center justify-start text-center p-[30px] lg:p-[50px] group cursor-pointer">
            <div class="min-w-[50px] w-[50px] h-[50px] mb-[20px]">
              <img :src="item.icon" alt="" class="w-full object-contain">
            </div>

            <h3 class="text-[14px] lg:text-[20px] leading-normal font-semibold text-black pb-[6px] break-words group-hover:text-accent-primary ease-in-out duration-300">{{item.title}}</h3>
          </li>
        </ul>
      </div>

    </div>
  </section>
</template>

<script setup>
import {menu} from '@/data/data.js';
import SectionHead from "@/components/global/SectionHead.vue";
import GrayBGBlocksGrid from "@/components/global/GrayBGBlocksGrid.vue";

</script>

<style lang="scss" scoped>
  .industries-grid, .industries-grid > li {
    border-style: solid;
    border-color: #585757;
  }

  .industries-grid {
    border-width: 1px  0   0  1px;
  }

  .industries-grid > li {
  border-width:  0  1px 1px  0;
  }


</style>
