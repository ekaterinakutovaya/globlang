<template>
  <Header/>
  <main class="w-full">
    <GloblangTranslationSlider/>

    <section class="w-full bg-accent-secondary">
      <div class="container">
        <div class="py-[32px] lg:py-[146px] lg:text-center">
          <h2 class="text-[20px] lg:text-[48px] font-bold leading-normal text-white pb-[5px] lg:pb-[40px]">Mission</h2>
          <p class="text-white lg:text-[24px] lg:leading-[40px]">Our mission is to provide translation customers with a sophisticated yet streamlined online portal that is
            more than just another platform – offers innovative features to accomplish more – and which connects them
            with
            top-rated translators across the world so that both customers and translators enjoy a win-win situation,
            resulting from making every project a success.</p></div>
      </div>
    </section>

    <section>
      <div class="w-full h-[360px] lg:h-[700px]">
        <div class="w-full h-full overflow-hidden relative">
          <img src="@/assets/images/trusted.jpg" alt="" class="w-full h-full object-cover">
          <div class="w-full h-full backdrop-brightness-75 absolute top-0 bottom-0 left-0 right-0 z-10"></div>

          <div class="h-full container text-white lg:text-center absolute top-0 bottom-0 left-0 right-0 z-20
          flex justify-center items-center
          ">
            <div class="">
              <h2 class="text-[20px] lg:text-[48px] font-bold leading-normal text-white pb-[5px] lg:pb-[40px]">Vision</h2>
              <p class="text-white lg:text-[24px] lg:leading-[40px]">Globlang Translation is an
                international leader in the translation marketplace that offers a transparent, intuitive and
                cost-effective online portal to customers who need documents, web content, and video content translated
                guaranteeing high-quality and speed. Unlike other options currently available in the market (translation
                companies, online translation agencies, etc.), Marstranslation.com connects its customers with highly
                rated, certified, native translators from around the world who deliver quality translations according to
                company standards.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-paddings-y">
      <div class="container">
        <SectionHead
        title="Values"
        text="Globlang.com practices following business values to ensure both customers and translatorsenjoy a sustainable work-relationship."
        />

        <div class="flex flex-col sm:flex-row items-center sm:justify-between gap-y-[50px] py-[28px] sm:py-[80px]">
          <div class="flex flex-col items-center">
            <div class="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]">
              <img src="/icons/values001.png" alt="" class="w-full object-contain">
            </div>
            <p class="text-[20px] lg:text-[24px] font-semibold text-black pt-[10px]  lg:pt-[20px]">Customer-focus</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-[50px] h-[50px] ">
              <img src="/icons/values002.png" alt="" class="w-full object-contain">
            </div>
            <p class="text-[20px] font-semibold text-black pt-[10px] lg:pt-[20px]">Transparency</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-[50px] h-[50px] ">
              <img src="/icons/values003.png" alt="" class="w-full object-contain">
            </div>
            <p class="text-[20px] font-semibold text-black pt-[10px] lg:pt-[20px]">Integrity</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]">
              <img src="/icons/values004.png" alt="" class="w-full object-contain">
            </div>
            <p class="text-[20px] font-semibold text-black pt-[10px] lg:pt-[20px]">Confidentiality</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <Footer/>
</template>

<script setup>

import Header from "@/components/structure/Header.vue";
import Footer from "@/components/structure/Footer.vue";
import GloblangTranslationSlider from "@/components/partials/GloblangTranslationSlider.vue";
import SectionHead from "@/components/global/SectionHead.vue";
import ToDoList from "@/components/icons/ToDoList.vue";

</script>

