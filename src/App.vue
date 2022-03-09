<script>

import 'tailwindcss/tailwind.css';

export default {

}

</script>

<template>

  <router-view v-slot="{ Component }">
    <transition name="slide-left" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

</template>

<style lang="scss">
@import "./assets/iranyekan.scss";

body {
  // font-family: iranyekan;
  @apply bg-gray-100 w-full overflow-hidden;
}

.slide-left {
  &-enter-active {
    transition: all .5s ease-out;
  }

  &-leave-active {
    transition: all .3s ease-out;
  }

  &-enter-from {
    @apply translate-x-full;
  }

  &-enter-to,
  &-leave-from {
    @apply translate-x-0;
  }

  &-leave-to {
    @apply -translate-x-full;
  }
}
</style>
