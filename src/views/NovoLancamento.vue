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
    <div class="flex gap-6 self-start flex flex-col w-2/5">
      <div class="table-column gap-8 break-before-column">
        <Input
          label="Nome"
          :value="nome"
          type="text"
          placeholder="Nome do Lançamento"
          @input="nome = $event.target.value"
        />
      </div>
      <div class="flex w-3/4 gap-6">
        <Input
          label="Tipo de Lançamento"
          :value="nome"
          type="text"
          placeholder="Clássico / Outros"
          @input="nome = $event.target.value"
        />

        <Input
          label="Tipo de Lançamento"
          :value="nome"
          type="text"
          placeholder="Perpétuo"
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
