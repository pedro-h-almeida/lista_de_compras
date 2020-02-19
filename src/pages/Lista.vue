<template>
  <q-page padding>
    <div class="row" v-if="produtos.length > 0">
      <div class="col-12">
        <div v-for="element in produtos" v-bind:key="element.id">
          <q-item v-ripple tag="label" v-if="!element.checked">
            <q-item-section>
              <q-item-label>{{element.nome}}</q-item-label>
            </q-item-section>
            <q-item-section side top>
              <q-checkbox :value="element.checked" @input="updateLista(element.id)" />
            </q-item-section>
          </q-item>

          <q-item v-else>
            <q-item-section>
              <q-item-label class="text-strike text-grey">{{element.nome}}</q-item-label>
            </q-item-section>
            <q-item-section side top>
              <q-checkbox disable color="grey" :value="element.checked" />
            </q-item-section>
          </q-item>
        </div>
      </div>
    </div>
    <div class="fixed-center text-center" v-else>
      <p>
        <img src="~assets/sad.svg" style="width:30vw;max-width:150px;">
      </p>
      <p class="text-faded">Sua lista está vazia</p>
      <q-btn color="secondary" style="width:200px;" to="/" label="Voltar" />
    </div>
    <q-page-sticky position="bottom-right" :offset="[10, 10]" v-if="listaFinalizada()">
      <q-btn fab icon="done" color="positive" @click="limparLista" />
    </q-page-sticky>
  </q-page>
</template>

<style lang="scss" scoped>
</style>

<script>
export default {
  name: 'Lista',
  data() {
    return {
    };
  },
  methods: {
    updateLista(id) {
      setTimeout(() => {
        this.$store.commit('lista/CHECK_PRODUTO', id);
      }, 300);
    },
    limparLista() {
      this.$store.commit('lista/CLEAR_LISTA');
    },
    listaFinalizada() {
      let allChecked = true;
      for (let index = 0; index < this.produtos.length; index += 1) {
        const element = this.produtos[index];
        if (!element.checked) {
          allChecked = false;
        }
      }
      return this.produtos.length > 0 && allChecked;
    },
  },
  computed: {
    produtos() {
      return this.$store.state.lista.produtosNaLista;
    },
  },
};
</script>
