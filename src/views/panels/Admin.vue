<template>
    <p class="bg-blue-500 text-white absolute text-center w-full top-1/2 -translate-y-1/2
        text-[6rem] font-extrabold py-6
    ">
        مدیر
        <button class="block mx-auto text-center text-base" @click="logout">خروج</button>
    </p>


</template>


<script>
export default {
    methods: {
        logout(){
            this.$router.push({name: 'login'});
            this.$store.commit('logout')
        }
    }
}
</script>