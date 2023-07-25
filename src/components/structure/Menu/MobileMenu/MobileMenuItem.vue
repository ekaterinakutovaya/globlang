<template>
  <li class="relative">
    <label class="py-[12px] sm:py-[18px] px-[16px] sm:px-[64px] border-b border-border-color text-[16px] sm:text-[20px]
     font-bold text-black flex items-center justify-between"
           :for="'btn-' + title">{{title}}
      <span>
        <i class="text-[20px] sm:text-[24px] font-semibold sm:font-normal text-accent-primary pi"
        :class="{'pi-minus-circle': isListOpened, 'pi-plus-circle': !isListOpened}"
      ></i>
      </span>
    </label>

    <input :id="'btn-' + title" class="hidden" type="checkbox" @click="listOpenHandler">

    <slot></slot>

  </li>

</template>

<script setup>

import {onMounted, ref, toRefs} from "vue";

const isListOpened = ref(false);

onMounted(() => {

})

const props = defineProps({
  title: String
})

const {title} = toRefs(props);

const listOpenHandler = () => {
  isListOpened.value = !isListOpened.value;
}
</script>

<style lang="scss">
.dropdown-menu {
  max-height: 0;
  opacity: 0;


  transition: ease 0.5s;

  .dropdown-item {
    display: none;
  }

}


[id^=btn]:checked + ul {
  max-height: max-content;
  opacity: 1;


  transition: ease 0.5s;

  .dropdown-item {
    display: block;
  }
}


</style>


