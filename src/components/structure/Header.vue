<template>
<!--  <Modal v-if="showModal">-->
<!--      modal-->
<!--  </Modal>-->
  <header class="w-full ">
    <div class="container border-solid border-b lg:border-b-0 border-[rgba(0,0,0,0.10)]">
      <div class="w-full flex justify-between lg:justify-normal items-center py-[10px] sm:py-[24px] lg:py-[15px]">
        <div class="pr-[60px]">
          <router-link to="/">
            <Logo class="w-[63px] h-[44px] sm:w-[70px] sm:h-[48px] lg:w-[80px] lg:h-[56px]"/>
          </router-link>
        </div>

        <nav class="hidden lg:block">
          <ul class="flex items-center gap-x-[40px]">
            <li class="text-[18px] font-medium text-black hover:text-accent-secondary transition ease-in-out delay-75">
              <router-link to="/services">Services</router-link>
            </li>
            <li class="text-[18px] font-medium text-black hover:text-accent-secondary transition ease-in-out delay-75">
              <router-link to="/services">Industries</router-link>
            </li>
            <li class="text-[18px] font-medium text-black hover:text-accent-secondary transition ease-in-out delay-75">
              <router-link to="/services">Languages</router-link>
            </li>
            <li class="text-[18px] font-medium text-black hover:text-accent-secondary transition ease-in-out delay-75">
              <router-link to="/services">About</router-link>
            </li>
          </ul>
        </nav>

        <div class="hidden w-full lg:flex justify-end items-center gap-x-[10px] sm:gap-x-[12px] py-[12px] sm:py-[24px]">
          <Button
              btnText="Sign In"
              color="bg-accent-primary"
              @click="showModal = true"
          />

          <Button
              btnText="Get Quote"
              color="bg-accent-primary"
          />
        </div>


        <div class="md:hidden">
          <MenuTogglerBtn/>
        </div>
      </div>
    </div>

    <div class="lg:hidden container border-solid border-b border-[rgba(0,0,0,0.10)]">
      <div class="w-full flex justify-end items-center gap-x-[10px] sm:gap-x-[12px] py-[12px] sm:py-[24px]">
        <Button
            btnText="Sign In"
            color="bg-accent-primary"
            @click="showModal = true"
        />

        <Button
            btnText="Get Quote"
            color="bg-accent-primary"
        />
      </div>
    </div>

  </header>

</template>

<script setup>

import Logo from "@/components/icons/Logo.vue";
import MenuTogglerBtn from "@/components/global/MenuTogglerBtn.vue";
import Button from "@/components/global/Button.vue";
import Modal from "@/components/global/Modal.vue";
import {ref} from "vue";

const showModal = ref(false);

</script>

<style lang="scss" scoped>

</style>