<template>

  <section class="section-paddings-y">
    <div class="container">
      <div class="flex flex-col lg:flex-row lg:justify-between lg:gap-x-[24px]">
        <!--    Profile Head    -->
        <div class="lg:flex-1 lg:rounded-[8px] lg:shadow-profile-shadow lg:p-[30px]">
          <div class="flex items-center gap-x-[16px] ease-in-out duration-300 pb-[12px]">
            <div
                class="w-[80px] h-[80px] lg:w-[123px] lg:h-[123px] flex justify-center items-center bg-dim-gray rounded-full relative">

              <i v-if="!profileImagePreview" class="text-[30px] lg:text-[50px] pi pi-user text-white font-bold"></i>
              <div v-else
                   class="w-[80px] h-[80px] lg:w-[123px] lg:h-[123px] overflow-hidden flex justify-center items-center bg-dim-gray rounded-full">
                <img ref="profileImage" :src="profileImagePreview" alt="" class="w-full h-full object-cover">
              </div>

              <button v-if="isEditing" class="w-[24px] h-[24px] lg:w-[40px] lg:h-[40px] rounded-full bg-accent-primary hover:bg-accent-secondary ease-in-out duration-300 flex items-center justify-center absolute bottom-0 right-0"
                      @click="fileSelectionWindowOpen">
                <i class="text-white pi pi-camera pb-[2px]"></i>
                <input ref="imageUpload" class="hidden" type="file" @change="imagePreviewHandler">
              </button>

            </div>

            <div>
              <p class="text-[20px] lg:text-[30px] text-black font-bold lg:font-semibold leading-[25px] lg:leading-[36px] group-hover:text-accent-primary ease-in-out duration-300 pb-[6px]">
                {{userStore.firstName}} {{userStore.lastName}}</p>
              <button class="text-[13px] lg:text-[16px] text-accent-primary leading-[21px] font-medium"
                      @click="changePasswordModalToggler">Change Password
              </button>
            </div>
          </div>

          <div class="flex items-center gap-x-[20px]">
            <Button
                v-if="isEditing"
                :isLoading="isDeletingPhoto"
                btnText="Delete Photo"
                color="danger"
                @click="imageDeleteHandler"
                :disabled="!userStore.photo"
            />

            <Button
                v-if="isEditing"
                :isLoading="isSavingPhoto"
                btnText="Save Photo"
                color="dark"
                @click="imageSaveHandler"
                :disabled="!tmpFile"
            />
          </div>

          <div class="pb-[5px] pt-[10px] lg:pt-[40px]">Member Since: <span>{{dateFormatter(userStore.createdAt)}}</span></div>
          <div>Email Notifications
            <span class="pl-[10px] text-[20px] text-accent-primary font-bold">
             <i class="pi pi-check"></i>
            </span>
          </div>

        </div>

        <!--   Personal Information     -->
        <form class="py-[32px] lg:flex-1 lg:rounded-[8px] lg:shadow-profile-shadow lg:p-[30px]" @submit="onSubmit"
              @click.prevent>
          <div class="flex justify-between">
            <p class="text-[20px] leading-[28px] font-semibold text-black">Personal information</p>
            <button class="text-[16px] text-black font-medium hover:text-accent-primary ease-in-out duration-300 flex items-center gap-x-[5px]"
                    @click="editModeToggler">
              <i :class="{'pi pi-pencil text-accent-primary': !isEditing, 'pi pi-times text-danger': isEditing}"
                 class="pi pi-pencil"
              ></i>
              {{ isEditing ? 'Cancel' : 'Edit' }}
            </button>
          </div>

          <div class="flex flex-col gap-y-[20px] pt-[20px]">
            <CustomInput
                :disabled="!isEditing"
                inputType="text"
                placeholder="First Name"
                v-bind="firstName"
                label="First Name"
            />
            <CustomInput
                :disabled="!isEditing"
                inputType="text"
                placeholder="Last Name"
                v-bind="lastName"
                label="Last Name"
            />

            <PhoneNumberInput
                v-bind="phone"
                :disabled="!isEditing"
                labeled
            />


            <CustomInput
                :disabled="!isEditing"
                inputType="email"
                placeholder="Email"
                v-bind="email"
                label="Email"
            />
          </div>

        </form>
      </div>

      <div class="w-full ">
        <div class="w-full lg:w-[180px] lg:pt-[40px] my-0 mx-auto">
          <Button
              v-if="isEditing"
              :isLoading="isLoading"
              btnText="Save"
              color="dark"
              full
              @click="onSubmit"
          />
        </div>
      </div>
    </div>

  </section>

  <Modal v-model:show="showModal">
    <ChangePasswordForm @close="closeModal"/>
  </Modal>
