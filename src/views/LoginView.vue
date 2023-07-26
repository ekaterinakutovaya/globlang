<template>

  <div class="w-full h-screen">
    <!--    <pre>{{ errors }}</pre>-->
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
              <p class="text-[12px] leading-[20px] text-accent-primary font-medium">Don't have an account?</p>
              <Button
                  btnText="Create Account"
                  color="dark"
                  @click="$router.push('/register')"
              />
            </div>

            <div class="w-full">
              <h3 class="text-[16px] sm:text-[32px] text-black leading-normal font-semibold lg:font-bold">Sign In</h3>
              <p class="sm:text-[16px] leading-normal">Enter your details below</p>

              <form class="pt-[32px] flex flex-col gap-y-[16px]" @click.prevent @submit="onSubmit">

                <CustomInput
                    inputType="email"
                    placeholder="Email"
                    v-bind="email"
                    icon="pi-envelope"
                />
                <CustomInput
                    inputType="password"
                    placeholder="Password"
                    v-bind="password"
                    icon="pi-lock"
                />

                <p class="text-[12px] leading-[20px] text-accent-primary font-medium text-right">
                  <router-link to="/password-restore">Forgot password?</router-link>
                </p>

              </form>

            </div>
          </div>

          <Button
              btnText="Sign In"
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

import {onMounted, ref} from "vue";
import * as yup from 'yup';
import {useForm} from 'vee-validate';


import Button from "@/components/global/Button.vue";
import CustomInput from "@/components/global/inputs/CustomInput.vue";
import {useRouter} from "vue-router";
import {useUserStore} from "@/stores/userStore";

const router = useRouter();
const userStore = useUserStore();
const isLoading = ref(false);

const {handleSubmit, errors, defineComponentBinds} = useForm({
  initialValues: {
    email: 'rowoco3074@nmaller.com',
    password: '12345678'
  },
  validationSchema: yup.object({
    email: yup.string().email().required('Please enter your email!'),
    password: yup.string().required('Please enter your password!')
  }),
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

const onSubmit = handleSubmit(values => {
  isLoading.value = true;
  login(values)
})

const login = async (data) => {
  try {
    const res = await axios.post('http://globlang.com:8078/auth/login', data);
    let token = res.data.token;
    let email = res.data.email;

    if (res.status === 200) {
      const user = await axios.get(`http://globlang.com:8078/user/${email}`);

      const userData = {
        email: email,
        firstName: user.data.data.firstName,
        lastName: user.data.data.lastName,
        phone: user.data.data.phoneNumber,
        token: token,
        photo: user.data.data.photo,
        createdAt: user.data.data.createdAt
      }

      userStore.setUserDetails(userData);

      setTimeout(() => {
        isLoading.value = false;
        router.push('/');
      }, 2000)

    }

  } catch (error) {
    console.log('Login error', error)

  }
}


</script>
