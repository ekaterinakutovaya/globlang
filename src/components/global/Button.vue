<template>
  <button
      :disabled="disabled"
      class="bg-cyan-500 hover:bg-cyan-600 min-w-[120px] min-h-[48px] sm:min-w-[160px] sm:min-h-[48px] py-[8px] px-[12px] flex items-center justify-center gap-x-4 text-white
      text-[15px] sm:text-[16px] rounded-[10px] font-medium transition ease-in-out delay-150"
      :class="{'max-w-[160px]': !full, 'w-full': full, 'bg-accent-primary': color === 'dark', 'hover:bg-accent-primary/[0.8]': color === 'dark', 'bg-accent-secondary': color === 'light', 'hover:bg-accent-secondary/[0.8]': color === 'light', 'bg-danger': color === 'danger', 'hover:bg-danger/[0.8]': color === 'danger', 'pointer-events-none opacity-30': disabled}"
  >
    <i v-show="isLoading" class="pi pi-spin pi-spinner text-[18px] ease-in-out duration-300"></i>
    {{ btnText }}
  </button>
</template>

<script setup>
import {defineProps, toRefs} from 'vue';

const props = defineProps({
  btnText: String,
  color: String,
  full: {type: Boolean, default: false},
  isLoading: {type: Boolean, default: false},
  disabled: {type: Boolean, default: false}
});

const {btnText, color, full, isLoading, disabled} = toRefs(props);
</script>
