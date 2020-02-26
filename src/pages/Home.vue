<template>
  <q-page padding class="flex flex-center">
    <div class="row justify-center full-width">
      <div class="col-12 text-center text-h5">
        Adicione produtos a lista de compras
      </div>
      <div class="col-11 q-ma-md">
        <q-input outlined dense v-model="produto" placeholder="Nome do produto" v-on:keyup.enter="adicionarLista()" />
      </div>
      <div class="col-11">
        <q-btn class="full-width" color="blue-6" label="Adicionar" @click="adicionarLista()" />
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
</style>

<script>
export default {
  name: 'Inicio',
  data() {
    return {
      produto: '',
    };
  },
  methods: {
    adicionarLista() {
      if (this.produto !== '') {
        const position = this.$store.state.lista.produtosNaLista.findIndex((x) => x.nome === this.produto);
        if (position === -1) {
          this.$store.commit('lista/ADD_PRODUTO_LISTA', this.produto);
          this.$q.notify({
            type: 'positive',
            message: 'Produto adicionado a lista',
            timeout: 500,
            position: 'top',
          });
        } else {
          this.$q.notify({
            type: 'warning',
            message: 'Produto já está na lista',
            timeout: 500,
            position: 'top',
          });
        }
        this.produto = '';
      }
    },
  },
};
</script>
