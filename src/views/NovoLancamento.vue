<script>
export default {
  components: {},
  name: "NovoLancamento",
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
    <Title
      title="Novo Lançamento"
      subtitle="Criar Lançamento
Insira um nome e defina a utm_campaign associada."
    />
    <div class="flex gap-6 self-start flex flex-col">
      <div class="flex gap-2">
        <Input
          label="Nome"
          :value="nome"
          type="text"
          placeholder="Nome"
          @input="nome = $event.target.value"
        />
        <Input
          label="Nome"
          :value="nome"
          type="text"
          placeholder="Nome"
          @input="nome = $event.target.value"
        />
      </div>
      <div class="flex gap-2">
        <Input
          label="Nome"
          :value="nome"
          type="text"
          placeholder="Nome"
          @input="nome = $event.target.value"
        />
        <Input
          label="Nome"
          :value="nome"
          type="text"
          placeholder="Nome"
          @input="nome = $event.target.value"
        />
        <Input
          label="utm_campaign"
          :value="nome"
          type="text"
          placeholder="Insira o valor de utm_campign útilizada no lançamento"
          @input="nome = $event.target.value"
        />
        <Input
          label="Email"
          :value="email"
          type="email"
          placeholder="Email"
          @input="email = $event.target.value"
        />
      </div>
    </div>
    <div>
      <div class="flex">
        <Button class="w-64" label="Criar Lançamento" />
      </div>
    </div>
  </div>
</template>
