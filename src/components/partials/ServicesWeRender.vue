<template>
  <section class="section-paddings-y">
    <div class="container">
      <SectionHead
          text="Globlang Translation offers a whole range of language services with the help of native, skilled, and industry-specific translators and interpreters at very affordable rates. From simple document translation to website localization, we cover everything."
          title="Services We Render"
      />

      <GrayBGBlocksGrid
        :items="menu.services"
      />

    </div>
  </section>
</template>

<script setup>
import {menu} from '@/data/data.js';
import SectionHead from "@/components/global/SectionHead.vue";
import GrayBGBlocksGrid from "@/components/global/GrayBGBlocksGrid.vue";
import {ref} from "vue";

const items = ref(menu.services);

</script>
