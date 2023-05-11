<script lang="ts" setup>
import AppointmentCard from '@/components/AppointmentCard.vue'
</script>

<template>
  <v-container>
    <p>=== espaço para o datepicker ===</p>
    <h2>Hoje</h2>
    <v-divider />
    <div class="py-4">
      <appointment-card patient="Marcelo da Silva Alcântara" service="Argiloterapia" location="Porto Murtinho - MS" />
    </div>
    <h2>Próximos dias</h2>
    <v-divider />
    <div class="py-4">
      <appointment-card patient="Marcelo da Silva Alcântara" service="Argiloterapia" location="Porto Murtinho - MS" />
    </div>
  </v-container>
</template>

