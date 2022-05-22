<script lang="ts">
import TableSubContas from "@components/TableSubcontas.vue";
import TableUsuarios from "@components/TableUsuarios.vue";


import NavMenu from "@components/NavMenu.vue";
export default {
  components: {
    TableSubContas,
    NavMenu,
  },
};
</script>

<template>
  <NavMenu />
  <TableSubContas />
</template>
