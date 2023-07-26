<template>

  <div class="w-full h-screen">
    <div class="container h-full">
      <div class="py-[20px] sm:py-[42px] lg:py-[120px] w-full h-full lg:flex items-center">
        <!--  Image    -->
        <div class="hidden lg:block w-1/2 h-full px-[50px]">
          <div class="w-full h-full overflow-hidden rounded-[50px] relative">
            <router-link to="/">
              <div
                  class="w-[147px] h-[100px] bg-white rounded-br-[50px] absolute z-50 flex justify-center items-center">
                <Logo class="w-[100px] "/>
              </div>
            </router-link>
            <img alt="auth" class="w-full h-full object-cover" src="../assets/images/unsplash.jpg">
          </div>
        </div>

        <!--  Form   -->
        <div v-if="!successMessage" class="w-full lg:w-1/2 h-full flex flex-col justify-between lg:px-[50px]">
          <div>
            <div class="flex items-center justify-end gap-x-[12px] pb-[32px]">
              <Button
                  btnText="Sign In"
                  color="dark"
                  @click="$router.push('/login')"
              />
            </div>

            <div class="w-full">
              <h3 class="text-[16px] sm:text-[32px] text-black leading-normal font-semibold lg:font-bold">Forgot
                Password</h3>

              <p class="sm:text-[16px] leading-normal">Enter your email address below, we will send instructions to
                reset your password to your email address.
                Please see your spam or junk folder as well.</p>

              <form class="pt-[32px] flex flex-col gap-y-[16px]" @submit="onSubmit" @click.prevent>

                <CustomInput
                    icon="pi-envelope"
                    inputType="email"
                    placeholder="Email"
                    v-bind="email"
                />

              </form>
            </div>
          </div>

          <Button
              :isLoading="isLoading"
              btnText="Submit"
              color="dark"
              full
              @click="onSubmit"
          />
        </div>

        <div v-if="successMessage" class="w-full lg:w-1/2 h-full flex flex-col justify-between lg:px-[50px]">
          <div>
            <div class="w-full">
              <h3 class="text-[16px] sm:text-[32px] text-black leading-normal font-semibold lg:font-bold">Password
                Restore</h3>

              <p class="sm:text-[16px] leading-normal pt-[20px]">{{ successMessage }}</p>

            </div>
          </div>

          <Button
              btnText="Sign In"
              color="dark"
              full
              @click="$router.push('/login')"
          />
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import {useRouter} from "vue-router";
import * as yup from 'yup';
import {useForm} from 'vee-validate';
import {ref} from "vue";

import Button from "@/components/global/Button.vue";
import CustomInput from "@/components/global/inputs/CustomInput.vue";
import Logo from "@/components/icons/Logo.vue";


const router = useRouter();
const isLoading = ref(false);
const successMessage = ref('');

const {handleSubmit, defineComponentBinds} = useForm({
  initialValues: {
    email: 'rowoco3074@nmaller.com',
  },
  validationSchema: yup.object({
    email: yup.string().email().required('Please enter your email')
  }),
});

const email = defineComponentBinds('email', {
  mapProps: state => ({
    error: state.errors[0]
  })
});


const onSubmit = handleSubmit(values => {
  isLoading.value = true;
  restorePassword(values)
})

const restorePassword = async (data) => {
  try {
    const res = await axios.post('http://globlang.com:8078/auth/password', data);
    console.log(res)
    if (res.status === 200) {
      setTimeout(() => {
        isLoading.value = false;
        successMessage.value = res.data;
      }, 2000)
    }

  } catch (error) {
    console.log(error)
  }
}

</script>
