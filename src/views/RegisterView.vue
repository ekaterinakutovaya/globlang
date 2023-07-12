<template>

  <div class="w-full">
    <pre>errors: {{ errors }}</pre>
    <pre>values: {{ values }}</pre>
    <div class="container">
      <div class="pt-[20px]">
        <!--  Image    -->
        <div class="hidden"></div>

        <!--  Form   -->
        <div>
          <div class="flex items-center justify-end gap-x-[12px] pb-[32px]">
            <p class="text-[12px] leading-[20px] text-accent-primary font-medium">Already a member?</p>
            <Button
                btnText="Sign In"
                color="bg-accent-primary"
            />
          </div>

          <div>
            <h3 class="text-[16px] text-black leading-[22px] font-semibold">Register as Customer</h3>
            <form class="pt-[32px] flex flex-col gap-y-[16px]" @submit.prevent>
              <CustomInput
                  inputType="text"
                  placeholder="First Name"
                  v-bind="firstName"
              />

<!--              <input-->
<!--                  v-bind="firstName"-->
<!--                  type="text"-->
<!--                  class="appearance-none block w-full bg-white py-[8px] px-[12px] border border-solid border-input-border-color-->
<!--                        rounded-[10px] text-[13px] text-black leading-[140%] focus:outline-none focus:border-accent-primary"-->
<!--                  placeholder="First Name"-->
<!--              />-->
<!--              <CustomInput-->
<!--                  v-model:input="lastName"-->
<!--                  inputType="text"-->
<!--                  placeholder="Last Name"-->
<!--              />-->
<!--              <CustomInput-->
<!--                  v-model:input="email"-->
<!--                  inputType="email"-->
<!--                  placeholder="Email"-->
<!--              />-->
<!--              <CustomInput-->
<!--                  v-model:input="password"-->
<!--                  inputType="password"-->
<!--                  placeholder="Password"-->
<!--              />-->
<!--              <CustomInput-->
<!--                  v-model:input="confirmPassword"-->
<!--                  inputType="password"-->
<!--                  placeholder="Confirm Password"-->
<!--              />-->
<!--              <CustomInput-->
<!--                  v-model:input="phone"-->
<!--                  inputType="number"-->
<!--                  placeholder="Phone"-->
<!--              />-->
<!--              <CustomInput-->
<!--                  v-model:input="captcha"-->
<!--                  inputType="text"-->
<!--                  placeholder="Enter Captcha"-->
<!--              />-->

              <Button
                  btnText="Sign Up"
                  color="bg-accent-primary"
              />


            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import * as yup from 'yup';
import {useForm} from 'vee-validate';
import Button from "@/components/global/Button.vue";
import CustomInput from "@/components/global/CustomInput.vue";

// let firstName = ref(null);
let lastName = ref(null);
let email = ref(null);
let password = ref(null);
let confirmPassword = ref(null);
let captcha = ref(null);

const { values, errors, defineComponentBinds } = useForm({
  validationSchema: yup.object({
    firstName: yup.string().required(),
  }),
});

const firstName = defineComponentBinds('firstName', {
  mapProps: state => ({
    error: state.errors[0]
  })
});

</script>
