<template>

  <div class="w-full h-screen">
    <!--    <pre>{{ errors }}</pre>-->
    <div class="container h-full">
      <div class="py-[20px] sm:py-[42px] lg:py-[120px] w-full h-full lg:flex items-center">
        <!--  Image    -->
        <div class="hidden lg:block w-1/2 h-full px-[50px]">
          <div class="w-full h-full overflow-hidden rounded-[50px]">
            <img alt="auth" class="w-full h-full object-cover" src="../assets/images/unsplash.jpg">
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
              <h3 class="text-[16px] sm:text-[32px] text-black leading-normal font-semibold lg:font-bold">We have sent a
                code to verify your email
                address. Please enter code</h3>

              <span class="text-[12px] text-danger absolute bottom-[-20px]">{{ errors.otp }}</span>

              <form class="pt-[32px] flex flex-col gap-y-[24px]" @click.prevent @submit="onSubmit">

                <CustomInput
                    inputType="email"
                    placeholder="Email"
                    v-bind="email"
                    icon="pi-envelope"
                />
                <CustomInput
                    inputType="text"
                    placeholder="Verify code"
                    v-bind="otp"
                    icon="pi-lock"
                />



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
import {onMounted, ref} from "vue";
import * as yup from 'yup';
import {useForm} from 'vee-validate';
import {useRouter} from "vue-router";

import Button from "@/components/global/Button.vue";
import CustomInput from "@/components/global/inputs/CustomInput.vue";
import axios from "axios";

const isLoading = ref(false);
const router = useRouter();

const {handleSubmit, errors, defineComponentBinds, setFieldError} = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required('Please enter your email'),
    otp: yup.string().required('Please enter verify code')
  }),
});

const email = defineComponentBinds('email', {
  mapProps: state => ({
    error: state.errors[0]
  })
});

const otp = defineComponentBinds('otp', {
  mapProps: state => ({
    error: state.errors[0]
  })
});

onMounted(async () => {

})

const onSubmit = handleSubmit(values => {
  isLoading.value = true;
  verifyEmail(values)
})

const verifyEmail = async (data) => {
  try {
    const res = await axios.post('http://globlang.com:8078/auth/verify', data);

    if (res.status === 200) {
      setTimeout(() => {
        isLoading.value = false;
        router.push('/login');
      }, 2000)
    }

  } catch (error) {
    // console.log('Verify error', error)
      setTimeout(() => {
        isLoading.value = false;
        setFieldError('otp', 'Verify code or email is not correct');
      }, 2000)

  }
}


</script>
