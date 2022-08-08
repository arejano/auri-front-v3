<script>
export default {
  name: "Pagination",
  components: {},
  props: { paginacao: {} },
  data() {
    return {};
  },
  methods: {
    listaPaginas() {
      let qtPaginas = this.calcPages();
      let pages = this.criarRangePaginas(
        this.paginacao.current_page,
        qtPaginas + 1
      );
      if (pages[pages.length - 1] == qtPaginas) {
        return this.criarRangePaginas(qtPaginas - 4, qtPaginas + 1);
      }
      return pages;
    },

    criarRangePaginas(start, end) {
      let step = 1;
      let output = [];
      if (typeof end === "undefined") {
        end = start;
        start = 0;
      }
      for (let i = start; i < end; i += step) {
        output.push(i);
      }
      return output
        .filter((x) => {
          return x >= 1;
        })
        .slice(0, 5);
    },
    onGoTo(page) {
      this.paginacao.current_page = page;
      this.setPage(page);
    },
    onPrevious() {
      if (this.paginacao.current_page !== 1) {
        this.onGoTo(this.paginacao.current_page - 1);
      }
    },
    onNext() {
      if (this.paginacao.current_page !== this.calcPages()) {
        this.onGoTo(this.paginacao.current_page + 1);
      }
    },
    setPage(page) {
      this.$emit("changePage", page);
    },
    calcPages() {
      const total_pages = Math.ceil(
        this.paginacao.total / this.paginacao.per_page
      );
      return total_pages;
    },
  },
};
</script>
<template>
  <div class="flex justify-end">
    <nav aria-label="Page navigation example">
      <ul class="inline-flex items-center -space-x-px">
        <li>
          <a
            href="#"
            @click="onPrevious()"
            class="block py-2 px-3 ml-0 leading-tight text-neutral-500 bg-white rounded-l-lg border border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white"
          >
            <span class="sr-only">Previous</span>
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
        <li v-for="page in listaPaginas()" :key="page">
          <a
            href="#"
            @click="onGoTo(page)"
            class="py-2 px-3 leading-tight text-neutral-500 bg-white border border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white"
            v-bind:class="{
              'font-bold dark:bg-neutral-600/50': page == paginacao.current_page,
            }"
            >{{ page }}</a
          >
        </li>
        <li>
          <a
            href="#"
            @click="onNext()"
            class="block py-2 px-3 leading-tight text-neutral-500 bg-white rounded-r-lg border border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white"
          >
            <span class="sr-only">Next</span>
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
