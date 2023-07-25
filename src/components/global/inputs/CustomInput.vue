<template>

  <div>
    <div class="relative">
      <label class="text-[16px] text-black leading-[20px] font-medium" v-show="label" for="">{{label}}</label>
      <input
          :class="{'pl-[44px]': icon, 'pl-[12px]': !icon, 'border-danger': error}"
          :placeholder="placeholder"
          :type="customInputType"
          :value="modelValue"
          :disabled="disabled"
          class="appearance-none block w-full bg-white py-[14px] pr-[12px] border border-solid border-input-border-color
         rounded-[10px] text-[13px] text-black leading-[140%] focus:outline-none focus:border-accent-primary"
          @blur="$emit('blur')" @input="$emit('update:modelValue', $event.target.value)"
      />

      <div v-if="icon" class="w-[20px] absolute left-[12px] top-2/4 translate-y-[-50%]">
        <i :class="icon"
           class="text-[20px] leading-[140%] pi"
        ></i>
      </div>

      <button v-if="inputType === 'password'"
              class="w-[20px] absolute right-[12px] top-2/4 translate-y-[-50%] lg:cursor-pointer"
              @click="showPasswordToggler">
        <i v-if="eyeIcon" class="text-[20px] leading-[140%] pi pi-eye"></i>
        <i v-else class="text-[20px] leading-[140%] pi pi-eye-slash"></i>
      </button>

      <span class="text-[12px] text-danger absolute bottom-[-20px]">{{ error }}</span>
    </div>


  </div>

</template>

<script setup>
import {defineEmits, defineProps, onMounted, ref, toRefs} from "vue";

const eyeIcon = ref(false);
const customInputType = ref(null);

const props = defineProps({
  label: {type: String, default: ''},
  input: String,
  icon: {type: String, default: ''},
  placeholder: {type: String, default: ""},
  inputType: String,
  modelValue: String,
  error: String,
  disabled: {type: Boolean, default: false}
});

const {label, input, placeholder, inputType, disabled} = toRefs(props);

const emit = defineEmits(['update:modelValue', 'blur']);

onMounted(() => {
  customInputType.value = props.inputType
})


const showPasswordToggler = (e) => {
  if (customInputType.value === 'text') {
    customInputType.value = 'password'
  } else {
    customInputType.value = 'text'
  }

  eyeIcon.value = !eyeIcon.value;

}

// const inputComputed = computed({
//   get: () => input.value,
//   set: (val) => emit("update:input", val)
// });
</script>

