<template>

  <div class="w-full h-screen">

    <div class="container h-full">
      <div class="py-[20px] sm:py-[42px] lg:py-[50px] w-full h-full lg:flex items-center">
        <!--  Image    -->
        <div class="hidden lg:block w-1/2 h-full px-[50px]">
          <div class="w-full h-full overflow-hidden rounded-[50px] relative">
            <router-link to="/">
              <div class="w-[147px] h-[100px] bg-white rounded-br-[50px] absolute z-50 flex justify-center items-center">
                <Logo class="w-[100px] "/>
              </div>
            </router-link>
            <img src="../assets/images/unsplash.jpg" alt="auth" class="w-full h-full object-cover">
          </div>
        </div>

        <!--  Form   -->
        <div class="w-full lg:w-1/2 h-full flex flex-col justify-between lg:px-[50px]">
          <div>
            <div class="flex items-center justify-end gap-x-[12px] pb-[32px]">
              <p class="text-[12px] leading-[20px] text-accent-primary font-medium">Already a member?</p>
              <Button
                  btnText="Sign In"
                  color="dark"
                  @click="$router.push('/login')"
              />
            </div>

            <div class="w-full">
              <h3 class="text-[16px] sm:text-[32px] text-black leading-normal font-semibold lg:font-bold">Register as
                Customer</h3>

              <form class="pt-[15px] flex flex-col gap-y-[24px]" @submit="onSubmit" @click.prevent>
                <CustomInput
                    inputType="text"
                    placeholder="First Name"
                    v-bind="firstName"
                />
                <CustomInput
                    inputType="text"
                    placeholder="Last Name"
                    v-bind="lastName"
                />
                <CustomInput
                    inputType="email"
                    placeholder="Email"
                    v-bind="email"
                />
                <CustomInput
                    inputType="password"
                    placeholder="Password"
                    v-bind="password"
                />
                <CustomInput
                    inputType="password"
                    placeholder="Confirm Password"
                    v-bind="secondPassword"
                />

                <PhoneNumberInput
                    v-bind="phoneNumber"
                />

                <div class="relative">
                  <div class="flex items-center h-[48px]">
                    <input class="appearance-none block w-full h-full bg-white py-[14px] px-[12px]
                border  border-solid border-input-border-color rounded-l-[10px] text-[13px] text-black leading-[140%]
                focus:outline-none focus:border-accent-primary" type="text" v-bind="captcha"
                           placeholder="Enter Captcha"/>

                    <div
                        class="w-[100px] h-full border border-l-0 border-solid border-input-border-color rounded-r-[10px]">
                      <img :src="'data:image/png;base64,'+realCaptcha" alt="captcha"
                           class="w-full h-full object-contain">
                    </div>
                  </div>
                  <span class="text-[12px] text-danger absolute bottom-[-20px]">{{ errors.captcha }}</span>
                </div>

              </form>
            </div>
          </div>

            <Button
                btnText="Sign Up"
                color="dark"
                full
                @click="onSubmit"
                :isLoading="isLoading"
            />

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import {vMaska} from "maska";
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import * as yup from 'yup';
import {useForm} from 'vee-validate';

import Button from "@/components/global/Button.vue";
import CustomInput from "@/components/global/inputs/CustomInput.vue";
import {useUserStore} from "@/stores/userStore";
import PhoneNumberInput from "@/components/global/inputs/PhoneNumberInput.vue";
import Logo from "@/components/icons/Logo.vue";
import {API_URL} from "@/api";


const router = useRouter();
const userStore = useUserStore();

const hiddenCaptcha = ref(null);
const realCaptcha = ref(null);
const isLoading = ref(false);

onMounted(async () => {
  const res = await axios.get(API_URL + 'auth/signup');
  hiddenCaptcha.value = res.data.hiddenCaptcha;
  realCaptcha.value = res.data.realCaptcha;
})

const {handleSubmit, errors, defineInputBinds, defineComponentBinds, setFieldError} = useForm({
  initialValues: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'rowoco3074@nmaller.com',
    password: '12345678',
    secondPassword: '12345678',
    // phoneNumber: "999999999"
  },
  validationSchema: yup.object({
    firstName: yup.string().required('Please enter your first name'),
    lastName: yup.string().required('Please enter your last name'),
    email: yup.string().email().required('Please enter your email'),
    password: yup.string().min(8).required('Please enter your password'),
    secondPassword: yup.string().required().oneOf([yup.ref('password')], "Passwords do not match"),
    phoneNumber: yup.string().required('Please enter your phone number'),
    captcha: yup.string().required('Please enter captcha')
  }),
});


const firstName = defineComponentBinds('firstName', {
  mapProps: state => ({
    error: state.errors[0]
  })
});
const lastName = defineComponentBinds('lastName', {
  mapProps: state => ({
    error: state.errors[0]
  })
});
const email = defineComponentBinds('email', {
  mapProps: state => ({
    error: state.errors[0]
  })
});
const password = defineComponentBinds('password', {
  mapProps: state => ({
    error: state.errors[0]
  })
});
const secondPassword = defineComponentBinds('secondPassword', {
  mapProps: state => ({
    error: state.errors[0]
  })
});
const phoneNumber = defineComponentBinds('phoneNumber', {
  mapProps: state => ({
    error: state.errors[0]
  })
});
const captcha = defineInputBinds('captcha', {
  mapProps: state => ({
    error: state.errors[0]
  })
});




const onSubmit = handleSubmit(values => {
  if (values.captcha !== hiddenCaptcha.value) {
    setFieldError('captcha', 'Captcha do not match');
    return
  }

  isLoading.value = true;
  values.hiddenCaptcha = hiddenCaptcha.value;
  values.realCaptcha = realCaptcha.value;

  register(values)
})

const register = async (data) => {
  data.phoneNumber = data.phoneNumber.replace(/\s/g, "");
  try {
    const res = await axios.post('http://globlang.com:8078/auth/signup', data);

    if (res.status === 200) {
      setTimeout(() => {
        isLoading.value = false;
        router.push('/verify-email');
      }, 2000)

    }


  } catch (error) {
    // console.log(error)

    if (error.response.status === 409) {
      setTimeout(() => {
        isLoading.value = false;
        setFieldError('email', error.response.data);
      }, 500)

    }
  }
}


</script>
