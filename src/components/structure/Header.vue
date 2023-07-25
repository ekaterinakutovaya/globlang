<template>

  <header class="w-full ">
    <div class="container border-solid border-b lg:border-b-0 border-[rgba(0,0,0,0.10)]">
      <div class="w-full flex justify-between lg:justify-normal items-center py-[10px] sm:py-[24px] lg:py-[15px]">
        <div class="pr-[60px]">
          <router-link to="/">
            <Logo class="w-[63px] h-[44px] sm:w-[70px] sm:h-[48px] lg:w-[80px] lg:h-[56px]"/>
          </router-link>
        </div>

        <nav class="hidden lg:block">
          <ul class="flex items-center gap-x-[40px]">
            <li class=" relative">
              <Dropdown placement="left">
                <template v-slot:button>
                  <span  class="text-[18px] font-medium text-black">Services</span>
                </template>

                <template v-slot:content>
                  <ServicesSubmenuDesktop/>
                </template>
              </Dropdown>

            </li>
            <li class="text-[18px] font-medium text-black">
              <Dropdown placement="left">
                <template v-slot:button>
                  <span  class="text-[18px] font-medium text-black">Industries</span>
                </template>

                <template v-slot:content>
                  <IndustriesSubmenuDesktop/>
                </template>
              </Dropdown>
            </li>
            <li class="text-[18px] font-medium text-black">
              <Dropdown placement="left">
                <template v-slot:button>
                  <span  class="text-[18px] font-medium text-black">Languages</span>
                </template>

                <template v-slot:content>
                  <LanguagesSubmenuDesktop/>
                </template>
              </Dropdown>
            </li>
            <li class="text-[18px] font-medium text-black">
              <Dropdown placement="left">
                <template v-slot:button>
                  <span  class="text-[18px] font-medium text-black">About</span>
                </template>

                <template v-slot:content>
                  <AboutSubmenuDesktop/>
                </template>
              </Dropdown>
            </li>
          </ul>
        </nav>


        <div v-if="!isAuth" class="hidden w-full lg:flex justify-end items-center gap-x-[10px] sm:gap-x-[12px] py-[12px] sm:py-[24px]">
          <Button
              btnText="Sign In"
              color="dark"
              @click="$router.push('/login')"
          />

          <Button
              v-if="route.path != '/translate'"
              btnText="Translate"
              color="dark"
              @click="$router.push('/translate')"
          />
        </div>

        <div v-else class="hidden w-full lg:flex justify-end items-center gap-x-[10px] sm:gap-x-[12px] py-[12px] sm:py-[24px]">
          <ProfileBadge v-if="route.path != '/profile'"/>
          <Button
              btnText="Sign Out"
              color="dark"
              @click="logout"
          />
        </div>


        <div class="md:hidden">
          <MenuTogglerBtn
              :isMenuOpened="isMenuOpened"
              @click="menuToggleHandler"
          />
        </div>
      </div>
    </div>

    <div v-if="route.path != '/profile'" class="lg:hidden container border-solid border-b border-[rgba(0,0,0,0.10)]">
      <div v-if="isAuth" class="w-full flex justify-end items-center gap-x-[10px] sm:gap-x-[12px] py-[12px] sm:py-[24px]">
        <ProfileBadge/>
        <Button
            btnText="Sign Out"
            color="dark"
            @click="logout"
        />
      </div>

      <div v-else class="w-full flex justify-end items-center gap-x-[10px] sm:gap-x-[12px] py-[12px] sm:py-[24px]">
        <Button
            btnText="Sign In"
            color="dark"
            @click="$router.push('/login')"
        />

        <Button
            btnText="Translate"
            color="dark"
            @click="$router.push('/translate')"
        />
      </div>
    </div>

    <Transition name="slide-fade">
      <div v-if="isMenuOpened" class="lg:hidden">
        <MobileMenu/>
      </div>
    </Transition>


  </header>

</template>

<script setup>

import Logo from "@/components/icons/Logo.vue";
import MenuTogglerBtn from "@/components/global/MenuTogglerBtn.vue";
import MobileMenu from "./Menu/MobileMenu/MobileMenu.vue";
import Button from "@/components/global/Button.vue";
import {useUserStore} from "@/stores/userStore";
import {onMounted, ref} from "vue";
import {useRouter, useRoute} from "vue-router";
import ServicesSubmenuDesktop from "@/components/structure/Menu/DesktopMenu/ServicesSubmenuDesktop.vue";
import Dropdown from "@/components/global/Dropdown.vue";

import IndustriesSubmenuDesktop from "@/components/structure/Menu/DesktopMenu/IndustriesSubmenuDesktop.vue";
import LanguagesSubmenuDesktop from "@/components/structure/Menu/DesktopMenu/LanguagesSubmenuDesktop.vue";
import AboutSubmenuDesktop from "@/components/structure/Menu/DesktopMenu/AboutSubmenuDesktop.vue";
import ProfileBadge from "@/views/ProfileView/ProfileBadge.vue";

const router = useRouter();
const route = useRoute();
const userStore = useUserStore();

const isAuth = ref(false);
const isMenuOpened = ref(false);

onMounted(() => {
  if (userStore.token) {
    isAuth.value = true;
  }

})

const logout = () => {
  userStore.clearUser();
  isAuth.value = false;
  router.push('/');
}

const menuToggleHandler = (e) => {
  console.log(e)
  isMenuOpened.value = !isMenuOpened.value
}

</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  //transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>