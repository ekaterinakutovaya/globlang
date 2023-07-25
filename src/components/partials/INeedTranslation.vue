<template>
  <section class="section-paddings-y">
    <div class="container">
      <div class="flex flex-col gap-[32px] lg:flex-row lg:gap-0 items-stretch">
        <!--    Content-block      -->
        <div class="w-full lg:w-1/2 flex flex-col gap-y-[16px] lg:gap-y-[50px] order-1 lg:order-2">
          <h2 class="text-[16px] sm:text-[36px] lg:text-[50px] font-bold leading-normal text-black">"I Need a <span
              class="text-accent-secondary">Translator!</span>"
          </h2>

          <p>Actually, you need a company specialized in professional translation services.
            Don’t believe us? Take a look at what businesses look like with and without professional translation
            services:</p>

          <ul class="flex flex-col gap-y-[16px]">
            <li class="list-disc ml-3">A single mistranslation has cost upwards of
              <span class="text-accent-secondary font-semibold">$71 million.</span></li>
            <li class="list-disc ml-3"><span class="text-accent-secondary font-semibold">The Top 10 Most Valuable Companies</span> in
              the world reach 27+ countries.
            </li>
            <li class="list-disc ml-3">Your global potential is <span
                class="text-accent-secondary font-semibold">$45 trillion.</span>
            </li>
          </ul>

          <p>Our world is more connected than ever. And yet, we still have trouble communicating. If you want to achieve your full revenue potential, you must reach an international audience. To do that, you need a professional translation company to provide you
            with customized, professional translations that speak
            to your audience.</p>

          <p>Make a global impact. Utilize our network of over 10,000 professional translators</p>

          <div class="hidden lg:block">
            <Button
                btnText="Get Quote"
                color="light"
                @click="$router.push('/translate')"
            />
          </div>
        </div>

<!-- Image-->
        <div class="w-full lg:w-1/2 order-2 lg:order-1">
          <div class="w-full lg:w-[536px] h-[372px] sm:h-[376px] lg:h-full rounded-[20px] overflow-hidden mb-[16px]">
            <img src="@/assets/images/unsplash.jpg" alt="photo" class="w-full h-full object-cover">
          </div>

          <div class="lg:hidden">
            <Button
                btnText="Get Quote"
                color="light"
                @click="$router.push('/translate')"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import Button from "@/components/global/Button.vue";
</script>
