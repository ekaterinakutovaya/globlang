<template>
  <div>
    <input
        :placeholder="placeholder"
        :type="inputType"
        class="appearance-none block w-full bg-white py-[8px] px-[12px] border border-solid border-input-border-color
         rounded-[10px] text-[13px] text-black leading-[140%] focus:outline-none focus:border-accent-primary"
<!--        v-model="inputComputed"-->
        :value="modelValue"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits, toRefs, computed } from "vue";

const emit = defineEmits(["update:input"]);

const props = defineProps({
  input: String,
  placeholder: { type: String, default: "" },
  inputType: String,
  modelValue: String
});

const { input, placeholder } = toRefs(props);

// const inputComputed = computed({
//   get: () => input.value,
//   set: (val) => emit("update:input", val)
// });
</script>

