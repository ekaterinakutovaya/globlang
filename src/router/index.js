import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import VerifyEmailView from "@/views/VerifyEmailView.vue";
import PasswordRestoreView from "@/views/PasswordRestoreView.vue";
import ServicesView from "@/views/ServicesView.vue";
import IndustriesView from "@/views/IndustriesView.vue";
import LanguagesView from "@/views/LanguagesView.vue";
import TranslatedView from "@/views/TranslatedView/TranslatedView.vue";
import CompanyView from "@/views/CompanyView.vue";
import GlobalOfficesView from "@/views/GlobalOfficesView/GlobalOfficesView.vue";
import ContactUsView from "@/views/ContactUsView/ContactUsView.vue";
import ProfileView from "@/views/ProfileView/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/verify-email',
      name: 'verifyEmail',
      component: VerifyEmailView
    },
    {
      path: '/password-restore',
      name: 'passwordRestore',
      component: PasswordRestoreView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/industries',
      name: 'industries',
      component: IndustriesView
    },
    {
      path: '/languages',
      name: 'languages',
      component: LanguagesView
    },
    {
      path: '/translate',
      name: 'translate',
      component: TranslatedView
    },
    {
      path: '/company',
      name: 'company',
      component: CompanyView
    },
    {
      path: '/global-offices',
      name: 'globalOffices',
      component: GlobalOfficesView
    },
    {
      path: '/contact-us',
      name: 'contactUs',
      component: ContactUsView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
  ]
})

export default router
