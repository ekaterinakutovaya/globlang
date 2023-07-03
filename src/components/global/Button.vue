<template>
  <button
      class="min-w-[120px] min-h-[38px] max-w-[160px] sm:min-w-[160px] sm:min-h-[48px] py-[8px] px-[12px] text-white
      text-[15px] sm:text-[14px] rounded-[10px] font-medium"
      :class="[color]"
  >

    {{ btnText }}
  </button>
</template>

<script setup>
import {defineProps, toRefs} from 'vue';

const props = defineProps({
  btnText: String,
  color: String
});

const {btnText, color} = toRefs(props);
</script>
