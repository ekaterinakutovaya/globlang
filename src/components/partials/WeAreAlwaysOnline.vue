<template>
  <section class="section-paddings-y bg-accent-secondary">
    <div class="container">
      <h4 class="text-[15px] sm:text-[24px] lg:text-[40px] font-bold text-accent-primary text-center pb-[5px] sm:pb-[10px]">We are always online For Your Urgent Requests</h4>
      <p class="text-[12px] sm:text-[14px] lg:text-[16px] leading-[16px] text-white text-center pb-[16px] sm:pb-[30px]">Globlang Translation Is At Your Service 24 Hours A Day, 7 Days A Week, 365 Days Around The Year.
        Quality. Flexibility. Efficiency</p>

      <div class="w-full">
        <div class="w-full sm:w-[502px] bg-white flex justify-between rounded-[10px] overflow-hidden my-0 mx-auto">
          <input type="email" class="max-w-[450px] px-[25px] py-[15px] appearance-none block h-full  outline-0 border-0 focus:border-0 focus:outline-none text-[13px]"
          placeholder="Your Email" v-bind="email"
          >
          <button @click="onSubmit" class="w-full max-w-[180px] bg-accent-primary rounded-[10px] text-white font-bold lg:text-[15px] hover:bg-accent-primary/[0.8] transition ease-in-out delay-150 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {useForm} from "vee-validate";
import * as yup from "yup";
import axios from "axios";
import {toast} from "vue3-toastify";


const {handleSubmit, defineInputBinds, resetForm } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required('Please enter your email'),
  }),
});

const email = defineInputBinds('email', {
  mapProps: state => ({
    error: state.errors[0]
  })
});

const onSubmit = handleSubmit(values => {
  const {email} = values;
  urgentRequest(email);
})

const urgentRequest = async (email) => {
  try {
    const res = await axios.post(`http://globlang.com:8078/help/urgent/${email}`);

    if (res.status === 200) {
      setTimeout(() => {

        toast.success('Your request has been successfully sent!', {
          position: toast.POSITION.TOP_CENTER,
          transition: 'slide',
          hideProgressBar: true,
          theme: 'colored'
        });
        resetForm();
      }, 500)
    }
  } catch (error) {
    console.log(error)
  }
}
</script>
