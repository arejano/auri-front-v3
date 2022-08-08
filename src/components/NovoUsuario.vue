<script>
import Input from "./Input.vue";
export default {
  components: { Input },
  name: "NovoUsuario",
  props: {
    src: { type: String, required: true },
  },
  data() {
    return {
      nome: "",
      email: "",
    };
  },
};
</script>
<template>

  <div>
     <h3
              class="
                text-xl
                font-semibold
                text-gray-900
                lg:text-2xl
                dark:text-white
              "
            >
              Adicionar Usuários
            </h3>
    <Input
      label="Nome"
      :value="nome"
      type="text"
      placeholder="Nome"
      @input="nome = $event.target.value"
    />
  
    <Input
      label="Email"
      :value="email"
      type="email"
      placeholder="Email"
      @input="email = $event.target.value"
    />

    <div>
      <div class="flex w-full space-x-4">
        <label class="text-gray-100" for="Multiselect">Administrador</label>
        <label
          for="default-toggle"
          class="inline-flex relative items-center cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="default-toggle"
            class="sr-only peer"
          />
          <div
            class="
              w-11
              h-6
              bg-gray-400
              peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300
              dark:peer-focus:ring-gray-800
              rounded-full
              peer
              dark:bg-gray-700
              peer-checked:after:translate-x-full
              peer-checked:after:border-white
              after:content-['']
              after:absolute
              after:top-[2px]
              after:left-[2px]
              after:bg-white
              after:border-gray-300
              after:border
              after:rounded-full
              after:h-5
              after:w-5
              after:transition-all
              dark:border-gray-600
              peer-checked:bg-gray-600
            "
          ></div>
        </label>
      </div>
    </div>
    <p>
      Oberservações: O usuário irá receber um e-mail para cadastrar a senha de
      acesso ao sistema.
    </p>
  </div>
  <div class="flex justify-end w-full ">
    <Button class="w-32" label="Adicionar"/>
  </div>
</template>
