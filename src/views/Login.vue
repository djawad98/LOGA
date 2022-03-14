<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div
      class="
        max-w-full
        w-[420px]
        rounded
        px-8
        py-6
        mt-4
        text-right
        bg-white
        shadow-lg
      "
    >
      <div class="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
          />
        </svg>
      </div>
      <h3 class="text-2xl font-bold text-center mt-6">ورود به حساب کاربری</h3>
      <form @submit.prevent="submitForm">
        <div class="mt-4">
          <div class="field">
            <label class="block" for="email">آدرس ایمیل</label>
            <input
              type="email"
              v-model="form.email"
              id="email"
              required
              data-pristine-required-message="ایمیل ضروری است"
              data-pristine-email-message="ساختار ایمیل صحیح نیست"
              placeholder="آدرس ایمیل"
              class="
                w-full
                px-4
                py-2
                mt-2
                border
                rounded-md
                focus:outline-none focus:ring-1 focus:ring-blue-600
              "
            />
          </div>
          <div class="field mt-4">
            <div class="relative">
              <label class="block" for="password">رمز عبور</label>

              <input
                :type="passwordVisible ? 'text' : 'password'"
                id="password"
                v-model="form.password"
                minlength="8"
                data-pristine-minlength-message="حداقل 8 کاراکتر ضروری است"
                required
                data-pristine-required-message="رمز عبور ضروی است"
                placeholder="رمز عبور"
                class="
                  w-full
                  px-4
                  py-2
                  mt-2
                  border
                  rounded-md
                  focus:outline-none focus:ring-1 focus:ring-blue-600
                "
              />
              <button
                type="submit"
                class="absolute left-3 bottom-2 bg-white cursor-pointer"
                @mousedown="passwordVisible = true"
                @mouseup="passwordVisible = false"
              >
                <!-- eye stroke-->
                <svg
                  v-if="passwordVisible"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>

                <!-- eye -->
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="flex items-baseline justify-between">
            <button
              type="submit"
              class="
                px-6
                py-2
                mt-4
                text-white
                bg-blue-600
                rounded-lg
                hover:bg-blue-900
              "
            >
              ورود
            </button>
            <a href="#" class="text-sm text-blue-600 hover:underline"
              >فراموش رمز عبور</a
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>

import Pristine from 'pristinejs';

export default {
  data() {
    return {
      validator: null,
      passwordVisible: false,

      form: {
        email: "",
        password: "",
      }
    }
  },

  mounted() {

    const form = document.querySelector("form");

    const pristine = new Pristine(form, {
      classTo: 'field',
      errorTextParent: "field",
      errorTextClass: "text-xs text-red-600 absolute top-1 left-2"
    });

    this.validator = pristine;

  },

  methods: {



    submitForm() {

      if (!this.validator.validate()) return;

      const isAdmin = this.form.email == "admin@a.com" && this.form.password === "12345678";
      const isUser = this.form.email == "user@a.com" && this.form.password === "12345678";

      if( isAdmin ){
        this.$router.push({ name: "admin-panel" });
        this.$store.commit("login");
        this.$store.commit("logInAsAdmin");

      } else if( isUser ){
        this.$router.push({ name: "user-panel" });
        this.$store.commit("login");

      } else {
        alert("کاربری یافت نشد.") //todo: change it with something more visual
      }
    }

  }

}

</script>


<style lang="scss">
.field {
  @apply relative;
}
</style>