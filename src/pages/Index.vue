<template>
  <q-page padding class="flex flex-center">
    <div class="row justify-center full-width">
      <div class="col-11 q-ma-md">
        <q-input outlined dense v-model="produto" placeholder="Nome do produtos" />
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
      console.log(this.produto);
    },
  },
};
</script>
