<template>
    <p class="bg-blue-500 text-white absolute text-center w-full top-1/2 -translate-y-1/2
        text-[6rem] font-extrabold py-6
    ">
        مدیر

        <logout-button />
    </p>


</template>

<script>
import LogoutButton from '../../components/LogoutButton.vue';

export default {
    components: {LogoutButton,},
}

</script>

