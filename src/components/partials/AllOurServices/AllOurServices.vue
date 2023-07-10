<template>
  <section class="section-paddings-y">
    <div class="container">

      <div>
        <SectionHead
            text="You need more than a translation agency. You need multifaceted language services to target each of your linguistic needs. We deliver fast, flawless, human-powered translations that globalize your business. Select any of our professional translation services to find out how we can customize a translation for you."
            title="All Our Professional Translation Services"
        />

        <AllOurServicesGrid/>
      </div>

    </div>
  </section>
</template>

<script setup>

import SectionHead from "@/components/global/SectionHead.vue";
import AllOurServicesGrid from "@/components/partials/AllOurServices/AllOurServicesGrid.vue";
</script>