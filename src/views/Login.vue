<script>
import Input from "@components/Input.vue";
import Button from "@components/Button.vue";
import Session from "@services/session.service";

export default {
  components: { Input, Button },
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
        email: this.user,
        password: this.password,
      };

      const defLogin = {
        email: "duda@lets.com.vc",
        password: "12345678",
      };

      await this.session.login(defLogin).then((response) => {
        if (response.isSuccess) {
          setTimeout(() => {
            this.loading = false;
            this.$router.push({ path: "/perfil" });
          }, 1000);
        }
      });
    },
  },
};
</script>

<template>
  <div class="flex w-full justify-center">
    <div class="rounded-lg mt-16 p-10 w-96">
      <div class="w-full flex justify-center mb-20">
        <img src="../assets/auri-texto.png" width="180" />
      </div>
      <div class="flex flex-col space-y-2">
        <Input
          autofocus
          label="E-mail"
          :value="user"
          type="text"
          placeholder="seuemail@email.com"
          @input="user = $event.target.value"
        />
        <Input
          label="Senha"
          :value="password"
          type="password"
          placeholder="Digite seua senha"
          @input="password = $event.target.value"
        />
      </div>
      <Button
        class="mt-8"
        @click.native="login()"
        label="Entrar"
        :loading="loading"
      />

      <div class="mt-8">
        <a
          href="#"
          class="text-amber-400/80 font-medium hover:text-amber-300 text-xs"
          >Esqueceu sua senha?</a
        >
      </div>
    </div>
  </div>
</template>
