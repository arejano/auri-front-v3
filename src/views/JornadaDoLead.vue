<template>
  <Title title="Jornada do Lead" />
  <Card title="Perfil">
    <div class="flex">
      <div
        class="flex w-full flex-col text-sm space-y-3 p-2 dark:text-neutral-300"
      >
        <span class="dark:border-b dark:border-neutral-600 p-2"
          ><b>Id do perfil: </b></span
        >
        <span class="dark:border-b dark:border-neutral-600 p-2"
          ><b>Email: </b></span
        >
        <span class="dark:border-b dark:border-neutral-600 p-2"
          ><b>Criado em: </b></span
        >
        <span class="dark:border-b dark:border-neutral-600 p-2"
          ><b>Total de Visualizações: </b></span
        >
        <span class="dark:border-b dark:border-neutral-600 p-2"
          ><b>Produtos Comprados: </b></span
        >
        <span class="p-2"><b>Investimento: </b></span>
      </div>
      <div class="w-1/3 p-4 flex items-center flex-col justify-center">
        <Avatar
          class="w-32"
          src="https://www.gravatar.com/avatar/undefined?s=256&d=https://painel.leadtracker.com.br/admin/static/imgs/no-avatar.png"
        />
      </div>
    </div>
  </Card>

  <Card title="Compras">
    <table
      class="w-full p-2 text-left text-neutral-500 dark:text-neutral-400"
    >
      <thead
        class="select-none text-neutral-500 uppercase dark:text-neutral-200"
      >
        <tr class="">
          <th scope="col" class="px-6 py-3">ID</th>
          <th scope="col" class="px-6 py-3">PRODUTO</th>
          <th scope="col" class="px-6 py-3">VALOR</th>
          <th scope="col" class="px-6 py-3">STATUS</th>
          <th scope="col" class="px-6 py-3">DATA</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </Card>
  <Card title="Jornada">
    <table
      class="w-full p-2 text-sm text-left text-neutral-500 dark:text-neutral-400"
    >
      <thead
        class="text-sm select-none text-neutral-500 uppercase dark:text-neutral-200"
      >
        <tr>
          <th scope="col" class="px-6 py-3 text-sm">INDEX</th>
          <th scope="col" class="px-6 py-3 text-sm">DATA</th>
          <th scope="col" class="px-6 py-3 text-sm">URL</th>
          <th scope="col" class="px-6 py-3 text-sm">UTMS</th>
          <th scope="col" class="px-6 py-3 text-sm">CAMPANHAS</th>
          <th scope="col" class="px-6 py-3 text-sm">LEAD</th>
          <th scope="col" class="px-6 py-3 text-sm">NOVO LEAD</th>
          <th scope="col" class="px-6 py-3 text-sm">ÚLTIM ACESSO ANTES DA COMPRA</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </Card>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
