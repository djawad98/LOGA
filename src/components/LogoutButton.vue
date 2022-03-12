<template>
  <button class="block mx-auto text-center text-base" @click="logout">
    خروج
  </button>
</template>


<script>
export default {
  methods: {
    logout() {
      this.$router.push({ name: 'login' });
      this.$store.commit('logout')
    }
  }
}
</script>