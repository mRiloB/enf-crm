<script lang="ts" setup>
import { toRefs } from 'vue'

const props = defineProps<{
  patient: string
  service: string
  location: string
}>()

const { patient, service, location } = toRefs(props)
</script>

<template>
  <v-card>
    <v-card-title>{{ patient }}</v-card-title>
    <v-card-text>
      <p><v-icon>mdi-pill</v-icon> - {{ service }}</p>
      <p><v-icon>mdi-map-marker</v-icon> - {{ location }}</p>
    </v-card-text>
  </v-card>
</template>

