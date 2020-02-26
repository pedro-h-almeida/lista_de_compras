<template>
  <q-layout view="hHh lpR lFf">

    <q-header elevated class="text-white">
      <q-toolbar>
        <q-toolbar-title class="flex flex-center">
          Lista de Compras
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <q-toolbar>
        <q-tabs v-model="tab" dense class="full-width">
          <q-route-tab icon="fas fa-home" label="Início" to="/" exact />
          <q-route-tab icon="fas fa-list" label="Lista" to="/lista" exact />
          <q-route-tab icon="fas fa-users" label="Grupos" to="/grupos" exact />
        </q-tabs>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>


<style lang="scss" scoped>
</style>


<script>

export default {
  name: 'MyLayout',
  data() {
    return {
      tab: 'inicio',
    };
  },
};
</script>
