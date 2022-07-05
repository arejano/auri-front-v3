<script>
import UserDomain from "@domain/users.domain";

export default {
  data() {
    return {
      loading: false,
      email: "",
      userDomain: new UserDomain(),
    };
  },
  created: function () {},
  methods: {
    async passwordRecovery() {
      this.loading = true;
      const request = {
        email: this.email,
      };

      this.userDomain.recover(request).then((response) => {
        if (response.success) {
          //TODO: Validar e mostrar a notificação para o usuário
          const msgRetorno =
            "Password redefinition link was sent to your email";
        }
        this.loading = false;
      });
    },
  },
};
</script>

<template>
  <div class="h-full flex flex-col justify-center">
    <div class="flex justify-center">
      <div class="w-96 p-2">
        <div class="w-full flex justify-center mb-20">
          <img src="../../assets/auri-texto.png" width="180" />
        </div>
        <div
          class="w-full mb-12 uppercase font-bold tracking-wider text-xl text-neutral-200"
        >
          <p>Recuperar Senha</p>
        </div>
        <div class="flex flex-col space-y-2">
          <Input
            autofocus
            :value="email"
            type="text"
            placeholder="seuemail@email.com"
            @input="user = $event.target.value"
          />
        </div>
        <Button
          class="mt-8"
          @click.native="recuperarSennha()"
          label="Enviar"
          :loading="loading"
        />

        <div class="mt-8">
          <router-link
            to="/login"
            class="text-amber-400/80 font-medium hover:text-amber-300 text-xs"
            >Voltar para login
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
