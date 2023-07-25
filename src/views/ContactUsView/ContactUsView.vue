<template>
  <Header/>
  <main>
    <section class="w-full relative pb-[32px]">
      <div class="w-full h-[332px] lg:h-[700px] bg-[url('public/map.jpg')] bg-cover bg-top absolute -z-10">
        <div class="w-full h-full backdrop-brightness-50">

        </div>
      </div>

      <div class="container">
        <div class="w-full pt-[32px]">
          <h2 class="text-white text-[16px] sm:text-[36px] lg:text-[48px] font-bold leading-normal pb-[16px] lg:pb-[40px] text-center">
            Contact Us</h2>
          <p class="block lg:max-w-[80%] lg:text-[24px] lg:leading-[40px] text-center my-0 mx-auto text-white pb-[76px]">
            How can we help ?</p>
        </div>

        <ContactForm/>

      </div>
    </section>
  </main>

  <Footer/>
</template>

<script setup>
import Header from "@/components/structure/Header.vue";
import Footer from "@/components/structure/Footer.vue";
import ContactForm from "@/views/ContactUsView/ContactForm.vue";

</script>

