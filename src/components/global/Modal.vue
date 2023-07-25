<template>
  <div
      v-if="show"
       class="w-full h-screen bg-[rgba(0,0,0,0.5)] fixed z-50 modal-open top-0 left-0 overflow-hidden flex justify-center items-center"
       @click.stop="hideModal"
  >
    <div @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-modal',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideModal() {
      this.$emit('update:show', false)
    }
  }
}
</script>



