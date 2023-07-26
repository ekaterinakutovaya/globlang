<template>
  <div
      class="w-full max-w-[1047px] py-[32px] px-[16px] lg:py-[80px] lg:px-[80px] bg-white rounded-[10px] shadow-dropdown-shadow my-0 mx-auto">
    <form class="w-full grid grid-cols-1 gap-[24px] lg:gap-0 lg:gap-x-[24px] lg:gap-y-[30px] lg:grid-cols-2"
          @submit="onSubmit" @click.prevent>

      <CustomInput
          inputType="text"
          placeholder="Full Name"
          v-bind="fullName"
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

      <div class="lg:col-span-2 pb-[24px] lg:pb-0">
        <label class="text-[13px] font-medium pb-[5px]">What can we do for you ? *</label>
        <textarea class="appearance-none block w-full h-[96px] lg:h-[180px] bg-white border border-solid border-input-border-color
         rounded-[10px] text-[13px] text-black leading-[140%] focus:outline-none focus:border-accent-primary"
        v-bind="description"
        ></textarea>
      </div>

      <input type="reset" class="hidden" ref="resetInput">

    </form>

    <div class="w-full lg:w-[250px] my-0 mx-auto lg:pt-[30px]">
      <Button
          :isLoading="isLoading"
          btnText="Send Message"
          color="light"
          full
          @click="onSubmit"
      />
    </div>
  </div>
</template>

<script setup>
import {vMaska} from "maska";
import {useForm, Field} from 'vee-validate';
import {ref} from "vue";
import * as yup from 'yup';
import axios from "axios";
import {toast} from "vue3-toastify";

import CustomInput from "@/components/global/inputs/CustomInput.vue";
import Button from "@/components/global/Button.vue";

const isLoading = ref(false);
const resetInput = ref(null);

const {handleSubmit, defineComponentBinds, defineInputBinds, resetForm, errors} = useForm({
  initialValues: {
    // fullName: 'John Doe',
    // email: 'texab42028@iturchia.com',
    // phone: "",
    // description: 'message'
  },
  validationSchema: yup.object({
    fullName: yup.string().required('Please enter you full name'),
    email: yup.string().email().required('Please enter your email'),
    phone: yup.string().required('Please enter your phone'),
    description: yup.string().required('Please enter message'),
  }),
});

const fullName = defineComponentBinds('fullName', {
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
const description = defineInputBinds('description', {
  mapProps: state => ({
    error: state.errors[0]
  })
});

const onSubmit = handleSubmit(values => {
  isLoading.value = true;
  contactUs(values)
})



const contactUs = async (data) => {
  data.phone = data.phone.replace(/\s/g, "");
  try {
    const res = await axios.post('http://globlang.com:8078/help', data);

    if (res.status === 200) {
      setTimeout(() => {
        isLoading.value = false;

        toast.success('Your message has been successfully sent!', {
          position: toast.POSITION.TOP_CENTER,
          transition: 'slide',
          hideProgressBar: true,
          theme: 'colored'
        });

        resetForm();

      }, 2000)

    }


  } catch (error) {
    console.log(error)
  }
}


</script>
