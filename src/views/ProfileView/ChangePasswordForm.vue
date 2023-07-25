<template>
  <div class="container">
    <div class="lg:w-[900px] bg-white rounded-[8px] py-[30px] px-[20px] lg:py-[80px] lg:px-[80px]">
      <h2 class="text-[20px] lg:text-[32px] text-black font-semibold pb-[20px] lg:pb-[30px]">Change Password</h2>
      <form @submit="onSubmit" @click.prevent class="flex flex-col gap-y-[24px] pb-[16px] lg:pb-[50px]">
        <CustomInput
            inputType="password"
            placeholder="Current Password"
            v-bind="oldPassword"
        />
        <CustomInput
            inputType="password"
            placeholder="New Password"
            v-bind="password"
        />
        <CustomInput
            inputType="password"
            placeholder="Confirm Password"
            v-bind="confirmedPassword"
        />
      </form>

      <div class="w-full">
        <div class="w-full lg:w-[250px] my-0 mx-auto">
          <Button
              btnText="Change Password"
              color="light"
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
import axios from "axios";
import {defineEmits, ref} from "vue";
import {toast} from "vue3-toastify";
import {useForm} from "vee-validate";
import * as yup from "yup";

import CustomInput from "@/components/global/inputs/CustomInput.vue";
import Button from "@/components/global/Button.vue";

import {useUserStore} from "@/stores/userStore";

const isLoading = ref(false);
const userStore = useUserStore();

const emit = defineEmits(['close'])

const handleClose = () => {
  emit('close')
}

const {handleSubmit, defineComponentBinds, setFieldError} = useForm({
  initialValues: {
    oldPassword: '12345678',
    password: '12345678',
    confirmedPassword: '12345678',
  },
  validationSchema: yup.object({
    oldPassword: yup.string().min(8).required('Password must be at least 8 characters'),
    password: yup.string().min(8).required('Password must be at least 8 characters'),
    confirmedPassword: yup.string().required().oneOf([yup.ref('password')], "Passwords do not match"),
  }),
});

const oldPassword = defineComponentBinds('oldPassword', {
  mapProps: state => ({
    error: state.errors[0]
  })
});
const password = defineComponentBinds('password', {
  mapProps: state => ({
    error: state.errors[0]
  })
});
const confirmedPassword = defineComponentBinds('confirmedPassword', {
  mapProps: state => ({
    error: state.errors[0]
  })
});

const onSubmit = handleSubmit(values => {
  isLoading.value = true;
  changePassword(values);
})

const changePassword = async (data) => {
  try {
    const res = await axios.put(`http://globlang.com:8078/user/password/${userStore.email}`, data);

    if (res.status === 200) {
      setTimeout(() => {
        isLoading.value = false;

        toast.success('Password has been successfully changed!', {
          position: toast.POSITION.TOP_CENTER,
          transition: 'slide',
          hideProgressBar: true,
          theme: 'colored'
        });
        handleClose();
      }, 2000)


    }
    return res;


  } catch (error) {
    console.log(error)

    if (error.response.status === 409) {
      setFieldError('oldPassword', error.response.data.message);
      setTimeout(() => {
        isLoading.value = false;
      }, 500)
    }

  }
}
</script>
