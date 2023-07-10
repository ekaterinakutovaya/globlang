<template>
  <section class="section-paddings-y">
    <div class="container">
      <SectionHead
          text="We offer a lifetime guarantee in all of our translation services. This is because we’re extremely
          confident in our 5-step quality assurance process that delivers 100% accurate translations, every time."
          title="Thorough 5-Step Quality Control"
      />

      <!-- 5 Steps    -->
      <Thorough5StepGrid/>
    </div>
  </section>
</template>

<script setup>
import SectionHead from "@/components/global/SectionHead.vue";
import Thorough5StepGrid from "@/components/partials/Thorought5Step/Thorough5StepGrid.vue";
</script>
