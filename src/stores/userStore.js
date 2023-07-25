import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: null,
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    photo: null,
    createdAt: null
  }),
  actions: {
    setUserDetails(userData) {
      this.$state.token = userData.token
      this.$state.firstName = userData.firstName
      this.$state.lastName = userData.lastName
      this.$state.email = userData.email
      this.$state.phone = userData.phone
      this.$state.photo = userData.photo
      this.$state.createdAt = userData.createdAt
    },
    setProfilePhoto(photo) {
      this.$state.photo = photo
    },
    updateUserDetails(userData) {
      this.$state.firstName = userData.firstName
      this.$state.lastName = userData.lastName
      this.$state.email = userData.email
      this.$state.phone = userData.phone
    },
    clearUser() {
      this.$state.token = null
      this.$state.firstName = null
      this.$state.lastName = null
      this.$state.email = null
      this.$state.phone = null
      this.$state.photo = null
      this.$state.createdAt = null
    },
    clearProfilePhoto() {
      this.$state.photo = null
    }
  },
  persist: true
})