</template>

<script setup>
import axios from "axios";
import {onMounted, ref} from "vue";
import {Field, useForm} from "vee-validate";
import * as yup from "yup";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import Button from "@/components/global/Button.vue";
import CustomInput from "@/components/global/inputs/CustomInput.vue";
import Modal from "@/components/global/Modal.vue";
import PhoneNumberInput from "@/components/global/inputs/PhoneNumberInput.vue";
import ChangePasswordForm from "@/views/ProfileView/ChangePasswordForm.vue";
import {useUserStore} from "@/stores/userStore";

const userStore = useUserStore();

const isLoading = ref(false);
const isSavingPhoto = ref(false);
const isDeletingPhoto = ref(false);
const isEditing = ref(false);
const showModal = ref(false);

const imageUpload = ref(null);
const profileImage = ref(null);
const profileImagePreview = ref(null);
const tmpFile = ref(null);

const {handleSubmit, defineComponentBinds} = useForm({
  initialValues: {
    firstName: userStore.firstName,
    lastName: userStore.lastName,
    email: userStore.email,
    phone: userStore.phone
  },
  validationSchema: yup.object({
    firstName: yup.string().required('Please enter your name'),
    lastName: yup.string().required('Please enter your last name'),
    email: yup.string().email().required('Please enter your email'),
    phone: yup.string().required('Please enter your phone number')
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
const phone = defineComponentBinds('phone', {
  mapProps: state => ({
    error: state.errors[0]
  })
});

onMounted(async () => {
  if (userStore.photo !== null) {
    profileImagePreview.value = `data:image/png;base64,${userStore.photo}`;
  }
})


const onSubmit = handleSubmit(values => {
  isLoading.value = true;
  updateUserData(values);
})

const editModeToggler = () => {
  isEditing.value = !isEditing.value;
}

const changePasswordModalToggler = () => {
  showModal.value = !showModal.value;

  if (showModal.value) {
    document.body.classList.add('modal-open')
  } else {
    document.body.classList.remove('modal-open');
  }
}

const fileSelectionWindowOpen = () => {
  imageUpload.value.click()
}

const imagePreviewHandler = (e) => {
  if (e.target.files) {
    tmpFile.value = e.target.files[0];

    let reader = new FileReader();
    reader.onload = function () {
      profileImagePreview.value = reader.result;
    }

    reader.readAsDataURL(e.target.files[0]);
  }
}

const imageSaveHandler = async () => {
  isSavingPhoto.value = true;

  let formData = new FormData();
  formData.append('file', tmpFile.value);

  try {
    const res = await axios.post(`http://globlang.com:8078/user/profile/photo/${userStore.email}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    if (res.status === 200) {
      const user = await axios.get(`http://globlang.com:8078/user/${userStore.email}`);
      userStore.setProfilePhoto(user.data.data.photo);

      setTimeout(() => {
        isSavingPhoto.value = false;

        toast.success('Photo has been successfully saved!', {
          position: toast.POSITION.TOP_CENTER,
          transition: 'slide',
          hideProgressBar: true,
          theme: 'colored'
        });
      }, 2000)
    }

  } catch (error) {
    console.log(error)
  }
}
const imageDeleteHandler = async () => {
  isDeletingPhoto.value = true;

  try {
    const res = await axios.delete(`http://globlang.com:8078/user/profile/photo/${userStore.email}`);
    if (res.status === 200) {
      userStore.clearProfilePhoto();
      setTimeout(() => {
        profileImagePreview.value = null;
        isDeletingPhoto.value = false;

        toast.success('Photo has been successfully deleted!', {
          position: toast.POSITION.TOP_CENTER,
          transition: 'slide',
          hideProgressBar: true,
          theme: 'colored'
        });
      }, 2000)
    }

  } catch (error) {
    console.log(error)
  }
}

const updateUserData = async (data) => {
  data.phone = data.phone.replace(/\s/g, "");
  try {
    const res = await axios.put(`http://globlang.com:8078/user/data/${userStore.email}`, data);

    if (res.status === 200) {

      userStore.updateUserDetails(data);

      setTimeout(() => {
        isLoading.value = false;
        isEditing.value = false;
        toast.success('Personal information has been successfully updated!', {
          position: toast.POSITION.TOP_CENTER,
          transition: 'slide',
          hideProgressBar: true,
          theme: 'colored'
        });
      }, 2000)

    }

  } catch (error) {
    console.log(error)
  }
}

const closeModal = () => {
  showModal.value = false;
}

function dateFormatter(date) {
  if (date !== null) {
    return new Date(date).toLocaleString("ru").slice(0, 10);
  }
}


</script>
