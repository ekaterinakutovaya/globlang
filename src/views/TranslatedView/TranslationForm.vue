<template>
  <div
      class="w-full max-w-[1047px] py-[32px] px-[16px] lg:py-[80px] lg:px-[80px] bg-white rounded-[10px] shadow-dropdown-shadow my-0 mx-auto">
    <form class="w-full grid grid-cols-1 gap-[24px] lg:gap-0 lg:gap-x-[24px] lg:gap-y-[30px] lg:grid-cols-2">
      <select v-model="fromLanguage"
              class="languages-select appearance-none block w-full bg-white py-[14px] pr-[12px] border border-solid border-input-border-color
         rounded-[10px] text-[13px] text-black leading-[140%] focus:outline-none focus:border-accent-primary">
        <option v-for="item in menu.languages" :key="item.title">{{ item.title }}</option>
      </select>

      <div class="relative">
        <Field v-bind="targetLanguage" class="languages-select appearance-none block w-full bg-white py-[14px] pr-[12px] border border-solid
      border-input-border-color rounded-[10px] text-[13px] text-black leading-[140%] focus:outline-none focus:border-accent-primary"
               v-slot="{ value }" name="targetLanguage" as="select">
          <option value="" disabled>Select Target Language (s)</option>
          <option v-for="item in menu.languages" :key="item.title" :value="item.title"
                  :selected="value && value.includes(item.title)"
          >
            {{ item.title }}
          </option>
        </Field>
        <span class="text-[12px] text-danger absolute bottom-[-20px]">{{ errors.targetLanguage }}</span>
      </div>

      <CustomInput
          inputType="text"
          placeholder="Full name"
          v-bind="name"
      />

      <CustomInput
          inputType="email"
          placeholder="Email"
          v-bind="email"
      />

      <div class="relative">
        <div class="flex items-center h-[48px] group">
          <div class="w-[70px] h-full border border-r-0 border-solid border-input-border-color rounded-l-[10px]
                       flex items-center justify-center select-none">
            <span class="text-[13px] text-black leading-[140%] ">+998</span>
          </div>
          <Field v-bind="phone"
                 class="appearance-none block w-full h-full bg-white py-[14px] px-[12px] border border-solid border-input-border-color rounded-r-[10px] text-[13px] text-black leading-[140%] focus:outline-none focus:border-accent-primary"
                 v-slot="{ value }" name="phone" as="input"
                 v-maska
                 data-maska="## ### ## ##"
                 placeholder="Phone"
          >
          </Field>
        </div>
        <span class="text-[12px] text-danger absolute bottom-[-20px]">{{ errors.phone }}</span>
      </div>

      <div class="lg:flex items-start gap-x-[24px]">
        <div class="pb-[16px] lg:pb-0 text-[16px] font-semibold text-center lg:pt-[10px]">OR</div>
        <input type="file" multiple class="block w-full h-[48px] bg-white p-[5px] border border-solid border-input-border-color rounded-[10px] text-[13px] text-black leading-[140%] focus:outline-none focus:border-accent-primary
      file:mr-3 file:py-2 file:px-4 file:h-auto
      file:rounded-[8px] file:border-0 file:outline-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
               @change="filesUploadHandler"
               ref="fileInput"
        >
      </div>
      <input type="reset" class="hidden" ref="resetInput">

    </form>

    <div class="w-full lg:w-[250px] my-0 mx-auto pt-[24px] lg:pt-[30px]">
      <Button
          :isLoading="isLoading"
          btnText="Get Your Quotation"
          color="light"
          full
          type="reset"
          @click="onSubmit"
      />
    </div>
  </div>
</template>

<script setup>
import {vMaska} from "maska";
import {ref} from "vue";
import axios from "axios";
import {toast} from "vue3-toastify";
import * as yup from 'yup';
import {useForm, Field} from 'vee-validate';

import {menu} from "@/data/data";
import CustomInput from "@/components/global/inputs/CustomInput.vue";
import Button from "@/components/global/Button.vue";


const isLoading = ref(false);
const fromLanguage = ref('English');
const tmpFiles = ref(null);
const fileInput = ref(null);
const resetInput = ref(null);


const {handleSubmit, errors, defineComponentBinds, defineInputBinds, resetForm} = useForm({
  initialValues: {
    // name: 'John Doe',
    // email: 'texab42028@iturchia.com',
    // phone: '999999999'
  },
  validationSchema: yup.object({
    targetLanguage: yup.string().required('Please choose target language'),
    name: yup.string().required('Please enter your name'),
    email: yup.string().email().required('Please enter your email'),
    phone: yup.string().required('Please enter your phone'),
  }),
});

const name = defineComponentBinds('name', {
  mapProps: state => ({
    error: state.errors[0]
  })
});
const email = defineComponentBinds('email', {
  mapProps: state => ({
    error: state.errors[0]
  })
});
const phone = defineInputBinds('phone', {
  mapProps: state => ({
    error: state.errors[0]
  })
});
const targetLanguage = defineInputBinds('targetLanguage', {
  mapProps: state => ({
    error: state.errors[0]
  })
});


const onSubmit = handleSubmit((values) => {
  isLoading.value = true;
  values.fromLanguage = fromLanguage.value;
  values.files = tmpFiles.value;
  placeOrder(values);
})

const filesUploadHandler = (e) => {
  if (e.target.files) {
    tmpFiles.value = e.target.files
  }
}
const placeOrder = async (data) => {
  const {fromLanguage, targetLanguage, name, email, phone, files} = data;
  let formData = new FormData();
  formData.append('files', files);

  try {
    const res = await axios.post(`http://globlang.com:8078/order/${fromLanguage},${targetLanguage},${name},${email},${phone}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    if (res.status === 200) {
      setTimeout(() => {
        isLoading.value = false;

        toast.success(res.data.message, {
          position: toast.POSITION.TOP_CENTER,
          transition: 'slide',
          hideProgressBar: true,
          theme: 'colored'
        });
        resetForm();
        resetInput.value.click();
      }, 2000)
    }

  } catch (error) {
    console.log(error)
  }
}

</script>

<style lang="scss" scoped>
.languages-select:focus {
  outline: none !important;
  box-shadow: none !important;
}

.file-input {
  position: absolute;
  inset: 0;
  z-index: 2;
  opacity: 0;
}

</style>