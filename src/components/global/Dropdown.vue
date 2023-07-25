<template>
  <div class="relative">
    <button class="z-10 relative flex items-center focus:outline-none focus:text-accent-primary select-none" @click="open = !open">
      <slot name="button"></slot>
    </button>

    <!-- to close when clicked on space around it-->
    <button v-if="open" class="fixed inset-0 h-full w-full cursor-default focus:outline-none" tabindex="-1"
            @click="open = false"></button>

    <!--dropdown menu-->
    <transition enter-active-class="transition-all duration-200 ease-out"
                enter-class="opacity-0 scale-75" enter-to-class="opacity-100 scale-100"
                leave-active-class="transition-all duration-750 ease-in" leave-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-75">
      <div v-if="open"
           :class="placement === 'right' ? 'right-0' : 'left-0'"
           class="dropdown-wrapper absolute shadow-dropdown-shadow w-max rounded-[4px]
           text-sm mt-4 bg-white z-50">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  props: {
    placement: {
      type: String,
      default: "right",
      validator: (value) => ["right", "left"].indexOf(value) !== -1,
    },
  },
  created: function() {
    let self = this;

    window.addEventListener('click', function(e){
      // close dropdown when clicked outside
      if (!self.$el.contains(e.target)){
        self.open = false
      }
    })
  },
  mounted() {
    const onEscape = (e) => {
      if (e.key === "Esc" || e.key === "Escape") {
        this.open = false;
      }
    };

    document.addEventListener("keydown", onEscape);
  },
};

</script>

<style lang="scss" scoped>
  .dropdown-wrapper {
    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;

      top: 0;
      left: 57px;
      box-sizing: border-box;

      border: 1em solid black;
      border-color: transparent transparent #fff #fff;

      transform-origin: 0 0;
      transform: rotate(135deg);
    }
  }
</style>
