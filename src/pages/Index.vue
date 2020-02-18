<template>
  <q-page padding>
    <div class="row full">
      <div class="col-12">
        <q-input outlined dense v-model="produto" placeholder="Código, nome do produto" />
        <q-btn class="search-btn" color="blue-6" icon="search" @click="adicionarLista()" />
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.full{
  height: 100vh !important;
}
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
      console.log(this.produto);
    },
  },
};
</script>
