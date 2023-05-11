<script lang="ts" setup>
import { ref } from 'vue'

const theme = ref('light')

function onClick () {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <v-app :theme="theme">
    <v-app-bar class="bg-secondary">
      <v-container>
        <div class="header">
          <h3>Enf. Flávia Tralde</h3>
          <v-btn :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="onClick"></v-btn>
        </div>
      </v-container>
    </v-app-bar>

    <v-main class="bg-primary">
      <router-view></router-view>
    </v-main>

    <v-bottom-navigation class="bg-secondary">
      <v-btn value="consultorio">
        <v-icon>mdi-hospital-box</v-icon>
      </v-btn>
      <v-btn value="pacientes">
        <v-icon>mdi-account-box</v-icon>
      </v-btn>
      <v-btn value="calendario" :to="{ name: 'calendar' }">
        <v-icon>mdi-calendar-plus</v-icon>
      </v-btn>
      <v-btn value="servicos" :to="{ name: 'services' }">
        <v-icon>mdi-sitemap-outline</v-icon>
      </v-btn>
      <v-btn value="inventario" :to="{ name: 'inventario' }">
        <v-icon>mdi-medical-bag</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
