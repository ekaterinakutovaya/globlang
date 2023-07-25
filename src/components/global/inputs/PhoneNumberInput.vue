<template>
  <div class="relative">
    <label v-show="labeled" class="text-[16px] text-black leading-[20px] font-medium" for="">Phone</label>
    <div class="flex items-center h-[48px] group">
      <div class="w-[70px] h-full border border-r-0 border-solid border-input-border-color rounded-l-[10px]
                                    flex items-center justify-center select-none">
        <span class="text-[13px] text-black leading-[140%] ">+998</span>
      </div>

      <input v-maska
             :disabled="disabled"
             :value="modelValue"
             class="appearance-none block w-full h-full bg-white py-[14px] px-[12px] border border-solid border-input-border-color rounded-r-[10px] text-[13px] text-black leading-[140%] focus:outline-none focus:border-accent-primary"
             data-maska="## ### ## ##"
             placeholder="Phone"
             @input="$emit('update:modelValue', $event.target.value)"
      >
    </div>
    <span class="text-[12px] text-danger absolute bottom-[-20px]">{{ error }}</span>
  </div>
</template>

<script setup>
import {vMaska} from "maska";
import {useField, Field} from 'vee-validate';
import {defineProps, toRefs} from "vue";

const props = defineProps({
  labeled: {type: Boolean, default: false},
  modelValue: String,
  error: String,
  disabled: {type: Boolean, default: false}
})

const {labeled, modelValue, error, disabled} = toRefs(props);

const { value, errorMessage } = useField(() => props.modelValue);

</script>
