<template>
  <section class="section-paddings-y">
    <div class="container">
      <SectionHead
          text="We have devised the simplest and seamless mechanism for you to place translation order.Getting your
          global success is just a matter of 1, 2 and 3 simple!"
          title="How we work"
      />

      <div class="row w-full lg:mr-[-15px] lg:ml-[-15px] lg:py-[100px] lg:px-[60px] flex flex-col lg:flex-row justify-between ">

        <div class="hidden lg:block progress_line">
          <svg xmlns="http://www.w3.org/2000/svg" width="665.224" height="158.28" viewBox="0 0 665.224 158.28">
            <path fill="none" stroke="#0F7052" stroke-width="2px" stroke-dasharray="8 4" fill-rule="evenodd" opacity="0.5" d="M346,1301s31.845,20.51,61,8c58.287-23.88,84.448-113.49,134-142,36.959-23.43,80,16,80,16s68.16,91.26,128,122c56.418,23.67,87.3-17.87,114-54,23.893-32.33,33.259-75.31,83-89,34.987-13.59,64,20,64,20" transform="translate(-343.906 -1157.75)"></path>
          </svg>
        </div>

        <div class="w-full lg:w-[33.33333%] mt-[80px] lg:mt-0">
          <div class="single_item">

            <div class="icon_box">
              <div class="w-[50px] h-[50px]"><img src="/icons/todo-list.svg" alt="" class="w-full object-contain"></div>
            </div>
            <h3 class="title text-[24px] text-black font-semibold">Order Online</h3>
            <p class="text-[16px] leading-[25px] max-w-[280px] my-0 mx-auto">Place order with our simple
              weborder form, or API.</p>
          </div>
        </div>
        <div class="w-full lg:w-[33.33333%] mt-[80px] lg:mt-0">
          <div class="single_item">

            <div class="icon_box">
              <div class="w-[50px] h-[50px]"><img src="/icons/bar-chart.svg" alt="" class="w-full object-contain"></div>
            </div>
            <h3 class="title text-[24px] text-black font-semibold">Track Progress</h3>
            <p class="text-[16px] leading-[25px] max-w-[280px] my-0 mx-auto">Track different stages of the translation process and communicate with the translator.</p>
          </div>
        </div>
        <div class="w-full lg:w-[33.33333%] mt-[80px] lg:mt-0">
          <div class="single_item">

            <div class="icon_box">
              <div class="w-[50px] h-[50px]"><img src="/icons/paper-plane.svg" alt="" class="w-full object-contain"></div>
            </div>
            <h3 class="title text-[24px] text-black font-semibold">Get Translated</h3>
            <p class="text-[16px] leading-[25px] max-w-[280px] my-0 mx-auto">Your files will reach you with in the proposed time through our seamless process.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import SectionHead from "@/components/global/SectionHead.vue";
</script>

<style lang="scss" scoped>
.progress_line {
  width: 670px;
  margin: auto;
  position: absolute;
  right: 0;
  left: 0;
}

.single_item {
  position: relative;
  text-align: center;
}

.icon_box {
  background-color: #fff;
  width: 186px;
  height: 178px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0 0 21px #dedede;
  transform: rotate(45deg);

  img {
    transform: rotate(-45deg);
  }
}

.title {
  margin: 75px 0 15px;
}
</style>