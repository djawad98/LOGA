<template>
    <p class="bg-blue-500 text-white absolute text-center w-full top-1/2 -translate-y-1/2
        text-[6rem] font-extrabold py-6
    ">
        مدیر
    </p>

    <button @click="$store.commit('logout')">خروج</button>
</template>