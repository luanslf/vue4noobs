<template>
  <transition name="router" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
};
</script>

<style scoped>
  .router-enter-active, .router-leave-active {
    transition: opacity 0.2s ease;
  }

  .router-enter, .router-leave-to {
    opacity: 0;
  }
</style>
