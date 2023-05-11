<script lang='ts' setup>
import { useAppStore } from '@/store/app'

const store = useAppStore()
</script>

<template>
  <v-container>
    <div class="services-header">
      <h2>Serviços</h2>
      <v-btn color="secondary" prepend-icon="mdi-plus">Novo</v-btn>
    </div>
    <v-list class="mt-4 services-list">
      <div class="services-list-item" v-for="(service, key) in store.services" :key="key">
        <v-list-item>
          <v-list-title>{{ service.name }}</v-list-title>
          <template v-slot:append>
            <v-sheet class="pa-1" color="grey-lighten-1">${{ service.price }}</v-sheet>
          </template>
        </v-list-item>
        <v-divider v-if="key < store.services.length - 1" />
      </div>
    </v-list>
  </v-container>
</template>

<style scoped>
.services-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.services-list {
  padding: 0;
}
.services-list-item {
  margin: 5px 0;
}
</style>
