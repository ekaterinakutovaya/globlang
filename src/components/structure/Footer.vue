<template>
  <footer class="w-full bg-accent-primary">
    <div class="min-w-[375px] max-w-[1440px] px-[16px] sm:px-[64px] lg:px-[75px] my-0 mx-auto">
      <div class="pt-[65px] sm:py-[30px] lg:py-[50px] text-text-color-dim-green">

        <div class="grid grid-cols-1 gap-[32px] sm:gap-[20px] sm:grid-cols-5 lg:gap-[70px]">
          <div>
            <div class="hidden sm:block w-[70px] lg:w-[120px] pb-[5px] lg:pb-[20px]">
              <img alt="logo" src="@/assets/images/logo-white.png">
            </div>
            <p class="sm:text-[10px] sm:leading-[22px] lg:text-[16px] lg:leading-[32px]">Our translation company is
              driven by our passion for languages.
              This transcends every word we translate. If you need the highest quality professional translations or
              interpretations, in the fastest time, we invite you to get a free quote online, or connect with us 24/7.
              We’re always available. And we’re happy to help!
            </p>
          </div>

          <div>
            <div class="text-white text-[15px] font-semibold uppercase pb-[5px] lg:pb-[20px]">Get in touch</div>
            <ul class="flex flex-col gap-y-[3px] sm:text-[10px] sm:leading-[22px] lg:text-[16px] lg:leading-[32px]">
              <li>
                Address: Washington, D.C., USA
              </li>
              <li>
                Email: contact@globlang.com
              </li>
              <li>
                Fax: 1-800-
              </li>
              <li>
                Phone: 1-800-
              </li>
              <li>
                Whatsapp: 1-
              </li>
              <li>
                Telegram: 1-
              </li>
            </ul>
          </div>

          <div>
            <div class="text-white text-[15px] font-semibold uppercase pb-[5px] lg:pb-[20px]">FROM THE BLOG</div>
            <p class="sm:text-[10px] sm:leading-[22px] lg:text-[16px] lg:leading-[32px]">How 12 Different Countries
              Celebrate Veterans Day
              How to Keep Your Team Motivated (Business Series)
              Exploring Hieroglyphs and Petroglyphs: Differences and Similarities</p>
          </div>
          <div>
            <div class="text-white text-[15px] font-semibold uppercase pb-[5px] lg:pb-[20px]">Company</div>
            <ul class="flex flex-col gap-y-[3px] sm:text-[10px] sm:leading-[22px] lg:text-[16px] lg:leading-[32px]">
              <li class="cursor-pointer hover:text-accent-secondary transition ease-in-out delay-75">Terms of Use</li>
              <li class="cursor-pointer hover:text-accent-secondary transition ease-in-out delay-75">Refund Policy</li>
              <li class="cursor-pointer hover:text-accent-secondary transition ease-in-out delay-75">Help Us Improve
              </li>
              <li class="cursor-pointer hover:text-accent-secondary transition ease-in-out delay-75">Privacy Policy</li>
              <li class="cursor-pointer hover:text-accent-secondary transition ease-in-out delay-75">HIPAA Compliant
              </li>
              <li class="cursor-pointer hover:text-accent-secondary transition ease-in-out delay-75">Terms &
                Conditions
              </li>
              <li class="cursor-pointer hover:text-accent-secondary transition ease-in-out delay-75">Insurance Policy
              </li>
              <li class="cursor-pointer hover:text-accent-secondary transition ease-in-out delay-75">Shipping Policy
              </li>
            </ul>
          </div>

          <div>
            <div class="text-white text-[15px] font-semibold uppercase pb-[5px] lg:pb-[20px]">SERVICES</div>
            <ul class="flex flex-col gap-y-[3px] sm:text-[10px] sm:leading-[22px] lg:text-[16px] lg:leading-[32px]">
              <li class="cursor-pointer hover:text-accent-secondary transition ease-in-out delay-75">Get a Quote</li>
              <li class="cursor-pointer hover:text-accent-secondary transition ease-in-out delay-75">About Global
                language
              </li>
              <li class="cursor-pointer hover:text-accent-secondary transition ease-in-out delay-75">Credentials</li>
              <li class="cursor-pointer hover:text-accent-secondary transition ease-in-out delay-75">Live Support</li>
              <li class="cursor-pointer hover:text-accent-secondary transition ease-in-out delay-75">Get Discounts</li>
            </ul>
          </div>

        </div>



      </div>
    </div>

<!--    Copyright   -->
    <div class="sm:bg-accent-secondary">
      <div class="container">
        <div class="mt-[16px] py-[16px] sm:mt-[18px] sm:py-[15px] lg:py-[18px] flex items-center justify-between">
          <div class="text-white tracking-[-0.1px]">
            ©NOBLETECH 2022 All rights reserved
          </div>

          <SocialBar/>
        </div>
      </div>
    </div>

  </footer>
</template>

<script setup>
import SocialBar from "@/components/global/SocialBar.vue";
</script>

<style lang="scss">
.custom-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 0 1fr;
  gap: 5px 32px;
  grid-template-areas:
    ". . . . ."
    ". . . . .";
}
</style>