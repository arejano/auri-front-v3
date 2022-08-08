<script>
import DateRangePicker from "@components/DateRangePicker.vue";

import LancamentoService from "@services/lancamentos.services";

import Swal from "sweetalert2";

export default {
  components: { DateRangePicker },
  name: "NovoLancamento",
  props: {
    src: { type: String, required: true },
  },
  data() {
    return {
      lancamentoService: new LancamentoService(),
      nome: "",
      umt_campaign: "",
      classico: false,
      perpetuo: false,
      periodoCaptacao: {
        inicio: "",
        fim: "",
      },
      periodoCarrinho: {
        inicio: "",
        fim: "",
      },
    };
  },
  methods: {
    novoLancamento() {
      const data = {
        launch_name: this.nome,
        campaign_name: this.umt_campaign,
        launch_type: this.classio ? "classico" : "perpetuo",
        lead_capture_period_end: this.periodoCaptacao.inicio,
        lead_capture_period_start: this.periodoCaptacao.fim,
        open_cart_period_start: this.periodoCarrinho.inicio,
        open_cart_period_end: this.periodoCarrinho.fim,
      };
      this.lancamentoService.new(data).then((response) => {
        if (response.errors.length !== 0) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Não foi possivel criar Novo Lançamento",
            showConfirmButton: false,
            timer: 1500,
          });
        }else{
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Novo Lançamento criado com sucesso",
            showConfirmButton: false,
            timer: 1500,
          });

        }
      });
    },
    changeClassico() {
      this.classico = true;
      this.perpetuo = false;
    },
    changePerpetuo() {
      this.perpetuo = true;
      this.classico = false;
    },
    getDataTeste() {
      return {
        nome: this.nome,
        umt_campaign: this.umt_campaign,
        classico: this.classico,
        perpetuo: this.perpetuo,
        periodoCaptacao: this.periodoCaptacao,
        periodoCarrinho: this.periodoCarrinho,
      };
    },
    attDataPeriodo(event) {
      this.periodoCaptacao = {
        inicio: event.inicio,
        fim: event.fim,
      };
    },
    attDataCarrinho(event) {
      this.periodoCarrinho = {
        inicio: event.inicio,
        fim: event.fim,
      };
    },
  },
};
</script>
<template>
  <div>
    <Title
      title="Novo Lançamento"
      subtitle="Insira um nome e defina a utm_campaign associada."
    />
    <div class="gap-6 mt-6 self-start flex flex-col">
      <div class="table-column gap-8 break-before-column">
        <Input
          label="Nome"
          :value="nome"
          type="text"
          placeholder="Nome"
          @input="nome = $event.target.value"
        />
      </div>
      <div class="flex gap-6">
        <Input
          label="umt_campaign"
          :value="umt_campaign"
          type="text"
          placeholder="Insira o valor da utm_campaign utilizada no lançamento"
          @input="umt_campaign = $event.target.value"
        />

        <div class="flex items-center gap-4 pt-1">
          <div
            class="flex items-center border h-11 p-1 rounded px-4 border-neutral-700"
          >
            <input
              @change="changeClassico()"
              id="classico"
              type="radio"
              value=""
              name="inline-radio-group"
              class="w-4 h-4 text-neutral-600 bg-gray-100 border-gray-300 focus:ring-neutral-500 dark:focus:ring-neutral-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="classico"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 whitespace-nowrap"
              >Clássico / Outros</label
            >
          </div>
          <div
            class="flex items-center border h-11 p-1 rounded px-4 border-neutral-700"
          >
            <input
              @change="changePerpetuo()"
              id="perpetuo"
              type="radio"
              value=""
              name="inline-radio-group"
              class="w-4 h-4 text-neutral-600 bg-gray-100 border-gray-300 focus:ring-neutral-500 dark:focus:ring-neutral-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="perpetuo"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 whitespace-nowrap"
              >Perpétuo</label
            >
          </div>
        </div>
      </div>

      <div class="flex gap-4 mb-6">
        <DateRangePicker
          @change="attDataPeriodo($event)"
          label="Período de captação dos leads"
        />
        <DateRangePicker
          @change="attDataCarrinho($event)"
          label="Período de carrinho aberto"
        />
      </div>
    </div>
    <div>
      <div class="flex">
        <Button
          class="w-64"
          @click.native="novoLancamento()"
          label="Criar Lançamento"
        />
      </div>
    </div>
  </div>
</template>
