<script>
import Input from "@components/Input.vue";
import Session from "@services/session.service";

export default {
  components: { Input },
  data() {
    return {
      loading: false,
      user: "",
      password: "",
      session: new Session(),
    };
  },
  created: function () {
    this.loading = true;
    if (this.session.isLogged()) {
      this.loading = false;
      this.$router.push({ path: "/perfil" });
    } else {
      this.loading = false;
    }
  },
  methods: {
    async login() {
      this.loading = true;
      const request = {
        //        email: this.user,
        //        password: this.password,
        email: "duda@lets.com.vc",
        password: "12345678",
      };

      await this.session.login(request).then((response) => {
        if (response.isSuccess) {
          this.loading = false;
          this.$router.push({ path: "/perfil" });
        }
      });
    },
  },
};
</script>

<template>
  <div class="flex w-full justify-center">
    <div class="rounded-lg mt-16 bg-neutral-800/90 p-10 w-96 shadow-lg">
      <div class="w-full flex justify-center mb-10">
        <img src="../assets/auri-texto.png" width="180" />
      </div>
      <div class="flex flex-col space-y-10">
        <div>
          <label
            class="block mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-300"
            >E-MAIL</label
          >
          <input
            v-model="user"
            type="text"
            class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5 dark:bg-neutral-700/60 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
            placeholder="seuemail@email.com"
            required=""
          />
        </div>

        <div>
          <label
            class="block mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-300"
            >SENHA</label
          >
          <input
            type="password"
            v-model="password"
            class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5 dark:bg-neutral-700/60 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
            placeholder="Digite sua senha"
            required=""
          />
        </div>
      </div>
      <div class="mb-8 mt-2">
        <a href="#" class="text-amber-400/80 hover:text-amber-300 text-xs"
          >Esqueceu sua senha?</a
        >
      </div>

      <div class="mt-2">
        <button
          :disabled="loading"
          @click="login()"
          type="button"
          class="py-2.5 w-full px-5 mr-2 mb-2 text-sm font-medium text-neutral-900 focus:outline-none bg-white rounded-lg border border-neutral-200 hover:bg-neutral-100 hover:text-neutral-700 focus:z-10 focus:ring-4 focus:ring-neutral-200 dark:focus:ring-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-600 dark:hover:text-white dark:hover:bg-neutral-700"
          :class="{ 'cursor-not-allowed': loading }"
        >
          <div v-if="loading" class="flex flex-row justify-center">
            <svg
              class="animate-spin h-5 w-5 mr-3 ..."
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 50 50"
            >
              <path
                fill="currentColor"
                d="M41.9 23.9c-.3-6.1-4-11.8-9.5-14.4c-6-2.7-13.3-1.6-18.3 2.6c-4.8 4-7 10.5-5.6 16.6c1.3 6 6 10.9 11.9 12.5c7.1 2 13.6-1.4 17.6-7.2c-3.6 4.8-9.1 8-15.2 6.9c-6.1-1.1-11.1-5.7-12.5-11.7c-1.5-6.4 1.5-13.1 7.2-16.4c5.9-3.4 14.2-2.1 18.1 3.7c1 1.4 1.7 3.1 2 4.8c.3 1.4.2 2.9.4 4.3c.2 1.3 1.3 3 2.8 2.1c1.3-.8 1.2-2.5 1.1-3.8c0-.4.1.7 0 0z"
              ></path>
            </svg>
          </div>
          <div v-if="!loading">
            <span>Entrar</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
