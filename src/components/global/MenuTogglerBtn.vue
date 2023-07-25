<template>
  <button>
    <i class="text-[24px] text-black pi mt-[5px]"
      :class="{'pi-bars': !isMenuOpened, 'pi-times': isMenuOpened}"
    ></i>
  </button>
</template>

<script setup>
import Bars from "@/components/icons/Bars.vue";
import {defineProps ,toRefs} from "vue";

const props = defineProps({
  isMenuOpened: {type: Boolean, default: false}
})

const {isMenuOpened} = toRefs(props);
</script>
