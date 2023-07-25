<template>
  <nav>
    <ul>
      <MobileMenuItem
        title="Services"
      >
        <ServicesSubMenu/>
      </MobileMenuItem>

      <MobileMenuItem
        title="Industries"
      >
        <IndustriesSubMenu/>
      </MobileMenuItem>

      <MobileMenuItem
        title="Languages"
      >
        <LanguagesSubMenu/>
      </MobileMenuItem>

      <MobileMenuItem
        title="About"
      >
        <AboutSubMenu/>
      </MobileMenuItem>


    </ul>

  </nav>
</template>

<script setup>


import MobileMenuItem from "@/components/structure/Menu/MobileMenu/MobileMenuItem.vue";
import ServicesSubMenu from "@/components/structure/Menu/MobileMenu/ServicesSubMenu.vue";
import IndustriesSubMenu from "@/components/structure/Menu/MobileMenu/IndustriesSubMenu.vue";
import LanguagesSubMenu from "@/components/structure/Menu/MobileMenu/LanguagesSubMenu.vue";
import AboutSubMenu from "@/components/structure/Menu/MobileMenu/AboutSubMenu.vue";
</script>



