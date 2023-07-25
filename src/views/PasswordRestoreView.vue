<template>

  <div class="w-full h-screen">
    <div class="container h-full">
      <div class="py-[20px] sm:py-[42px] lg:py-[120px] w-full h-full lg:flex items-center">
        <!--  Image    -->
        <div class="hidden lg:block w-1/2 h-full px-[50px]">
          <div class="w-full h-full overflow-hidden rounded-[50px]">
            <img src="../assets/images/unsplash.jpg" alt="auth" class="w-full h-full object-cover">
          </div>
        </div>

        <!--  Form   -->
        <div class="w-full lg:w-1/2 h-full flex flex-col justify-between lg:px-[50px]">
          <div>
            <div class="flex items-center justify-end gap-x-[12px] pb-[32px]">
              <Button
                  btnText="Sign In"
                  color="dark"
                  @click="$router.push('/login')"
              />
            </div>

            <div class="w-full">
              <h3 class="text-[16px] sm:text-[32px] text-black leading-normal font-semibold lg:font-bold">Forgot Password</h3>

              <p class="sm:text-[16px] leading-normal">Enter your email address below, we will send instructions to reset your password to your email address.
                Please see your spam or junk folder as well.</p>

              <form class="pt-[32px] flex flex-col gap-y-[16px]" @click.prevent @submit="onSubmit">

                <CustomInput
                    inputType="email"
                    placeholder="Email"
                    v-bind="email"
                    icon="pi-envelope"
                />

              </form>
            </div>
          </div>

          <Button
              btnText="Submit"
              color="dark"
              full
              @click="onSubmit"
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

import Button from "@/components/global/Button.vue";
import CustomInput from "@/components/global/inputs/CustomInput.vue";

import {useUserStore} from "@/stores/userStore";

const router = useRouter();
const userStore = useUserStore();


const {handleSubmit, defineComponentBinds} = useForm({
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
  restorePassword(values)
})

const restorePassword = async (data) => {
  try {
    const res = await axios.post('http://globlang.com:8078/auth/password', data);
    console.log(res)
    if (res.status === 200) {
      await router.push('/login')
    }

  } catch (error) {
    console.log(error)
  }
}



</script>
