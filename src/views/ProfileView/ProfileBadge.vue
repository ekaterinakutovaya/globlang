<template>
  <router-link to="/profile">
  <div class="flex items-center gap-x-[10px] cursor-pointer group ease-in-out duration-300">
    <div class="w-[40px] h-[40px] flex justify-center items-center bg-dim-gray rounded-full">
      <i v-if="!userStore.photo" class="text-[20px] pi pi-user text-white font-bold"></i>
      <div v-else
           class="w-full h-full overflow-hidden flex justify-center items-center bg-dim-gray rounded-full">
        <img ref="profileImage" :src="'data:image/png;base64,'+userStore.photo" alt="" class="w-full h-full object-cover">
      </div>
    </div>

    <p class="text-[14px] text-black group-hover:text-accent-primary ease-in-out duration-300">{{userStore.firstName}} {{userStore.lastName}}</p>

  </div>
  </router-link>
</template>

<script setup>

import {useUserStore} from "@/stores/userStore";

const userStore = useUserStore();
</script>
