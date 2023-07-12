<template>
  <div>
    <input
        :placeholder="placeholder"
        :type="inputType"
        class="appearance-none block w-full bg-white py-[8px] px-[12px] border border-solid border-input-border-color
         rounded-[10px] text-[13px] text-black leading-[140%] focus:outline-none focus:border-accent-primary"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)" @blur="$emit('blur')"
    />
    <span>{{error}}</span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, toRefs } from "vue";

// const emit = defineEmits(["update:input"]);

const props = defineProps({
  input: String,
  placeholder: { type: String, default: "" },
  inputType: String,
  modelValue: String,
  error: String
});

const { input, placeholder } = toRefs(props);

const emit = defineEmits(['update:modelValue', 'blur']);

// const inputComputed = computed({
//   get: () => input.value,
//   set: (val) => emit("update:input", val)
// });
</script>

